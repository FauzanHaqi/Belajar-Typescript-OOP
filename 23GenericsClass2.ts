class ClassA {
    name: string = "Haqi"
}

class ClassBaru <T> {
    property: T

    constructor(prop : T) {
        this.property = prop
    }
}

const classA = new ClassA()
const classBaru = new ClassBaru(classA)
