/** Pool
 * ---
 *
 * For rolling multiple dice at once
 *
 * ---
 *
 * @param dice Accepts a number of dice to roll. Each dice is a function that accepts a number of times to roll the dice.
 * @returns A function that accepts a number of times to roll the dice pool
 *
 * @example
 * const d4 = Dice(4);
 * const d6 = Dice(6);
 * const pool = Pool(d4, d6);
 * pool(2); // [ [ 2, 6 ], [ 4, 5 ] ]
 *
 * @todo can we get the type working for infer string array contents??
 */
export default function Pool<T extends ((x?: number) => (string | number)[])[]>(
  ...dice: T
) {
  return function (x = 1) {
    const result = [];
    for (let i = 0; i < dice.length; i++) {
      const roll = dice[i];
      if (typeof roll !== "function") {
        throw new TypeError("Dice must be a function");
      }
      result.push(roll(x));
    }
    return result;
  };
}
