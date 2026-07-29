function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== 'number' || tokensUsed < 0 || Number.isNaN(tokensUsed)) {
    return'Invalid';
  }
  else{
    if (tokensUsed <= 500 )
      return 0
    else {
      let ChargerAvailableToken = tokensUsed - 500;
      let tokenCost = Math.floor(ChargerAvailableToken/100)
      return (tokenCost * 5)
    }
  }
}



let result1 = calculateAiCost();
console.log(result1);
let result2 = calculateAiCost(500);
console.log(result2);
let result3 = calculateAiCost(650);
console.log(result3);
let result4 = calculateAiCost(1000);
console.log(result4);
let result5 = calculateAiCost(-10);
console.log(result5);
let result6 = calculateAiCost("500");
console.log(result6);

