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
  console.log(now.toDateString());
  // ind             0        1         2            3          4           5           6
  let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayNr = now.getDay();
  let weekday = daysArr[dayNr];
  let outputString = `Today is: ${weekday}`;
  console.log(outputString);
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
  console.log(`Current time is ${hours12} ${amPm} : ${minutes} : ${sec}`);
}
outputDateFormat();
