// visibility / access mudifier digunakan untuk mengatur dan membatasi akses dari properti atau method pada sebuah class
// Public dapat panggil / digunakan dimana saja
// Protected hanya dapat gunakan di classnya serta class turunannya
// Private bisa dipanggil di class itu sendiri

class Hewan7 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  berjalan() {
    // this.  
  }
}

class Katak7 extends Hewan7{
    private umurTelur: number = 10
    private umurKecebong: number = 10
    private umurKatak: number = 10 

    getUmur() {
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
    }
}

const katak7 = new Katak7("dsa", 2, false)
console.log(katak7);
katak7.getUmur()