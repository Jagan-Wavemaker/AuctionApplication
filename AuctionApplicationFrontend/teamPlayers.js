// displaying players from Team1
const teamButton1 = document.getElementById("team-button1");
teamButton1.addEventListener("click", () => {
  let teamId = document.getElementById("teamid1").value;
  console.log(teamId)
  fetch(`http://localhost:8080/badmintonAuction/auction/getallplayerofteam/${teamId}`)
  .then(response => response.json())
  .then(data =>{
    let showdata = "";
      data.forEach(element => {
        console.log(element)
        
        let finalData = "";
        finalData+=`
        <div class="col-sm-4">
            <h3 style = "margin-top:0;"><i class="far fa-user"></i>&nbspPlayer Name:${element.player.playername}</h3>
            <h4><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
            <h4><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
        </div>  `
        showdata += finalData;
        
      }); 
      document.getElementById("players-list").innerHTML = showdata; 
  })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});

// displaying players from Team2
const teamButton2 = document.getElementById("team-button2");
teamButton2.addEventListener("click", () => {
  let teamId = document.getElementById("teamid2").value;
  console.log(teamId)
  fetch(`http://localhost:8080/badmintonAuction/auction/getallplayerofteam/${teamId}`)
  .then(response => response.json())
  .then(data =>{
    let showdata = "";
      data.forEach(element => {
        console.log(element)
        
        let finalData = "";
        finalData+=`
        <div class="col-sm-4">
            <h3><i class="far fa-user"></i>&nbspPlayer Name:${element.player.playername}</h3>
            <h4><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
            <h4><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
        </div>  `
        showdata += finalData;
        
      }); 
      document.getElementById("players-list").innerHTML = showdata; 
  })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});

// displaying players from Team3
const teamButton3 = document.getElementById("team-button3");
teamButton3.addEventListener("click", () => {
  let teamId = document.getElementById("teamid3").value;
  console.log(teamId)
  fetch(`http://localhost:8080/badmintonAuction/auction/getallplayerofteam/${teamId}`)
  .then(response => response.json())
  .then(data =>{
    let showdata = "";
      data.forEach(element => {
        console.log(element)
        
        let finalData = "";
        finalData+=`
        <div class="col-sm-4">
            <h3><i class="far fa-user"></i>&nbspPlayer Name:<span>${element.player.playername}</span></h3>
            <h4><i class="fa fa-money" aria-hidden="true"></i>&nbspBase Price:${element.auction.baseprice}</h4>
            <h4><i class="fa fa-money" aria-hidden="true"></i>&nbspSold Price:${element.auction.soldprice}</h4>
        </div>  `
        showdata += finalData;
        
      }); 
      document.getElementById("players-list").innerHTML = showdata; 
  })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});
// switching to buttons with their colors
const btn1 = document.getElementById("teamid1");
const btn2 = document.getElementById("teamid2");
const btn3 = document.getElementById("teamid3");
btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'rgb(216, 64, 8)';
    btn1.style.color = 'white'
    btn2.style.backgroundColor = 'initial';
    btn3.style.backgroundColor = 'initial';
});

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'rgb(35, 35, 203)';
    btn2.style.color = 'white'
    btn1.style.backgroundColor = 'initial';
    btn3.style.backgroundColor = 'initial';
});

btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = 'rgb(6, 6, 134)';
    btn3.style.color = 'white'
    btn1.style.backgroundColor = 'initial';
    btn2.style.backgroundColor = 'initial';
});
