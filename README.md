# PickPercent

A simple library to make random choice by percentage and with some other useful tools for percentage.

## Installation

```sh
npm install pickpercent
```

## Usage

```ts
import { PickPercent } from 'pickpercent';

const loot = new PickPercent();

loot.add('diamond', 30);
loot.add('gold', 40);
loot.add('emerald', 15);
loot.add('lapis', 15);

// or

const loot = new PickPercent()
  .add('diamond', 30)
  .add('gold', 40)
  .add('emerald', 15)
  .add('lapis', 15);

// or

const loot = new PickPercent();

loot.addMany([
  { name: 'diamond', percent: 30 },
  { name: 'gold', percent: 40 },
  { name: 'emerald', percent: 15 },
  { name: 'lapis', percent: 15 },
]);


loot.pick();
// returns 'diamond', 'gold', 'emerald' or 'lapis'
```
