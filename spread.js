// Rest and Spread Operators(...)

// spread = [1,2,3] = 1,2,3
// rest = 1,2,3 = [1,2,3]


// function A(a,b,...arg){
//     console.log(a,b)
// }


// console.log(A(1,2,3,4,5,6,7))

// let x = [1,2,3]
// let y = [4,5,6]
// let z = [...x,...y]

// //  [1,2,3,4,5,6]
// // [[1,2,3], [4,5,6]]

// console.log(...z)


// let x = [1,2,3]
// let y = [...x]; //creating new array using spread operator.
// x[2] = 10;

// console.log(x)
// console.log(y)


let a = [5,6,7];
let y = [8,9,1];

let z = [...y,6,...a]

console.log(z)


