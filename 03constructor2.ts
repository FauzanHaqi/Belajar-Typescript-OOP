class Hewan3 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const hewan3 = new Hewan3("Burung", 2);
console.log(hewan3);

// --------------------------- Cara 2

class Hewan31 {
  constructor(public nama: string, kaki: number) {}
}

const hewan41 = new Hewan31("Burung", 2);
console.log(hewan3);