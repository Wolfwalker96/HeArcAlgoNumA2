/*
				<sgn 1>	<exp 9>	<mant 27>	info
	0 			0/1	 	0 		0
	NaN			0		1		X		X>0
	INF+		0		1		0
	INF-		1		1 		0

	-2			1 		(1)		0

TO DO							STATE
	teamTwo(nom de notre type)	done...
		affectation				done...
			dec					in process...
			bin					done...
		add						in process...
		equal					in process...
		setter/getter			in process...
	PI							in process...
*/
function pie(){

}

//class type
function teamTwo(){
	//VARIABLES
	this.sgn = 0;
	this.exp = 0;
	this.frac = 0;

	//MAIN FUNC
	this.expAndMant= function(){
		//find expo and mantiss
	}
	this.numericAdd = function(){
		//timTwo + float
	}
	this.Add = function(){
		//timTwo + timTwo
	}

	//UTILITY
	this.returnBinaryFloatNumber = function (){
	}
	this.castToBinary = function (){
	}
	this.displayBasic = function(){
		document.write(this.sgn + " " + this.exp + " " + this.frac);
	}

	//SETTER//GETTER
	this.setSgn = function(signe){
		this.sgn = signe;
	}
	this.setExp = function(expo){
		this.exp = expo;
	}
	this.setFrac = function(fraction){
		this.frac = fraction;
	}

	this.getSgn = function(){
		return this.sgn;
	}
	this.getExp = function(){
		return this.exp;
	}
	this.getFrac = function(){
		return this.frac;
	}
}



//Test area
var dumb = new teamTwo();
dumb.displayBasic();
//document.write("hello");





/*
Cas � tester
		-2 =					   -2 = 1 10000000 00000000000000000000000 =
	     0 =                        0 = 0 00000000 00000000000000000000000
        -0 =                       -0 = 1 00000000 00000000000000000000000
     0.125 =                    0.125 = 0 01111100 00000000000000000000000
      0.25 =                     0.25 = 0 01111101 00000000000000000000000
       0.5 =                      0.5 = 0 01111110 00000000000000000000000
         1 =                        1 = 0 01111111 00000000000000000000000
         2 =                        2 = 0 10000000 00000000000000000000000
         4 =                        4 = 0 10000001 00000000000000000000000
         8 =                        8 = 0 10000010 00000000000000000000000
     0.375 =                    0.375 = 0 01111101 10000000000000000000000
      0.75 =                     0.75 = 0 01111110 10000000000000000000000
       1.5 =                      1.5 = 0 01111111 10000000000000000000000
         3 =                        3 = 0 10000000 10000000000000000000000
         6 =                        6 = 0 10000001 10000000000000000000000
       0.1 =      0.10000000149011612 = 0 01111011 10011001100110011001101
       0.2 =      0.20000000298023224 = 0 01111100 10011001100110011001101
       0.4 =      0.40000000596046448 = 0 01111101 10011001100110011001101
       0.8 =      0.80000001192092896 = 0 01111110 10011001100110011001101
     1e+12 =             999999995904 = 0 10100110 11010001101010010100101
     1e+24 =   1.0000000138484279e+24 = 0 11001110 10100111100001000011100
     1e+36 =   9.9999996169031625e+35 = 0 11110110 10000001001011111001110
       inf =                      inf = 0 11111111 00000000000000000000000
      -inf =                     -inf = 1 11111111 00000000000000000000000
       nan =                      nan = 0 11111111 10000000000000000000000
*/
