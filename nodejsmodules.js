//console.log("Print the file name"+ __dirname)
//console.log("Print the file name"+ __filename)


var fs = require("fs");
//console.log("Code Ended ");
// Asynchronous read
/*fs.readFile('input.txt', function (err, data1) {
   if (err) {
      return console.error(err);
   }


   console.log("Asynchronous read: " + data1.toString());   

            fs.readFile('cdackolkata.txt',(err,data2)=>{
                result=data1+data2;
                console.log("Total Result :"+result)
            })

   console.log("Code Ended ");
});*/


// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});

var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});
