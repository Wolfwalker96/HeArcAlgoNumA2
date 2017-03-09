function TeamTwo(){
	//VARIABLES
	this.sgn = 0;
	this.exp = new Array(9);
	this.mant = new Array(27);

	//MAIN FUNC
	this.add = function(){
		//teammTwo + teammTwo
	}
	//CHECK EXCEPTIONS NUMERIQUES
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

	//Retourne le TeamTwo sous forme décimale.
	this.returnNumber = function(id){
		let number;
		if(this.isZero())
			number = 0;	//pas de -0, pose problèmes
		else if(this.isNaN())
			number = "NaN";
		else if(this.isInf()){
			if(this.sgn === 1)
				number = '-INF';
			else
				number = 'INF';
		}
		else{
			let exposant, mantisse, temp, i;
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
		}
		document.getElementById(id).innerHTML="Le nombre vaut : "+number;
	}
	//UTILITY
	this.displayBasic = function(id){
		document.getElementById(id).innerHTML=(this.sgn + " <br/> " + this.exp + "<br/>  " + this.mant);
	}

	//SETTER//GETTER
	this.setSgn = function(signe){
		this.sgn = signe;
	}
	this.setExp = function(expo){
		this.exp = expo;
	}
	this.setFrac = function(fraction){
		for(let i=1;i<28;i++){
			this.mant[i-1]=fraction[i];
		}
	}

	this.getSgn = function(){
		return this.sgn;
	}
	this.getExp = function(){
		return this.exp;
	}
	this.getFrac = function(){
		return this.mant;
	}
}

/* Déclaration des variables */
var binaryMantisse=[28];
var binaryNumber = [37];
var binaryExposant=[9];
var signe;

// Cast un décimal en nombre binaire
function castToBinary(nbrBits, deciNumber){
	let binaryArray = [nbrBits];
	for(var i= nbrBits-1; i>=0;i--){
		let pow= Math.pow(2,i);
		if(deciNumber>=pow){
			deciNumber-=pow;
			binaryArray[i]=1;
		}
		else{
			binaryArray[i]=0;
		}
	}
	return binaryArray;
}

function UbinToDec(array, nbBits){
		alert("je suis ici ! "+array);
		let number=0;
		let i;
		for(i=0;i<nbBits;i++){
			if(array[i]==1)
				number+=Math.pow(2,nbBits-1-i);
		}
		return number;
	}

function returnBinryMantisse(mantisse){
	let i=0;
	let stop = false;
	let denominator;
	/*
	 *	tant que mantisse > 0 et qu'il reste debit faire :
	 *		dénominateur = (i+1)^2
	 *		si 1/dénominateur <= mantisse alors :
	 *			mettre le bit i à 1
	 *			mantisse = mantisse - 1/denominateur
	 *		sinon :
	 *			mettre le bit i à 0
	 */
	while(mantisse>0 || i<28){
		denominator = Math.pow(2,i+1);
		if(1/denominator<=mantisse){
			binaryMantisse[i]=1;
			mantisse-=1/denominator;
		}
		else{
			binaryMantisse[i]=0;
		}
		i++;
	}
}

function returnBinaryExp(exposant){
	let realExp = 255+exposant;
	binaryExposant = castToBinary(9,realExp);
	binaryExposant.reverse();
}

function equal(number){
	//Détermine le bit du signe
	if(number<0){
		signe=1;
		number*=-1; // une fois le signe traité on utilise sa valeur absolue
	}
	else{
		signe=0;
	}

	//Calcule l'exposant et la mantisse (sous forme décimale)
	var logTwo = Math.log2(number); // Permet d'obtenir log2(number)
	let exposant = Math.floor(logTwo)+1; // exposant = arrondiSup(log2(number))
	let mantisse = number/Math.pow(2,exposant);  // mantisse = number/exposant^2

	//convertit en tableau de pseudo-bits
	returnBinryMantisse(mantisse); 	// transforme sous forme binaire
	returnBinaryExp(exposant); 			// transforme sous forme binaire

	var dumb = new TeamTwo(); // Crée un float sur 37bits
	dumb.setSgn(signe);
	dumb.setFrac(binaryMantisse);
	dumb.setExp(binaryExposant);
	//Affiche pour debug
	//document.getElementById("debug").innerHTML="Le nombre peut s'écrire comme étant 2^"+exposant+" * "+mantisse;
	return dumb;
}

function convertDeciBin(nombre){
	let myNumber = equal(nombre.value);
	myNumber.displayBasic("convertDeciBinAnswerBin");
	myNumber.returnNumber("convertDeciBinAnswerDeci");
}

//Reçoit en argument le code binaire du signe, de l'exposant et de la mantisse et les placent dans un TeamTwo
function convertBinDeci(signe, expo, mantisse){
	let myNumber = new TeamTwo();
	myNumber.setSgn(signe.value);
	myNumber.setExp(expo.value);
	myNumber.setFrac(mantisse.value);
	myNumber.displayBasic("convertBinDeciAnswerBin");
	myNumber.returnNumber("convertBinDeciAnswerDeci");
}

function add(number1, number2){
	//this = number1
	let firstNumber = equal(number1.value);
	let secondNumber = equal(number2.value);
	let thirdNumber = new TeamTwo();
	//alert("Samere !"+firstNumber.getSgn()+" "+secondNumber.getSgn());
	let firstExp = UbinToDec(firstNumber.getExp(),9);
	let secondExp = UbinToDec(secondNumber.getExp(),9);
	let bigMant, smallMant;

	let expDiff = firstExp - secondExp;
	alert("1 : "+firstExp+" .2 : "+secondExp +" = "+expDiff);
	if(expDiff >= 0){
		thirdNumber.setSgn(firstNumber.getSgn());
		thirdNumber.setExp(firstNumber.getExp());
		bigMant = firstNumber.getFrac();
		smallMant = secondNumber.getFrac();
	}
	else{
		thirdNumber.setSgn(secondNumber.getSgn());
		thirdNumber.setExp(secondNumber.getExp());
		bigMant = secondNumber.getFrac();
		smallMant = firstNumber.getFrac();
	};
	bigMant.unshift(1);
	//bigMant[0]=1;
	smallMant.unshift(1);
	//smallMant[0]=1;
	for(let i=0; i<expDiff; i++){
		smallMant.unshift(0);
		smallMant.pop();
	}
	let xOR;
	let retenue=0;
	let newMant = [];
	for(let i=27; i>=0; i--){
		xOR 	= 	bigMant[i] ^ smallMant[i];
		newMant[i] = xOR^retenue;
		retenue = 	bigMant[i] & smallMant[i];
	}
	if(retenue == 1){
		newMant.unshift(1);
		newMant.pop();
	}
	thirdNumber.setFrac(newMant);
	alert("Samere !");
	thirdNumber.displayBasic("addAnswerBin");
	thirdNumber.returnNumber("addAnswerDeci");
}

//UTILISE POUR "CHECK EXCEPTIONS NUMERIC
function filledArray(array, value){
	for(let i=0; i<array.length; i++){
		if(array[i] !== value){
			return 0;
		}
	}
	return 1;
}

function fill(array, value){
	for (let i=0; i<array.length; i++) {
		array[i] = value;
	}
	return array;	//not required
}
