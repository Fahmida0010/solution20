var fizzBuzz = function (n){
    const result = [];

    for (let i =1 ; i<=n; i++){
      if (i % 3 === 0 && i % 5 === 0){
        result.push("FizzBuzz");
      } else if(i % 3 === 0){
        result.push("Fizz");
      }else if (i % 5 === 0){
        result.push("Buzz");
      }else {
        result.push(String(i));
      }
    }
    return result;
}
console.log(fizzBuzz(30));

// এখানে fizzBuzz নামে একটি function তৈরি করা হয়েছে।
// - n হলো function-এর parameter।
// - এই n-এর মধ্যে input number আসবে।
// - Function শেষে একটি array return করবে।
// যেমন:
// fizzBuzz(5);
// এখানে n = 5।