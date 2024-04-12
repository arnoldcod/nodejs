let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 
 let is_shop_open = true;

let order = ( time, work ) =>{  
  return new Promise( ( resolve, reject )=>{

/*    if( is_shop_open ){
       resolve( )   //Resolved [ ice cream delivered ]
      }
    else{
       reject( console.log("Our shop is closed") ) //Rejected [ customer didn't get ice cream ]
      }   */

      if( is_shop_open ){

        setTimeout(()=>{
         // work is 👇 getting done here
          resolve( work() )
  // Setting 👇 time here for 1 work
         }, time)
  
      }
  
      else{
        reject( console.log("Our shop is closed") )
      }

   } )
}

// Set 👇 time here
order( 0, ()=>console.log(`${stocks.Fruits[0]} was selected`))
//    pass a ☝️ function here to start working

//step2
.then(()=>{
    return order(2000 ,()=>console.log('production has started')) //return is next
  })

  // step 3
.then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
  })
  
  // step 4
  .then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
  })
  
  // step 5
  .then(()=>{
    return order(1000, ()=>console.log("start the machine"))
  })
  
  // step 6
  .then(()=>{
    return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
  })
  
  // step 7
  .then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
  })
  
  // Step 8
  .then(()=>{
    return order(2000, ()=>console.log("Serve Ice Cream"))
  })

  .catch(()=>{
    console.log("Customer left")
  })

  .finally(()=>{
    console.log("end of day") //whether is_shop_open = true/false; end of day will will print
  })