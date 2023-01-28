# Roll

Roll is a simple dice roller. For rolling basic polyhedral dice, and funky (custom) dice.

---

Updating readme for testing purposes.

## Usage

```typescript
import { Dice, Pool } from "roll";

const dice = new Dice(6);

const singleResult = dice.roll();
const multipleResults = dice.roll(3);

const pool = new Pool(dice, dice); // a pool made of 2 6 sided dice

const poolResult = pool.roll(); // result will be an array of 2 numbers
const poolResults = pool.roll(3); // result will be an array of 3 arrays of 2 numbers
```
