// closures
// nested function
// let name = "shailesh";


// function getName(){
//     console.log(name)
// }


// getName()



function outerFunction(secondNumber){
    return function innerFunction(firstNummber){
        console.log(firstNummber+secondNumber)
    };
}

const result = outerFunction(10);
result(10)
result(20)
result(30)
result(40)
result(50)
result(60)
result(70)



async function getTodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //promise1
    const json = await response.json();  //promise2
    console.log(json)
}



getTodos()