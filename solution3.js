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