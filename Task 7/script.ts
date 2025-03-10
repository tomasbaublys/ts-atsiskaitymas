/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

type Player = {
    firstName: string;
    lastName: string;
    googleSearch: string;
};

type TeamData = {
    id: number;
    name: string;
    players: Player[];
};

type NBA_Data = {
    teams: TeamData[];
};

const ENDPOINT: string = 'NBA.json';

fetch(ENDPOINT)
.then(res => res.json())
.then((data: NBA_Data) => {
    const output: HTMLDivElement | null = document.querySelector('#output');
    if (!output) {
        throw new Error(`The element does not exist in the HTML file`);
    }
    data.teams.forEach((team: TeamData) => {
        const teamContainer: HTMLDivElement = document.createElement('div');
        teamContainer.classList.add('team-container');

        const teamTitle: HTMLHeadingElement = document.createElement('h3');
        teamTitle.textContent = team.name;
        teamContainer.appendChild(teamTitle);

        team.players.forEach((player: Player) => {
            const playerContainer: HTMLDivElement = document.createElement('div');
            playerContainer.classList.add('player-container');

            const playerName: HTMLSpanElement = document.createElement('span');
            playerName.textContent = player.firstName.concat(' ', player.lastName);

            const playerInfoLink: HTMLAnchorElement = document.createElement('a');
            playerInfoLink.textContent = 'More info';
            playerInfoLink.setAttribute('href', player.googleSearch);
            playerInfoLink.setAttribute('target', '_blank');

            playerContainer.append(playerName, playerInfoLink);
            teamContainer.appendChild(playerContainer);
        });
        output.appendChild(teamContainer);
    });
});
