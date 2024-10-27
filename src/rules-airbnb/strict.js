// https://github.com/airbnb/javascript/blob/6499695ac11c4640ed0f77f8865a1adcb32d3239/packages/eslint-config-airbnb-base/rules/strict.js

/** @type {import('eslint').Linter.Config['rules']} */
export default {
  // rules: {

  // babel inserts `'use strict';` for us
  strict: ['error', 'never'],

  // },
};
