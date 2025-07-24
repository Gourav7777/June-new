// let obj={
//     "name":"harry",
//     roll:30,
//     age:99
// }




// console.log(obj.name);

//  console.log(obj["name"])


// for(let key in obj){

//     console.log(key)

//       if(key=="age"){

//           obj.x = 77
//       }
   
// }







function Abc(name,age){


      this.name = name
      this.age = age

      this.fun = function(){
          console.log("balle balle");
          
      }
}

let a1 = new Abc("harry", 30)

let b1 = new Abc("garry", 77)
console.log(a1,b1)

// console.log(new Abc());
