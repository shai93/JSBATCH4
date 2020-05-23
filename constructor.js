// let aDD = function(){
//     return 1+2;
// }

// let result  = Add()

// constructor function

// __proto__ == getter/setter

// class ?

let person = function(){
    this.name = 'Shailesh';
}

let a = function(){
    return 'hello'
}

Person.prototype.getName = function(){
    return this.name
}


let p1 = new Person();
console.log(p1)    //{name}
console.log(p1.getName())
