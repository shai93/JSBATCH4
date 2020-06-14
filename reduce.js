// map = []
// filter = []
// reduce = final value


// let arr = [1,2,3,4];

// let sum =0;
// for(let i =0 ; i<arr.length; i++){
//     sum = sum + arr[i]
// }

// // console.log(sum);

// // Reduce

// // total = accumlator = final result= final value
// const finalResult = arr.reduce((total, value)=>{
//     // console.log("total - ", total)
//     // console.log("Value - ", value)
//     return total = total+value;
// }, 0)
// console.log(finalResult)
//array of objects
let pokemon = [
    {
        name:"raichu",              //0
        type:"fire"
    },
    {
        name:"balbarsaur",             //1
        type:"grass"
    },
    {
        name:"squirtle",                //2
        type:"water"
    }
];

let output = {
    raichu:{
        type:'fire'
    },
    balbarsaur:{
        type:'grass'
    },
    squirtle:{
        type:'water'
    }
}

const f = pokemon.reduce((main, value)=>{
    main[value.name] = {type:value.type};
    return main;
},{})

console.log(f)



