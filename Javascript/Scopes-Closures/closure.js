// function abc (){

//     let  a = 30

//     function bb (){
//         console.log(a);

//     }

//     bb()
// }

// abc()

function abc() {
  let a = 30;

  let b = 50
  return function bb() {
    console.log(a);
  };
}



let returnedValue = abc();

returnedValue();
