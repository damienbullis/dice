type DiceType = 4 | 6 | 8 | 10 | 12 | 20 | 100 | string[];

/** _Dice
 * ---
 *
 * To roll `Polyhedral` dice or `Funky` dice.
 *
 * ---
 *
 * @param sides - The number of sides on the dice or an array of strings. If you pass a string array as a const you can get type inference on the return type.
 * @returns A function that accepts a number of times to roll the dice
 */
function Dice<T extends number>(sides: T): (x?: number) => number[];
function Dice<T extends string[] | readonly string[]>(
  sides: T
): (x?: number) => T[number][];
function Dice<T extends DiceType>(sides: T) {
  return function (x = 1) {
    const result = [];
    for (let i = 0; i < x; i++) {
      if (typeof sides === "number") {
        result.push(Math.floor(Math.random() * sides) + 1);
      } else {
        result.push(sides[Math.floor(Math.random() * sides.length)]);
      }
    }
    return result;
  };
}

export default Dice;
