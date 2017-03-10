/*
	main page, created to demonstrate the practicality
	of the TeamTwo type while being used for labo1.html
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 10.03.2017
	
	Marc Friedli
	Paul Ami Jean-Bourquin
	Florian Fasmeyer
*/ 
function displayDecToBin(num){	//display the result
	let value = new TeamTwo;
	value.equ(num.value);
	value.displayBasic("convertDeciBinAnswerBin");
	value.displayNumeric("convertDeciBinAnswerDeci");
}
function displayBinToDec(signeEntry, expoEntry, mantisseEntry){
	let value = new TeamTwo;
	value.init(signeEntry.value, expoEntry.value, mantisseEntry.value);
	value.displayBasic("convertBinDeciAnswerBin");
	value.displayNumeric("convertBinDeciAnswerDeci");
}
function displayAdd(one, two){
	let value = new TeamTwo;
	let otherValue = new TeamTwo;
	value.equ(one.value);
	otherValue.equ(two.value);
	
	value.add(teamTwo);
	
	value.displayBasic("addAnswerBin");
	value.displayNumeric("addAnswerDeci");
}
