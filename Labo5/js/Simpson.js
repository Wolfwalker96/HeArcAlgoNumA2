/*
 *   Numerical Algorithm - 5th Labo.
 *   (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer.
 *   02.05.2017
 */
/*
	Simpson method(function, start, stop, nbStep) where start and stop
	are equal to 0 and 1 respectively. 	f:funciton 	n: nbStep
	
	WARNING: 'n' must be even!
*/	
function simpson(f, n){
	var h = 1/n; // Sub interval length (b-a)/n.
	
	var sum1=0;
	var sum2=0;
	
	for(let i=1; i<n; i=i+2){
		console.log(h*i);
		sum1 += f(h*i);
	}
	
	for(let i=2; i<n; i=i+2){
		console.log(h*i);
		sum2 += f(h*i);
	}
	
	/*
		Note: we must replace f(0) and f(1) by the values
		of f(a=0) and f(b=1) wich are 1 and 1/2 = 1.5
	*/
	return ( (h/3) * ( 1.5 + 4*sum1 + 2*sum2) );
}

/*
	Replacer le return par la fonction(fait)
*/
function integral(x){
	return 1/(1+Math.pow(x,2));
}
function evaluateTime(){

	var temp;
	var Pi = 3.14159265358979323;
	
	//start timer
	console.time('Simpson');
	//run
	temp = simpson(integral, 1E1);
	//end timer
	console.timeEnd('Simpson');
	
	//Debug :)
	console.log("Diff: "+((temp*4)-Pi));
	console.log("Pi:    "+Pi);
	console.log("Calc:  "+temp*4);
	
	var dum = 1.11111111111111117
	console.log("Accu:  "+dum)
	
	return temp*4;
}