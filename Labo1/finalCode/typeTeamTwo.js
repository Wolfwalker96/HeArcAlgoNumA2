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
	
	this.add = function (num) {	//t1.add(t2) -> t1 += t2
		return num;//in process...
	}
	this.sub = function(num){	//t1.sub(t2) -> t1 -= t2
		return num;//in process...
	}
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
	this.construct = function(num){
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
		//convertit en tableau de pseudo-bits
		//returnBinryMantisse(mantisse); 	// transforme sous forme binaire
		//returnBinaryExp(exposant); 		// transforme sous forme binaire

	}
	this.constructExp = function (exposant){
		let realExp = 255+exposant;	
		this.exp = numToBin(realExp, 9);
		this.exp.reverse();
	}
	this.constructMant = function(mantisse){
		/*
		 *	tant que mantisse > 0 et qu'il reste debit faire :
		 *		dénominateur = (i+1)^2
		 *		si 1/dénominateur <= mantisse alors :
		 *			mettre le bit i à 1
		 *			mantisse = mantisse - 1/denominateur
		 *		sinon :
		 *			mettre le bit i à 0
		 */
		let i=0;
		let stop = false;
		let denominator, array=new Array(28);
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
		array.shift();
		this.mant = array;
	}
}