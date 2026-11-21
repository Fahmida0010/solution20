
// str ="world";

// var solution = function(str) {
//     return str.split("").reverse().join("");

// }

// str.split("");
// split() একটি string-কে array-তে convert করে।

// str.split("").reverse().join("");

// var solution = function(str){
//     let reversedStr = "";
//     for (let i = str .length -1 ; i>=0; i--){
//         reversed += str[i];
//     }
//     return reversedStr;
// }

// Empty string তৈরি করা
//  let reversedStr = "";
// আমরা reversed নামে একটি variable তৈরি করেছি。

// এর initial value empty string।

// JavaScript-এ string indexing শুরু হয় ০ থেকে।

// // for loop
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// decrement
// // i--
// প্রতিবার loop চলার পর i-এর মান ১ কমবে।

// : Character যোগ করা
// reversed += str[i];
// reversed = reversed + str[i];


var solution = function(str) {
    let reversed = "";
    let i = str.length - 1;

    while (i >= 0) {
        reversed += str[i];
        i--;
    }

    return reversed;
};
console.log(solution("hello"));
console.log(solution("world"));      // dlrow
console.log(solution("Bangladesh")); // hsedalgnaB
console.log(solution(""));            // ""
console.log(solution("a"));           // a
