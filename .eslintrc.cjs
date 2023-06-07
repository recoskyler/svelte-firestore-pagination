module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "plugin:svelte/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2019,
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte'],
    },
    plugins: [
        "@typescript-eslint"
    ],
    overrides: [
        {
            files: [
                "*.svelte"
            ],
            parser: "svelte-eslint-parser",
            parserOptions: {
                tsconfigRootDir: './',
                project: "./tsconfig.json",
                parser: "@typescript-eslint/parser",
            },
        }
    ],
    settings: {
        svelte: {
            ignoreWarnings: [
                "@typescript-eslint/no-unsafe-assignment",
                "@typescript-eslint/no-unsafe-member-access",
            ],
            compileOptions: {
                postcss: {
                    configFilePath: "./postcss.config.cjs",
                },
            },
            kit: {
                files: {
                    routes: "src/routes",
                },
            },
        },
    },
    rules: {
        "svelte/html-quotes": ["error", { prefer: "single" }],
        "svelte/no-store-async": "error",
        "svelte/no-target-blank": "error",
        "svelte/block-lang": [
            "error",
            {
                "enforceScriptPresent": false,
                "enforceStylePresent": false,
                "script": "ts",
                "style": "scss",
            }
        ],
        "svelte/button-has-type": "error",
        "svelte/no-immutable-reactive-statements": "error",
        "svelte/no-reactive-literals": "error",
        "svelte/no-reactive-functions": "error",
        // "svelte/prefer-destructured-store-props": "error",
        "svelte/require-each-key": "info",
        "svelte/require-event-dispatcher-types": "error",
        "svelte/require-optimized-style-attribute": "error",
        "svelte/require-stores-init": "error",
        "svelte/valid-each-key": "error",
        "svelte/no-extra-reactive-curlies": "error",
        "svelte/spaced-html-comment": "error",
        "svelte/no-useless-mustaches": [
            "error",
            {
                "ignoreIncludesComment": true,
                "ignoreStringEscape": true,
            },
        ],
        indent: [
            "error",
            2,
            {
                SwitchCase: 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        'comma-dangle': [
            "error",
            "always-multiline"
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                markers: [
                    "!",
                    "/",
                    "*",
                    "?"
                ]
            }
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                allowSingleLine: true
            }
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "new-parens": [
            "error",
            "never"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "nonblock-statement-body-position": [
            "error",
            "any"
        ],
        "no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_"
            }
        ],
        "max-len": [
            "error",
            {
                code: 100,
                tabWidth: 2,
                comments: 65,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreComments: true
            }
        ],
        "space-infix-ops": "error",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "template-curly-spacing": [
            "error",
            "always"
        ],
        "object-curly-newline": [
            "error",
            {
                ObjectExpression: {
                    multiline: true
                },
                ObjectPattern: {
                    multiline: true
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 3
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3
                }
            }
        ],
        "no-use-before-define": "error",
        "comma-spacing": "error",
        "keyword-spacing": "error",
        "key-spacing": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: "block"
            },
            {
                blankLine: "always",
                prev: "block",
                next: "*"
            },
            {
                blankLine: "always",
                prev: "*",
                next: "block-like"
            },
            {
                blankLine: "always",
                prev: "block-like",
                next: "*"
            }
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "prefer-destructuring": [
            "error",
            {
                array: true,
                object: true
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "space-before-blocks": "error",
        "block-spacing": "error",
        "prefer-const": "error"
    }
};
