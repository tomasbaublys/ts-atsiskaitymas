"use strict";
/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const meterInput = document.querySelector("#meter");
const outputDiv = document.querySelector("#output");
meterInput === null || meterInput === void 0 ? void 0 : meterInput.addEventListener("input", () => {
    if (!outputDiv)
        return;
    const meters = parseFloat(meterInput.value);
    outputDiv.innerHTML = "";
    if (isNaN(meters) || meterInput.value.trim() === "") {
        outputDiv.style.display = "none";
        return;
    }
    outputDiv.style.display = "block";
    const centimeters = meters * 100;
    const inches = meters * 39.37;
    const feet = meters * 3.281;
    const miles = meters / 1609;
    const yards = meters * 1.094;
    const resTitle = document.createElement("p");
    resTitle.textContent = `${meters} meters is equivalent to:`;
    outputDiv.appendChild(resTitle);
    const resList = document.createElement("div");
    const centimetersSpan = document.createElement("span");
    centimetersSpan.textContent = `${centimeters.toFixed(2)} centimeters (cm)`;
    resList.appendChild(centimetersSpan);
    const inchesSpan = document.createElement("span");
    inchesSpan.textContent = `${inches.toFixed(2)} inches (in)`;
    resList.appendChild(inchesSpan);
    const feetSpan = document.createElement("span");
    feetSpan.textContent = `${feet.toFixed(2)} feet (ft)`;
    resList.appendChild(feetSpan);
    const milesSpan = document.createElement("span");
    milesSpan.textContent = `${miles.toFixed(6)} miles (mi)`;
    resList.appendChild(milesSpan);
    const yardsSpan = document.createElement("span");
    yardsSpan.textContent = `${yards.toFixed(2)} yards (yd)`;
    resList.appendChild(yardsSpan);
    outputDiv.appendChild(resList);
});
