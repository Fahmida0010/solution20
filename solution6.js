var positiveSum = function(arr){
     let sum = 0;
     for (let i = 0; i<arr.length; i++){
        if(arr[i] > 0 ){
            sum += arr[i];
        }
     }
     return sum;
}
console.log(positiveSum([1 , -4, 7, 12]))  //output:20


// arr হচ্ছে function-এর parameter। অর্থাৎ, যখন function call করব, তখন array পাঠাব।


// Code                 	কাজ
// let i = 0	         প্রথম index থেকে শুরু
// i < arr.length	     Array-এর শেষ পর্যন্ত চলবে
// i++	                প্রতিবার index ১ করে বাড়বে


// . Time and Space Complexity
// Interview-এ এই প্রশ্ন আসতে পারে।
// Complexity          Value      	Explanation
// Time	               O(n)	        প্রতিটি element একবার check করতে হয়
// Space	           O(1)	        অতিরিক্ত কোনো array তৈরি হচ্ছে না

// এখানে n হচ্ছে array-এর মোট element সংখ্যা।
// ধরো, array-তে ১০০০টি element আছে। তাহলে loop সর্বোচ্চ ১০০০ বার চলবে।

let i = 0 
// kutha theke loop shuru hobe ta nirdharon kore ekhane 
// i er man 0
i < arr.length  
// loop cholbe kina ta porikka kore , condition true hole loop cholbe
// condition false hole loop bondho hobe
i++ 
// increment 
// protibar loop shesh hole i er man 1 kore barbe
// let arr = [10, 20, 30, 40];
// এখন JavaScript-এর কাছে এই array-এর ৪টি element আছে।

// কিন্তু JavaScript array-এর counting শুরু হয় 0 থেকে, 1 থেকে নয়।

// Array-এর index এবং value
// Index 0
// 10
// Index 1
// 20
// Index 2
// 30
// Index 3
// 40

// Index হলো position, আর value হলো সেই position-এ থাকা number।


// মনে রাখার সহজ কৌশল:
// Code	নিজের ভাষায় অর্থ
// let sum = 0	যোগফল শূন্য থেকে শুরু
// let i = 0	প্রথম index থেকে শুরু
// i < arr.length	সব element check করো
// i++	পরের index-এ যাও
// arr[i]	বর্তমান element বের করো
// arr[i] > 0	number positive কি না দেখো
// sum += arr[i]	positive হলে যোগ করো
// return sum	final result ফেরত দাও
