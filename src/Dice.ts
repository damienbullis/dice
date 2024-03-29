type DiceType = 4 | 6 | 8 | 10 | 12 | 20;

/** Dice
 * ---
 *
 * To roll `Polyhedral` dice or `Funky` dice.
 *
 * ---
 *
 * @param sides - The number of sides on the dice or an array of strings. If you pass a string array as a const you can get type inference on the return type.
 * @returns A dice function that accepts a number of times to roll the dice
 */
function Dice<T extends DiceType>(sides: T): (x?: number) => number[];
function Dice<T extends string[]>(sides: T): (x?: number) => string[];
function Dice<T extends DiceType | string[]>(sides: T) {
  const result: (number | string)[] | null = null;
  if (Array.isArray(sides) && typeof sides[0] !== "string") {
    throw new TypeError("Sides must be a number or an array of strings");
  }
  return function (x = 1) {
    const result = Array.from<number | string>({ length: x });
    for (let i = 0; i < x; i++) {
      if (typeof sides === "number") {
        result[i] = Math.floor(Math.random() * sides) + 1;
      } else {
        result[i] = sides[Math.floor(Math.random() * sides.length)]!;
      }
    }
    return result;
  };
}

export default Dice;
