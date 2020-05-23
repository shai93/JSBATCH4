// class

// Instance variable vs Class Variable
// class  Person{
//     total = 50;
// }

// let p1 = new Person();
// p1.total = 100;
// let p2 = new Person();
// let p3 = new Person();

// console.log(p1)
// console.log(p2)
// console.log(p3)

// Inheritance

class Person{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

class Admin extends Person{
    constructor(isAdmin, name){
        super(name);
        this.isAdmin = isAdmin
    }
}

let A1 = new Admin(true, 'Shailesh');
console.log(A1.getName())