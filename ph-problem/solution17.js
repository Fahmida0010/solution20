// Problem 17: Plus One

// var plusOne = function(digits){
//     for (let i = digits.length - 1; i>=0; i--){
//         if(digits[i] <9){
//             digits[i]++;
//             return digits;
//         }
//         digits[i]=0;
//     }
//     digits.unshift(1);
//     return digits;
// };

var plusOne = function(digits) {

    console.log("Initial Array:", digits);

    for (let i = digits.length - 1; i >= 0; i--) {

        console.log("Current Index:", i);
        console.log("Current Digit:", digits[i]);

        if (digits[i] < 9) {

            digits[i]++;

            console.log("Digit is less than 9");
            console.log("After Increment:", digits);

            return digits;
        }

        digits[i] = 0;

        console.log("Digit is 9, setting it to 0");
        console.log("After Carry:", digits);
    }

    digits.unshift(1);

    console.log("All digits were 9");
    console.log("After unshift:", digits);

    return digits;
};


// Test cases

console.log("Example 1:");
console.log("Output:", plusOne([1, 2, 9]));

console.log("------------------");

console.log("Example 2:");
console.log("Output:", plusOne([4, 3, 2, 1]));

console.log("------------------");

console.log("Example 3:");
console.log("Output:", plusOne([9, 9, 9]));