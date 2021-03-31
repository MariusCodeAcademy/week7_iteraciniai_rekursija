"use strict";

console.log("date", new Date());

// dabartine data
let now = new Date();
// kokia dara buvo 1983-03-12
let past = new Date(1983, 2, 12);
past = new Date("1983-03-12");
past = new Date("12/03/1984");

//new Date(ms) - skaicius milisekundziu nuo 1970 01 01
let dateInMs = new Date(10000000);

// now.setFullYear(2032);

printMe("Now", now);
printMe("past", past.toDateString());

// now.getFullYear
past = new Date(2021, 0, 1);
// paskaiciuoti kiek dienu yra praeje siais metais
let diff = now - past;
//     ms       sek    val   paras
diff = diff / 1000 / 3600 / 24;
diff = Math.floor(diff);
console.log("now - past", diff);
