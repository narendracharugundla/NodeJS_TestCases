

function step1(value,callback){
    let result1=callback(value+60,false)
    console.log("Result 1: "+ result1)
    step2(result1,(result2,error)=>{
          if(!error){
            return result2;
          }
    })

}

function step2(value,callback){
    let result2=callback(value+40,false)
    console.log("Result 2: "+ result2)
    step3(result2,(result3,error)=>{
        if(!error){
          return result3;
        }
  })
}


function step3(value,callback){
    let result3=callback(value+80,false)
    console.log("Result 3: "+ result3)

   
}




//Solution-1: comments
//Solution-2: we can convert callback functions into smaller functions


step1(30,(result1,errror)=>{

    if(!errror){
        return result1;
    }

})

/*step1(30,(result1,error)=>{
    console.log("Resul1 :"+ result1)
       step2(result1,(result2,error)=>{
        if(!error){
            console.log("Resul2 :"+ result2) 
            step3(result2,(result3,error)=>{
                if(!error){
                    console.log("Resul3 :"+ result3) 
                }
            })
        }
       })
    })
*/




