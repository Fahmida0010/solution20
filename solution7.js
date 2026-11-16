// Summation=সারসংক্ষেপ
// num = 4;

var summation = function(num){
    let sum = 0;
    for (let i = 1; i<=num; i++){
        sum += i;
}
return sum;
};
console.log(summation(8));
console.log(summation(4));
console.log(summation(1));

// এর তিনটি অংশ:
// - let i = 1 → ১ থেকে loop শুরু হবে।
// - i <= num → যতক্ষণ i-এর value num-এর সমান বা ছোট থাকবে, loop চলবে।
// - i++ → প্রতিবার i-এর value ১ করে বাড়বে।


// Time Complexity কী?

// কোনো algorithm-এর input size বাড়ার সঙ্গে সঙ্গে সেটি কতগুলো operation সম্পন্ন করে, সেটি বোঝানোর একটি পদ্ধতি হলো Time Complexity।

// O(1) মানে কী?

// O(1) মানে Constant Time Complexity।

// অর্থাৎ input size-এর ওপর নির্ভর করে operation-এর সংখ্যা বাড়ে না।

// এ কারণেই Formula solution-এর complexity O(1)।

// num = 1000000 হলে Formula solution-এ কি 1000000 বার loop চলবে?

// না

// Correct!
// Formula solution-এ কোনো loop নেই। নির্দিষ্ট কয়েকটি arithmetic operation হয়।

// Time Complexity কী?
// Time Complexity হলো input-এর পরিমাণ বাড়ার সঙ্গে সঙ্গে
// কোনো Algorithm-এর কাজের পরিমাণ (number of operations)
//  কীভাবে বাড়ে, সেটি পরিমাপ করার পদ্ধতি।

// সহজ ভাষায়:

// কোনো একটা problem solve করতে তোমার code কতগুলো operation execute করছে, input বড় হলে সেই operation কতটা বাড়ছে — সেটাই Time Complexity।

// ধরো:
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(5);
//output
1
2
3
4
5


// . Space Complexity কী?
// Space Complexity হলো কোনো Algorithm execute হওয়ার সময় 
// input এবং auxiliary memory-সহ কতটুকু memory ব্যবহার করছে,
//  সেটি পরিমাপ করার পদ্ধতি।

// সহজ ভাষায়:

// তোমার code কাজ করার সময় কতটুকু অতিরিক্ত 
// memory ব্যবহার করছে, সেটাই Space Complexity-এর মূল ধারণা।

// একটি উদাহরণ দেখি:
function getSum(a, b) {
    let sum = a + b;

    return sum;
}

console.log(getSum(10, 20));
