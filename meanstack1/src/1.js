class calculator {
    constructor() {
        console.log("i am in const");
        this.i1 = "power";
        this.i2 = "vavar";
    }

    addfun(a, b) {
        return a + b;
    }
    subfun(a, b) {
        return a - b;
    }
    mulfun(a, b) {
        return a * b;
    }
    divfun(a, b) {
        return a / b;
    }
    static main() {
        let p = 10;
        let q = 9;
        let obj1 = new calculator();
        let addans = obj1.addfun(p, q);
        let subans = obj1.subfun(3, 2);
        let mulans = obj1.mulfun(3, 2);
        let divans = obj1.divfun(6, 3);
        console.log(addans);
        console.log(subans);
        console.log(mulans);
        console.log(divans);
        console.log(obj1.i1 + " " + obj1.i2);
    }
}

calculator.main();