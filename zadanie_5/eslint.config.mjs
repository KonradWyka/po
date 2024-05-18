import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    ...tseslint.configs.recommended,
  },
  {
    files: ["**/*.jsx", "**/*.js"],
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Wyłącz wymóg obecności React w zasięgu
      "react/jsx-uses-react": "off", // Wyłącz regułę użycia React w JSX
      "no-unused-vars": ["error", { "varsIgnorePattern": "React" }], // Ignoruj niezdefiniowane zmienne o nazwie React
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        jest: true, // Dodaje globalne zmienne z Jest
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
];
