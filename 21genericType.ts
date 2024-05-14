type Haqis<T> = T;

function haqiFunction2<T>(value: T): Haqis<T> {
  return value;
}

console.log(haqiFunction2<string>("true"));
