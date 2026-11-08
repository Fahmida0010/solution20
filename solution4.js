var repeatString = function(n, s) {
    let result = "";
    for (let i = 0; i < n; i++){
        result = result + s;
    }
    return result;
}
console.log(repeatString(3, "ha")); // hahaha

// এখানে:
// - repeatStr হলো function-এর নাম।
// - n হলো প্রথম parameter।
// - s হলো দ্বিতীয় parameter।