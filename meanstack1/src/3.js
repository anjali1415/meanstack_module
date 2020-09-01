class person {
    constructor() {
        console.log("In constructor");

    }
    getfname() {
        return "anjali";
    }
    getlname() {
        return "badgujar"
    }
    getfullname() {
        let fname = this.getfname();
        let lname = this.getlname();
        return fname + " " + lname;
    }
    static main() {
        let obj = new person();
        let fullname = obj.getfullname();
        console.log(fullname);
    }
}
person.main();