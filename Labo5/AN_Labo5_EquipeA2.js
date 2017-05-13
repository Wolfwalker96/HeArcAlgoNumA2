/*
 *   Numerical Algorithm - 5th Labo.
 *   (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer.
 *   15.05.2017
 */


/*
	Simpson method(function, start, stop, nbStep) where start and stop
	are equal to 0 and 1 respectively. 	f:funciton 	n: nbStep

	n = 1072 is the best possible number of steps to calculate Pi with
	an accuracy of 17 significant numbers.
*/
//const
var h = 1/1072;
var hi = h/3;
function simpson(f){

	let sum1=0;
	let sum2=0;
	let mult=0;

	for(let i=1; i<1072; i=i+2){
		mult = h*i;
		sum1 += f(mult);
		sum2 += f(mult-h);
	}
	/*
		usual: (h/3) * (f(a) + f(b) + 4*sum1 + 2*sum2)

		optimised: 	sum1 starts from f(a), so we get rid of useless
								f(a) multiplied 4 times instead of 1.
								(h/3) *	(f(b)-3*f(a) + 4*sum1 + 2*sum2)

		Why?:	Because calculating sum1 and sum2 in the same 'for' loop
					saves us 'n' multiplications. BUT, using a condition only
					to avoid f(a) would create 'n' useless conditions wich are
					more to compute than (f(b)-3f(a)) pre-calculated = -0.5
	*/
	return ( hi * ( -0.5 + 4*sum1 + 2*sum2) );
}

function integral(x){
	return 1/(1+x*x);
}
function evaluateTime(){

	let result=0;

	result = simpson(integral, 1072);

	let timer = performance.now();
	simpson(integral, 1072);
	timer = performance.now()-timer;

	return {'pi':result*4,'duration':timer};
}
