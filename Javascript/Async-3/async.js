

// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     console.log(data);
//    return data.json()
// })

// .then((data)=>{


//     console.log(data);
    
// })


// async function data(){


//        let res = await fetch("https://fakestoreapi.com/products")

//        let dat = await res.json()

//        console.log(dat);
       
// }

// data()


// axios.get("https://fakestoreapi.com/products")
// .then((data)=>{
//     console.log(data.data);
    
// })


// async function data(){


//        let res = await axios.get("https://fakestoreapi.com/products")

//     //    let dat = await res.json()

//        console.log(res);
       
// }

// data()

let arr = ["apple", "banana", "apple", "apple", "banana", "orange"];





 let returnedValue =  arr.reduce((acc,curr)=>{

      
    if(acc[curr]){
        acc[curr]++
    }
       else{
        acc[curr]=1
       }

       return acc
  },{})


  console.log(returnedValue);
  