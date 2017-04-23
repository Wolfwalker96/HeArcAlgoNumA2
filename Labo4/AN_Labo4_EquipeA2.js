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
 *    nOrder : Half of the order of Taylor's Series (5 by default).
 */
function cos(x,nOrder=10){
  let z = x % (2*Math.PI);
  // console.log(z);
  let ret=0;
  for(let i=0;i<=nOrder;i++){
    ret+=(Math.pow(-1,i)*Math.pow(z,2*i))/factorial(2*i);
  }
  return ret;
}

//  hMax is the smaller value of h (using in derivate).
var hMax=0.1;

/*
 *  derivate(func,nOrder=1)
 *    Returns the derivated function (using Richardson method).
 *    func : function to derivate.
 *    nOrder : order of derivation (by default 1).
 */
function derivate(func,nOrder=1){
  if(nOrder==1){
    let funcDerivated = function(x){
      console.log(func(x+(hMax/2)));
      console.log(func(x-(hMax/2)));
      console.log(func(x+hMax));
      console.log(func(x-hMax));
      return ( (8 * (func(x+(hMax/2)) - func(x-(hMax/2)) )) - func(x+hMax) + func(x-hMax) ) / (6*hMax);
    }
    return funcDerivated;
  }
  else{
    let funcDerivated = derivate(derivate(func,nOrder-1));
    return funcDerivated;
  }
}
