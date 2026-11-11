
/* =====================================
   MAVENGOALZONE - JAVASCRIPT
===================================== */

// USER VIRTUAL POINTS

let virtualPoints = 1000;


// FOOTBALL MATCH DATA

const matches = [

    {
        home: "Manchester United",
        away: "Chelsea",
        homeLogo: 33,
        awayLogo: 49,
        league: "Premier League",
        date: "Sample Fixture",
    },

    {
        home: "Arsenal",
        away: "Liverpool",
        homeLogo: 42,
        awayLogo: 40,
        league: "Premier League",
        date: "Sample Fixture",
    },

    {
        home: "Manchester City",
        away: "Tottenham",
        homeLogo: 50,
        awayLogo: 47,
        league: "Premier League",
        date: "Sample Fixture",
    },

    {
        home: "Real Madrid",
        away: "Barcelona",
        homeLogo: 541,
        awayLogo: 529,
        league: "La Liga",
        date: "Sample Fixture",
    },

    {
        home: "Atletico Madrid",
        away: "Sevilla",
        homeLogo: 530,
        awayLogo: 536,
        league: "La Liga",
        date: "Sample Fixture",
    },

    {
        home: "Bayern Munich",
        away: "Borussia Dortmund",
        homeLogo: 157,
        awayLogo: 165,
        league: "Bundesliga",
        date: "Sample Fixture",
    },

    {
        home: "Juventus",
        away: "AC Milan",
        homeLogo: 496,
        awayLogo: 489,
        league: "Serie A",
        date: "Sample Fixture",
    },

    {
        home: "Paris Saint-Germain",
        away: "Marseille",
        homeLogo: 85,
        awayLogo: 81,
        league: "Ligue 1",
        date: "Sample Fixture",
    }

];


// DISPLAY MATCHES

const matchList = document.getElementById("match-list");

function displayMatches(matchData) {

    matchList.innerHTML = "";

    matchData.forEach((match, index) => {

        const matchCard = document.createElement("div");

        matchCard.className = "match-card";

        matchCard.innerHTML = `

            <p class="match-league">
                ${match.league}
            </p>

            <div class="teams">

                <div class="team">

                    <img
                        src="https://media.api-sports.io/football/teams/${match.homeLogo}.png"
                        alt="${match.home}"
                    >

                    <p>${match.home}</p>

                </div>

                <span class="vs">VS</span>

                <div class="team">

                    <img
                        src="https://media.api-sports.io/football/teams/${match.awayLogo}.png"
                        alt="${match.away}"
                    >

                    <p>${match.away}</p>

                </div>

            </div>

            <p class="match-time">
                ${match.date}
            </p>

            <p class="prediction-title">
                Make Your Prediction
            </p>

            <div class="prediction-options">

                <button data-choice="home">
                    Home Win
                </button>

                <button data-choice="draw">
                    Draw
                </button>

                <button data-choice="away">
                    Away Win
                </button>

            </div>

            <p class="prediction-status"></p>

        `;

        matchCard.querySelectorAll("button").forEach(button => {

            button.addEventListener("click", () => {

                const status = matchCard.querySelector(
                    ".prediction-status"
                );

                if (matchCard.dataset.predicted === "true") {

                    status.textContent =
                        "You have already predicted this match.";

                    return;

                }

                matchCard.dataset.predicted = "true";

                button.style.background = "#20df83";
                button.style.color = "#06150d";

                status.textContent =
                    "Prediction recorded successfully!";

                status.style.color = "#20df83";

                matchCard.querySelectorAll("button").forEach(btn => {
                    btn.disabled = true;
                    btn.style.opacity = "0.6";
                });

                button.style.opacity = "1";

            });

        });

        matchList.appendChild(matchCard);

    });

}


// INITIAL DISPLAY

displayMatches(matches);


// MATCH FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedLeague = button.textContent.trim();

        if (selectedLeague === "All Matches") {

            displayMatches(matches);

        } else {

            const filteredMatches = matches.filter(match =>
                match.league === selectedLeague
            );

            displayMatches(filteredMatches);

        }

    });

});


// LEADERBOARD DATA

const players = [

    {
        name: "FootballKing",
        points: 2500
    },

    {
        name: "GoalMaster",
        points: 2200
    },

    {
        name: "MavenPro",
        points: 1900
    },

    {
        name: "SoccerLegend",
        points: 1600
    },

    {
        name: "TopPredictor",
        points: 1400
    }

];


// DISPLAY LEADERBOARD

const leaderboardList =
    document.getElementById("leaderboard-list");

function displayLeaderboard() {

    leaderboardList.innerHTML = "";

    players.forEach((player, index) => {

        const playerRow = document.createElement("div");

        playerRow.className = "player-row";

        playerRow.innerHTML = `

            <span class="player-name">
                ${index + 1}. ${player.name}
            </span>

            <span class="player-points">
                ${player.points} Points
            </span>

        `;

        leaderboardList.appendChild(playerRow);

    });

}

displayLeaderboard();

