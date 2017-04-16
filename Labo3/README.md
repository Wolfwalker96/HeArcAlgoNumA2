Numerical Algorithm - 3nd Laboratory
====================================

* Authors : (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer
* School : HE-Arc - Ingénierie (Neuchâtel, Switzerland)

Objectives
----------

The objective is to make a JavaScript programs which solves a linear system using the Gauss
elimination Algorithm to triangulate a matrix (upper triangular).

The matrix must be contained in a JSON file.

Method
------

### File reading

Because we are using JavaScript and HTML technologies, we can not access the file system directly.
We decided to work with the new (HTML5) JS File API. This API give access to the files selected
by the user.

### Gauss elimination

To optimize the execution time we decided to put the B vector in the matrix A, wich had a significant impact on
the speed of the algorithm. We also made sure to properly factorize the equations in order to avoid any redundant 
divisions or multiplications.


### Substitution method

As the Gauss elimination returns an upside down matrix, we use an inverted substitution method
(We start by the matrix's last line and finish by the first).

User manual
-------------

To launch the linear system resolver, select a file. The resolution of the linear system starts automatically.
After the resolution you can start with another file.

**For Firefox users** : if you already selected a fail, you can restart the procedure by selecting the same file
			(useful if you want to test the processing time)

Files
-----

* **AN_Labo3_EquipeA2.html** Programs views
* **AN_Labo3_EquipeA2.js**  Script human readable
* **AN_Labo3_EquipeA2.min.js** Script minified
* **img/Loading_A2_Labo3.gif** Image for animation \
(from http://www.downgraf.com/inspiration/25-beautiful-loading-bar-design-examples-gif-animated/)

Conclusion
----------

This program successfully found the solution of a linear system. If there is no solution
(matrix empty or false linear system) the program alerts the user. 

The program loads the matrix from a JSON file (deal with it).

WARNING: The following information makes no sense! We need eighter the computer specs or a comparaison with another algorithm
Maybe we should compare with the Gauss-Jordan I made to have a scale. But this info is useless here!

"After testing we can affirm that this algorithm takes approximately 30ms to solve
a 300x300 matrix on the computers we were using"  
(, compared to XXms for an optimized Gauss-Jordan Algorithm of our own on the same computer)
(given a xxGhz, N cores [processor name] processor and XXGb of ram)