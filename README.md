# PickPercent

A simple library to make random choice by percentage and with some other useful tools for percentage.

## Installation

```sh
npm install
```

## Usage

```ts
import { PickPercent } from 'pickpercent';

const loot = new PickPercent();

loot.add('diamond', 30);
loot.add('gold', 40);
loot.add('emerald', 15);
loot.add('lapis', 15);

loot.pick();
// returns 'diamond', 'gold', 'emerald' or 'lapis'
```
