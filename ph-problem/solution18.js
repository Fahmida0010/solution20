// Problem 18: Reverse String

// s = ["h", "e", "l", "l", "o"];


var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap two characters
        let temp = s[left];

        s[left] = s[right];

        s[right] = temp;

        // Move pointers
        left++;
        right--;
    }

    console.log(s);
};

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
