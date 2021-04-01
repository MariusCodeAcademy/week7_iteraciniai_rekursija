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
function printToHtml(elId, stringToPrint) {
  let htmlEl = document.getElementById(elId);
  if (htmlEl) htmlEl.innerHTML = stringToPrint;
}
