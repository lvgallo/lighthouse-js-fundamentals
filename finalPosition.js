

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
const finalPosition = function (moves) {
let startPosition = [0,0];
  for (var i = 0; i < moves.length ; i++) {
    if (moves[i] === 'north'){
  	startPosition[1] = startPosition[1] + 1
  	} else if (moves[i] === 'west'){
    startPosition[0] = startPosition[0] - 1
    } else if (moves[i] === 'east'){
  	   startPosition[0] = startPosition[0] + 1
  	   }
  }
return startPosition
}

console.log(finalPosition(moves));

