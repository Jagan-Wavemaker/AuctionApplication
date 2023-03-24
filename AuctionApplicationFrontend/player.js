const starEmojis = {
    "Beginner": "⭐",
    "Intermediate": "⭐⭐⭐",
    "Advanced": "⭐⭐⭐⭐⭐"
  };
fetch("http://localhost:8080/badmintonAuction/player/display").then((objectData)=>{
    return objectData.json();
}).then((completedata)=>{
    completedata.reverse()
    let data1 = "";
    completedata.map((values)=>{
        values.skilllevel = starEmojis[values.skilllevel]
       data1+= `<div class="card">
       <img src="./images/badmintonPlayer.png" alt="PlayerLogo">
        <p>Player Name: <span style = "font-weight: bolder; color: blue;">${values.playername}</span></p>
        <p id="skilllevel">Skill Level: <span style = "font-weight: bold";>${values.skilllevel}</span></p>
      </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
})
// <p>Tshirt Size: <span style = "font-weight: bold";>${values.tshirtsize}</span></p> ((add this line  in cards to print a player tshirt size ))

// filtering based on the given skill level
const form = document.querySelector('form');    
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedSkill = document.getElementById('skilllevel').value;
  // Send a request to the API to retrieve the player details
  fetch('http://localhost:8080/badmintonAuction/player/display')
    .then(response => response.json())
    .then(data => {
      let data2 = "";
      const filteredPlayers = data.filter(player => player.skilllevel === selectedSkill);
      filteredPlayers.map((values)=>{
        values.skilllevel = starEmojis[values.skilllevel]
        data2+= `<div class="card">
        <img src="./images/badmintonPlayer.png" alt="PlayerLogo">
         <p>Player Name: <span style = "font-weight: bolder; color: blue;">${values.playername}</span></p>
         <p id="skilllevel">Skill Level: <span style = "font-weight: bold";>${values.skilllevel}</span></p>
       </div>`;

      });
      document.getElementById("cards").innerHTML = data2;
    })
    .catch(error => console.error(error));
});
