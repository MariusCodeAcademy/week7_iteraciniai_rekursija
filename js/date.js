"use strict";

console.log("date", new Date());

// dabartine data
let now = new Date();
// kokia dara buvo 1983-03-12
let past = new Date(1983, 2, 12);
past = new Date("1983-03-12");
past = new Date("12/03/1984");

// now.setFullYear(2032);

printMe("Now", now);
printMe("past", past.toDateString());

// now.getFullYear

// paskaiciuoti kiek dienu yra praeje siais metais
console.log("now - past", now - past);
