
/*
Asynchronous means that you can execute multiple things at a time and you don't have to finish
executing the current thing in order moven on to next one
*/ 
/*console.log("Ashok Sir");
setTimeout(() => {
    console.log("Sangam Sir");
}, 1000);

console.log("Abishek Sir");

*/


function add(a,b,c){
   var s1="string";
    var s2=20;

    var s3=a+b;
    
    c(s1,s2,a,20/0);
    return s3;
}

//call back
var c=add("string1",10, (str1,str2,str3,str4) =>{

    console.log("Str1 vale :" +str1)
    console.log("Str2 vale :" + str2)
    console.log("Str3 vale :"+ str3)
    console.log("Str4 vale :" + str4)
});


console.log("Result: "+ c)