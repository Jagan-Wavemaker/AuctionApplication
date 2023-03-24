// Intializing emojis
const starEmojis = {
  "Beginner": "⭐",
  "Intermediate": "⭐⭐⭐",
  "Advanced": "⭐⭐⭐⭐⭐"
};
// retrieving random players
let players = null;
let usedPlayers = [];

async function getPlayers() {
  const response = await fetch('http://localhost:8080/badmintonAuction/player/display');
  players = await response.json();
}

async function getRandomPlayer() {
  if (players === null) {
    await getPlayers();
  }

  if (usedPlayers.length === players.length) {
    alert('No players left.');
    return;
  }
  let randomPlayer = null;
  while (randomPlayer === null || usedPlayers.includes(randomPlayer)) {
    const randomIndex = Math.floor(Math.random() * players.length);
    randomPlayer = players[randomIndex];
  }
  usedPlayers.push(randomPlayer);
  const playerDetails = document.getElementById('playerDetails');
  const playerIdInput = document.getElementById("playerid");
  const playerbasepriceInput = document.getElementById("baseprice");
  randomPlayer.skilllevel = starEmojis[randomPlayer.skilllevel]
  playerDetails.innerHTML = 
    `<img id="player-img" src="./images/badmintonPlayer.png" alt="">
    <p id="reqPlayer">Player Id: <span style = "font-weight: bold";>${randomPlayer.playerid}</p>
    <p>Player Name:<span style = "font-weight: bold";>${randomPlayer.playername}</p>
    <p>Skill Level: <span style = "font-weight: bold";>${randomPlayer.skilllevel}</p>`;
    // autodisplay playerid in form
    playerIdInput.value = randomPlayer.playerid;
    // setting base price
    if(randomPlayer.skilllevel == "⭐"){
      playerbasepriceInput.value = 100000
    } else if(randomPlayer.skilllevel == "⭐⭐"){
      playerbasepriceInput.value = 300000
    } else{
      playerbasepriceInput.value = 500000
    }
}
// displaying card withplayer details
const btn = document.getElementById("randombutton");
const randomPlayer = document.querySelector('#playerDetails');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  randomPlayer.classList.add('show');
});
// Filling the bidding form
const form = document.getElementById('bidding-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);
    console.log(formDataObject);
    console.log(formDataJsonString);
    fetch('http://localhost:8080/badmintonAuction/auction/create', {
        method:'POST', 
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
        body: formDataJsonString
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch((err) =>{ 
        alert(err);
        console.log(err)
    });
});

