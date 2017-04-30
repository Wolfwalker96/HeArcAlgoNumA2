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

An secondary objective is to solve an algebra problem.

Method
------

### Cosine implementation

As we have to implement our own cosine function, we decide to use the Maclaurin's Series (an
Taylor's Series where a=0) because this enable us to remove the sine in the series (as sin(0)=0).

### Derivate implementation

We use the Richardson method to calculate the derivate. On our implementation we calculate the
second derivate by reusing the derivate. (Recursive loop)

User manual
-------------

### Calculate Cosine

In the first section of the interface you can calculate cos(k pi) where you can specify the k
arguments.

### Managing the sample

In the second section you can change the sample number using for the plots. This will only change
the sample of the tree plots of Cosine and its derivate.

Files
-----

* **AN_Labo4_EquipeA2.html** Program view
* **AN_Labo4_EquipeA2.js**  Script human readable
* **js/** Some external libraries we use.

Conclusion
----------
