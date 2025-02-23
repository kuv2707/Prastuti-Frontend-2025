import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Apply ESLint rules to all JavaScript and TypeScript files
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended, // Base ESLint rules
  tseslint.configs.recommended, // TypeScript recommended rules
  pluginReact.configs.recommended, // React recommended rules
  prettier, // Disables conflicting ESLint rules for Prettier
  {
    plugins: {
      prettier: prettierPlugin, // Prettier plugin for ESLint
    },
    rules: {
      "no-unused-vars": "warn", // Warns for unused variables
      "prettier/prettier": "error", // Ensures code is formatted with Prettier
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];
