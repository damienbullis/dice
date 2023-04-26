<h1 align="center">
<img src="./assets/banner.png" alt="Dice">
</h1>

<div align="center">

<br>

<!-- [![Stars](https://img.shields.io/github/stars/damienbullis/dice?color=orange)](https://github.com/damienbullis/dice) -->

[![Top Language](https://img.shields.io/github/languages/top/damienbullis/dice?logo=typescript&label=&logoColor=white&color=orange)](https:github.com/damienbullis/dice)
[![Downloads](https://img.shields.io/npm/dt/@damienbullis/dice?color=orange)](https://github.com/damienbullis/dice)
[![Version](https://img.shields.io/github/package-json/version/damienbullis/dice?color=orange)](https://github.com/damienbullis/dice)

[![codecov](https://img.shields.io/codecov/c/gh/damienbullis/dice?color=orange&label=%20&logo=codecov&logoColor=white)](https://codecov.io/gh/damienbullis/dice)
[![Build](https://img.shields.io/github/actions/workflow/status/damienbullis/dice/main.yml?color=orange)](https://github.com/damienbullis/dice)

<!-- [![codecov](https://codecov.io/gh/damienbullis/dice/branch/adds-tests/graph/badge.svg?token=0KPV1FLKHU)](https://codecov.io/gh/damienbullis/dice) -->
<br>

<p> 🎲 Comes with all the basic polyhedral dice 🎲 </p>
<p> 🎲 Simple interface for creating custom or 'funky' dice 🎲 </p>
<p> 🎲 Pools is a simple helper for rolling multiple dice 🎲 </p>

</div>

<br>
<br>
<br>

# Install

```bash
npm install @damienbullis/dice
# or
yarn add @damienbullis/dice
# or
pnpm add @damienbullis/dice
```

<br>

# Usage

## Basic Usage

_To roll dice, you can use the `Dice` function._

<br>

```javascript
import { Dice } from "@damienbullis/dice";

// Create some dice
const d4 = Dice(4);
const d6 = Dice(6);
const d8 = Dice(8);

d4(); // rolls a single d4
// returns [ 2 ]

d6(2); // rolls two d6's
// returns [ 3, 6 ]

d8(3); // rolls three d8's
// returns [ 8, 2, 2 ]
```

<br>

## Using Custom Dice

_If you have a need for dice with symbols, multiple values per facing, or to change the probability curve._

<br>

```javascript
import { Dice } from "@damienbullis/dice";

// Create a custom die
const SuccessDie = Dice([
  "Success+Crit",
  "Success",
  "Success",
  "Failure+Crit",
  "Failure",
  "Failure",
]);

SuccessDie(); // rolls the die once
// returns [ "Failure+Crit" ]
```

<br>

## Using a Pool

_To roll a pool of dice, you can use the `Pool` function in conjunction with the `Dice` function._

<br>

```javascript
import { Dice, Pool } from "@damienbullis/dice";

const d6 = Dice(6);
const d20 = Dice(20);

// Create a pool of dice
const pool = Pool(d6, d20);

pool(); // rolls the pool once
// returns [ [ 3, 20 ] ]
pool(2); // rolls the pool twice
// returns [ [ 6, 12 ], [ 1, 18 ] ]
```

<br>
<br>
<br>

# Roadmap

- [x] Add error handling
- [x] Add tests
- [x] Publish to NPM
- [ ] Better Types\*
- [ ] Custom Weights for Dice\*
- [ ] Custom Random Number Generator's\*

_\*Not sure about these yet..._

<br>

# Contributing

Contributions are welcome! Please open an issue or PR.

<br>

# License

[MIT © damienbullis](https://github.com/damienbullis/dice/blob/main/LICENSE)
