import { describe, expect, expectTypeOf, it } from "vitest";
import Dice from "./Dice";

describe("Dice", () => {
  describe("with number sides", () => {
    it("should return an array of numbers with length 1 by default", () => {
      const d4 = Dice(4);
      expect(d4()).toHaveLength(1);
      expectTypeOf(d4()).toEqualTypeOf<number[]>();
    });

    it("should return an array of numbers with the specified length", () => {
      const d6 = Dice(6);
      const result = d6(3);
      expect(result).toHaveLength(3);
      expectTypeOf(result).toEqualTypeOf<number[]>();
    });

    it("should only return numbers between 1 and the number of sides", () => {
      const d8 = Dice(8);
      const result = d8(100);
      expect(result.every((r) => r >= 1 && r <= 8)).toBe(true);
    });
  });

  describe("with string sides", () => {
    it("should return an array of strings with length 1 by default", () => {
      const sides = ["heads", "tails"];
      const coinFlip = Dice(sides);
      expect(coinFlip()).toHaveLength(1);
      // check that the result of coinFlip() is an array, and each string is one of the sides
      expect(coinFlip().every((r) => sides.includes(r))).toBe(true);
    });

    it("should return an array of strings with the specified length", () => {
      const sides = ["rock", "paper", "scissors"];
      const rockPaperScissors = Dice(sides);
      const result = rockPaperScissors(3);
      expect(result).toHaveLength(3);
      expect(result.every((r) => sides.includes(r))).toBe(true);
    });

    it("should only return strings from the provided array of sides", () => {
      const sides = ["foo", "bar", "baz"];
      const result = Dice(sides)(100);
      expect(result.length).toBe(100);
      expect(result.every((r) => sides.includes(r))).toBe(true);
    });
  });
});
