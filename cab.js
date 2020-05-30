// call, apply and bind
// use to change the reference of the function
// always use with the function
// we use apply when we need to pass arugements in array
// bind always return the new function
// this


let obj ={
    num:3
}

let add = function(a){
    return this.num + a
}


let bound = add.bind(obj)
console.log(bound(2))

// console.log(add.apply(obj,args))
// let args = [3,4,5]
