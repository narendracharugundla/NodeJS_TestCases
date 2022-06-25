
step1(10,function(result1,error){

    console.log("result1"+ result1)
    console.log("errorStatus"+ error)
      
    if(!error){
         
        step2(result1, function(result2,error){
            console.log("result2"+ result2)
            console.log("errorStatus"+ error)
            if(!error){

                step3(result2,function(result3,error){
                    console.log("result3"+ result2)
                    console.log("errorStatus"+ error)

                });
            }

        });

    }   

});
    


function step1(value,callback){
    callback(value+10,false)
}

function step2(value,callback){
    callback(value+20,false)
}

function step3(value,callback){
    callback(value+30,false)
}