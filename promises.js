// resolve
// reject
function getOrder(){
    return new Promise((resolve, reject)=>{
        console.log("Gettting order id from database....");
        setTimeout(()=>{
            console.log("Order id got from database")
            resolve();
        }, 2000)   //1sec
    })
}

function getProduct(){
    console.log("Getting product details using order id");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Got product Details using order id");
            resolve()
        }, 500)  //0.5sec
    })
 
}

function getAccount(){
    console.log("Getting account details..");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Got Account details.");
            resolve()
        }, 1000)
    })
}

function getUserAddress(){
    console.log("Getting user addresses..");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Got User Addresses.")
            resolve();
        }, 2000)
    })
}

// getOrder().then(()=>{
//     getProduct().then(()=>{
//         getAccount().then(()=>{
//             getUserAddress().then(()=>{

//             })
//         })
//     })
    
// }).catch(()=>{
//     console.log("error")
// })

getOrder().then(()=>{
    return getProduct();
}).then(()=>{
    return getAccount();
}).then(()=>{
    return getUserAddress();
}).then(()=>{
    console.log("Code ended")
}).catch(()=>{

})


// let p = new Promise((resolve, reject)=>{
//     let lec  = false
//     if(lec){
//         resolve("Lec taken")
//     }else{
//         reject("Lec not taken")
//     }
// })

// p.then((msg)=>{
//     console.log(msg)

// }).catch((msg)=>{
//     console.log(msg)
// })