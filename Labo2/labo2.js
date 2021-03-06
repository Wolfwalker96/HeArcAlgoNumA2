/*
 *  Numerical Algorithm - 2nd Labo.
 *  Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer
 *  27.03.2017
 */

// f(x)
var func1 = function(x){
  return Math.sin(x)-x/13;
}

// g(x)
var func2 = function(x){
  return x/(1-(x*x));
}

// e Machine (most little interval)
var eMach = Math.pow(10,-14);

/*
 *  This function finds a root of h between start and end
 *  using the bisection method.
 *  It returns the root and the maximum error on x axis.
 */
function Root(h,start,end){
  var a = start;
  var b = end;

  var mnew = a + b;
  var mold = 2*mnew;

  while(Math.abs(mnew-mold)>=eMach){
    mold = mnew;
    mnew = (a+b)/2

    var k = h(a);
    var m = h(mnew);
    if(m*k<=0) b = mnew;
    else {
      a = mnew;
      k = m
    }
  }
  var error = (mnew-mold);
  return [mnew,error];
}

/*
 *  The Explorer function analyse the sign of the function h
 *  in the interval between a and b. This function execute Root
 *  when it think than there is a root here.
 *  It returns a table of roots and maximum errors
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
      var root = Root(h,oldIndex,i);
      /*
       *  In some case of discontinuity there are Infinity on a side
       *  and -Infinity on the other side and the algorithm thinks it's a root.
       *  So we check that the h(x) for x is not Infinity or -Infinity. This removes
       *  the discontinuity of the roots.
       */
      if(Math.abs(h(Math.fround(root[0])))!=Infinity){
        roots.push(root);
      }
      oldSign=newSign;
    }
    oldIndex=i;
  }
  return roots;
}

/*
 *  This function is a proxy between the alogrithm and the graphical interface.
 *  It needs :
 *    - the function as a string (funcStr).
 *    - the function as a JS function (funjs)
 *    - the part of the webpage where it must show the infos (idUi).
 */
function SolveFunc(funcStr, funjs, idUi){
  // Say something is happening
  document.getElementById("roots"+idUi).innerHTML = "<tr><td>Calculating</td></tr>";

  // Finds the roots
  var timeStart = new Date();
  var roots = Explorer(-100,100,funjs);
  var timeEnd = new Date();
  var duration = timeEnd.getMilliseconds() - timeStart.getMilliseconds();
  var annotation = [];

  // Display the roots and prepare for show they on the plot
  document.getElementById('roots'+idUi).innerHTML = "<tr><th>Racines</th><th>Erreur en Y</th><th>Erreur maximum en X</th><tr>";
  roots.forEach(function(root){
    document.getElementById("roots"+idUi).innerHTML += "<tr><td>"+root[0].toFixed(7)+"</td><td>"+funjs(root[0])+"</td><td>"+root[1]+"</td></tr>";
    annotation.push({x:root[0]})
  })
  document.getElementById("duration"+idUi).innerHTML = "Trouvées en "+duration+"ms";

  // Plot the function
  functionPlot({
    target: '#plot'+idUi,
    xAxis: {domain: [-100, 100]},
    data: [
      {fn: funcStr}
    ],
    annotations: annotation
  });
  document.getElementById("disclaimer"+idUi).style.visibility = "hidden";
}

// Click event handler for function 1
function ExecuteSolveF1(){
  SolveFunc("sin(x)-(x/13)",func1,'F1');
}

// Click event handler for function 2
function ExecuteSolveF2(){
    SolveFunc('x/(1-x^2)',func2,'F2');
}
