import { expect, test } from "bun:test";
import index from "../src/index.js";

// TODO: Add real tests to replace these simplistic checks.

test("exports config object with recommended config", () => {
  expect.assertions(7);

  expect(index).toBeObject();
  expect(index).toHaveProperty("configs");
  expect(index.configs).toBeObject();
  expect(index.configs).toHaveProperty("recommended");
  expect(index.configs.recommended).toBeObject();
  expect(index.configs.recommended).toHaveProperty("rules");
  expect(index.configs.recommended.rules).toBeObject();
});

test("recommended config has expected rules", () => {
  expect.assertions(6);

  const rules = index.configs.recommended.rules!;

  // Test some key rules that should be present
  expect(rules).toHaveProperty("quotes");
  expect(rules.quotes).toEqual(["error", "double", { avoidEscape: true }]);

  expect(rules).toHaveProperty("@typescript-eslint/explicit-module-boundary-types");
  expect(rules["@typescript-eslint/explicit-module-boundary-types"]).toBe("error");

  expect(rules).toHaveProperty("unicorn/filename-case");
  expect(rules["unicorn/filename-case"]).toBeArray();
});

test("recommended config disables rules covered by Biome", () => {
  expect.assertions(3);

  const rules = index.configs.recommended.rules!;

  // Check some key rules that should be off since they're covered by Biome formatter
  expect(rules["@typescript-eslint/indent"]).toBe("off");
  expect(rules.curly).toBe("off");
  expect(rules["max-len"]).toBe("off");
});

const func = /*@__NOINLINE__*/ () => 0xfe + 0x1;

test("syntax samples", () => {
  expect.assertions(1);
  expect(func()).toBe(0xff);
});
