// Remember that we have to add the JS script tag link from the settings in order for the scrolling effect to work

var carousel = $(".carousel"),
    currdeg  = 0;

$(".prev").on("click", { d: "p" }, rotate);
$(".next").on("click", { d: "n" }, rotate);

function rotate(e){
  if(e.data.d=="p"){
    currdeg = currdeg - 72;
  }
  if(e.data.d=="n"){
    currdeg = currdeg + 72;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// If we decide to add Chicago back or the head coach joke we have to dive degree values (360/6 instead of 360/5 here and in CSS)



// API Pull Coding

const baseURL = `https://www.thesportsdb.com/api/v1/json`;
const endpointTeam = `/1/searchteams.php?t=`;
const fullEndpointTeam = baseURL + endpointTeam;
const firstStat = document.querySelector(`#rl1`);
const secondStat = document.querySelector(`#rl2`);
const thirdStat = document.querySelector(`#rl3`);
const fourthStat = document.querySelector(`#rl4`);
const fifthStat = document.querySelector(`#rl5`);
const chicago4Stat = document.querySelector(`#ll4`);
const chicago5Stat = document.querySelector(`#ll5`);
const teamNameRight = document.querySelector(`#teamNameRight`);
const betterBecause = document.querySelector(`#betterBecause`);

// All Click Action (no matter which team is selected):
const goTransformPage = document.querySelector(`.click`);
const idBears = `Chicago Bears`;
goTransformPage.addEventListener(`click`, () => {
   chicago4Stat.innerText=`Only ahead of the 0-8-1 Lions`;
   chicago5Stat.innerText=`Highly Unlikely`;
   getTeam = async () => {
      try {
          const teamBears = await axios.get(fullEndpointTeam + idBears);
          console.log(`Axios Team retrieval from THESPORTSDB.COM API was successful.`);
          console.log(teamBears.data); 
          teamNameLeft.src = teamBears.data.teams[0].strTeamLogo;
       } catch (err) {
          console.log(`Axios Team retrieval from THESPORTSDB.COM API was NOT successful.`);
          console.log(err);
       }
  }
  getTeam();
})

// Team Selection Click (With API Pulls)
const idPackers = `Green Bay Packers`;
const goPackers = document.querySelector(`#click-packers`);
goPackers.addEventListener(`click`, () => {
        getTeam = async () => {
            try {
                const teamPackers = await axios.get(fullEndpointTeam + idPackers);
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was successful.`);
                console.log(teamPackers.data);
                firstStat.innerText=teamPackers.data.teams[0].strTeam;
                secondStat.innerText=teamPackers.data.teams[0].strStadiumLocation;
                thirdStat.innerText=teamPackers.data.teams[0].strStadium;
                fourthStat.innerText=`Highest in the NFC North (nfl.com)`;
                fifthStat.innerText=`Likely`;
                betterBecause.innerText= `The ${idPackers} are better than the Chicago Bears.`;
                teamNameRight.src = teamPackers.data.teams[0].strTeamLogo;
             } catch (err) {
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was NOT successful.`);
                console.log(err);
             }
        }
        getTeam();
})
const idVikings = `Minnesota Vikings`;
const goVikings = document.querySelector(`#click-vikings`);
goVikings.addEventListener(`click`, () => {
        getTeam = async () => {
            try {
                const teamVikings = await axios.get(fullEndpointTeam + idVikings);
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was successful.`);
                console.log(teamVikings.data);
                firstStat.innerText=teamVikings.data.teams[0].strTeam;
                secondStat.innerText=teamVikings.data.teams[0].strStadiumLocation;
                thirdStat.innerText=teamVikings.data.teams[0].strStadium;
                fourthStat.innerText=`Second in the NFC North (nfl.com)`;
                fifthStat.innerText=`Likely`;
                betterBecause.innerText= `The ${idVikings} are better than the Chicago Bears.`;
                teamNameRight.src = teamVikings.data.teams[0].strTeamLogo;
             } catch (err) {
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was NOT successful.`);
                console.log(err);
             }
        }
        getTeam();
})
const idLions = `Detroit Lions`;
const goLions = document.querySelector(`#click-lions`);
goLions.addEventListener(`click`, () => {
        getTeam = async () => {
            try {
                const teamLions = await axios.get(fullEndpointTeam + idLions);
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was successful.`);
                console.log(teamLions.data);
                firstStat.innerText=teamLions.data.teams[0].strTeam;
                secondStat.innerText=teamLions.data.teams[0].strStadiumLocation;
                thirdStat.innerText=teamLions.data.teams[0].strStadium;
                fourthStat.innerText=`Last in the NFC North (nfl.com)`;
                fifthStat.innerText=`It's a toss up.`;
                betterBecause.innerText= `The ${idLions} are worse than the Chicago Bears. That's pretty bad.`;
                teamNameRight.src = teamLions.data.teams[0].strTeamLogo;
             } catch (err) {
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was NOT successful.`);
                console.log(err);
             }
        }
        getTeam();
})
const idColts = `Indianapolis Colts`;
const goColts = document.querySelector(`#click-colts`);
goColts.addEventListener(`click`, () => {
        getTeam = async () => {
            try {
                const teamColts = await axios.get(fullEndpointTeam + idColts);
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was successful.`);
                console.log(teamColts.data);
                firstStat.innerText=teamColts.data.teams[0].strTeam;
                secondStat.innerText=teamColts.data.teams[0].strStadiumLocation;
                thirdStat.innerText=teamColts.data.teams[0].strStadium;
                fourthStat.innerText=`Second in the AFC South (nfl.com)`;
                fourthStat.innerText=`Likely`;
                betterBecause.innerText= `The ${idColts} are better than the Chicago Bears.`;
                teamNameRight.src = teamColts.data.teams[0].strTeamLogo;
             } catch (err) {
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was NOT successful.`);
                console.log(err);
             }
        }
        getTeam();
})
const idEagles = `Philadelphia Eagles`;
const goEagles = document.querySelector(`#click-eagles`);
goEagles.addEventListener(`click`, () => {
        getTeam = async () => {
            try {
                const teamEagles = await axios.get(fullEndpointTeam + idEagles);
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was successful.`);
                console.log(teamEagles.data);
                firstStat.innerText=teamEagles.data.teams[0].strTeam;
                secondStat.innerText=teamEagles.data.teams[0].strStadiumLocation;
                thirdStat.innerText=teamEagles.data.teams[0].strStadium;
                fourthStat.innerText=`Second in the NFC East (nfl.com)`;
                fifthStat.innerText=`Likely`;
                betterBecause.innerText= `The ${idEagles} are better than the Chicago Bears.`;
                teamNameRight.src = teamEagles.data.teams[0].strTeamLogo;
             } catch (err) {
                console.log(`Axios Team retrieval from THESPORTSDB.COM API was NOT successful.`);
                console.log(err);
             }
        }
        getTeam();
})