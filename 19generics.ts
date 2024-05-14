function getData(value: any) {
    return value
}

const data1 = getData(21)
console.log(data1);

// ------------------------ 

function getData2 <T>(value: T): T {
    return value
}

const data2 = getData2<string>("es")
console.log(data2.length);

function getData22 <T>(value: T): T {
    return value
}

const data22 = getData2<number>(4)
console.log(data22.toString);
