// // staircase = function name 
// // n= parameter
// // return = function theke result firot pathay 

// var staircase = function (n){

  
// };

//   let result = "" ;   //  এর অর্থ হলো আমরা একটি empty string তৈরি করেছি।
//         result += "#";
//      console.log(result);


//      for (let i = 1; i<n; i++){

//      }
//      spaces = n-i 
//      "#".repeat(1);
//        "#".repeat(2);
//          "#".repeat(3);
//            "#".repeat(4);

//            " ".repeat(n - i)
// // concatenate mane string er sathe string jog kora
// "Hello" + " " + "World";
    //  let i =1 mane Loop shuru hobe 1 theke
    // i <= n mane loop cholbe jotokkhon na i n 
    // er soman hoye jaye
    // i++ mane i er man 1 kore barbe
    // Iteration mane loop er ekta bar bar cholte thaka
// function holo reuseable block of code
//  jeta nirdishto kaj somponno kore
// function greet () {
//     console.log("Hello!");
// }
// greet(); 

// let result = "Hello\nWolrd";
//  console.log(result);
// তাই প্রতিটি row তৈরি করার পরে আমাদের newline যোগ করতে হবে।
//  result += " ".repeat(n-i) + "#".repeat(i) + "\n";
  // console.log(result);

// Iteration 3
// i = 3
// - Spaces = 4 - 3 = 1
// - Hashes = 3
// - Row = " " + "###"

 
  // Complete Solution
  var staircase = function(n) {    //  function declare kora hoyeche staircase nam e, jeta n parameter ney.
    let result = "";

    for (let i = 1; i<=n; i++){
      result += " ".repeat(n-i) + "#".repeat(i);
      if (i < n){
        result += "\n";
      }
    }
    
    return result;
  }
  console.log(staircase(4));   // function call
  
//example of function with parameter and return value
  function add(a,b){   // function declare kora hoyeche add nam e, jeta a and b parameter ney.
    return a+b ;
  }
  console.log(add (10,20))   // function call

  
// // explanation of the code
//   function greet (){}    // function toiri kore
//   greet()  // function execute kore
//   return result   // function theke value firot pathay
//   console.log(result )  // console e value print kore/dekhay