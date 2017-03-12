/*
	main page, created to demonstrate the practicality
	of the TeamTwo type while being used for labo1.html
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 10.03.2017
	
	Marc Friedli
	Paul Ami Jeanbourquin
	Florian Fasmeyer
*/ 
function displayDecToBin(num){	//display the result
	let value = new TeamTwo;
	value.equ(Number(num.value));
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
	value.equ(Number(one.value));
	otherValue.equ(Number(two.value));
	
	value.add(otherValue);
	
	value.displayBasic("addAnswerBin");
	value.displayNumeric("addAnswerDeci");
}
function PI(){
	let limite = 5;
	let value = new TeamTwo;
	value.equ(0);
	let temp = new TeamTwo;
	value.equ(0);
	
	for(let n=0; n<limite; n++){
		temp.equ( 
			(4/(8*n + 1) - 2/(8*n + 4) - 1/(8*n + 5) - 1/(8*n +6)) 
			* Math.pow(1/16,n)
		);
		value.add(temp);
	}
	value.displayBasic("piBin");
	value.displayNumeric("piDec");
}
