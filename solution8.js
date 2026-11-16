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