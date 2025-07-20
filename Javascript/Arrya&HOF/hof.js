// function inner(){
//     console.log("ï amm inner");

// }

// function outer(callback){

//     callback()
// }

// outer(inner)

let arr = [61, 22, 3, 4, 5];

// let returnedValue = arr.filter(function (element) {
//   return element %2==0;
// });


// let returnedValue = arr.every(function (el,i){
//     console.log(i);
    
//     if(el>2){

//         return el
//     }
// })



// let returnedValue = arr.find(function (el,i){
//     console.log(i);
    
//     if(el>2){

//         return el
//     }
// })



// arr.sort(  function (a,b){


//       return b-a
// })
// console.log(arr);


let returnedValue = arr.forEach(function(el,i){


    console.log(el+i);
    
})

console.log(arr, returnedValue);
