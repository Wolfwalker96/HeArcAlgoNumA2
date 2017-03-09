/*
<script src="binaryOperation.js" ></script>
	Pseudo binary operations with arrays
	"using two's complement"
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Marc Friedli
	Paul Ami Jean-Bourquin
	Florian Fasmeyer
*/ 
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
function binNegative(array){		//output the opposit: 1 -> (-1)
	binNot(array);
	array[0] *= -1;
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

