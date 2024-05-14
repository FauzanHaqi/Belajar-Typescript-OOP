interface Generics3 <T> {
    propertyA: T
    methodA() : T
}

class GenericsClass <T> implements Generics3<T> {
    propertyA: T

    constructor(property: T) {
        this.propertyA = property
    }

    methodA(): T {
        return this.propertyA
    }
}

const GenericA = new GenericsClass<string>("hq")

console.log(GenericA.methodA());
