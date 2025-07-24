class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  fun() {
    console.log("bye bye");
  }

  print() {
    console.log("print");
  }
}

class Student extends Person{

    constructor(name,age,roll){

       super(name, age) 


        this.roll=roll
     }
}

let a1 = new Person("harry", 30);

let b1 = new Person("garry", 77);
// console.log(a1, b1);


console.log("Below are Student Objects");

let z1 = new Student("harry", 30,56)

let y1 = new Student("garry", 77,77)


console.log(z1);


// function Abc(name,age){


//       this.name = name
//       this.age = age

//       this.fun = function(){
//           console.log("balle balle");
          
//       }
// }

// let z1 = new Abc("harry", 30)

// let y1 = new Abc("garry", 77)
//  console.log(z1,y1)



// console.log(Object.getPrototypeOf(z1,y1))



let obj = {
    name:"pablo"
}


let arr =[23]