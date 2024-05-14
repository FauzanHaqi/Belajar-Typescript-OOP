type Phone = string;
type Pc = number;

type BBB = {
  name: string; //type bisa bersifat object
};

// interface AAA = number | Gabisa Karena interface hanya bersifat object

interface AAA {
  name: string;
}

// ---------------- perbedaan 2
// interface bisa di merge sedangkan type tidak

interface Dinosaurus {
  //INTERFACE
  name: string;
}

interface Dinosaurus {
  weight: number;
}

class Dinos implements Dinosaurus {
  name: string;
  weight: number;
}

type Dino = {
  // TYPE
  name: string;
};

// type Dino = {
//   weight: number;
// };

// interface bisa extends class, type tidak bisa
// type dimerge dengan cara yang beda (intersection)

// intersection
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Employee1 = Name & Age;
type Employee2 = Name | Age;

const imployee: Employee1 = {
  name: "HAqi",
  age: 16,
};
