console.log("Welcome to node js program")
var a=30;
var b=40;
var c=a+b;

//console.log("Result :"+ c)

function  countDown(number){
   //console.log("Enter Number" +number)
    var result=number-1;
    if(result>0){
        countDown(result);
    }

}
countDown(3);




//call back example
//Spliting callback function into smaller functions
function step1(number,callback){
    let result1=callback(number+10,false)
    step2(result1,(result2,error)=>{
          return result2;
    })

}

function step2(number,callback){
    let result2=callback(number+10,false)
    step3(result2,(result3,error)=>{
        console.log("Total Result :"+ result3)
  })

}


function step3(number,callback){
    callback(number+50,false)
}





//Callback solution-2

step1(40,function(result,error){

    if(!error){
        return result;
    }

});