// __proto__ inheritance


// let animal = {
//     eat:true
// }

// // let rabbit = {
// //     jump:true,
// //     type:animal
// // }

// let rabbit = {
//     jump:true,
//     __proto__:animal
// }

// let fish = {
//     swim:true,
//     __proto__:rabbit,
//     eat:false
// }


// console.log(fish.eat)

let animal = {
    eat:true
}

let rabbit = {
    jump:true,
    __proto__:animal,
    eat:false
}


delete rabbit.jump
// console.log(rabbit) 
// {__proto__:{eat:true}}


delete rabbit.eat
console.log(rabbit)
// // {} = 5
// // eat:true = 4 


// delete animal.eat
// console.log(animal)
// // {}















