/*
 *   Numerical Algorithm - 5th Labo.
 *   (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer.
 *   02.05.2017
 */
/*
	READ ME
	La librairie math.js rend le code illisible. Je vous laisse cette
	copie au cas ou vous auriez l'urge de modifier du code. hf, gl.
	Je comptes aussi faire des tests d'opti voir si je trouve pas
	mieux que math.js, je vais avoir besoin de ce fichier.
*/


/*
	Simpson method(function, start, stop, nbStep) where start and stop
	are equal to 0 and 1 respectively. 	f:funciton 	n: nbStep
	
	WARNING: 'n' must be even!
*/	
function simpson(f, n){
	let h = 1/n; // Step size.
	
	let sum1=0;
	let sum2=0;
	let mult=0;

	for(let i=1; i<n; i=i+2){
		mult = h*i;
		sum1 += f(mult);
		sum2 += f(mult-h);
	}
	/*
		Note: we must replace f(1) by the values
		of f(b=1) wich is 1/2. Made for optimisation purposes.
	*/
	return ( (h/3) * ( -0.5 + 4*sum1 + 2*sum2) );
}

/*
	Replacer le return par la fonction(fait)
*/
function integral(x){
	return 1/(1+x*x);
}
/*
	Using "High Resolution Time API".
	https://www.sitepoint.com/discovering-the-high-resolution-time-api/
	*/
function evaluateTime(){

	let temp;
	let Pi = 3.14159265358979323;
	
	let avgTime=0;
	let n=10000;
	for(let me=0; me <n; me++){
		//start timer
		let timer = performance.now();
		//run
		temp = simpson(integral, 1E3);
		//end timer
		timer = performance.now()-timer;
		avgTime += timer;
	}
	avgTime /= n;
	console.log("Avg runtime over "+n+" occurences: "+avgTime.toFixed(4)+" ms");
	console.log();
	
	console.log("Pi:      "+Pi);
	console.log("Result:  "+temp*4);
	console.log("Diff:    "+((temp*4)-Pi));
	
	let timer = performance.now();
	console.log(math.bignumber(1).toString());
	timer = performance.now()-timer;
	
	return temp*4;
}
