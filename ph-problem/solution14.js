// Problem 14: Move Zeroes

// nums = [0, 1, 0, 3, 12];

// আমাদের কাজ:
// - সবগুলো Zero (0) Array-এর শেষে নিয়ে যেতে হবে।
// - Non-zero Number-গুলোর Order পরিবর্তন করা যাবে না।
// - নতুন কোনো Array তৈরি করা যাবে না।
// - Original Array-তেই পরিবর্তন করতে হবে।
// - Function থেকে কিছু Return করতে হবে না।
// তাহলে Output হবে:
// // [1, 3, 12, 0, 0]
// এখানে লক্ষ্য করো:
// - 0 দুটি ছিল, তাই শেষে 0 দুটি থাকবে।
// // - 1, 3, 12 আগে যেভাবে ছিল, সেভাবেই আছে।
// আমরা এখানে Two Pointer Technique ব্যবহার করব।

// দুটি Variable ব্যবহার করব:
// let i = 0;
// let j = 0;


// এখানে:
// - i = Non-zero Number কোথায় বসবে, সেই Position নির্দেশ করবে।
// - j = Array-এর প্রতিটি Element Check করবে।

// if(nums[j]! ==0){
//     [nums[i], num[j]] =[nums[j],nums[i]];
//     i++;
// }

// nums[j]!==0 
// nums[0] !==0

var moveZeroes = function(nums) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {

        console.log("Before:", nums);
        console.log("i =", i, "j =", j);
        console.log("nums[j] =", nums[j]);

        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];

            console.log("After Swap:", nums);

            i++;
        }

        console.log("Updated i =", i);
        console.log("-------------------");
    }

    console.log("Final Array:", nums);
};

moveZeroes([0, 1, 0, 3, 12]);
