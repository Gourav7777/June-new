// let promise = new Promise((res, rej) => {
//   let data = "100 Rupess";
//   let err = "I wont give  single penny";

//   res(data)
//   rej(err);
// });

// // console.log(promise);

// promise
//   .then((data) => {
//     return data
//     console.log(data);
//   })

//   .then((x)=>{
//     console.log(x);

//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise is settled");
//   });

function boilWater() {
  console.log("WATER STARTS BOILING");

  return new Promise((res, rej) => {
    setTimeout(() => {
      res("water boiled");
    }, 5000);
  });
}

function preparingTea(hotwater) {
  console.log(`Tea starts Preparing with ${hotwater}`);

  return new Promise((res, rej) => {
    setTimeout(() => {
      //   res("Tea is ready");

      rej("Tea cant be prepared");
    }, 5000);
  });
}

function serveTea(tea) {
  console.log("Tea is prepared");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${tea}to be Served`);
    }, 2000);
  });
}

boilWater()
  .then((data) => {
    return preparingTea(data);
  })
  .then((tea) => {
    return serveTea(tea);
  })

  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log(err);
  });




