import airbnbBestPractices from "../rules-airbnb/best-practices.js";
import airbnbErrors from "../rules-airbnb/errors.js";
import airbnbES6 from "../rules-airbnb/es6.js";
import airbnbNode from "../rules-airbnb/node.js";
import airbnbStrict from "../rules-airbnb/strict.js";
import airbnbStyle from "../rules-airbnb/style.js";
import airbnbTypeScriptBase from "../rules-airbnb/typescript-base.js";
import airbnbVariables from "../rules-airbnb/variables.js";

// REF: https://github.com/iamturns/eslint-config-airbnb-typescript/blob/303e346214847385bee4016367ff3b1b9978e337/lib/shared.js

/** @type {import('eslint').Linter.Config} */
export default {
  rules: {
    // NOTE: The ../rules-airbnb/imports.js file is intentionally not included.
    ...airbnbBestPractices,
    ...airbnbErrors,
    ...airbnbNode,
    ...airbnbStyle,
    ...airbnbVariables,
    ...airbnbES6,
    ...airbnbStrict,

    ...airbnbTypeScriptBase,

    quotes: ["error", "double", { avoidEscape: true }],
    "unicorn/prefer-string-replace-all": "off", // worse performance and poor support

    /* Sane defaults */
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-confusing-void-expression": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "import/prefer-default-export": "off",
    "no-restricted-syntax": "off",
    "no-void": "off",
    "unicorn/filename-case": [
      "warn",
      {
        cases: {
          kebabCase: true,
          pascalCase: true, // components
        },
        multipleFileExtensions: false,
      },
    ],
    "unicorn/import-style": "warn",
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/no-null": "off",
    "unicorn/prefer-module": "warn",
    "unicorn/prefer-top-level-await": "warn",
    "unicorn/prevent-abbreviations": "off",

    /* Covered by Biome formatter */
    "@typescript-eslint/indent": "off",
    curly: "off",
    "func-call-spacing": "off",
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "lines-between-class-members": "off",
    "max-len": "off",
    "no-nested-ternary": "off", // useful but Biome formats it well anyway
    "no-undef": "off", // TypeScript and Biome have superior checking
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "space-before-function-paren": "off",
    "unicorn/no-nested-ternary": "off",

    // TODO: Remove. This is actually great but Biome doesn't have a formatter
    // config option for it and always uses lowercase.
    "unicorn/number-literal-case": "off",
  },
};
