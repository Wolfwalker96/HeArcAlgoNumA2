function TeamTwo(){
	//VARIABLES
	this.sgn = 0;
	this.exp = [9];
	this.mant = [27];

	//MAIN FUNC
	this.add = function(){
		//teammTwo + teammTwo
	}

	this.returnNumber = function(){
		//Retourne la valeur du float
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

function returnBinryMantisse(mantisse){
	let i=0;
	let stop = false;
	let denominator;
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
		number*=-1;
	}
	else{
		signe=0;
	}

	//Calcule l'exposant et la mantisse (sous forme décimale)
	var logTwo = Math.log2(number);
	let exposant = Math.floor(logTwo)+1;
	let mantisse = number/Math.pow(2,exposant);

	//convertit en tableau de pseudo-bits
	returnBinryMantisse(mantisse);
	returnBinaryExp(exposant);

	var dumb = new TeamTwo();
	dumb.setSgn(signe);
	dumb.setFrac(binaryMantisse);
	dumb.setExp(binaryExposant);
	//Affiche pour debug
	//document.getElementById("debug").innerHTML="Le nombre peut s'écrire comme étant 2^"+exposant+" * "+mantisse;
	return dumb;
}

function convertDeciBin(nombre){
	//let number = prompt("nbre ?");
	var samere = equal(nombre.value);
	samere.displayBasic("convertDeciBinAnswer");
}
