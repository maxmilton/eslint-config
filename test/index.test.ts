import { expect, test } from 'bun:test';

const func = /*@__NOINLINE__*/ () => 1 + 2;

test('placeholder', () => {
  expect.assertions(1);
  expect(func()).toBe(3);
});
