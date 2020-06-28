// Async await


function makeRequest(location){
    return new  Promise((resolve, reject)=>{
        if(location === "Google"){
            resolve("Google Says Hi")
        }else{
            reject("We only talk to Google");
        }
    })
}


function processResponse(response){
    console.log("Processing response........");
    return new Promise((resolve, reject)=>{
        resolve("Response "+ response)
    })
}

// Using promises

// makeRequest("Facebook").then((r)=>{
//     return processResponse(r)   //Google says hi
// }).then((f)=>{
//     console.log(f)
// }).catch((e)=>{
//     console.log(e)
// })



// Async Await code here
async function doWork(){
    try{
        const result = await makeRequest("Facebook");
        const r =  await processResponse(result);
        console.log(r)
    }catch(err){
        console.log(err)
    }
}

// doWork();


async function getTen(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('hello');
        },3000)
    })
    
    return 10;
}

getTen().then((v)=>{
    console.log(v)
})


