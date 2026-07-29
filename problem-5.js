function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
    return "Invalid";
  }
  else{
    let totalTime = 0;
    for (let time of times ){
      if(typeof time !== "number"){
        return "Invalid"
      }
      else{
        totalTime += time
      }
    }
  return totalTime / times.length;
  }
}

let result1 = averageResponseTime([120, 200, 150, 130]);
let result2 = averageResponseTime([100, 100]);
let result3 = averageResponseTime([]);
let result4 = averageResponseTime("logs");
let result5 = averageResponseTime([120, "200", 150]);
console.log(result1,result2,result3,result4,result5)
