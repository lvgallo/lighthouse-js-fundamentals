//for loops

/* 
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:"); // it will print only this introductory sentence
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]); // do not forget the array and [i], to list all elements
}
*/

// while loops
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}
