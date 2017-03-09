function TeamTwo(){
	this.sgn = 0;
	this.exp = new Array(9);
	this.mant = new Array(27);
	
	this.isZero = function(){
		return( filledArray(this.exp, 0) === 1 &&
				filledArray(this.mant, 0)=== 1);
	}
	this.isNaN = function(){
		return( filledArray(this.exp, 1) === 1 &&
				filledArray(this.mant, 0)!== 1);
	}
	this.isInf = function(){
		return( filledArray(this.exp, 1) === 1 &&
				filledArray(this.mant, 0)=== 1);
	}
	this.getNumeric = function(){
		if(this.isZero())
			return 0;	//pas de -0, pose problèmes
		else if(this.isNaN())
			return "NaN";
		else if(this.isInf()){
			if(this.sgn === 1)
				return '-INF';
			else
				return 'INF';
		}
		else{
			//return (Une fonction qui retourne en numérique);
		}
	}
}