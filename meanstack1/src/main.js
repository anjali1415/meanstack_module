let person = require('./person');
const employee = require('./emp');
//let employee = require('./employee');

class mainimp {
    constructor() {
        console.log("In main constructor");
    }
    static main() {
        console.log("this is main");
        let maonobj = new mainimp();
        // person object 
        let obj1 = new person();
        let personop = obj1.personname();
        console.log(personop);
        //employee object
        let obj2 = new employee();
        let empop = obj2.getempname();
        console.log(empop);
    }
}
mainimp.main();