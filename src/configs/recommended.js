import airbnbBestPractices from '../rules-airbnb/best-practices.js';
import airbnbErrors from '../rules-airbnb/errors.js';
import airbnbES6 from '../rules-airbnb/es6.js';
// import airbnbImports from '../rules-airbnb/imports.js';
import airbnbNode from '../rules-airbnb/node.js';
import airbnbStrict from '../rules-airbnb/strict.js';
import airbnbStyle from '../rules-airbnb/style.js';
import airbnbTypeScriptBase from '../rules-airbnb/typescript-base.js';
import airbnbVariables from '../rules-airbnb/variables.js';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type {import('eslint').Linter.Config} */
export default {
  // languageOptions: {
  //   parserOptions: {
  //     ecmaFeatures: {
  //       jsx: true,
  //     },
  //   },
  // },
  // settings: {
  //   // // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/303e346214847385bee4016367ff3b1b9978e337/lib/shared.js
  //
  //   // Apply special parsing for TypeScript files
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
  //   },
  //   // Append 'ts' extensions to Airbnb 'import/resolver' setting
  //   // Original: ['.mjs', '.js', '.json']
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
  //     },
  //   },
  //   // Append 'ts' extensions to Airbnb 'import/extensions' setting
  //   // Original: ['.js', '.mjs', '.jsx']
  //   'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
  //   // Resolve type definition packages
  //   'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  // },
  rules: {
    ...airbnbBestPractices,
    ...airbnbErrors,
    ...airbnbNode,
    ...airbnbStyle,
    ...airbnbVariables,
    ...airbnbES6,
    // ...airbnbImports,
    ...airbnbStrict,

    ...airbnbTypeScriptBase,

    /* Covered by Biome formatter */
    '@typescript-eslint/indent': OFF,
    curly: OFF,
    'func-call-spacing': OFF,
    'function-paren-newline': OFF,
    'implicit-arrow-linebreak': OFF,
    'lines-between-class-members': OFF,
    'max-len': OFF,
    'no-nested-ternary': OFF, // kind of useful but Biome formats it well anyway
    'no-undef': OFF, // TypeScript and Biome have superior checking
    'nonblock-statement-body-position': OFF,
    'object-curly-newline': OFF,
    'operator-linebreak': OFF,
    'space-before-function-paren': OFF,
    'unicorn/no-nested-ternary': OFF,

    // TODO: Remove. This is actually great but Biome doesn't have a formatter
    // config option for it and always uses lowercase.
    'unicorn/number-literal-case': OFF,

    // Worse performance and poor support
    'unicorn/prefer-string-replace-all': OFF,

    /* Sane defaults */
    '@typescript-eslint/explicit-module-boundary-types': ERROR,
    '@typescript-eslint/no-confusing-void-expression': WARN,
    '@typescript-eslint/no-non-null-assertion': WARN,
    '@typescript-eslint/no-use-before-define': WARN,
    'import/prefer-default-export': OFF,
    'no-restricted-syntax': OFF,
    'no-void': OFF,
    'unicorn/filename-case': [
      WARN,
      {
        cases: {
          kebabCase: true,
          pascalCase: true, // components
        },
        multipleFileExtensions: false,
      },
    ],
    'unicorn/import-style': WARN,
    'unicorn/no-abusive-eslint-disable': WARN,
    'unicorn/no-null': OFF,
    'unicorn/prefer-module': WARN,
    'unicorn/prefer-top-level-await': WARN,
    'unicorn/prevent-abbreviations': OFF,
  },
};
