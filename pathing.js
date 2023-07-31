// path module

var path = require('path'); 
var filename = path.basename('../pathing/pathing.js'); //gives the filename
var filename = path.delimiter; // displays the semi-colon
var filename = path.extname('../pathing/pathing.js'); // displays .js type of file 
var filename = path.format('../pathing/pathing.js'); // displays .js type of file 
var filename = path.normalize('../pathing/pathing.js'); // displays the full path 
console.log(filename);