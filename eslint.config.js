import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import { globalIgnores } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

const compat = new FlatCompat({ recommendedConfig: { extends: [] } });

export default [
  globalIgnores(["dist"]),
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.extends("plugin:jsx-a11y/recommended"),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "unused-imports": unusedImports,
      prettier: prettier,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
