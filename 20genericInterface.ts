interface Haqi<T> {
  propertyA: T;
}

function haqiFunction <T>(value: T): Haqi<T> {
    let data: Haqi<T> = {
        propertyA: value
    }

    return data
}

console.log(haqiFunction<string>("HQ"));
console.log(haqiFunction<number>(23));
console.log(haqiFunction<boolean>(true));
