"use strict";
console.log("iteraciniai");
//       index   0  1  2 ...
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

// 14. Atrinkti kas penktą elementą į naują masyvą

// 15. Atspausdinti kiekvieną masyvo reikšmę atskiroje eilutėje: [0] => 64.

//  ========================= Rezultatai ==============================

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
