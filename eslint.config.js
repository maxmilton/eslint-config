import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import unicorn from "eslint-plugin-unicorn";
import ts from "typescript-eslint";
import mm from "./src/index.js";

export default defineConfig(
  js.configs.recommended,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  // @ts-expect-error - broken upstream types
  unicorn.configs.recommended,
  mm.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
