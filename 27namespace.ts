namespace NameSpaceExample {
  export class Hewan {}

  export const kodok = new Hewan();
}

const belalang = new NameSpaceExample.Hewan();
let kodok2a = NameSpaceExample.kodok;

// const belalang = new Hewan()    |   akan mengambil Hewan() dari file 00class jika didalam NAmeSpaceExample tidak diexport
