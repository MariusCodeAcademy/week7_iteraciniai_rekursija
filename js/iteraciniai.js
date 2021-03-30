"use strict";
console.log("iteraciniai");

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];
console.log(numbers);
//  * forEach
// * map
// * filter
// * reduce
// 3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
let doubles = numbers.map((num) => num * 2);
//  4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;
let power = numbers.map((num) => num ** 2);
//  5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso

//  6. Atrinkti tiktai teigimų elementų masyvą

//  ========================= Rezultatai ==============================

printMe("doubles", doubles);
printMe("power", power);
