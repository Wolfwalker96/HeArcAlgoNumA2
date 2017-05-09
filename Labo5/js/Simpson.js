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
	
	n = 1072 is the best possible number of steps to calculate Pi with
	an accuracy of 17 significant numbers.
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
		usual:		(h/3) *	(f(a) + f(b) + 4*sum1 + 2*sum2)
		
		optimised: 	sum1 starts from f(a), so we get rid of useless
					f(a) multiplied 4 times instead of 1. 
					(h/3) *	(f(b)-3*f(a) + 4*sum1 + 2*sum2)
					
		Why?:		Because calculating sum1 and sum2 in the same 'for' loop
					saves us 'n' multiplications. BUT, using a condition only
					to avoid f(a) would create 'n' useless conditions wich are
					more to compute than (f(b)-3f(a)) pre-calculated = -0.5
		
	*/
	return ( (h/3) * ( -0.5 + 4*sum1 + 2*sum2) );
}

function integral(x){
	return 1/(1+x*x);
}
/*
	Display 17 significant numbers, with an uncertainty of ±2E-16.
	https://fr.wikipedia.org/wiki/Chiffre_significatif#Cas_du_0
	Uncertainty found to be ±2E-16, manually tested. 
	Worst case scenario:
	33E-16 => 31E-16 <= 29E-16. [±2E-16]
*/
function evaluateTime(){
	
	let Pi = 3.1415926535897932;
	let result=0;
	
	/*
		we do not evaluate the assignment of variables, wich is why
		it is done outside.
	*/
	result = simpson(integral, 1072);
	
	//evaluate time
	let timer = performance.now();
	simpson(integral, 1072);
	timer = performance.now()-timer;
	
	//display in console
	console.log("Run time: "+(timer*1000)+" us");
	console.log();
	console.log("Pi:      "+Pi.toFixed(16) + " ±2E-16");
	console.log("Result:  "+(result*4).toFixed(16)+" ±2E-16");
	console.log("Diff:    "+((result*4)-Pi).toFixed(16)+ " ±2E-16");
	
	return result*4;
}
