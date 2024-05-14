class Hewan4 {
    nama: string = ""
    kaki: number = 0

    bernafas() {
        console.log(`${this.nama}, Sedang Bernafas`);
    }
}

class Burung extends Hewan4{
    warna: string = "Merah"
}

const burung4 = new Burung()

burung4.nama = "Merak"
burung4.kaki = 2
burung4.warna = "RGB"
burung4.bernafas()

console.log(burung4);
