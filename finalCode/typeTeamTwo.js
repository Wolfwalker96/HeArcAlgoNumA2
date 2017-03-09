function TeamTwo(){
	this.sgn = 0;
	this.exp = new Array(9);
	this.mant = new Array(27);
	let num = 0;
	
	this.add = function (num) {	//t1.add(t2) -> t1 += t2
		return num;
	}
	this.sub = function(num){	//t1.sub(t2) -> t1 -= t2
		return num;
	}
	this.numeric = function(){
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
}