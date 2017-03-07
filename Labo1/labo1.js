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
var exposant;
var binaryMantisse=[28];
var binaryNumber = [37];
var binaryExposant=[9];
//}

function castToBinary(nbrBits, deciNumber){
	var binaryArray = [nbrBits];
	for(var i= nbrBits-1; i>=0;i--){
		var pow= Math.pow(2,i);
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
			//alert(1/denominator + " " + i);
		}
		else{
			binaryMantisse[i]=0;
		}
		i++;
	}
	//document.getElementById("debug").innerHTML=binaryMantisse;
}

//Fonction qui cast le nombre sous sa forme binaire
function returnBinaryFloatNumber(){
	binaryExposant = castToBinary(9,exposant);
	binaryExposant.reverse();
	let i;
	for(i = 0; i<9;i++){
		binaryNumber[i+1] = binaryExposant[i];
	}
	for(i=1;i<28;i++){
		binaryNumber[i+9] = binaryMantisse[i];
	}
	//Affichage
	//document.getElementById("Anser").innerHTML=binaryNumber;
}

function determineExposantAndMantisse(){
	var number=parseFloat(prompt("Nbre ?"));

	//Détermine le bit du signe
	if(number<0){
		binaryNumber[0]=1;
		number*=-1;
	}
	else{
		binaryNumber[0]=0;
	}

	//Calcule l'exposant (sous forme décimale)
	var logTwo = Math.log2(number);
	exposant = Math.floor(logTwo)+1;

	//Calcule la mantisse (sous forme décimale)
	let mantisse = number/Math.pow(2,exposant);

	returnBinryMantisse(mantisse);
	returnBinaryFloatNumber();

	var dumb = new TeamTwo();
	dumb.setSgn(binaryNumber[0]);
	dumb.setFrac(binaryMantisse);
	dumb.setExp(binaryExposant);
	dumb.displayBasic("debug");
	//Affichage
	//document.getElementById("Decimal").innerHTML="Le nombre peut s'écrire comme étant 2^"+exposant+" * "+mantisse;
}

function floatAdd(){

}
