// digunakan agar suatu properti tidak bisa diubah datanya / initable

class Person {
    readonly gender: string = "Pria"
}

const person = new Person()
// person.gender = "wanita" tidak bisa diubah   