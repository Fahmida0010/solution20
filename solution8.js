//input
b = true

// মনে রাখবে: true এবং "true" এক জিনিস নয়।
// Boolean	String
// true	"true"
// false	"false"

// - true হলো Boolean data type।
// - "true" হলো String data type।
// - String-এর মধ্যে quotation marks থাকে।


var booleanToString = function(b){
    return String(b);

};
console.logString(true);  // "true"
String(false); // "false"
String(100);   // "100"
String(null);  // "null"

//var booleanToString = function(b) {
// এখানে আমরা booleanToString নামে একটি function তৈরি করেছি।
// - b হলো function parameter।
// - এখানে Boolean value আসবে।
// - যেমন true অথবা false।

var booleanToString = function(b){
    return b.toString();
}

// এখানেও একই কাজ হবে।

// toString() হলো JavaScript-এর একটি method, যা value-কে String-এ convert করে।

// উদাহরণ:
// true.toString();  // "true"
// false.toString(); // "false"

var booleanToString = function(b){
    return b ? "true" : "false";
};


// Type Conversion হলো JavaScript-এ একটি data type থেকে অন্য data type-এ পরিবর্তন করার প্রক্রিয়া।
// // JavaScript-এ Type Conversion প্রধানত দুই ধরনের।
// Explicit Type Conversion
// Explicit মানে আমরা নিজেরা ইচ্ছা করে একটি data type-কে অন্য data type-এ convert করি।
// example:
let number = 100;

let str = String(number);

console.log(str);        // "100"
console.log(typeof str); // "string"


// Implicit Type Conversion (Type Coercion)
// Implicit মানে JavaScript নিজে থেকেই প্রয়োজন অনুযায়ী একটি data type-কে অন্য data type-এ convert করে।

// এক্ষেত্রে আমরা সরাসরি conversion function ব্যবহার করি না।

// Example:
let result = "10" + 5;

console.log(result);        // "105"
console.log(typeof result); // "string"