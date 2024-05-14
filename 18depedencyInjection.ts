class Store {
  private name: string = "Store A";
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class Store2 {
  private name: string = "Store A";
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  store: Store2;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store2();
  }

  sell(): void {
    console.log(
      `${this.name} Harga jualnya adalah ${
        this.store.getProfit() + this.price
      } `
    );
  }
}

class TechProduct {
  store: Store2;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store2();
  }

  sell(): void {
    console.log(
      `${this.name} Harga jualnya adalah ${
        this.store.getProfit() + this.price
      } `
    );
  }
}

const baju = new FashionProduct("baju lengan panjang ", 50000);
baju.sell();

// ------------------------------------------------------------

interface IStore {
  name: string;
  profit: number;

  getProfit(): number;
}

class TokoLama implements IStore {
  name: string = "Toko Lama";
  profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class TokoBaru implements IStore {
  name: string = "Toko Baru";
  profit: number = 2500;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  store: IStore;
  name: string;
  price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} Harga jualnya adalah ${
        this.store.getProfit() + this.price
      } `
    );
  }
}

class FoodProduct {
  store: IStore;
  name: string;
  price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} Harga jualnya adalah ${
        this.store.getProfit() + this.price
      } `
    );
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const hijabMahal1 = new HijabProduct(tokoLama, "HijabMahal di Toko Lama" ,100000)
const hijabMahal2 = new HijabProduct(tokoBaru, "Hijab Mahal Di toko Baru" ,100000)

console.log(hijabMahal1);
console.log(hijabMahal2)

hijabMahal1.sell()
hijabMahal2.sell()