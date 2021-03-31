"use strict";
console.log("dateUzd");

//1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// [monday, tuesday, wednesday ... ]
// Current time is : 10 PM : 30 : 38

// 2. Write a JavaScript program to get the current date.
// grazinti dartine data tokiu formatu.
// Expected Output : dd-mm-yyyy

// 3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// Parasyti funkcija nustatyti ar sie arba paduoti metai yra keliamieji (ar vasaris turi 29d)

// 4 Parasyti funkcija kuri surastu ar tarp 2014 ir 2050 sausio pirma yra kazkada sekmadieni
// atspausdinti data jei taip yra.

// 5 parasyti funkcija kuri atspausdina kiek dienu liko iki kaledu.

// 6 Parasyti funkcija kuri grazina kelintadienis buvo argumentu paduoda data.

// 7. Parasyti funkcija kuri pranesa kiek minuciu yra praeje nuo dabar iki paduotos argumentu datos
// 7a. jei min skaicius daugiau nei valanda, tai pranesti valandu skaiciu
// 7b. jei valandu skaicius didesnis uz 3 paras tai pranesti dienu skaiciu

//1
function outputDateFormat() {
  let now = new Date();
  //   now.setHours(19);
  //   console.log(now.toDateString());
  // ind             0        1         2            3          4           5           6
  let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayNr = now.getDay();
  let weekday = daysArr[dayNr];
  let outputString = `Today is: ${weekday}`;
  let hours24 = now.getHours();
  let hours12;
  let amPm;
  if (hours24 > 12) {
    hours12 = hours24 - 12;
    amPm = "PM";
  } else {
    hours12 = hours24;
    amPm = "AM";
  }
  let minutes = now.getMinutes();
  let sec = now.getSeconds();
  outputString += `<br> Current time is ${hours12} ${amPm} : ${minutes} : ${sec}`;

  //   console.log(outputString);

  return outputString;
}
outputDateFormat();

// pagalbine funkcija kuri atvaizduoja string i html elemento vidu
function printToHtml(elId, stringToPrint) {
  document.getElementById(elId).innerHTML = stringToPrint;
}

setInterval(() => {
  printToHtml("app", outputDateFormat());
}, 1000);

// 2 dd-mm-yyyy

function getDateFormat() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  console.log(`${fixSubTen(day)}-${fixSubTen(month)}-${now.getFullYear()}`);
}
function fixSubTen(num) {
  return num < 10 ? "0" + num : num;
}
console.log("fixSubTen", fixSubTen(8));

getDateFormat();

// 3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function isItLeapYear() {
  // gauti dabartinius metus
  let now = new Date();

  let year = now.getFullYear();
  year = 2016;
  // ar metai dalinasi is 4 lygiai
  if (year % 4 !== 0) {
    console.log("not a leap year");
    return;
  }

  // ar metai dalinasi is 100 ir is 400
  if (year % 100 === 0 && year % 400 === 0) {
    console.log("leap year");
  } else {
    console.log("not a leap year");
  }
}

function leapYearTer(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log("leapYearTer", leapYearTer(2020));

isItLeapYear();

// 4 Parasyti funkcija kuri surastu ar tarp 2014 ir 2050 sausio pirma yra kazkada sekmadieni
// atspausdinti data jei taip yra.

function wasThereSundayOnJanFirst() {
  // ar buvo sekmadienis pagal duota data
  // ar 2014 01 01 buvo sekmadienis?
  let d = new Date("2014-01-01");
  d.setFullYear(2016);
  console.log("d", d.toDateString());
  // susigeneruoti metu masyva
  for (let metai = 2014; metai <= 2050; metai++) {
    d.setFullYear(metai);
    if (d.getDay() === 0) {
      console.log("sekmadienis", d.toDateString());
    }
  }
}

wasThereSundayOnJanFirst();
