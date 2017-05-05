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
	let h = math.divide(math.bignumber(1), math.bignumber(n)); // Step size.
	
	let sum1=math.bignumber(0);
	let sum2=math.bignumber(0);
	let mult=math.bignumber(0);

	for(let i=1; i<n; i=i+2){
		mult = math.multiply(h, i);
		sum1 = math.add(sum1, f(mult));
		sum2 = math.add(sum2, f(math.add(mult, -h)));
	}
	/*
		Note: we must replace f(1) by the values
		of f(b=1) wich is 1/2. Made for optimisation purposes.
	*/
	return ( math.multiply(math.divide(h,3),
	( math.add(math.add(-0.5, math.multiply(4, sum1)), math.multiply(2, sum2)))));
}

/*
	Replacer le return par la fonction(fait)
*/
function integral(x){
	return math.divide(1,math.add(1, math.multiply(x, x)));
}
/*
	Using "High Resolution Time API".
	https://www.sitepoint.com/discovering-the-high-resolution-time-api/
	*/
function evaluateTime(){
	math.config({
		number: 'BigNumber',
		precision: 20
	});

	let temp = math.bignumber(0);
	let Pi = math.PI;
	
	let avgTime=0;
	let n=10;
	for(let me=0; me <n; me++){
		//start timer
		let timer = performance.now();
		//run
		temp = simpson(integral, 1E4);
		//end timer
		timer = performance.now()-timer;
		avgTime += timer;
	}
	avgTime /= n;
	console.log("Avg runtime over "+n+" occurences: "+avgTime.toFixed(4)+" ms");
	console.log();
	
	console.log("Pi:      "+Pi.toString().substring(0,19));
	console.log("Result:  "+math.multiply(temp, 4).toString().substring(0,19));
	console.log("Diff:    "+math.add(math.multiply(temp, -4), Pi).toString().substring(0,19));

	return math.multiply(temp, 4).toString().substring(0,19);
}
