import type { PageLoad } from './$types';
import { initializeApp } from 'firebase/app';
import {
  query,
  orderBy,
  collection,
  limit,
  getDocs,
  getFirestore,
  type OrderByDirection,
  CollectionReference,
} from 'firebase/firestore/lite';

export const prerender = false;
export const ssr = false;

export type TimeEntry = {
  duration: number,
  username: string,
  address: string,
};

export const load = (async () => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY as string,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
    projectId: import.meta.env.VITE_PROJECT_ID as string,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
    appId: import.meta.env.VITE_APP_ID as string,
  };

  const perPage = Number.parseInt(import.meta.env.VITE_PER_PAGE);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const collectionRef = collection(
    db, import.meta.env.VITE_COLLECTION_PATH as string,
  ) as CollectionReference<TimeEntry>;

  const q = query(
    collectionRef,
    orderBy(
      import.meta.env.VITE_FIELD_PATH as string,
      import.meta.env.VITE_SORTING as OrderByDirection,
    ),
    limit(perPage),
  );

  const documentSnapshots = await getDocs(q);

  return {
    entries: documentSnapshots.docs,
    app: app,
    db: db,
    collectionRef: collectionRef,
    perPage: perPage,
  };
}) satisfies PageLoad;
