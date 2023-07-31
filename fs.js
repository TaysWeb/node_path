// READING A A FILE
var fs = require('fs');

fs.readFile('test.txt','utf8', function (err, data) {    // if you add the utf8 thats the data web takes in 
    if (err)                                            
        throw err;       // this throws an error if one occurs

    console.log(data);
});
var fs = require('fs');

var data = fs.readFileSync('test.txt', 'utf8'); // this displays the actual context in text file
console.log(data);        




var fs = require('fs');

fs.writeFile('Hi.txt', 'hi there its Tara , dOES IT WORK?', function (err) {   // writing a file OR Creates the file with the context in 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');// when successful this is the output 
});

var fs = require('fs');

fs.open('test.txt', 'r', function (err, fd) {  //this opens the file 
    
    if (err) {
        return console.error(err);  // if theres an error return the error 
    }
    
    var buffr = new Buffer(1024);  
    
    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {  //reads the file with the callback function of fd completes
       
    if (err) throw err;
            
    // Print only read bytes to avoid junk.
    if (bytes > 0) {
        console.log(buffr.slice(0, bytes).toString());
    }
        
    // Close the opened file.
    fs.close(fd, function (err) {
        if (err) throw err;      
    });
    });
});
