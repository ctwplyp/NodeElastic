var csvParser = require('csv-parse');
var fs = require('fs');
var filePath = "/Users/seanlaing/workspace/node/cities.csv"

fs.readFile(filePath, {
  encoding: 'utf-8'
}, function(err, csvData) {
  if (err) {
    console.log(err);
  }

  csvParser(csvData, {
    delimiter: ','
  }, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});