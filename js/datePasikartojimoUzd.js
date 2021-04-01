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

// 8. Parasyti funkcija kuri sugeneruoja random sveika skaiciu nuo 1 iki 10. Vartotojo papraso speti skaiciu ir jei atspeja pranesa "Pataikei" arba "Nepavyko, bandyk dar karta"

// 9. Parasyti funkcija kuri pavercia Temperaturos vienetus is Celsijaus i Farenheitus rezultata graziai atspausdina ir grazina paversta skaiciu

// 10 parasyti funkcija gauti puslapio adresui kuris siuo metu uzkrautas (URL)

// 11 parasyti funkcija kuri grazina ir atspausdina paduotu failo pavadinimo prievardi
// jei prievardzio nera pranesti apie tai vartotojui "myFile.txt", 'blueberies.jpg', 'book'

// 12 parasyti funkcija kuri ima zodi kaip argumenta. Ir perdelioja jo visas raides is desines i kaire.
// pvz
// Programavimas
// rogramavimasP
// gramavimasPro
// ramavimasProg .....

// atvaizduoti procesa eilutem

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
  outputString += `<br> Current time is ${fixSubTen(hours12)} ${amPm} : ${fixSubTen(minutes)} : ${sec}`;

  //   console.log(outputString);

  return outputString;
}
outputDateFormat();

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
// console.log("fixSubTen", fixSubTen(8));

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
// console.log("leapYearTer", leapYearTer(2020));

// isItLeapYear();

// 4 Parasyti funkcija kuri surastu ar tarp 2014 ir 2050 sausio pirma yra kazkada sekmadieni
// atspausdinti data jei taip yra.

function wasThereSundayOnJanFirst() {
  // ar buvo sekmadienis pagal duota data
  // ar 2014 01 01 buvo sekmadienis?
  let d = new Date("2014-01-01");
  d.setFullYear(2016);
  // console.log("d", d.toDateString());
  // susigeneruoti metu masyva
  for (let metai = 2014; metai <= 2050; metai++) {
    d.setFullYear(metai);
    if (d.getDay() === 0) {
      console.log("sekmadienis", d.toDateString());
    }
  }
}

// wasThereSundayOnJanFirst();

// 5 parasyti funkcija kuri atspausdina kiek dienu liko iki kaledu.

function kiekDienuIkiKaledu() {
  console.log("266");
  // siandienos data
  let today = new Date();
  // kaledu data
  let christmas = new Date("2021-12-24");
  console.log("today", today.toDateString(), "christmas", christmas.toDateString());

  // skirtumo tarp datu
  let diffMs = christmas - today;
  console.log("diffMs", diffMs);
  // paversti ta skirtuma dienom
  let msToDays = diffMs / 1000 / 3600 / 24;
  // gaunam kiek pilnu dienu
  let wholeDays = Math.floor(msToDays);

  // panaudojom pagalbine funkcija
  //let wholeDays = daysDiff(today, christmas);

  // atspausdinti
  console.log("iki kaledu liko", wholeDays, "dienu");
}
kiekDienuIkiKaledu();

function daysDiff(start, finish) {
  let diff = finish - start;
  let days = diff / 1000 / 3600 / 24;
  days = Math.floor(days);
  return days;
}

// 6 Parasyti funkcija kuri grazina kelintadienis buvo argumentu paduoda data.

function kelintadienis(date) {
  // pasiimti data
  let my_date = new Date(date);
  // patikrinti kelintadienis yra ta diena
  // getDay() - grazina skaiciu nuo 0 iki 6
  let daySk = my_date.getDay();
  console.log("daySk", daySk);
  // paversi kelintadienis skaiciu i savaites dienos pavadinima
  let weekDay = dayToWeekDay(daySk);
  console.log(`jusu pasirinkta data: ${date} savaites diena: ${weekDay}`);
}
kelintadienis("2021-12-24");

function dayToWeekDay(sk) {
  // ind             0        1         2            3          4           5           6
  let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysArr[sk];
}

// 7. Parasyti funkcija kuri pranesa kiek minuciu yra praeje nuo dabar iki paduotos argumentu datos
function timePassed(sinceWhen) {
  if (typeof sinceWhen !== "number") return;
  // console.log("sinceWhen", sinceWhen.toDateString());
  let now = new Date();
  // naujas datos obkjektas is argumento
  let uzduotaData = new Date(sinceWhen);
  // let uzduotaData = new Date(threeMin);
  // suskaiciuoti skirtuma tarp dabarties ir paduoto laiko
  let diff = now - uzduotaData;
  // skirtumas min
  let min = diff / 1000 / 60;

  // dienu atvejis
  if (min > 3 * 60 * 24) {
    console.log(`nuo uzduoto laiko praejo ${min / 60 / 24} paros`);
    return;
  }

  // val atvejis
  if (min > 60) {
    console.log(`nuo uzduoto laiko praejo ${min / 60} val`);
    return;
  }

  console.log(`nuo uzduoto laiko praejo ${min} min`);
}
let now = new Date();
let time = now - 120 * 60 * 1000;
timePassed(time);

// 8. Parasyti funkcija kuri sugeneruoja random sveika skaiciu nuo 1 iki 10. Vartotojo papraso speti skaiciu ir jei atspeja pranesa "Pataikei" arba "Nepavyko, bandyk dar karta"

function letsGuess() {
  // sugenereuoti skaiciu nuo 1 iki 10 sveika skaiciu
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  // console.log("randomNumber", randomNumber);
  // paprasyti user input ir patikrtinti ar pataikyta
  let userNumber = prompt("Iveskite skaiciu");
  // console.log("userNumber", +userNumber);

  if (randomNumber === +userNumber) {
    console.log("Pataikete, sveikinimai");
  } else {
    console.log("Neatspejote, bandykite dar karta. Kompiuteris spejo kad sptesit", randomNumber);
  }
}

// letsGuess();

// 10 parasyti funkcija gauti puslapio adresui kuris siuo metu uzkrautas (URL)
let currentUrl = window.location.href;
console.log(currentUrl);

// 11 parasyti funkcija kuri grazina ir atspausdina paduotu failo pavadinimo prievardi
// jei prievardzio nera pranesti apie tai vartotojui "myFile.txt", 'blueberies.jpg', 'book'

function getExtention(file) {
  // surasti prievardi
  // jei yra . tai yra prievardis
  let dot = file.lastIndexOf(".");
  console.log("dot", dot);
  if (dot !== -1) {
    let prievardis = file.slice(dot);
    console.log(prievardis);
  } else {
    console.warn("prievardzio nera");
  }
}

getExtention("some.file.txt");
getExtention("some.file.jpg");
getExtention("somefile");
