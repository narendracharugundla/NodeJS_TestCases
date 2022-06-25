

function step1(value,flag){
return new Promise((a,b)=>{

     if(!flag){
        a(value+70)
     }else{
        b("Error Found in step1 function")
     }
  
})

}


function step2(value,flag){
    return new Promise((a,b)=>{
    
         if(!flag){
            a(value+40)
         }else{
            b("Error Found in step1 function")
         }
      
    })
    
    }

    function step3(value,flag){
        return new Promise((a,b)=>{
        
             if(!flag){
                a(value+60)
             }else{
                b("Error Found in step1 function")
             }
          
        })
        
        }
    

//Async await
    async function caller(){
           let resul1=await step1(30,false);
           //console.log(resul1)
           return resul1;
        }

      //result= caller()
      caller().then((result)=>{console.log("Total Result "+ result)})


/*step1(30,false)
.then((resul1)=>{step2(resul1,false)
.then((result2)=>{step3(result2,false)
.then((result3)=>{console.log(result3)
})})})
.catch((error)=>console.log(error))*/










