



//// 1.Sozun tersini cixaran funksiya yazin 

// function getReverse (word) {
//     let result ="";
// for (let i=[word.length-1]; i>=0; i--) {
//     result +=word[i];
//     // result=result+word[i];

// }
// return result;

// }
// console.log(getReverse("salam"))




//// 2. "Never give up" cumlesinde e herfinin nece defe istifade olundugunu gosteren funksiya yazin


//     function calculateLetter (sentense) {
//      let repeat =0
//      for(let i=0; i<sentense.length ; i++) {
//         if(sentense[i]=="e"){
//             repeat++
//         }
//      }
// return repeat

//     }

//     console.log(calculateLetter("Never give up"))




// 3. small car =1-3 people  medium car =4-5 people  large car=6-9 people 



//   const cars =[
// {
// color:"red",
// type:"mercedes",
// capacity:5,

// },
// {
// color:"blue",
// type:"bmw",
// capacity:2,

// },
// {
// color:"blue",
// type:"ford",
// capacity:6,
// },

// {
//     color:"blue",
//     type:"bmw",
//     capacity:6,

// },


//   ]


// let carsSize = cars.map((car)=>{
//     if(car.capacity <=3){
//         return `small ${car.type}`
//     }
//     if(car.capacity <=5){
//         return `medium ${car.type}`
//     }
//     if(car.capacity <=9){
//         return `large ${car.type}`
//     }
    
// })

// console.log(carsSize)







//// 4.rengi qirmizi olanlarda priceda 30% endirim


//   const cars =[
// {
// color:"red",
// type:"mercedes",
// capacity:5,
// price:120000,

// },
// {
// color:"blue",
// type:"bmw",
// capacity:2,
// price:100000,
// },
// {
// color:"blue",
// type:"ford",
// capacity:6,
// price:90000,
// },

// {
//     color:"blue",
//     type:"bmw",
//     capacity:6,
//    price:150000,

// },


//   ]

//   let carsSize = cars.filter ((car)=>{
//   return car.color  === "red";

//   }).map((car)=>{
//     let discount = car.price - (car.price*30)/100
//     return `${discount} ${car.type}`
//   })
  
  
//   console.log(carsSize)

  
  

  
  /////find   includes metodlara bax  praktika /////
