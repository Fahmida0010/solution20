// Problem 19: Length of Last Word
var lengthOfLastWord = function(s) {
    let words = s.trim().split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon   "));
console.log(lengthOfLastWord("luffy is still joyboy"));
