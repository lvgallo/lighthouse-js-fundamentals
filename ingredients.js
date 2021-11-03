const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0; // where to start
while ( i < ingredients.length) { //where to stop
console.log(ingredients[i]);
i++; // how to get to the next element
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length ; i++){ //(start; stop; next
console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reversed = ingredients.reverse();
for (var i = 0; i < reversed.length ; i++){
console.log(reversed[i]);
}

