
function step1(value,flag){

    return new Promise((reslove,reject) =>{
       if(!flag){
           reslove(value+50)
       }else{
        reject("something went wrong")
       }
    })


}


function step2(value,flag){

    return new Promise((reslove,reject) =>{
       if(!flag){
           reslove(value+10)
       }else{
        reject("Error occured in step2 function")
       }
    })


}

function step3(value,flag){

    return new Promise((reslove,reject) =>{

        if(!flag){
            reslove(value+60)
        }else{
            reject("Error in step3 function")
        }

    })
}







 async function result(){

    let result1=await step1(10,false)
    console.log(result1)   
    return result1+1;

}

result().then((result)=>{ console.log(result)})



