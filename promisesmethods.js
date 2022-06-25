const p1=Promise.resolve('Like if you Understand callbacks')      
const p2=100
const p3=new Promise((reslove,reject)=>{ 
    setTimeout(reslove,2000,'Learn more concepts in node js like events,timers,streams,buffer,modules,web programming etc')
 })
 const p5=new Promise((reslove,reject)=>{ 
    setTimeout(reslove,1000,'Learn more cocepts in datascience,AI,IOT and Machine Leaning')
 })
 const p4=Promise.reject('Rejected');
 //Promise.all([p1,p2,p3,p4]).then((values)=> console.log(values))
  //Promise.race([p5,p3]).then((values)=> console.log(values))
 // Promise.allSettled([p1,p3,p4]).then((values)=> console.log(values))
  //console.log("Result")
 Promise.any([p4,p3,p5]).then((values)=> console.log(values))