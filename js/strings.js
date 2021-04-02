"use stirct";
console.log("Strings");

let ourString = "Javascript yra narsykles interaktyvumo irankis";
// 1. Paversti duoda stringa i masyva kuriame kiekvienas masyvo el butu zodis
// "Javascript yra narsykles interaktyvumo irankis"
// [ 'Javascript', 'yra', 'narsykles'....]
let wordsArray = ourString.split(" ");
printMe("1 wordsArray", wordsArray);

let lettersArrForEach = [];
let wordInLetters;
wordsArray.forEach((word) => {
  console.log(word);
  wordInLetters = word.split("");
  lettersArrForEach = [...lettersArrForEach, ...wordInLetters];
});
// console.log("lettersArrForEach", lettersArrForEach);

//1b paversti kiekviena stringo simboli i atskira masyvo el.  [ 'S', 'a', 'v'  ....]
let lettersArray = ourString.split("");
// printMe("1b lettersArray", lettersArray);

//1c apsukti visa musu sakinti is antros puses
// pasiversti kiekviena sakinio el masyvo el (1b)
lettersArray;
// apsukti masyva is kitos puses su reverse
let reversedArr = lettersArray.reverse();
// console.log("reversedArr", reversedArr);

// suklijuoti atgal viska i string
let reversedString = reversedArr.join("");
printMe("1c apsuktas string", reversedString);

// metodu grandine (chain)
let reversedStringChain = ourString.split("").reverse().join("");
printMe("1c apsuktas string Chain", reversedStringChain);

ourString = "javascript yra narsykles interaktyvumo irankis";
// 2. paversti pirmo zodzio pirma raide i didziaja
// string.toUpperCase() - pavercia duota stringa diziosiom raidem
// let upper = ourString.toUpperCase();
// printMe("upper", upper);
let firstLetter = ourString.charAt(0).toUpperCase();
printMe("ourString", ourString);
printMe("firstLetter", firstLetter);

let capitalFirst = firstLetter + ourString.slice(1);
printMe("capitalFirst", capitalFirst);

// 2b. paversti kiekvieno zodzio pirma raide i didziaja.

//3 Parasyti funkcija kuri is paprasto sakinio paverstu i camelCase
// 'My argument Blue' => 'myArgumentBlue'

//4. Parasyti funkcija kuri paduota teksta sumazintu iki argumentu nurodyto dydzio ir gale padetu "..."
// makeSummary('long text', 30) fn turetu nukirpti paduota teksta ties 30 simboliu
