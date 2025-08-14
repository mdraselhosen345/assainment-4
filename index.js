//---------01----------

//  function totalFine(fare){
//      if(typeof fare !== "number" || fare <= 0){
//          return "Invalid";
//      }
//     const fine = fare + fare * (20 / 100)+30; 
//     return fine;
//  }

//------------02-----------


// function onlyCharacter(str){
//         if(typeof str !== "string") return "Invalid"; 
//         return str.replace(/\s+/g, "").toUpperCase();
        
// }

//------------03-----------

// function bestTeam(player1, player2){
//     if(typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null){
//         return "Invalid";
//     }
//     const score1 = player1.foul + player1.cardYellow + player1.cardRed;
//     const score2 = player2.foul + player2.cardYellow + player2.cardRed;
     
//     if(player1 < player2){
//         return player1.name;
//     }else if(player2 < player1){
//         return player2.name;
//     }else{
//         return "Tie";
//     }
// }
//  const player1 = {name: "player1", foul: 4, cardYellow: 5,cardRed: 0};
//  const player2 = {name: "player2", foul: 3, cardYellow: 1,cardRed: 1};
//  console.log(bestTeam(player1, player2));
   

function bestTeam(teamA, teamB) {
  // Check if both inputs are valid objects
  if (typeof teamA !== 'object' || typeof teamB !== 'object' || teamA === null || teamB === null) {
    return "Invalid";
  }

  // Calculate total violations for each team
  const totalA = teamA.foul + teamA.cardY + teamA.cardR;
  const totalB = teamB.foul + teamB.cardY + teamB.cardR;

  // Compare and return result
  if (totalA < totalB) {
    return teamA.name;
  } else if (totalB < totalA) {
    return teamB.name;
  } else {
    return "Tie";
  }
}
const player1 = {name: "player1", foul: 4, cardYellow: 5,cardRed: 0};
const player2 = {name: "player2", foul: 3, cardYellow: 1,cardRed: 5};
console.log(bestTeam(player1, player2));