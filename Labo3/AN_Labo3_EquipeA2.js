/*
 *  Numerical Algorithm - 3nd Labo.
 *  Paul Jeanbourquin, Marc Friedli, Florian Fasmeyer (Team A2).
 *  17.04.2017
 */

//Transform the one dimension array from the JSON file into a 'n' dimension array.
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

//Search a row not null then swap with the current row, if nothing found return false.
function swapRows(matrix, indexRow, size)
{
  for (let i = indexRow+1; i < size-1 ; i++)
  {
      if (matrix[i][indexRow]!=0)
      {
          //Swap.
          var temp = matrix[indexRow];
          matrix[indexRow] = matrix[i];
          matrix[i] = temp;
          return true;
      }
      else
      {
          //Miss some argument. Linear function can not be solved.
          return false;
      }
  }
}

//Substract one line from another that is multiplied.
function substractMultiply(i, k, matrix,size)
{

  //j=i+1 shortcut: matrix[k][j] is always 0.
  let c = matrix[k][i]/matrix[i][i];
  for (j=i+1; j < size+1; j++)
  {
      matrix[k][j] -= c * matrix[i][j];
  }
  matrix[k][j]==0;
}

function gauss(matrix,vector,size)
{
  /*
    Concatenate the matrix with the vector B.
    Saves some instructions, speed up the process.
  */
  for (let i=0; i < size; i++)
  {
      matrix[i].push(vector[i]);
  }

  for(let i=0;i<size;i++)
  {
    //If the value is 0, swap with another line wich does NOT have zero for the same column.
    if(matrix[i][i]==0)
    {
      if(!swapRows(matrix,i,size))
      {
        return false;
      }
    }

    //Paul's second first name is Ami.
    for (let k=i+1; k < size; k++)
    {
        substractMultiply(i,k,matrix,size);
    }

  }

  //Return a one dimension matrix as answer.
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
