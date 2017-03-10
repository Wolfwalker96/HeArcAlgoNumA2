/*
	type 'TeamTwo', pseudo float using tables
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Marc Friedli
	Paul Ami Jean-Bourquin
	Florian Fasmeyer
	
	note: We decided not to use the typedArray objects
	as with more than 32bits there is only 'Float64Array'
	a floating point. We would have to use concatenated
	'Uint32Array' + 'Uint8Array' or 5X 'Uint8Array' in
	order to make a proper (real) floating variable.
*/ 
function TeamTwo(){
	this.sgn = 0;
	this.exp = new Array(9);
	this.mant = new Array(27);
	
	//equ(numeric), add(teamTwo), sub(TeamTwo), getNumeric()
	this.equ = function (num){ //t1 = new TeamTwo() 
								//t1.equ(-2E+10)
		if(isNaN(num)){
			fill(this.exp, 1);
			this.mant[0] = 1;
		}
		else if(num === Infinity){
			this.sgn = 0;
			fill(this.exp, 1);
			fill(this.mant, 0);
		}
		else if(num === -Infinity){
			this.sgn = 1;
			fill(this.exp, 1);
			fill(this.mant, 0);
		}
		else
			this.construct(num);
	}
	this.add = function (num) {	//t1.add(t2) -> t1 += t2
		return num;//in process...
	}
	this.sub = function(num){	//t1.sub(t2) -> t1 -= t2
		return num;//in process...
	}
	this.getNumeric = function(){//return a numerical value
		if(this.isZero()){			//check for special states
			if(this.sgn === 1)	return -0;
			else				return 0;
		}
		else if(this.isNaN())	return NaN;
		
		else if(this.isInf()){
			if(this.sgn === 1)	return -Infinity;
			else				return Infinity;	
		}
		else{
			return this.numeric();
		}
	}
	
	//Utility----------------------------------------------------
	this.numeric = function(){	//used in 'getNumeric()'
		let number, exposant, mantisse, temp, i;
		temp = 0;
		for(i=0;i<9;i++){
			if(this.exp[i]==1){temp+=Math.pow(2,8-i);}
		}
		exposant=temp-255;
		mantisse=0.5;
		for(i=0;i<27;i++){
			if(this.mant[i]==1){mantisse+=1/Math.pow(2,i+2);}
		}
		number = Math.pow(2,exposant)*mantisse;
		if(this.sgn==1){number*=-1;}
		return number;
	}
	this.isZero = function(){	//return 1 if this = 0
		return( filledArray(this.exp, 0) === 1 &&
				filledArray(this.mant, 0)=== 1);
	}
	this.isNaN = function(){	//return 1 if this = NaN
		return( filledArray(this.exp, 1) === 1 &&
				filledArray(this.mant, 0)!== 1);
	}
	this.isInf = function(){	//return 1 if this = +-Inf
		return( filledArray(this.exp, 1) === 1 &&
				filledArray(this.mant, 0)=== 1);
	}
	this.construct = function(num){	//used in 'equ(num)'
		this.sgn = 0;
		if(1/num < 0){
			this.sgn = 1;
			num *= -1;
		}			
		//Exposant et mantisse décimal
		var logTwo = Math.log2(num); 				// Permet d'obtenir log2(number)
		let exposant = Math.floor(logTwo)+1; 		// exposant = arrondiSup(log2(number))
		let mantisse = num/Math.pow(2,exposant);	// mantisse = number/exposant^2
		
		this.constructExp(exposant);
		this.constructMant(mantisse);
		document.write("</br>"+this.sgn+"</br>exp: " + this.exp + "</br>mant: "+this.mant);
	}
	this.constructExp = function (exposant){//used in 'construct'
		let realExp = 255+exposant;	
		this.exp = numToBin(realExp, 9);
		this.exp.reverse();
	}
	this.constructMant = function(mantisse){// used in 'construct'
		let i=0;
		let stop = false;
		let denominator, array = new Array(28); //with hidden bit
		while(mantisse>0 || i<28){	
			denominator = Math.pow(2,i+1);
			if(1/denominator<=mantisse){
				array[i]=1;
				mantisse-=1/denominator;
			}
			else{
				array[i]=0;
			}
			i++;
		}
		array.shift();	//hidden bit 0.5
		this.mant = array;
	}
}