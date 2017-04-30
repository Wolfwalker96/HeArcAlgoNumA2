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
of Pi, like k := 1/2. You can only change k wich gets multiplied with Pi. It's meant for 
conveniance as it is easier to play with fractions of Pi than wit Pi itself. 
Otherwise you would do something like : cos(1.57079) by head. :-)

### Managing the sample

In the second section you can change the sample number used for the plots. This will only change
the sample of the tree plots of Cosine and its derivate.

Files
-----

* **AN_Labo4_EquipeA2.html** Program view
* **AN_Labo4_EquipeA2.js**  Script human readable
* **js/** Some external libraries we use.

Conclusion
----------

We are a bunch of happy folks! :-)
