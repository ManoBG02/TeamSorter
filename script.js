function generatePlayerNameInputs() {
    const playerCount = document.getElementById("playerCount").value;
    const playerNamesDiv = document.getElementById("playerNames");
    playerNamesDiv.innerHTML = ""; // Clear previous inputs

    for (let i = 0; i < playerCount; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Player ${i + 1} Name`;
        playerNamesDiv.appendChild(input);
    }
}

function generateTeams() {
    const playerInputs = document.querySelectorAll("#playerNames input");
    const players = Array.from(playerInputs).map(input => input.value.trim()).filter(Boolean);

    if (players.length < 2) {
        alert("Please enter at least two player names.");
        return;
    }

    players.sort(() => Math.random() - 0.5);

    const teamSize = Math.ceil(players.length / 2);
    const team1 = players.slice(0, teamSize);
    const team2 = players.slice(teamSize);

    const teamsDiv = document.getElementById("teams");
    teamsDiv.innerHTML = `
        <h2>Team 1:</h2>
        <ul>${team1.map(player => `<li>${player}</li>`).join('')}</ul>
        <h2>Team 2:</h2>
        <ul>${team2.map(player => `<li>${player}</li>`).join('')}</ul>
    `;
}

document.getElementById("playerCount").addEventListener("input", generatePlayerNameInputs);
