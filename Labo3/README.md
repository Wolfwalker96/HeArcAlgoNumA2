Numerical Algorithm - 3nd Laboratory
====================================

* Authors : (Team A2) Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer
* School : HE-Arc - Ingénierie (Neuchâtel, Switzerland)

Objectives
----------

The objectives are to make an JavaScript programs which solve a linear system using the Gauss-Jordan
elimination Algorithm to triangulate a matrix.

The matrix must be contained in JSON files.

Method
------

### File reading

Because the using of JavaScript and HTML technology we can't make a direct access to the file system.
So we decide to work with the new (HTML5) JS File API. This API give the access to the files selected
by the user.

### Gauss-Jordan elimination

To Do

### Substitution method

As the Gauss elimination return a matrix with the lines upside down, we use an inversed substitution method
(We start by the matrix's last line and finish by the first).

User's manual
-------------

To launch the linear system resolver, select a file. The resolution of the linear system starts automatically.
After the resolution you can start with another file.

**For Firefox users** : If you select the same file, the programs will resolve the same matrix.

Files
-----

* **AN_Labo3_EquipeA2.html** Programs views
* **AN_Labo3_EquipeA2.js**  Script human readable
* **AN_Labo3_EquipeA2.min.js** Script minified
* **img/Loading_A2_Labo3.gif** Image for animation \
(from http://www.downgraf.com/inspiration/25-beautiful-loading-bar-design-examples-gif-animated/)

Conclusion
----------

This programs finds the solutions of a linear system. If there is not a solution
(matrix empty or false linear system) the program alert the user. The programs loads
matrix from JSON files.

After some tests we show that our programs is fast (on Firefox we take less than
30ms for a 300x300 matrix).
