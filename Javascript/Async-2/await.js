// async function abc(){

//     return 10
// }

// console.log(abc());

// function def(){

// }

// console.log(new def());



console.log(70);


  
 setTimeout( () =>{

    async function abc() {
  console.log(10);
  console.log(20);

  let data = await fetch("https://dummyjson.com/products");
console.log(data);

  let resp = await data.json()

  console.log(resp);

  console.log(40);
}
abc()



console.log("i am outside");

},2000)






