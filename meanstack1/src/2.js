class demo {
    constructor(p) {
        this.name = p;
    }
    static mai() {
        let a = new demo("anjali");
        console.log(a.name);
    }
}
demo.mai();