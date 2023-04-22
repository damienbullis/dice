import { describe, it, expect } from "vitest";
import { Dice, Pool } from "./index";

describe("Pool", () => {
  it("should throw an error if any dice is not a function", () => {
    expect(Pool(Dice(6), 2 as any, Dice(8))).toThrow(TypeError);
  });

  it("should return an array containing the results of rolling each dice", () => {
    const d6 = Dice(6);
    const d8 = Dice(8);
    const pool = Pool(d6, d8);

    const result = pool(3);
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveLength(3);
    expect(result[1]).toHaveLength(3);
    expect(result[0]!.every((r) => typeof r === "number")).toBe(true);
    expect(result[1]!.every((r) => typeof r === "number")).toBe(true);
  });

  it("should use the same value of x for each dice", () => {
    const d6 = Dice(6);
    const d8 = Dice(8);
    const pool = Pool(d6, d8);

    const result = pool(4);
    expect(result[0]).toHaveLength(4);
    expect(result[1]).toHaveLength(4);
  });
});
