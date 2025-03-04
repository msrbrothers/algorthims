
class Calculatore {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    mul() {
        return this.a * this.b
    }
}

const obj = new Calculatore(10,20)

console.log(obj.add());
console.log(obj.mul());
