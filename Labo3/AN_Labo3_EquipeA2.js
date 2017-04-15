function generateMatrix(A,n)
{
  var matrix = new Array(n);
  for(let i=0;i<n;i++)
  {
    matrix[i]= new Array(n);
    for(let j=0;j<n;j++)
    {
      matrix[i][j]=A[3 * i + j];
    }
  }
  return matrix;
}

function subLines(matrix,one,two,size)
{
  for(var i = 0; i < size+1; i++)
  {
    matrix[two][i] -= matrix[two][one] / matrix[one][one]*matrix[one][i];
  }
}

function multiplyLineByFactor(matrix,c,line,size)
{
  for(let i = 0; i < size+1; i++)
  {
    matrix[line][i] *= c;
  }
}

function swapLines(matrix, indexLine, size)
{
  for (let i = indexLine+1; i < size-1 ; i++)
  {
      if (matrix[i][indexLine]!=0)
      {
          //We found a line not null. We can swap.
          for(let z=0;z<size-1;z++){
            var temp = matrix[z][indexLine];
            matrix[z][indexLine] = matrix[z][i];
            matrix[z][i] = temp;
          }
          return true; //if we don't return, the function will continue...
      }
  }
}

function gauss(matrix,vector,size)
{

  //Concatenate the matrix with the vector B
  for (let i=0; i < size; i++)
  {
      matrix[i].push(vector[i]);
  }

  for(let i=0;i<size;i++)
  {
    //If the value is 0, we need to swap with another line.
    if(matrix[i][i]==0)
    {
      swapLines(matrix,i,size);
    }

    /*multiplyLineByFactor(1/matrix[i][i],i,size);

    for(var j = i+1; j < size; j++)
    {
      subLines(matrix,i,j,size);
      matrix[i][j]=0;
    }*/
    for (let k=i+1; k < size; k++) {
        var c = -matrix[k][i]/matrix[i][i];
        for (j=i; j < size+1; j++) {
            if (i===j) {
                matrix[k][j] = 0;
            } else {
                matrix[k][j] += c * matrix[i][j];
            }
        }
    }

  }
  //console.log(matrix)

  B = new Array(size);
  for (let i=size-1; i > -1; i--)
  {
      B[i] = matrix[i][size]/matrix[i][i];
      for (let k=i-1; k > -1; k--)
      {
          matrix[k][size] -= matrix[k][i] * B[i];
      }
  }

  console.log(B)

}
