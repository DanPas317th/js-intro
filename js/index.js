//task1

https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}

https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move (position, roll) {
    return position + roll * 2;
}

https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet (name, owner) {
  if(name===owner){
    return "Hello boss";
  }else{
    return "Hello guest";
  }
}

https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}

//task2

https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

//task3

https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
  const objectArr = [];
  for (const key in obj){
    if(key.length == 5) objectArr.push(key);
    if(obj[key].length == 5) {
      objectArr.push(obj[key]);
    }  
  }
  return objectArr;
}
