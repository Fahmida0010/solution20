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
