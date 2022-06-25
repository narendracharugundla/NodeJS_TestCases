var fs = require("fs");

/*console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});*/


/*console.log("Going to create directory /tmp/test");
fs.mkdir('test/tmp/',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});*/



var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("test/tmp",function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("/tmp/",function(err, files) {
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file) {
         console.log( file );
      });
   });
});