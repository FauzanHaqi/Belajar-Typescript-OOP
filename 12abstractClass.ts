abstract class Hewan12 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} sedang makan`);
  }

  abstract bergerak(): void;
}

class Kucing12 extends Hewan12 {
    constructor() {
        super("kucing")
    }

    bergerak(): void {
        console.log(`${this.name} sedang berjalan`);
    }
}

class Burung12 extends Hewan12{
    constructor() {
        super("Burung")
    }

    bergerak(): void {
        console.log(`${this.name} sedang terbang`);
    }
}

const kucing12 = new Kucing12()
kucing12.bergerak()

const burung12 = new Burung12()
burung12.bergerak()

// menurut makhluk yang mengetik Ini,
// abstract class merupakan template. yang dimana saat si parent memiliki abstract class namun belum terisi / hanya kosongan yang nantinya akan diisikan di child classnya