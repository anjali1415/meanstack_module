// taken simple var 
let pivar = require("./1");
console.log(pivar);
// taken no of var 
let mod1 = require("./2");
console.log(mod1.my_fname);
console.log(mod1.my_lname);
// var taken with objects with key
/* let mod3 = require("./3");
console.log(mod3);
console.log(mod3.f_name);
console.log(mod3.l_name); */

// var taken with objects without  key

let mod4 = require("./3");
console.log(mod4);

// taking function

let mod5 = require("./4");
console.log(mod5);
let sum1 = mod5.sum(3, 4);
console.log(sum1);
let divans = mod5.divfun(6, 3);
console.log(divans);

