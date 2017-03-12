
// f(x)
var func1 = function(x){
  return Math.sin(x)-x/13;
}

// g(x)
var func2 = function(x){
  return x/(1-(x*x));
}

// f(x)=g(x)
function Racine(g,f){
  // Algo de résolution

  var a = -100 ;
  var b = 0;

  // Une fonction dans une fonction... Le JS c'est beau :)
  function h(x){ return f(x)-g(x); }

  var mnew = a + b;
  var mold = 2*mnew;

  while(mnew-mold!=0){
    console.log("mnew = "+mnew);
    console.log("mold = "+mold);
    mold = mnew;
    mnew = (a+b)/2
    console.log("a = "+a);
    console.log("b = "+b);
    var k = h(a);
    var m = h(mnew);
    if(m*k<=0) b = mnew;
    else {
      a = mnew;
      k = m
    }
  }
  return mnew;
}

// Récuper les données et execute
function Execute(){
  console.log(Racine(func1,func2));
}

// Valide le formulaire
function ValidateForm(){

}

// Execution automatique
Execute();
