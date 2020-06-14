// for let
// foreach
// for in
// for of


// arr or string
//for let
//for of
//for each


// object
// for in


let arr = [1,2,3,4];
let obj = {
    a:1,
    b:2
}
console.log("normal for loop")
for(let i = 0; i <arr.length; i++){
    console.log(arr[i])
}
console.log("for in loop")
for(let v in arr){
    console.log(arr[v])
}

console.log("for in loop for object")
for(let v in obj){
    console.log(obj[v])
}

console.log("foreach loop")
arr.forEach((value, index)=>{
    console.log(value)
})
console.log("for of loop")
for (let v of arr) {
    console.log(v)
}
