const fs = window.require('fs');

export function getData(file,callback){
    fs.readFile(file[0], 'utf-8', (err, data) => {
    if (err) {
      console.log(callback(err));
      return;
    }
    let parsedData = JSON.parse(data)
    callback(parsedData);
  });
}

export function getCol(matrix, col){
  var column = [];
  for(var i=0; i<matrix.length; i++){
     column.push(matrix[i][col]);
  }
  return column;
}