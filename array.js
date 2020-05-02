let x = ['a', 'b', 'z', 'c'];
let y = [25,100,400,50];

let sortedArr = x.sort();


let sortedArr1 = y.sort(function (a,b){
    return b-a;
});



console.log(sortedArr1)

// statements
// loops



// 
// a = 25
// b = 100

// a-b = -75 =      [25, 100, 50, 400] = [25,50,100,400]


// 100-400 = -300
// 400 -50 = 350