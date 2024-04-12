let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 // let order = () =>{};
// let production = () =>{};
 

/*
//function1
 let order = (fruit_name, call_production) =>{    
    
    // function 👇 is being called 
      call_production();
    };
    
//function 2
    let production = () =>{};

 // Trigger 👇
order(" ", production); */


// 1st Function

let order = (fruit_name, call_production) =>{

  // setTimeout(function(){   // setTimeout(function(){console.log(`` was selected)}, 2000)

    setTimeout(()=>{
      console.log("production has started")
      setTimeout(()=>{
        console.log("The fruit has been chopped")
        setTimeout(()=>{
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
          setTimeout(()=>{
            console.log("start the machine")
            setTimeout(()=>{
              console.log(`Ice cream placed on ${stocks.holder[1]}`)
              setTimeout(()=>{
                console.log(`${stocks.toppings[0]} as toppings`)
                setTimeout(()=>{
                  console.log("serve Ice cream")
                },2000)
              },3000)
            },2000)
          },1000)
        },1000)
      },2000)
    },0)
  //callback hell !!!!!!!!!!
};

// 2nd Function
let production = () =>{

  setTimeout(()=>{
    console.log("production has started")

    setTimeout(()=>{
      console.log("The fruit has been chopped")
    },2000)


  }, 0)

};

// Trigger 👇
order(0, production);

