// Problem: Given an array of numbers, remove all 
// duplicate values and return a new array containing
//  only unique numbers.

// বাংলায়: একটি array থেকে একই সংখ্যা একাধিকবার
//  থাকলে সেগুলো বাদ দিয়ে প্রতিটি সংখ্যাকে একবার করে রাখতে হবে।

// // create an emplty array 
// let result  = [];
// // Loop through the array
//  for (let num of numbers){

//  }

//  Checks whether an array contains a particular value.//কোনো array-এর মধ্যে নির্দিষ্ট value আগে থেকেই আছে কি না পরীক্ষা করে।
//  result.includes

//  let result = [1,2,3];
//  console.log(result.includes(2)); // true
//  console.log(result.includes(4)); // false

// var removeDuplicates = function(numbers){
//     let result = [];
//     for (let num of numbers){
//         if (!result.includes(num)){
//             result.push(num);
//         }
//     }
//     return result;
// }

// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // [1,2,3,4,5]

// ... হলো Spread Operator।//এটি array-এর elements বের করে নতুন array-তে যোগ করে।
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 5, 6, 7];

// function removeDuplicates(arr1, arr2) {
//     let combined = [...arr1, ...arr2];
//     let result = [];

//     for (let num of combined) {
//         if (!result.includes(num)) {







//             result.push(num);
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates(
//     [1, 2, 3, 4, 5],
//     [1, 3, 5, 6, 7]
// ));

function findCommon(arr1, arr2) {
    let result = [];

    for (let num of arr1) {
        if (arr2.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}
console.log(findCommon(
    [1, 2, 3, 4, 5],
    [1, 3, 5, 6, 7]
)); // Output: [1, 3, 5]