
// f(x)
var func1 = function(x){
  return Math.sin(x)-x/13;
}

// g(x)
var func2 = function(x){
  return x/(1-(x*x));
}
// h(x)=0 in the interval [start,end]
function Root(h,start,end){
  // Algo de résolution

  var a = start ;
  var b = end;

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
/*
// Récuper les données et execute
function Execute(a,b,fin=10){
  // Une fonction dans une fonction... Le JS c'est beau :)
  function h(x){ return func1(x)-func2(x); }
  c=Root(h(x),a,b);
  console.log(c);
  if(fin!=0){
    Execute(a,c,fin-1);
    Execute(c,b,fin-1);
}
}
*/

/*  The Explorer function analyse the sign of the function h
 *  in the interval between a and b. This function execute Root
 *  when it think than there is a root here.
 */
function Explorer(a,b,h){
  var roots =[];

  // Start value
  var oldSign=Math.sign(h(a));
  var oldIndex=a;

  //Exploration of the function
  for(i=a+0.1;i<=b;i+=0.1){
    var newSign=Math.sign(h(i));
    if(newSign!=oldSign){
      // There is a sign changement between oldIndex and i (current index)
      console.log("a = "+oldIndex+" b = "+i);
      var root = Math.fround(Root(h,oldIndex,i)); // we looking for the root with the bisection method
      /*  In some case of discontinuity there at the left/right Infinity
       *  and on the other side -Infinity and the algorithm thinks it's a root
       *  So we check that the h(x) for x is not Infinity or -Infinity. This removes
       *  the discontinuity of the roots.
       */
      if(Math.abs(h(root))!=Infinity){
        console.log(root);
        roots.push(root);
      }
      oldSign=newSign;
    }
    oldIndex=i;
  }
  return roots;
}

// Execution automatique
//Execute(-100,100);


function UIElement(){
  // A function in a function... Js is wonderful :)
  function h(x){ return func1(x)-func2(x); }
  // Say user something is happening
  document.getElementById('roots').innerHTML = "Calculating";

  // Finds the roots
  var timeStart = new Date();
  var roots = Explorer(-100,100,h);
  var timeEnd = new Date();
  var duration = timeEnd.getMilliseconds() - timeStart.getMilliseconds();
  console.log(duration+"ms");
  var annotation = [];
  // Display the roots and prepare for show they on the plot
  document.getElementById('roots').innerHTML = "";
  roots.forEach(function(root){
    document.getElementById("roots").innerHTML += root.toFixed(7)+", ";
    annotation.push({x:root})
  })
  // Plot the function
  functionPlot({
    target: '#plot',
    xAxis: {domain: [-100, 100]},
    data: [
      {fn: 'sin(x)-(x/13)-x/(1-x^2)'},
      //{fn: 'sin(x)-(x/13)'},
      //{fn: 'x/(1-x^2)'}
    ],
    annotations: annotation
  });
  document.getElementById("disclaimer").style.visibility = "hidden";
}
