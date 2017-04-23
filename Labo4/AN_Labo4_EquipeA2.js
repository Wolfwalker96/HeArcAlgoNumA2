/*
 *   Numerical Algorithm - 4nd Labo.
 *   (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer.
 *   01.04.2017
 */

/*
 *   MATH FUNCTIONS.
 */

/*
 *  factorial(n)
 *    Returns n!.
 *    n : values of factorial.
 */
function factorial(n){
  let ret=1;
  for(let i=2;i<=n;i++){
    ret*=i;
  }
  return ret;
}

/*
 *  cos(x,nOrder=5)
 *    Returns cosinus(x).
 *    x : Radius value in radian.
 *    nOrder : Half of the order of Taylor's Series (20 by default).
 */
function cos(x,nOrder=20){
  let z = x % (2*Math.PI);
  let ret=0;
  for(let i=0;i<=nOrder;i++){
    ret+=(Math.pow(-1,i)*Math.pow(z,2*i))/factorial(2*i);
  }
  return ret;
}

//  hMax is the smaller value of h (using in derivate).
var hMax=0.00001;

/*
 *  derivate(func,nOrder=1)
 *    Returns the derivated function (using Richardson method).
 *    func : function to derivate.
 *    nOrder : order of derivation (by default 1).
 */
function derivate(func,nOrder=1){
  if(nOrder==1){
    let funcDerivated = function(x){
      return ( (8 * (func(x+(hMax/2)) - func(x-(hMax/2)) )) - func(x+hMax) + func(x-hMax) ) / (6*hMax);
    }
    return funcDerivated;
  }
  else{
    let funcDerivated = derivate(derivate(func,nOrder-1));
    return funcDerivated;
  }
}

/*
 *  SPECIAL FUNCTIONS.
 */

/*
 *  evaluateFunction(func,xMin,xMax,sample=10)
 *    Returns the values of the function in the interval xMin to xMax.
 *    func : function to evaluate.
 *    xMin : Minimum x value of the interval.
 *    xMax : Maximum x value of the interval.
 *    sample : Number of sample in 1 (by default 10).
 */
function evaluateFunction(func,xMin,xMax,sample=10){
  let range = 1 / sample;
  let points = new Array();
  for(let i=xMin;i<=xMax;i+=range){
    let yValue = func(i);
    points.push([i,yValue]);
  }
  return points;
}
