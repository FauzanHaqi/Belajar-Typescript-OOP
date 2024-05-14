class Kuda {
    private kaki: number = 2

    getkaki(): number{
        return this.kaki
    }

    terbang(): void{
        console.log("terbang");
    }

    async makan(): Promise<number>{
        return 2
    }
}