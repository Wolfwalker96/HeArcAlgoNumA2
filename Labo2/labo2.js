
// f(x)
var func1 = function(x){
  return Math.sin(x)-x/13;
}

// g(x)
var func2 = function(x){
  return x/(1-(x*x));
}

var eMach = Math.pow(10,-14);

// h(x)=0 in the interval [start,end]
function Root(h,start,end){
  // Algo de résolution

  var a = start ;
  var b = end;

  var mnew = a + b;
  var mold = 2*mnew;

  while(Math.abs(mnew-mold)>=eMach){
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
  var error = (mnew-mold);
  return [mnew,error];
}

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
      //console.log("a = "+oldIndex+" b = "+i);
      var root = Root(h,oldIndex,i);
      /*  In some case of discontinuity there at the left/right Infinity
       *  and on the other side -Infinity and the algorithm thinks it's a root
       *  So we check that the h(x) for x is not Infinity or -Infinity. This removes
       *  the discontinuity of the roots.
       */
       //console.log("Valeur : "+root[0]);
       //console.log("func1("+root[0]+") = "+func1(root[0]));
      if(Math.abs(h(Math.fround(root[0])))!=Infinity){
        //console.log(root);
        roots.push(root);
      }
      oldSign=newSign;
    }
    oldIndex=i;
  }
  return roots;
}

function SolveFunc(funcStr, funjs, idUi){
  // Say user something is happening
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

function ExecuteSolveF1(){
  SolveFunc("sin(x)-(x/13)",func1,'F1');
}

function ExecuteSolveF2(){
    SolveFunc('x/(1-x^2)',func2,'F2');
}
