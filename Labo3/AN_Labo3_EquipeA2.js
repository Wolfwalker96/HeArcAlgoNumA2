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

function subLines(matrix,c,one,two,size)
{
  for(var i = 0; i < size+1; i++)
  {
    matrix[two][i] -= c*matrix[one][i];
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
          var temp = matrix[indexLine];
          matrix[indexLine] = matrix[i];
          matrix[i] = temp;
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
      swapLines(matrix,i,size)
    }

    multiplyLineByFactor(1/matrix[i][i],i,size);

    for(var j = i+1; j < size; j++)
    {
      var c = matrix[j][i] / matrix[i][i];
      subLines(matrix,c,i,j,size);
      matrix[i][j]=0;
    }

  }
  console.log(matrix)
}
