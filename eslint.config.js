import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import {defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
    globalIgnores([
        '**/dist',
        '**/vite.config.ts',
        'tailwind.config.js',
        'eslint.config.mjs',
        'postcss.config.js'
    ]),


    // Règles JS de base
    eslint.configs.recommended,

    // Règles TypeScript
    ...tseslint.configs.recommended,

    // Règles React
    pluginReact.configs.flat.recommended,
    reactHooks.configs.flat.recommended,
    jsxA11y.flatConfigs.recommended,


    {
        basePath: "src",
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: { globals: globals.browser },
        linterOptions: {
            reportUnusedDisableDirectives: true,
            noInlineConfig: true,
            reportUnusedInlineConfigs: "error",
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            semi: "error",
            quotes: ["error", "single", { avoidEscape: true }],
            "prefer-const": "error",
            "no-unused-vars": 'warn',

            // TS
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

            // React (on retire les warnings inutiles)
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",

            // Imports (ordre des imports pour les classer)
            "import/order": [
                "error", {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "always",
                },
            ],
        }
    },
]);
