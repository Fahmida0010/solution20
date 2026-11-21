// এখানে আমাদের দুটি Pointer থাকবে:
// 1. i → Unique Value-এর Position Track করবে।
// 2. j → Array-এর প্রতিটি Element Check করবে।

// var removeDuplicates = function(nums) {


// এখানে আমরা removeDuplicates নামে একটি Function তৈরি করেছি।
// - nums হলো আমাদের Input Array।
// - Function-টি Array গ্রহণ করবে এবং Duplicate Remove করবে।
// যেমন:
// removeDuplicates([1, 1, 2]);
//মনে রাখবে, Array-এর Index শুরু হয় 0 থেকে।


var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};

// Test Case 1
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);

console.log("Unique Count:", k1);
console.log("Updated Array:", nums1.slice(0, k1));

// Test Case 2
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);

console.log("Unique Count:", k2);
console.log("Updated Array:", nums2.slice(0, k2));


// আমাদের দুটি Pointer আছে।
// - i = সর্বশেষ Unique Number কোথায় রেখেছি।
// - j = এখন কোন Number পরীক্ষা করছি।

// . প্রথমে Array-টা দেখো
// let nums = [1, 1, 2];