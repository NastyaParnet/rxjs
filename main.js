const { of, map, catchError } = require("rxjs");
const clock$ = require("./emitter");

const subscription = clock$
  .pipe(
    map((value, index) => {
      if(index%2 === 1) return 'tock';
      return value;
    }),
    catchError((err) => {
      console.log(err.message);
      return of();
    })
  )

const observer = {
  next: (x) => console.log(x),
  error: (err) => console.log(err),
  complete: () => console.log('Observer got a complete notification'),
}

module.exports = subscription.subscribe(observer);
