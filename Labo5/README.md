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
$\frac{\pi}{4}=\int_{0}^{1} \frac{1}{1+x^2}dx$, so we need to use :

$\pi=4\int_{0}^{1} \frac{1}{1+x^2}dx$

In order to calculate this function we need to implements an integrate method. And we must made this
method accurate to have an enough number of right decimals.

We have as secondary goal to make the class's quickest implementation of integrate.

Finally, we can find an original graphical interpretation of Pi.

Method
------

### Integrate method

With the attention of having the smaller calculating time, we decided to use the Simpsons method
because it's more accurate so we need an lower H than with other method (using rectangle).

### Measuring the calculating time

As the teacher ask for showing the time in microseconds we use `Performance.now()` to measure the
processing time.

### The graphical interpretation of Pi

That's was almost the trickiest part of this lab. At the end we choice to take inspiration from the
works of [Nadieh Bremer](http://www.visualcinnamon.com) who try to represent some Pi decimals by creating a path using the digit of
the decimal as angle.

So we create a Java program to generating an image of the 65000 first decimals of Pi with a similar
approach.

**The image generated** :

![](./img/pi.png)

User manual
-------------

### How to measure the calculating time ?

By clicking on the `Measure the time` button. You can press as many times as you need.


Files
-----

* **AN_Labo5_EquipeA2.html** Program view
* **AN_Labo5_EquipeA2.js**  Script human readable
* **img/pi.png** Our image of Pi

Conclusion
----------

Our programs works fine and complete all the objectives which we must do. It calculates the sixteen
first decimals of Pi in a very short time (40 microseconds in average on a Lenovo t450s). And we have
our own graphical representation of Pi.

The programs could be improve by using `bigNumber` from `math.js` this would able to calculate more
decimals but, as `bigNumber` use more bits, that's slower as the current method we use.
