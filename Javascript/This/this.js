// var x = 10

// function abc(){
//     console.log(this.x,"1");

//     function def(){
//         console.log(this,"2");

//     }

//     def()

// }

// abc()

// .............................................
// Object Calling

// let obj = {
//     a:10,
//     fun:function(){
//         console.log(this);

//     }
// }

// let obj = {
//     a:10,
//     fun:function(){
//         console.log(this);

//         function def(){
//             console.log(this);

//         }

//         def()

//     }
// }

// let obj = {
//   a: 10,
//   fun: function () {
//     console.log(this);

//     function def() {
//       console.log(this);
//     }

//     def();
//   },

//   third: {
//     inner: function () {
//       console.log(this);
//     },
//   },
// };



// let obj = {
//   a: 10,
//   fun: function () {
//     console.log(this);

//     function def() {
//       console.log(this);
//     }

//     def();
//   },


// };

// let x = obj.fun();


// x()




// Constructor Function

// function Abc(name,age){
 

//     this.name=name,
//     this.age = age

//     console.log(this);
    

// }

// let s1 = new Abc("Harry",30)

// let s2 = new Abc("Garry",30)







// function ghi(){
//     console.log(10);
    
// }

// ghi()



// let ghi = ()=>{
//     console.log(10);
    
// }



// let x =  ()=>{
//     console.log(22);
    
// }



// var obj = {
//     a:10,

//     fun:function(){
//         console.log(this);
        
//            let x =  ()=>{
//             console.log(this)
//            }

//            x()
//     }
// }


// obj.fun()


// var person = {
//   name: "Gourav",
//   greet: () => {
//     console.log(this.person.name);
//   }
// };

// person.greet();




// Indirect Calling


let obj ={
    a:10,

    fun:function(y,z){
        console.log(this.a,   y,z);
        
    }
}


let obj2={
    a:70
}

// obj.fun()

// obj.fun.call(obj2,20,30)


// obj.fun.apply(obj2,[20,30])



// let BindedValue = obj.fun.bind(obj2,20,30)


// BindedValue()




var teacher = {
  subject: "Math"
};

function teach() {

    function abc(){
        
        console.log(this)
    }
    
    // let bindedValue = this.abc.bind(teacher)

    //     bindedValue()
    abc()
//   console.log(this.subject);
}

teach.call(teacher);


