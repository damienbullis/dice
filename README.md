<img src="https://github.com/damienbullis/dice/blob/main/assets/banner.png?raw=true" alt="Title Banner for Dice" />

# Dice

Dice is a simple dice package for:

- Rolling polyhedral dice
- Rolling funky (custom) dice
- Rolling pools of those dice

---

## Usage

To roll dice, you can use the `Dice` function.

```javascript
import { Dice } from "@damienbullis/dice";

// Create some dice
const d6 = Dice(6);
const d20 = Dice(20);

console.log(d6()); // will roll 1 d6
console.log(d20()); // will roll 1 d20
console.log(d6(3)); // will roll a d6, 3 times
```

To roll a pool of dice, you can use the `Pool` function in conjunction with the `Dice` function.

```javascript
import { Dice, Pool } from "@damienbullis/dice";

const d6 = Dice(6);
const d20 = Dice(20);

// Set up a pool of dice
const pool = Pool(d6, d20);

console.log(pool()); // will roll 1 d6 & d20
console.log(pool(20)); // will roll a d6 & d20, 20 times
```

---

## Roadmap

- [ ] Add error handling
- [ ] Add tests
- [x] Publish to NPM
