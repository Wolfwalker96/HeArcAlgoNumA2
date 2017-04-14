/*
	Team 2
	Project 3	-	Gaussian elimination
	
	Florian Fasmeyer
	Marc Friedli
	Paul Ami Jeanbourquin
*/ 
/*
	Triangularization function. Made to triangularize a square
	matrix using Gauss's algorithm. Vector variable contains
	a value for each line of the matrix for witch it is equal to.
	INPUT:
		matrix		vector
		  1 2	=	  5
		  9 9	= 	  7
*/
function triangularize (matrix, vector, size){
	
	//Find the max variable on a column, return i pos.
	this.findMax = function (j) {
	
		let meBeFree = j
		/*
			+1 is here so we don't compare j with j.
			Also i=j+1, j is here so we don't use as
			pivot a line we already used as one.
		*/ 
		for(let i=j+1; i<size; i++){
			let tuce = Math.abs(matrix[i][j])
			meBeFree = (tuce > matrix[meBeFree][j])? i : meBeFree
		}
		return meBeFree
	}
	//Divide the entire line k with the variable given[k][j].
	this.divide = function(k, j){
		for(let me=j+1; me<size; me++ ){
			
			matrix[k][me] /= matrix[k][j]
		}
		vector[k] /= matrix[k][j]
		//Avoid a division with itself, wich is why me=j+1.
		matrix[k][j] = 1
	}
	//Exchange two lines. 'k' is current line, 'r' is under already treated lines(top).
	this.exchange = function(k, r){
		
		//Let hal=r as r <=> number of lines already treated.
		//We do not need to waist time exchanging zeros. =)
		//See Gauss elimination step by step.
		for(let hal=r; hal<size; hal++){
			let ter = matrix[k][hal]
			matrix[k][hal] = matrix[r][hal]
			matrix[r][hal] = ter
			//I'm sorry, Dave. I'm afraid I can't do that.
		}
		//Exchange the vector.
		let hargy = vector[k]
		vector[k] = vector[r]
		vector[r] = hargy
	}
	//Substract one line from another that is multiplied.
	this.substractMultiply = function(i, j, r){
		
		/*
			Ches=j+1 shortcut: Try to guess why we don't 
			do me-(me*1) or 0-(me*0)
		*/
		for(let ches=j+1; ches<size; ches++){
			
			matrix[i][ches] -= matrix[i][j]*matrix[r][ches]
		}
		vector[i] -= matrix[i][j]*vector[r]
		matrix[i][j]=0
	}
	/*
	Check if (array is set && the matrix is a square).
	Processing time not calculated as it is not part 
	of the algorithm. As such it is merely here to make
	sure we didn't input wrong variables by mistake.
	*/
	this.validate = function(){
		
		//Matrix exists?
		if(isUndefined(matrix))
			return false
		
		let size = matrix.length
		//Is array set?
		for(let i=0; i< size; i++){
			
			let variable = matrix[i]
			if (!isDefined(variable))
				return false
			
			//Check every variables && if matrix is a square.
			for(let j=0; j<size; j++){
				
				let variable = matrix[i][j]
				if(!isDefined(variable))
					return false
			}
		}
		return true
	}
	
	//Main part of the function starts here! 
	this.start = function(){
		let r = 0
		for( let j=0; j<size; j++){
			let k = this.findMax(j)
			if(matrix[k][j] != 0){
				
				this.divide(k, j)
				this.exchange(k, r)
				for(let i=0; i<size; i++){
					
					if(i!==r){

						this.substractMultiply(i, j, r)
					}
				}
				r++	//ligne of next pivot 0,1,2,...
			}
			
		}
	}
}

//Check if variable is defined.
function isDefined (variable){
		
	if (typeof variable === 'undefined' || variable === null) {
		
		//Variable is undefined or null.
		return false
	}
	else
		return true
}
//Check if variable is undefined (I love this one).
function isUndefined (variable){
		
	return !isDefined(variable)
}
//Debug Function.
function show(matrix){
	document.write(matrix[0][0]+ "x; " +matrix[0][1]
		+"y; "+matrix[0][2]+"z = "+vector[0].toFixed(7)+"<\/br>")
	document.write(matrix[1][0]+ "x; " +matrix[1][1]
		+"y; "+matrix[1][2]+"z = "+vector[1].toFixed(7)+"<\/br>")
	document.write(matrix[2][0]+ "x; " +matrix[2][1]
		+"y; "+matrix[2][2]+"z = "+vector[2].toFixed(7)+"<\/br><\/br>")
}
