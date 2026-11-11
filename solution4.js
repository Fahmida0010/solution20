var repeatString = function(n, s) {
    let result = "";
    for (let i = 0; i < n; i++){
        result = result + s;
    }
    return result;
}
console.log(repeatString(3, "ha")); // hahaha

// এখানে:
// - repeatString হলো function-এর নাম।
// - n হলো প্রথম parameter।
// - s হলো দ্বিতীয় parameter।

// যখন function-টি call করবে:
// repeatString(3, "ha");


// তখন:
// Parameter	Argument value
// n	           3
// s	          "ha"

//Parameter: Function তৈরি করার সময় যে variable ব্যবহার করি।

// Argument: Function call করার সময় যে actual value পাঠাই।

// Empty string তৈরি করা
// let result = "";

// // for loop
// for (let i = 0; i < n; i++) {
//     result = result + s;
// }

// for (initialization; condition; increment) {
//     // code
// }

// Part	কাজ
// // let i = 0	Loop শুরু হবে ০ থেকে
// i < n	যতক্ষণ i, n-এর চেয়ে ছোট থাকবে
// i++	প্রতিবার i-এর মান ১ বাড়বে

// Syntax:
// string.repeat(count);

// var repeatStr = function(n, s) {
//     return s.repeat(n);
// };

var repeatStr = function(n, s) {
    let result = "";
    let i = 0;

    while (i < n) {
        result += s;
        i++;
    }

    return result;
};
console.log(repeatStr(3, "hu")); // huhuhu


// result += s কী?

// এটি হলো shorthand assignment operator।

// নিচের দুটি একই:
// result = result + s;

// result += s;

// i++ কেন ব্যবহার করেছি?

// প্রতিবার loop চলার পর i-এর মান ১ বাড়ানোর জন্য।

// এটি না দিলে i সবসময় ০ থাকবে এবং loop কখনো শেষ হবে না। এটাকে infinite loop বলে।


// "First, I initialize an empty string called result.
//  Then, I use a for loop that runs exactly n times. 
// In each iteration, I concatenate the original string s 
// with the result. After the loop finishes, I return the 
// final string. If n is zero, the loop won't execute, so 
// the function automatically returns an empty string."

