/*
	Simple array operations
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Marc Friedli
	Paul Ami Jeanbourquin
	Florian Fasmeyer
*/ 
function filledArray(array, value){	//If 'array' filled with 'value' return 1
	for(let i=0; i<array.length; i++){
		if(array[i] !== value){
			return 0;
		}
	}
	return 1;
}
function fill(array, value){		//Fill 'array' with 'value'
	for (let i=0; i<array.length; i++) {
		array[i] = value;
	}
	return array;	//not required
}