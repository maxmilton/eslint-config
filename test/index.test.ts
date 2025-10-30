import { expect, test } from "bun:test";

const func = /*@__NOINLINE__*/ () => 0xfe + 0x1;

test("placeholder", () => {
  expect.assertions(1);
  expect(func()).toBe(0xff);
});
