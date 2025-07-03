// function PersonMaker(name,age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi!, My name is ${this.name}`);
//         },
//     };
//     return person;
// }

//Constructors - doesn't return anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function(){
//     console.log(`Hi!, My name is ${this.name}`);
// };

// let p1 = new Person("Adam", 25);
// let p2 = new Person("Bob", 28);


// //classes

// class Person{
//     onstructor(name, age){
//         this.name = name;
//         this.age = age;
//     }talk(){
//         console.log(`Hi!, My name is ${this.name}`);
//     }
// }

// let p4 = new Person("Adam", 25);
// let p3  = new Person("Bob", 28);


//Inheritance

class ParentClass{
    constructor(name, age){
        console.log("Parent class constructor");
        this.name = name;
        this.age = age;
    }talk(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

class Student extends ParentClass{
    constructor(name, age, marks){
        console.log("Student class constructor");
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends ParentClass{
    constructor(name, age, subject){
        console.log("Teacher class constructor");
        super(name, age);
        this.subject = subject;
    }
}