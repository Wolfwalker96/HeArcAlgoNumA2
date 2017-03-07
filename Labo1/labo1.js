function TeamTwo(){
	//VARIABLES
	this.sgn = 0;
	this.exp = [9];
	this.mant = [27];

	//MAIN FUNC
	this.add = function(){
		//teammTwo + teammTwo
	}

	//UTILITY
	this.displayBasic = function(id){
		document.getElementById(id).innerHTML=(this.sgn + " " + this.exp + " " + this.mant);
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
		//this.mant = fraction;
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
//struc samere{
var binaryMantisse=[28];
var binaryNumber = [37];
var binaryExposant=[9];
var signe;
//}

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
	//document.getElementById("debug").innerHTML=binaryMantisse;
}

//Fonction qui cast le nombre sous sa forme binaire
function returnBinaryExp(exposant){
	binaryExposant = castToBinary(9,exposant);
	binaryExposant.reverse();
}

function determineExposantAndMantisse(){
	let number=parseFloat(prompt("Nbre ?"));

	//Détermine le bit du signe
	if(number<0){
		signe=1;
		number*=-1;
	}
	else{
		signe=0;
	}

	//Calcule l'exposant (sous forme décimale)
	var logTwo = Math.log2(number);
	let exposant = Math.floor(logTwo)+1;

	//Calcule la mantisse (sous forme décimale)
	let mantisse = number/Math.pow(2,exposant);

	returnBinryMantisse(mantisse);
	returnBinaryExp(exposant);

	var dumb = new TeamTwo();
	dumb.setSgn(signe);
	dumb.setFrac(binaryMantisse);
	dumb.setExp(binaryExposant);
	dumb.displayBasic("debug");
	//Affichage
	document.getElementById("Decimal").innerHTML="Le nombre peut s'écrire comme étant 2^"+exposant+" * "+mantisse;
}
