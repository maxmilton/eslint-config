import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import unicorn from "eslint-plugin-unicorn";
import ts from "typescript-eslint";
import mm from "./src/index.js";

// eslint-disable-next-line unicorn/no-top-level-side-effects
export default defineConfig(
  js.configs.recommended,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  unicorn.configs.recommended,
  mm.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
