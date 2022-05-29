const { PickPercent } = require('../dist/index');

const lol = new PickPercent();

lol.add(
  { name: '123', once: true, percent: 70 },
  { name: '143', once: true, percent: 99 }
);

console.log(lol.final());
