"use strict";
console.log("rekursija");

/**
 * Direktorija 1
 * -- dir2
 * ----failas 3
 * ----dir4
 * ------fiailas6
 * -- failas1
 * Diretorij2
 * --failas2
 *
 */

// parasyti funkcija kuri atspausina skaicius nuo 3 ik 0

function printNumbers(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
// printNumbers(3);

function printNumbersRecursive(num) {
  //   debugger;
  //   isejimo salyga
  if (num === 0) {
    console.log(num);
    return;
  }
  // veiksmas
  console.log(num);
  // kvieciam rekursikai funkcija su mazesniu argumentu
  printNumbersRecursive(num - 1);
}
// argumentas mazeja vienetu kiekviena karti iskvieciant funkcija
printNumbersRecursive(4);
// printNumbersRecursive(2);
// printNumbersRecursive(1);
// printNumbersRecursive(0);

// susumuoti visus skaicius
const data1 = [
  1,
  5,
  [
    4,
    5,
    9,
    {
      q: 7,
      z: [4, 8, 9],
    },
  ],
  8,
  {
    a: 7,
    b: 9,
    h: [
      4,
      5,
      {
        j: 7,
        p: 8,
        z: [7, 7, 7],
      },
    ],
  },
];

const myFolder = {
  type: "folder",
  name: "Javascript kursai",
  files: [
    {
      type: "file",
      name: "komandos.txt",
    },
    {
      type: "folder",
      name: "1 savaitė",
      files: [
        {
          type: "folder",
          name: "1 pamoka",
          files: [
            {
              type: "file",
              name: "index.html",
            },
            {
              type: "file",
              name: "main.css",
            },
          ],
        },
        {
          type: "folder",
          name: "2 pamoka",
          files: [
            {
              type: "file",
              name: "index.html",
            },
          ],
        },
      ],
    },
  ],
};

/*
Javascript kursai
--file
--folder/
----1 pamoka/
------index.html
------main.css
----2 pamoka/
------index.html
*/

// parasuti funkcija kuri sudeda visus skaicius iki paduoto argumento

function addUpTo(value) {
  let total = 0;
  for (let i = value; i > 0; i--) {
    console.log("total", total, "i", i);
    total += i;
  }
  console.log("total", total);

  return total;
}
addUpTo(3); // 3 + 2 + 1 + 0 = rez

//     3
// 3 + 2
// 5 + 1
// 6 + 0 // iseinam ir grazinam rez

function upToRecursive(num) {
  // debugger;
  // isejimo salyga
  if (num === 0) return 0;

  return num + upToRecursive(num - 1);

  // rekursija
}
let recRez = upToRecursive(5);
printMe("Rec add to", recRez);
