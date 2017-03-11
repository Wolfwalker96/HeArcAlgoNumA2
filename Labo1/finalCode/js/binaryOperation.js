/*
	Pseudo binary operations with arrays
	"using two's complement"
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Marc Friedli
	Paul Ami Jean-Bourquin
	Florian Fasmeyer
*/ 
function numToBin(num, nbBit){
	let array = [nbBit];
	for(var i= nbBit-1; i>=0;i--){
		let pow= Math.pow(2,i);
		if(num>=pow){
			num-=pow;
			array[i]=1;
		}
		else{
			array[i]=0;
		}
	}
	return array;
}
function binLSR(array){	//Logic Slide Right
	array.unshift(0);
	array.pop();
}
function binLSL(array){	//Logic Slide Right
	array.push(0);
	array.shift();
}
function binAdd(arrayA,arrayB){ //only if array are same length! Because lazy!
	let xOR = 0;				//EXCEPTION: does return an array!
	let carry = 0;
	let mArryMe = Array(Array.length);
	if(arrayA.length === arrayB.length){
		for(i=arrayA.length-1; i>=0; i--){
			xOR = arrayA[i] ^ arrayB[i];
			mArryMe[i] = xOR ^ carry;
			carry = arrayA[i] & arrayB[i];
		}
	}
}
function binInc(array){		//increment 'array' by 1
	for(let i=array.length-1; i>=0; i--){
		if(array[i]===1)
			array[i]=0;
		else{
			array[i]=1;
			break;
		}
	}
}
function binNegative(array){ //output the opposit: 1 -> (-1)
	binNot(array);
	binInc(array);	
}
function binNot(array){			//logic NOT gate
	for(let i=0; i<array.length; i++){
		if(array[i]===1){
			array[i]=0;
		}
		else{
			array[i]=1;
		}
	}
}

