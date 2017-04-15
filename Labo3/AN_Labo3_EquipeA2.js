/*
 *  Numerical Algorithm - 3nd Labo.
 *  Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer (Team A2)
 *  17.04.2017
 */

function generateMatrix(A,n)
{
  var matrix = new Array(n);
  for(let i=0;i<n;i++)
  {
    matrix[i]= new Array(n);
    for(let j=0;j<n;j++)
    {
      matrix[i][j]=A[n * i + j];
    }
  }
  return matrix;
}

function swapCols(matrix, indexCol, size)
{
  for (let i = indexCol+1; i < size-1 ; i++)
  {
      if (matrix[i][indexCol]!=0)
      {
          //We found a line not null. We can swap.
          for(let z=0;z<size;z++)
          {
            var temp = matrix[z][indexCol];
            matrix[z][indexCol] = matrix[z][i];
            matrix[z][i] = temp;
          }
          return true; //if we don't return, the function will continue...
      }
      else
      {
          return false;
      }
  }
}

function substractMultiply(i, k, matrix,size)
{
  var c = matrix[k][i]/matrix[i][i];
  for (j=i+1; j < size+1; j++)
  {
      matrix[k][j] -= c * matrix[i][j];
  }
  matrix[k][j]==0;
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
      if(!swapCols(matrix,i,size))
      {
        return false;
      }
    }

    for (let k=i+1; k < size; k++)
    {
        substractMultiply(i,k,matrix,size);
    }

  }

  X = new Array(size);
  for (let i=size-1; i > -1; i--)
  {
      X[i] = matrix[i][size]/matrix[i][i];
      for (let k=i-1; k > -1; k--)
      {
          matrix[k][size] -= matrix[k][i] * X[i];
      }
  }
  return X;
}
