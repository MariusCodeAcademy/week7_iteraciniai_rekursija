/**
 * Checks if given @param data has any values
 * if data is null, undefined, [], {} then we consider it empty
 *
 * @param {mixed} data
 *
 * @returns {boolean} true / false
 */
function isEmpty(data) {
  if (data === null || data === undefined || data.length === 0) return true;
  // patikrinti ar tai yra objektas
  // Objeck.keys({}) grazina masyva su objekto raktu reiksmem
  // galima naudoti JSON.stringify({})
  if (data.constructor === Object && Object.keys(data).length === 0) return true;
  return false;
}

// printType default reiksme kuri naudojamas jei nepaduota isskviecian funkcija
function printMe(header, data, printType = "log") {
  console.group(header);
  // patikrinti ar data turi duomenu
  if (!isEmpty(data)) {
    // apriboti kad printType galetu buti tik 'log', 'table', 'warn'
    if (["log", "table", "warn"].includes(printType)) console[printType](data);
    else console.error(printType + " tokio spausdinimo tipo nepalaikome");
  } else {
    console.warn("Duomenu nera");
  }
  console.groupEnd();
  console.log("");
}

// pagalbine funkcija kuri atvaizduoja string i html elemento vidu
function printToHtml(elId, stringToPrint, concat = false) {
  let htmlEl = document.getElementById(elId);
  if (!concat) {
    if (htmlEl) htmlEl.innerHTML = stringToPrint;
  } else {
    if (htmlEl) htmlEl.innerHTML += stringToPrint;
  }
}

function outputDateFormat() {
  let now = new Date();
  //   now.setHours(19);
  //   console.log(now.toDateString());
  // ind             0        1         2            3          4           5           6
  let daysArr = [
    "Sunday",
    "Pagaliau vel Pirmadienis",
    "Tuesday",
    "Wednesday",
    "Ketvirtadienis",
    "Pagaliau Penktadienis",
    "Saturday",
  ];
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
// outputDateFormat();

setInterval(() => {
  printToHtml("app", outputDateFormat());
  printToHtml("progress", "|", true);
}, 1000);

function fixSubTen(num) {
  return num < 10 ? "0" + num : num;
}
