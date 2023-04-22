/** Pool
 * ---
 *
 * For rolling multiple dice at once
 *
 * ---
 *
 * @param dice Accepts a number of dice to roll. Each dice is a function that accepts a number of times to roll the dice.
 * @returns A function that accepts a number of times to roll the dice pool
 */
export default function Pool<T extends ((x?: number) => (string | number)[])[]>(
  ...dice: T
) {
  for (let i = 0; i < dice.length; i++) {
    if (typeof dice[i] !== "function") {
      throw new TypeError("Dice must be a function");
    }
  }
  return function (x = 1) {
    const result = [];
    for (let i = 0; i < dice.length; i++) {
      const roll = dice[i]!;
      result.push(roll(x));
    }
    return result;
  };
}
