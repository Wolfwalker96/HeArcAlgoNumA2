/*
	type 'TeamTwo', pseudo float using tables
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Marc Friedli
	Paul Ami Jeanbourquin
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
	
	/*
	equ(numeric), init(sgn, exp, mant), 
	add(teamTwo), sub(TeamTwo), getNumeric()
	*/
	this.equ = function (num){ //t1 = new TeamTwo(); t1.equ(-2E+10);
		if(isNaN(num)){
			fill(this.exp, 1);
			fill(this.mant, 1);
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
	this.init = function(sign, expo, mantis){//manual init
		this.setSgn(sign);
		this.setExp(expo);
		this.setMant(mantis);
	}
	this.add = function (num){	//t1.add(t2) -> t1 += t2
		//this.equ(this.getNumeric()+num.getNumeric());
		if(this.isNaN() || num.isNaN()){ //NaN CHECK!
			fill(this.exp, 1);	//this become a NaN
			fill(this.mant, 1);
			return NaN;
		}
		
		if(this.isZero())	//Zero CHECK!
			if(num.isZero()){
				if(this.sgn === num.sgn)	// (-0)+(-0)=(-0)			
					return this.sgn;
				else{
					this.sgn = 0;
					return 0;
				}
			}
			else{ 				// 0 + n = n ; this <= num
				this.init(+0 , num.getExp(), num.getMant());
				return num.getNumeric();
			}
		else if(num.isZero())	//n + 0 = n ; nothing...
			return this.getNumeric();
			
		if(this.isInf())	//Infinity CHECK!
			if(num.isInf())
				if(this.sgn === num.sgn)	//+Inf + (-Inf) = NaN
					return this.getNumeric();	 
				else{
					fill(this.mant, 1); //POMF! =3 became a NaN
					return NaN;
				}
			else
				return this.getNumeric();
		else
			if(num.isInf()){
				this.init(num.getSgn(), num.getExp(), num.getMant());
				return num.getNumeric();
			}
			
		return this.addSimple(num);
	}
	this.sub = function(num){	//t1.sub(t2) -> t1.add(-t2)
		let namae = new TeamTwo;
		namae.init(0, num.getExp(), num.getMant());

		if(num.getSgn() === 1)
			namae.setSgn(0);
		else
			namae.setSgn(1);
		return this.add(namae);
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
			if(this.mant[i]==1){
				mantisse+=1/Math.pow(2,i+2);
			}
		}
		number = Math.pow(2,exposant)*mantisse;
		if(this.sgn==1){number*=-1;}
		
		return Number(number).toFixed(8);
	}
	this.addSimple = function(num){	//not so simple...
		let alpha = new TeamTwo;	//used in this.add(num)
		let beta = new TeamTwo;
		
		alpha.init(this.getSgn(), this.getExp(), this.getMant());
		beta.init(num.getSgn(), num.getExp(), num.getMant());
		
		let expThis = alpha.getExp();
		let expNum  = beta.getExp();
		
		expThis.unshift(0);
		expNum.unshift(0);
		binNegative(expNum);
		
		let big;
		let small;
		//Who has the biggest expo?
		diff = binAdd( expThis, expNum );
		if(diff[1] === 1){	//if expNum > expThis
			big = beta;
			small = alpha;
			binNegative(diff) //gives us the binary difference
		}
		else{
			big = alpha;
			small = beta;
		}
		
		//1. Set the negaFlag!
			//we only need change if both aren't the same sgn
		let negaFlag = 0;		
		if(big.getSgn() !== small.getSgn()){
			negaFlag = 1;
		}
		//2. add hidden bit + positiver/overflow
		big.mant.unshift(1);	//add hidden bit
		big.mant.unshift(0);	//add space for addition and set positive for negation
		small.mant.unshift(1);
		small.mant.unshift(0);
		
		//3. shift mantissa. To add for same exponant: 2^(exp-diff)
		let zero = new Array(diff.length);
		fill(zero, 0);
		for(let i=0; (binEqu(zero, diff) === 0) ; i++){
			if(i > big.mant.length-1){
				fill(small.mant,0); //if not significant -> trash!
				break;
			}
			small.mant.unshift(0);
			big.mant.push(0);
			binDec(diff);
		}
		
		//4. if negaFlag, negative number -> binNegate(num)
		if(negaFlag === 1)
			if(big.sgn === 1)
				binNegative(big.mant);
			else
				binNegative(small.mant);
		
		//5. add mantissa
		let tempArray = new Array(big.mant.length);
		tempArray = binAdd(big.mant, small.mant);
		
		//6. isZero?
		if( filledArray(tempArray, 0) === 1 ){
			fill(this.mant, 0);
			fill(this.exp, 0);
			this.sgn = 0;
			return 0;
		}
			
		//7. is mantissa negative? (positiver at step 2 === 1?)
		if( (negaFlag===1) && (tempArray[0]===1) ){
			binNegative(tempArray);
		}
		
		//Where does the mantissa starts?
		let expChange = 1; //exp change start at 1 because step 2 (positiver)
		for(let i=0; i<tempArray.length; i++){
			if(tempArray[0] == 0){
				tempArray.shift();
				expChange--;
			}
			else
				break;
		}
		
		//inc or dec; change expo to match new mantissa
		for(let i=0; tempArray[i] !==1; i++){
			expChange--;
		}
		for(let i=0; i<expChange; i++){
			binInc(big.exp);
		}
		for(let i=0; i>expChange; i--){
			binDec(big.exp);
		}
		
		this.setExp(big.exp);
		this.setMant(tempArray);//return tempArray, with hidden bit.
		return this.getNumeric();
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
		if(1/num < 0){	//special: 1/(-0) = -inf where -0 == 0
			this.sgn = 1;
			num *= -1;
		}
		else
			this.sgn = 0;
		//Exposant et mantisse d�cimal
		var logTwo = Math.log2(num); 				// Permet d'obtenir log2(number)
		let exposant = Math.floor(logTwo)+1; 		// exposant = arrondiSup(log2(number))
		let mantisse = num/Math.pow(2,exposant);	// mantisse = number/exposant^2
		
		this.constructExp(exposant);
		this.constructMant(mantisse);
		//document.write("</br>"+this.sgn+"</br>exp: " + this.exp + "</br>mant: "+this.mant);
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
		fill(array, 0);
		while(mantisse>0 && i<28){	
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
		array.shift();	//delet hidden bit = 0.5
		this.mant = array;
	}
	
	this.setSgn = function(signe){
		if(signe==1 || signe==-1)		  //never trust an human being!
			this.sgn = 1;					//-1 cool exception! ;)
		else
			this.sgn = 0;
	}
	this.setExp = function(expo){
		for(let i=0;i<9;i++){
			if(expo[i] == 1)			//ensure to have zero if empty array
				this.exp[i] = 1;			// so 1001 -> 100100000 'faster, easy'
			else
				this.exp[i] = 0;
		}
	}
	this.setMant = function(mantisse){
		/* 	if you use init(sgn,exp,mant), USE this.getMant(), it will
			return a 28 bits array, not 'this.mant' wich is 27 bits.*/
		for(let i=1;i<28;i++){
			if(mantisse[i] == 1)
				this.mant[i-1]= 1;
			else
				this.mant[i-1] = 0;
		}
	}

	this.getSgn = function(){
		if(this.sgn === 1)
			return 1;
		else
			return 0;
	}
	this.getExp = function(){
		let array = this.exp.slice();
		return array;
	}
	this.getMant = function(){ // return 27+(hidden bit)=28. Never alterate data!
		let twist = new Array(28);	
		twist[0] = 1;
		for(let i=0; i<this.mant.length; i++){
			twist[i+1] = this.mant[i];
		}
		return twist;
	}
	this.displayBasic = function(id){
		document.getElementById(id).innerHTML=(this.getSgn() + "<br/>" + this.getExp() + "<br/>" + this.getMant() + "</br>");
	}
	this.displayNumeric = function(id){
		document.getElementById(id).innerHTML=("Value: " + this.getNumeric() +"</br>");
	}
}