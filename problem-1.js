
function matchWinner(teamAGoals, teamBGoals) {
  if (
    typeof teamAGoals !== "number" ||
    typeof teamBGoals !== "number" ||
    Number.isNaN(teamAGoals) ||
    Number.isNaN(teamBGoals)) {
    return "Invalid";
  } else {
    if (teamAGoals > teamBGoals) {
      return "Team A Won";
    } else if (teamBGoals > teamAGoals) {
      return "Team B Won";
    } else {
      return "Draw";
    }
  }

}
let result1 = matchWinner(3, 2);
console.log(result1);
let result2 = matchWinner(1, 4);
console.log(result2);
let result3 = matchWinner(2, 2);
console.log(result3);
let result4 = matchWinner("3", 2);
console.log(result4);

