const { interval, map, take, filter } = require("rxjs");

const observable = interval(500).pipe(
  map((value) => {
    if(value === 10) {
      throw new Error("Explosion!");
    }
    return value;
  }),
  take(14),
  filter(value => typeof value !== 'number' || value % 2 === 1),
  map((value) => {
    if(typeof value === 'number') {
      return 'tick';
    }
    return value;
  }),
)

module.exports = observable
