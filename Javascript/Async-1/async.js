// console.log("start")

// // for(let i=0; i<100000; i++){

// // }

// setTimeout(function (){

//     console.log("Hello after 2 secs");

// },2000)

// console.log("end")

// let idd = setInterval(()=>{

//     console.log("interval")
// },2000)

// setTimeout(()=>{

//     clearInterval(idd)
// },4000)

// console.log("start")

//  setTimeout(function (a){

//    console.log("Hello after 2 secs",a);

// },0,"heelo")

// console.log("end")

function boilWater(callback) {
  console.log("Water starts boiling");

  setTimeout(() => {
    callback("water is boiled");
  }, 5000);
}

function prepareTea(hotwater, callback) {
  console.log(`I have started preparing tea with ${hotwater}`);

  setTimeout(() => {
    callback("Tea is prepared");
  }, 2000);
}

function serveTea(tea) {
  setTimeout(() => {
    console.log(`${tea} and is ready to serve`);
  });
}

boilWater(function (hotwater) {


      prepareTea(hotwater, function (tea) {
       
       
        serveTea(tea);


        });
});
