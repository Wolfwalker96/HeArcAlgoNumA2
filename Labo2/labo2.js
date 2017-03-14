
// f(x)
var func1 = function(x){
  return Math.sin(x)-x/13;
}

// g(x)
var func2 = function(x){
  return x/(1-(x*x));
}


// z(x)
var gen1 = function(x){
  return Math.sin(x)-x/13;
}

// y(x)
var gen2 = function(x){
  return x/(1-(x*x));
}

// f(x)=g(x)
function Racine(f,g,a2,b2){
  // Algo de résolution

  var a = a2 ;
  var b = b2;

  // Une fonction dans une fonction... Le JS c'est beau :)
  function h(x){ return f(x)-g(x); }

  var mnew = a + b;
  var mold = 2*mnew;

  while(mnew-mold!=0){
    //console.log("mnew = "+mnew);
    //console.log("mold = "+mold);
    mold = mnew;
    mnew = (a+b)/2
    //console.log("a = "+a);
    //console.log("b = "+b);
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
function Execute(a,b,fin=100){
  c=Racine(func1,func2,a,b);
  console.log(c);
  if(fin==0) return "pommes";
  Execute(a,c,fin-1);
  Execute(c,b,fin-1);
}

function Explorer(a,b,f,g){
  function h(x){ return f(x)-g(x); }
  var oldValue=h(a);
  var oldIndex=a;
  for(i=a+0.1;i<=b;i+=0.1){
    var newValue=Math.sign(h(i));
    if(newValue!=oldValue){
      console.log("a = "+oldIndex+" b = "+i);
      console.log(Math.fround(Racine(f,g,oldIndex,i)));
      oldValue=newValue;
    }
    oldIndex=i;
  }
}

// Valide le formulaire
function ValidateForm(){

}

// Execution automatique
//Execute(-100,100);
Explorer(-100,100,func1,func2);
