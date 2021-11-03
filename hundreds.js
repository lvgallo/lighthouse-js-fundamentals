const howManyHundreds = function (bottles) {
  const hundreds = (bottles / 100);//before if statement... hundreds is valid for both conditions
  if (bottles % 100 === 0){
    return hundreds;
  } else {
    return (Math.floor(hundreds)); //Math.floor numero inteiro de um decimal
  }
}
console.log(howManyHundreds(1050));
