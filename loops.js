// map, filter and reduce

let x = [1,2,3];

let y = [1,4,9];



// let z = [];

// for(let i=0; i<x.length; i++){
//     // z[i] = x[i]*x[i];
//     z.push(x[i]*x[i])
// }

// console.log(z)


// map

// Always work on arrays
// always return new array

let z = [1,2,3,4,5];
let d = [9,16,25];



// use only to check the conditions
let h = z.filter((e)=>{
    if(e>2){
        return e                //[3,4,5]
    }
}).map((e)=>{
    return e*e          //[9,16,25]
})

// let h = z.map((e)=>{
//     if(e>2){
//         return e*e
//     }
// })

// console.log(x.map(e=>e*e))
console.log(h)