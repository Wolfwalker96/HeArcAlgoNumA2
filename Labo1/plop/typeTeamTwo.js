function TeamTwo(){
	this.sgn = 0;
	this.exp = new Array(9);
	this.mant = new Array(27);
	
	this.isZero = function(){
		if( filledArray(this.exp, 0) === 1 &&
			filledArray(this.mant, 0)=== 1)
			return 1;
		else
			return 0;
	}
	this.isNaN = function(){
		if( filledArray(this.exp, 1) === 1 &&
			filledArray(this.mant, 0)!== 1)
			return 1;
		else
			return 0;
	}
	this.isInf = function(){
		if( filledArray(this.exp, 1) === 1 &&
			filledArray(this.mant, 0)=== 1)
			return 1;
		else
			return 0;
	}
}