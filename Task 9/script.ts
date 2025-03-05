/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

type Player = {
    firstName: string;
    lastName: string;
    id: number;
    teamId: number;
  };
  
  type Team = {
    id: number;
    abbreviation: string;
    teamName: string;
    simpleName: string;
    location: string;
  };
  
  const TEAMS_ENDPOINT: string = 'teams.json';
  const PLAYERS_ENDPOINT: string = 'players.json';
  
  ((): void => {
    fetch(TEAMS_ENDPOINT)
      .then(res => res.json())
      .then((data: { teams: Team[] }): void => {
        displayTeams(data.teams);
      })
      .catch((error: any): void => {
        console.error('Error fetching teams data:', error);
      });
  })();
  
  function fetchPlayersData(teamId: number): void {
    fetch(PLAYERS_ENDPOINT)
      .then(res => res.json())
      .then((data: { players: Player[] }): void => {
        const teamPlayers: Player[] = data.players.filter(
          (player: Player) => player.teamId === teamId
        );
        displayPlayers(teamPlayers);
      })
      .catch((error: any): void => {
        console.error('Error fetching players data:', error);
      });
  }
  
  function displayTeams(teams: Team[]): void {
    const outElement: HTMLElement | null = document.querySelector('#output');
    if (!outElement) return;
  
    teams.forEach((team: Team) => {
      const teamCard: HTMLDivElement = document.createElement('div');
      teamCard.className = 'team-card';
  
      const teamName: HTMLHeadingElement = document.createElement('h2');
      teamName.textContent = team.teamName;
      teamCard.appendChild(teamName);
  
      const simpleName: HTMLParagraphElement = document.createElement('p');
      simpleName.textContent = `Simple Name: ${team.simpleName}`;
      teamCard.appendChild(simpleName);
  
      const abbreviation: HTMLParagraphElement = document.createElement('p');
      abbreviation.textContent = `Abbreviation: ${team.abbreviation}`;
      teamCard.appendChild(abbreviation);
  
      const location: HTMLParagraphElement = document.createElement('p');
      location.textContent = `Location: ${team.location}`;
      teamCard.appendChild(location);
  
      const playersButton: HTMLButtonElement = document.createElement('button');
      playersButton.textContent = 'Players';
      playersButton.onclick = (): void => fetchPlayersData(team.id);
      teamCard.appendChild(playersButton);
  
      outElement.appendChild(teamCard);
    });
  }
  
  function displayPlayers(players: Player[]): void {
    let modal: HTMLElement | null = document.querySelector('#modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal';
      modal.className = 'modal';
      document.body.appendChild(modal);
    }
    
    let modalContent: HTMLElement | null = document.querySelector('#modal-content');
    if (!modalContent) {
      modalContent = document.createElement('div');
      modalContent.id = 'modal-content';
      modalContent.className = 'modal-content';
      modal.appendChild(modalContent);
    }
    
    while (modalContent.firstChild) {
      modalContent.removeChild(modalContent.firstChild);
    }
    
    players.forEach((player: Player) => {
      const playerCard: HTMLDivElement = document.createElement('div');
      playerCard.className = 'player-card';
    
      const playerName: HTMLParagraphElement = document.createElement('p');
      playerName.textContent = `${player.firstName} ${player.lastName}`;
      playerCard.appendChild(playerName);
    
      modalContent.appendChild(playerCard);
    });

    modal.style.display = 'block';
  }
  
  function closeModal(): void {
    const modal: HTMLElement | null = document.querySelector('#modal');
    if (modal) modal.style.display = 'none';
  }
  
  document.addEventListener('click', (event: MouseEvent): void => {
    const modal: HTMLElement | null = document.querySelector('#modal');
    if (modal && event.target === modal) {
      closeModal();
    }
});
  