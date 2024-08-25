import { expect, test, describe } from "vitest";
import { sum } from "@/utils/sample";

describe("src/utils/sample.js", () => {
  test("1+2は3になること", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
