// Rule 1: যদি AM হয় এবং hour 12 হয়

// 12:00:00AM → 00:00:00

// কারণ 12 AM মানে midnight বা রাত ১২টা।

// Rule 2: যদি PM হয় এবং hour 12 হয়

// 12:30:45PM → 12:30:45

// এখানে কোনো পরিবর্তন করতে হবে না।

// // কারণ 12 PM মানে দুপুর ১২টা।

// Rule 3: যদি PM হয় এবং hour 12 না হয়

// Hour-এর সঙ্গে 12 যোগ করতে হবে।

// 07:05:45PM

// 07 + 12 = 19

// Result: 19:05:45

// Rule 4: যদি AM হয় এবং hour 12 না হয়

// কোনো পরিবর্তন করতে হবে না।
// 07:05:45AM → 07:05:45

// What does slice() do?

// slice() একটি string-এর নির্দিষ্ট অংশ বের করে।

// slice(-2) মানে string-এর শেষ থেকে ২টি character বের করা।


var timeConversion = function (s){
    let period = s.slice(-2);
    let time = s.slice(0,8);
    let [hour, minute, second] = time.split(":");
    hour = Number(hour);
    if (period === "AM" && hour === 12){
        hour = 0;
    }
    else if (period === "PM" && hour !== 12){
        hour += 12;
    }
    return String(hour).padStart(2, "0") + ":" + minute + ":"+second;

};

console.log(timeConversion("12:00:00AM")); // 00:00:00
console.log(timeConversion("12:30:45PM")); // 12:30:45
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("07:05:45AM")); // 07:05:45

// slice() ekti string er nirdirshto ongsho ber kore 
// // slice(-2) mane string er shesah theke 2 ta character ber kora

// let s = "07:05:45PM";

// console.log(s.slice(-2));

// let time = s.slice(0, 8);
// // এখানে slice(0, 8) দিয়ে index 0 থেকে index 7 পর্যন্ত
// //  character নিয়েছি।

// let s = "07:05:45PM";

// console.log(s.slice(0, 8));

// let [hour, minute, second] = time.split(":");

// "I will solve this problem using string manipulation and conditional statements.

// First, I will extract the AM/PM suffix using slice(-2), and then extract the time portion using slice(0, 8).

// Next, I will use split() to separate the hour, minute, and second.

// Since the hour is initially a string, I will convert it into a number using Number().

// Then I will handle two special cases:
// - If the period is AM and the hour is 12, I will convert the hour to 0.
// - If the period is PM and the hour is not 12, I will add 12 to the hour.
// Finally, I will use padStart() to ensure the hour always contains two digits and return the formatted time."

// Why use slice(-2)?	To extract the last two characters, AM or PM.
// Why use split()?	To separate hours, minutes, and seconds.
// Why use Number()?	To convert the hour string into a number for calculation.
// Why use padStart()?	To ensure the hour always has two digits.
// Why check hour !== 12?	Because 12 PM is already correct in 24-hour format.
// What is the time complexity?	O(1), because the input has a fixed length.
// What is the space complexity?	O(1), because we use a fixed number of variables.


// Algorithm:
// 1. Extract AM/PM.
// 2. Extract HH:MM:SS.
// 3. Split hour, minute, second.
// 4. Convert hour into number.
// 5. If 12 AM → hour = 0.
// 6. Else if PM and hour is not 12 → hour += 12.
// 7. Format and return the result.


function convertTo12Hour(time) {
    let [hour, minute, second] = time.split(":"); //19:05:45 কে তিনটি অংশে ভাগ করছি।// - hour = "19"// - minute = "05"// - second = "45"

    hour = Number(hour); //Convert hour to number

    let period = hour >= 12 ? "PM" : "AM"; //এখানে ternary operator ব্যবহার করেছি। Hour 12 বা তার বেশি হলে PM। - অন্যথায় AM।

    if (hour === 0) { //Handle midnight//24-hour format-এ 00 মানে 12 AM।
        hour = 12;
    } 
    else if (hour > 12) { //Handle afternoon/evening
        hour -= 12;
    }

    let formattedHour = String(hour).padStart(2, "0");

    return `${formattedHour}:${minute}:${second}${period}`;
}

console.log(convertTo12Hour("19:05:45"));
// 07:05:45PM

// Interview English Answer:

// "I would first split the time into hours, minutes, and 
// seconds. Then I would determine whether it is AM or PM based
//  on the hour. If the hour is zero, I would convert it to 12.
//   If it is greater than 12, I would subtract 12. Finally,
// I would format the hour using padStart and append AM or PM."
