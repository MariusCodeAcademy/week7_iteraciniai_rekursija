"use strict";
console.log("iteraciniai");

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];
console.log(numbers);
//  * forEach
// * map
// * filter
// * reduce
// 3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
let doubles = numbers.map((num) => num / 3);

console.log("doubles", doubles);
