# Dice

[![Dice Logo](./assets/banner.png?sanitize=true)](https://github.com/damienbullis/dice)

<br>

<div style="text-align:center">

[![Stars](https://img.shields.io/github/stars/damienbullis/dice?color=orange)](https://github.com/damienbullis/dice)
[![Downloads](https://img.shields.io/npm/dt/@damienbullis/dice?color=orange)](https://github.com/damienbullis/dice)
[![Top Language](https://img.shields.io/github/languages/top/damienbullis/dice?logo=typescript&label=&logoColor=white&color=orange)](https:github.com/damienbullis/dice)

[![Version](https://img.shields.io/github/package-json/version/damienbullis/dice?color=orange)](https://github.com/damienbullis/dice)
[![Build](https://img.shields.io/github/actions/workflow/status/damienbullis/dice/main.yml?color=orange)](https://github.com/damienbullis/dice)

</div>

<br>

<div style="text-align:center">

<!-- <h2 style="font-size:2rem;"> 🎲 Comes with all the basic polyhedral dice. 🎲 </h2>
<h2 style="font-size:2rem;"> 🎲 Simple interface for creating custom or 'funky' dice 🎲 </h2>
<h2 style="font-size:2rem;"> 🎲 Pools is a simple helper for rolling multiple dice 🎲 </h2> -->
<h2 style="letter-spacing:1rem;font-size:2.5rem;"> 🎲 🎲 🎲 🎲 🎲 🎲 </h2>

_**Comes with all the basic polyhedral dice.**_

_**Simple interface for creating custom or 'funky' dice**_

_**`Pools` is a simple helper for rolling multiple dice.**_

<h2 style="letter-spacing:1rem;font-size:2.5rem;"> 🎲 🎲 🎲 🎲 🎲 🎲 </h2>

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

<br>

```javascript
import { Dice, Pool } from "@damienbullis/dice";
// Create some dice
const d6 = Dice(6);
const d10 = Dice(10);
const d20 = Dice(20);

// Create a custom pool of dice
const pool = Pool(d6, d10, d20);

pool(); // rolls the pool once
// returns

pool(2); // rolls the pool twice
// returns
```

<br>

## Using a Pool

_To roll a pool of dice, you can use the `Pool` function in conjunction with the `Dice` function._

<br>

```javascript
import { Dice, Pool } from "@damienbullis/dice";

const d6 = Dice(6);
const d20 = Dice(20);

// Set up a pool of dice
const pool = Pool(d6, d20);

console.log(pool());
console.log(pool(20));
```

<br>
<br>
<br>

# Roadmap

- [ ] Add error handling
- [ ] Add tests
- [x] Publish to NPM

<br>

# Contributing

Contributions are welcome! Please open an issue or PR.

<br>

# License

[MIT © damienbullis](https://github.com/damienbullis/dice/blob/main/LICENSE)
