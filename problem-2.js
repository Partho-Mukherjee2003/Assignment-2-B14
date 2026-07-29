function isElevatorSafe(weights) {
  let totalWeight = 0;
  if (Array.isArray(weights)){
    for (let weight of weights) {
      totalWeight += weight;
    }

    if (totalWeight <= 400 ){
      return"true"

    }
    else return"false"
  }
  else return"Invalid";

}

let result1 = isElevatorSafe([60, 75, 50]);
console.log(result1);
let result2 = isElevatorSafe([90, 100, 95, 120]);
console.log(result2);
let result3 = isElevatorSafe("60,75,50");
console.log(result3);
let result4 = isElevatorSafe([400]);
console.log(result4);
