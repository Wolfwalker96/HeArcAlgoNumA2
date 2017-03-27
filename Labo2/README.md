Numerical Algorithm - 2nd Laboratory
====================================

* Authors : (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer
* School : HE-Arc - Ingénierie (Neuchâtel)

Objectives
----------

The objectives are to make a JavaScript script who finds all the roots of two functions in the interval of -100 to 100.

Method
------

We use the bisection method. This method converges slowly at the root
and need an interval of a to b where f(a) and f(b) have different signs.
This method can find only one root.

So we have created an Explorer() function which finds all the points where there could be a root.
For each points found we launch the bisection method for find the root.
After we check if the root finds is not a discontinuity point.

Conclusion
----------

This script finds all the roots of the function given.
It could be improved by using another method to find the root.
