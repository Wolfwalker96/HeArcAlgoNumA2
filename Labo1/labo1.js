/* Déclaration des variables */
var mantisse;
var exposant;
var binaryNumber = [37]

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

//Fonction qui cast le nombre sous sa forme binaire
function returnBinaryFloatNumber(){
	mantisse*=1000000;
	var binaryMantisse = castToBinary(28,mantisse);
	var binaryExposant = castToBinary(9,exposant);
	binaryMantisse.reverse();
	binaryExposant.reverse();
	var i;
	for(i = 0; i<9;i++){
		binaryNumber[i+1] = binaryExposant[i];
	}
	for(i=1;i<28;i++){
		binaryNumber[i+9] = binaryMantisse[i];
	}
	document.getElementById("Anser").innerHTML=binaryNumber;
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
	mantisse = number/Math.pow(2,exposant);

	returnBinaryFloatNumber();
	document.getElementById("Decimal").innerHTML="Le nombre peut s'écrire comme étant 2^"+exposant+" * "+mantisse;
}
