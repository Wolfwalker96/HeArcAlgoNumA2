Numerical Algorithm - 4nd Laboratory
====================================

* Authors : (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer
* School : HE-Arc - Ingénierie (Neuchâtel, Switzerland)
* Date : 1st May, 2017
* [Readable README](https://github.com/Wolfwalker96/HeArcAlgoNumA2/blob/master/Labo4/README.md)

Objectives
----------

The objective is to make a JavaScript program which find derivate functions of cosine. We have to
implement cosine with the Taylor's Series.

A secondary objective is to solve an algebra problem.

Method
------

### Cosine implementation

As we have to implement our own cosine function, we decided to use the Maclaurin's Series
(a Taylor's Series where a=0) because this enable us to remove the sine in the series (as sin(0)=0).

### Derivate implementation

We use the Richardson method to calculate the derivate. On our implementation we calculate the
second derivate by reusing the derivate. (Recursive loop)

User manual
-------------

### Calculate Cosine

In the first section of the interface you can calculate cos(k * Pi) using k. You give a ratio
of Pi, like k := 1/2. You can only change k which gets multiplied with Pi. It's meant for
convenience as it is easier to play with fractions of Pi than with Pi itself.
Otherwise you would have to do something like : cos(1.57079) by head.

### Managing the sample

In the second section you can change the sample number used for the plots. This will only change
the sample of the tree plots of Cosine and its derivate.

### Zooming in the plots

You have two mode for zooming in the plots.
Firstly, you can use your mouse wheel for zooming.
Secondly, you can zoom in a particular area by maintain pressed SHIFT touch and select the
area using the mouse.

Files
-----

* **AN_Labo4_EquipeA2.html** Program view
* **AN_Labo4_EquipeA2.js**  Script human readable
* **js/** Some external libraries we use.

Conclusion
----------

As result of our work, the cosine function is more accurate than the official JS implementation.
That's because we use a more bigger order for the Taylor's Series by default.

The derivate method works well for the first and second derivate, although it's not usable
for the third and greater derivate.

Finally, we solve the algebra problem of the boat. For more information about that show the html
page.
