"use strict";
console.log("iteraciniai");
//       index   0  1  2 ...
const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];
// console.log(numbers);
//  * forEach
// * map
// * filter
// * reduce
// 3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
let doubles = numbers.map((num) => num * 2);
//  4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;
let power = numbers.map((num) => num ** 2);
//  5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso
let indexTimesNum = numbers.map((num, index) => {
  return num * index;
});
//  6. Atrinkti tiktai teigimų elementų masyvą
let positive = numbers.filter((num) => num > 0);

// 7. Atrinkti tiktai neigiamų elementų masyvą
let negatives = numbers.filter((num) => !(num > 0));
// 8. Atrinkti tiktai lyginių skaičių masyvą
let evenNums = numbers.filter((num) => num % 2 === 0);

// 9. Atrinkti tiktai nelyginių skaičių masyvą
let oddNums = numbers.filter((num) => num % 2 !== 0);

// 10. Sukurkite masyvą kuriame visos neigiamos reikšmės būtų paverstos teigiamomis
let negToPos = numbers.map((num) => (num > 0 ? num : num * -1));

// 11. Atrinkti tik natūralių skaičių masyvą
let naturals = numbers.filter((num) => Number.isInteger(num) && num > 0);

// 12. Suapvalinti visas masyvo reikšmes iki sveikų skaičių
let rounded = numbers.map((num) => Math.round(num));

// 13. Atrinkti kas antrą elementą į naują masyvą
let everySecond = numbers.filter((num, indx) => {
  return indx % 2 === 0;
});
// 14. Atrinkti kas penktą elementą į naują masyvą
let everyFith = numbers.filter((num, idx) => idx % 5 === 0);

// 15. Atspausdinti kiekvieną masyvo reikšmę atskiroje eilutėje: [0] => 64.
let myString = "";
// numbers.forEach((num, idx) => (myString += `[${idx}] => ${num}\n`));
// \n - naujos eilute simbolis - enter
myString = numbers.reduce((total, num, idx) => total + `[${idx}] => ${num}\n`, "");

// 16. Suskaičiuoti visų elementų sumą
let totalSum = numbers.reduce((total, num) => total + num, 0);

// 17. Suskaičiuoti visų elementų vidurkį
let avg = numbers.reduce((avg, num) => avg + num / numbers.length, 0);

// 18. Rasti didžiausią skaičių masyve
// pradedam lyginti ir pradine reiksme bus pirmas skaicius
let max = numbers[0];
let maxManual = numbers[0];
numbers.forEach((num) => {
  if (maxManual < num) maxManual = num;
  // terenary operator
  // salyga ? true : false
  // maxManual < num ? (maxManual = num) : null;
});

// Math.max(num1, num2) - grazina didesni skaiciu
numbers.forEach((num) => (max = Math.max(num, max)));
// reduce way
max = numbers.reduce((argMax, num) => Math.max(argMax, num), numbers[0]);

// 19. Rasti mažiausią skaičių masyve
let min = numbers.reduce((argMin, num) => Math.min(argMin, num), numbers[0]);

//  ========================= Rezultatai ==============================
printMe("pradinis masyvas", numbers);
printMe("doubles", doubles);
printMe("power", power);
printMe("indexTimesNum", indexTimesNum);
printMe("positive", positive);
printMe("negatives", negatives);
printMe("evenNums", evenNums);
printMe("oddNums", oddNums);
printMe("negToPos", negToPos);
printMe("naturals", naturals);
printMe("rounded", rounded);
printMe("everySecond", everySecond);
printMe("everyFith", everyFith);
printMe("myString", myString);
printMe("totalSum", totalSum);
printMe("avg", avg);
printMe("max", max);
printMe("min", min);
printMe("maxManual", maxManual);
