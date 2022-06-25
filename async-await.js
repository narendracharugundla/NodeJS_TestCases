function step1(value,error){
    return new Promise( (reslove,reject) =>{
        if(!error){        
          reslove(value+10);
        }else{
            reject("Something Went Wrong")
        }
    });
    }

    function step2(value,error){
        return new Promise( (reslove,reject) =>{
            if(!error){        
              reslove(value+30);
            }else{
                reject("Something Went Wrong")
            }
        });
        }
     function result(){
      let result= step1(10,false);
      console.log(result)

    }
   
    result().then((result)=> console.log(result2()));