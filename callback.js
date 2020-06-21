// callback, promises and async await

function A(callback){
    // image download code
    setTimeout(() => {
        console.log("Downloaded Image");
        callback();
    }, 6000);
}

function B(){
    // show image on website code
    console.log("Downloaed Image shown on website")
}

// setTimeout(A(B), 7000);   //5sec

// A(B);  //pass as an argument
// B(); 


// Callback Example
// Callback Hell

function getOrder(callback,getAccount){
    console.log("Gettting order id from database....");
    setTimeout(()=>{
        console.log("Order id got from database")
        callback(getAccount);
    }, 2000)   //1sec
}

// 1000ms = 1sec

function getProduct(getAccount){
    console.log("Getting product details using order id");
    setTimeout(()=>{
        console.log("Got product Details using order id");
        getAccount();
    }, 500)  //0.5sec
}

function getAccount(callback){
    console.log("Getting account details..");
    setTimeout(()=>{
        console.log("Got Account details.");
        callback();
    }, 1000)
}

function getUserAddress(){
    console.log("Getting user addresses..");
    setTimeout(()=>{
        console.log("Got User Addresses.")
    }, 500)
}


getOrder(getProduct,getAccount);
// getAccount(getUserAddress);


// Wrong
// Gettting order id from database
// Order id got from database
// Getting product details using order id
// Got product Details using order id
