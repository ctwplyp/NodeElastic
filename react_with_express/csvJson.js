var csvParser = require('csv-parse');
var fs = require('fs');
const csv= require('csvtojson')

var filePath = process.argv[2];


csv()
.fromFile(filePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})