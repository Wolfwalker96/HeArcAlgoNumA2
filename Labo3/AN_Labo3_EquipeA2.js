function generateMatix(A,B,n)
{
  var matrix = new Array(n);
  for(var i=0;i<n;i++)
  {
    matrix[i]= new Array(n);
    for(var j=0;j<n;j++)
    {
      matrix[i][j]=A[3 * i + j];
    }
  }
  var dump = new triangularize(matrix,B,n);
  dump.start();
  showResult(B);
}
