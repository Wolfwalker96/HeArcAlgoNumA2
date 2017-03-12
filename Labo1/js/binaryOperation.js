/*
	Pseudo binary operations with arrays
	"using two's complement"
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Marc Friedli
	Paul Ami Jeanbourquin
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
	return array; //just in case...
}
function binLSL(array){	//Logic Slide Right
	array.push(0);
	array.shift();
	return array; //just in case
}
function binEqu(arrayA, arrayB){ //equal?
	if(arrayA.length === arrayB.length){
		for(let i=0; i<arrayA.length; i++){
			if(arrayA[i] !== arrayB[i])
				return 0;
		}
		return 1;
	}
	alert("binEqu: arrays not of same length!");
}
function binBgt(arrayA, arrayB){ //A > B? (UNSIGNED)
	if(arrayA.length === arrayB.length){
		for(let i=0; i<arrayA.length; i++){
			if( arrayA[i] !== arrayB[i] && arrayA[i] === 1)
				return 1;
		}
		return 0;
	}
	alert("binBgt: arrays not of same length!");
	return -1;
}
function binAdd(arrayA, arrayB){ //only if array are same length! Because lazy!
	let xOR = 0;				
	let carry = 0;
	let mArryMe = new Array(arrayA.length);
	if(arrayA.length === arrayB.length){
		for(i=arrayA.length-1; i>=0; i--){
			xOR = arrayA[i] ^ arrayB[i];
			mArryMe[i] = xOR ^ carry;
			carry = ( (arrayA[i] & arrayB[i]) || (xOR & carry) );
		}	//note: this is pseudo binary. Would have been chicken easy with simple bytes
		return mArryMe;
	}
	alert("binAdd: arrayA.length !== arrayB.length");
	return -1;
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
	return array; //just in case
}
function binDec(array){	//decrement
	let minOne = new Array(array.length);
	fill(minOne, 1); //-1
	let temp = binAdd(array, minOne); //num + (-1) lazy ;D
	for(let i=0; i<temp.length; i++)	//pass réf
		array[i] = temp[i];
	return array; //just in case
}
function binNegative(array){ //output the opposit: 1 -> (-1)
	binNot(array);
	binInc(array);
	return array; //just in case, not needed
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
	return array; //just in case
}

