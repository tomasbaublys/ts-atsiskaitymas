"use strict";
/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'NBA.json';
fetch(ENDPOINT)
    .then(res => res.json())
    .then((data) => {
    const output = document.querySelector('#output');
    if (!output) {
        throw new Error(`The element does not exist in the HTML file`);
    }
    data.teams.forEach((team) => {
        const teamContainer = document.createElement('div');
        teamContainer.classList.add('team-container');
        const teamTitle = document.createElement('h3');
        teamTitle.textContent = team.name;
        teamContainer.appendChild(teamTitle);
        team.players.forEach((player) => {
            const playerContainer = document.createElement('div');
            playerContainer.classList.add('player-container');
            const playerName = document.createElement('span');
            playerName.textContent = player.firstName.concat(' ', player.lastName);
            const playerInfoLink = document.createElement('a');
            playerInfoLink.textContent = 'More info';
            playerInfoLink.setAttribute('href', player.googleSearch);
            playerInfoLink.setAttribute('target', '_blank');
            playerContainer.append(playerName, playerInfoLink);
            teamContainer.appendChild(playerContainer);
        });
        output.appendChild(teamContainer);
    });
});
