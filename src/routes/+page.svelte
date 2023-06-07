<script lang="ts">
  import { collection, limit, orderBy, query, startAfter, type OrderByDirection, getDocs, endBefore, startAt } from "firebase/firestore/lite";
  import type { PageData } from "./$types";
  import { writable } from "svelte/store";

  export let data: PageData;

  const lastIndex = writable(1);
  const onLastPage = writable(false);
  const entries = writable(data.entries);

  const prev = async () => {
    if ($lastIndex === 1) {
      return;
    }

    onLastPage.set(false);

    const q = query(
      data.collectionRef,
      orderBy(
        import.meta.env.VITE_FIELD_PATH as string,
        import.meta.env.VITE_SORTING as OrderByDirection
      ),
      endBefore($lastIndex),
      limit(data.perPage),
    );

    const documentSnapshots = await getDocs(q);

    entries.set(documentSnapshots.docs);
    lastIndex.set($lastIndex - data.perPage);
  };

  const next = async () => {
    if ($onLastPage) {
      return;
    }

    const q = query(
      data.collectionRef,
      orderBy(
        import.meta.env.VITE_FIELD_PATH as string,
        import.meta.env.VITE_SORTING as OrderByDirection
      ),
      startAfter($lastIndex + data.perPage),
      limit(import.meta.env.VITE_PER_PAGE as number),
    );

    const documentSnapshots = await getDocs(q);

    const newJson = JSON.stringify(documentSnapshots.docs.map(d => d.id));
    const oldJson = JSON.stringify($entries.map(d => d.id));

    if (oldJson === newJson) {
      onLastPage.set(true);

      return;
    }

    lastIndex.set($lastIndex + data.perPage);

    entries.set(documentSnapshots.docs);
  };
</script>

<div class="leaderboard-cont">
  <table>
    <thead>
      <th>Ranking</th>
      <th>User</th>
      <th>Metamask Address</th>
      <th>Time</th>
    </thead>

    <tbody>
      {#each $entries as entry, i}
        <tr>
          <td>{i + $lastIndex}</td>
          <td>{entry.data().username}</td>
          <td>{entry.data().address}</td>
          <td>{entry.data().duration.toPrecision(4)}s</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="button-cont">
    <button on:click={prev} disabled={$lastIndex === 1}>{"< Prev"}</button>
    <button on:click={next} disabled={$onLastPage}>{"Load More"}</button>
  </div>
</div>
