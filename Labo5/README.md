Numerical Algorithm - 5nd Laboratory
====================================

* Authors : (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer
* School : HE-Arc - Ingénierie (Neuchâtel, Switzerland)
* Date : 15th May, 2017
* [Readable README](https://github.com/Wolfwalker96/HeArcAlgoNumA2/blob/master/Labo5/README.md)

Objectives
----------

This program must calculate Pi with seventeen significant numbers (sixteen decimals) by using this
algebra equation :
$\frac{\Pi}{4}=\int_{0}^{1} \frac{1}{1+x^2}dx$, so we need to use :

$\Pi=4\int_{0}^{1} \frac{1}{1+x^2}dx$

In order to calculate this function we need to implements an integrate method. And we must made this
method accurate to have an enough number of right decimals.

We have as secondary goal to make the quickest implementation of integrate of the class.

Finally, we can find an original graphical interpretation of Pi.

Method
------

### Integrate method

With the attention of having the smaller calculating time, we decided to use the Simpsons method
because it's more accurate so we need an less H than with other method (with square).

### Measuring the calculating time

As the teacher ask for showing the time in microseconds we use `Performance.now()` to calculate the
processing time.

User manual
-------------

### How to measure the calculating time ?


Files
-----

* **AN_Labo5_EquipeA2.html** Program view
* **AN_Labo5_EquipeA2.js**  Script human readable
* **img/** Some image we use.

Conclusion
----------
