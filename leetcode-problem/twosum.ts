// Problem-এ আসলে কী বলছে?
// তোমাকে দুটি জিনিস দেওয়া হবে:
// 1. nums → একটি Array, যার মধ্যে কিছু Number থাকবে।
// 2. target → একটি নির্দিষ্ট Number দেওয়া থাকবে।
// তোমার কাজ হলো Array থেকে এমন দুটি Number খুঁজে বের করা, যাদের যোগফল target-এর সমান হবে।

// কিন্তু একটা গুরুত্বপূর্ণ বিষয়: তোমাকে Number দুটি return করতে হবে না, তাদের Index return করতে হবে।

// const nums = [2, 7, 11, 15];
// // const target = 9;
// এখন Array-তে কোন দুটি Number যোগ করলে 9 হবে?
// - 2 + 7 = 9 ✅
// - 2 + 11 = 13 ❌
// - 2 + 15 = 17 ❌
// এখানে 2 এবং 7 যোগ করলে 9 হচ্ছে।

// এখন Array-তে তাদের Index দেখি:
// 2
// Index 0
// 7
// Index 1
// 11
// Index 2
// 15
// Index 3

// 2 + 7 = 9

// Output: [0, 1]

// কারণ:
// - Number 2-এর Index হলো 0।
// - Number 7-এর Index হলো 1।

// সুতরাং Answer:
// [0, 1]

//solution code####
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {  //Outer Loop

//     for (let j = i + 1; j < nums.length; j++) { //Inner Loop

//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }

//     }
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9));
//  Output: [0, 1]



// function twoSum(nums, target) {

//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {

//     const complement = target - nums[i];

//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }

//     map.set(nums[i], i);
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// // Output: [0, 1]


function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
};
// Test cases
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));