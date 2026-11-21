// . Problem-টা আসলে কী বলছে?
// তোমাকে একটি array দেওয়া হবে। তোমার কাজ হলো প্রতিটি index-এর জন্য তার আগের সব সংখ্যার যোগফল বের করা।

// অর্থাৎ, প্রতিটি সংখ্যার সঙ্গে তার আগের সব সংখ্যা যোগ করতে হবে।

// ধরো:
// nums = [1, 2, 3, 4]

// এখন আমাদের output হবে:
// // [1, 3, 6, 10]
// কেন?
// - প্রথম সংখ্যাটি: 1
// - দ্বিতীয় সংখ্যাটি: 1 + 2 = 3
// - তৃতীয় সংখ্যাটি: 1 + 2 + 3 = 6
// // - চতুর্থ সংখ্যাটি: 1 + 2 + 3 + 4 = 10
// Logic বোঝো (সবচেয়ে গুরুত্বপূর্ণ)
// আমাদের দুটি জিনিস প্রয়োজন:
// 1. sum — এখন পর্যন্ত যত সংখ্যার যোগফল হয়েছে, সেটা রাখবে।
// 2. result — প্রতিটি ধাপে পাওয়া যোগফলগুলো রাখবে।

// let sum = 0;
// let result = [];

// for (let i = 0; i <nums.length; i++){
//     sum = sum + nums [i];
//     result.push(sum);
// }


// for loope i mane Iteration

// Iteration 1
// i = 0
// প্রথম iteration

// sum = 0 + 1; // 1
// result.push(1);

// Iteration 2
// i = 1
// sum = 1 + 2; // 3
// result.push(3);


// sum = 3

// result = [1, 3]

// Iteration 3
// i = 2
// sum = 3 + 3; // 6
// result.push(6);


// sum = 6

// result = [1, 3, 6]

// Iteration 4
// i = 3
// sum = 6 + 4; // 10
// result.push(10);


// sum = 10

// result = [1, 3, 6, 10]

// Final Output
// [1, 3, 6, 10]

var runningSum = function (nums){
    let sum = 0; //যোগফল রাখার জন্য variable
    let result = []; //নতুন array তৈরি
   for (let i = 0; i<nums.length; i++){
    sum = sum + nums [i];
    result.push(sum);
   } 
   return result;
}

console.log(runningSum([1,2,3,4]));
// [1,3,6,10]

console.log(runningSum([1,1,1,1,1]));
// [1,2,3,4,5]

// প্রতিটি লাইনের কাজ কী?
// Code	কাজ
// let sum = 0	           যোগফল রাখার জন্য variable
// let result = []	        নতুন array তৈরি
// i = 0	                প্রথম index থেকে শুরু
// i < nums.length       	array-এর শেষ পর্যন্ত loop
// sum += nums[i]	        বর্তমান সংখ্যা যোগ
// result.push(sum)	        যোগফল array-তে রাখা
// return result	       final array return করা

// একটি বিষয় মনে রাখবে:

// sum += nums[i] এবং sum = sum + nums[i] একই কাজ করে।

// Time Complexity ও Space Complexity
// Time Complexity: O(n)

// কারণ array-তে যতগুলো element থাকবে, loop ঠিক ততবার চলবে।

// যেমন:
// - 4 elements → 4 iterations
// - 100 elements → 100 iterations
// - 1000 elements → 1000 iterations
// Space Complexity: O(n)

// কারণ আমরা নতুন একটি result array তৈরি করছি, যেখানে n সংখ্যক element থাকবে।
// 7. এবার তোমার Practice!
// এখন আমি তোমাকে একটি ছোট প্রশ্ন দিচ্ছি। নিজে solve করার চেষ্টা করো।
// Question:

// যদি input হয়:
// nums = [2, 5, 1, 3]