import type { Linter } from "eslint";

declare const lint: {
  readonly configs: {
    readonly recommended: Linter.Config;
  };
};

export default lint;
