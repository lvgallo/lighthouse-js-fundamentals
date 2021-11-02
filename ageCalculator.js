const ageSentence = function ageCalculator (name, yearOfBirth, currentYear) {
	const age =(currentYear - yearOfBirth);
	return (name +" is "+ age + " years old.");
}	
console.log(ageSentence("Suzie", 1983, 2015));
