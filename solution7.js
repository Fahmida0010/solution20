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