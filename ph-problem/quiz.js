// ### JavaScript MCQ Questions & Answers

// 1\. What happens when you access a missing object property?

// Answer: D. Prototype chain lookup.

// 2\. What is the limitation of a shallow copy?

// Answer: B. Nested reference shared.

// 3\. What is currying?

// Answer: B. Transform function into chain functions.

// 4\. What is idempotency?

// Answer: B. Same result repeatedly.

// 5\. What is the role of the event loop?

// Answer: C. Handle async task scheduling.

// 6\. What is the function hoisting behavior?

// Answer: A. Fully hoisted.

// 7\. What is the output of the given code?

// Answer: B. C B A.

// 8\. What is a generator function?

// Answer: B. Returns multiple values using `yield`.

// 9\. What is the output of the given code?

// Answer: A. `[1, 2]`.

// 10\. What is garbage collection based on?

// Answer: B. Reachability.

// 11\. What is throttling?

// Answer: B. Limit execution rate.

// 12\. What does the nullish coalescing operator check?

// Answer: A. Null or undefined.

// 13\. What is event delegation?

// Answer: B. Single parent listener.

// 14\. What are the two phases of an execution context?

// Answer: B. Creation and execution.

// 15\. What is prototypical inheritance?

// Answer: C. Object inherits from object.

// 16\. What does `this` depend on in normal functions?

// Answer: B. Call site.

// // ########
// ### **1. Question:**

// What will be the output?

// ```javascript
// let a = {x:1};
// let b = a;
// a = {x:2};
// console.log(b.x);

// ```

// * **Answer:** 1



// ---

// ### **2. Question:**

// What is executed first in the event loop? Option A: macrotask, Option B: microtask, Option C: both equal, Option D: random.

// * **Answer:** Option B: microtask



// ---

// ### **3. Question:**

// What will be the output?

// ```javascript
// for (var i=0; i<3; i++){
//     setTimeout(()=>console.log(i),0);
// }

// ```

// * **Answer:** B. 3 3 3



// ---

// ### **4. Question:**

// What will be the output?

// ```javascript
// console.log(NaN === NaN);

// ```

// * **Answer:** B. false



// ---

// ### **5. Question:**

// What will be the output?

// ```javascript
// let x = 10;
// (function(){
//     console.log(x);
//     let x = 20;
// })();

// ```

// * **Answer:** C. ReferenceError



// ---

// ### **6. Question:**

// What will be the output?

// ```javascript
// let a = 1;
// function test() {
//     console.log(a);
//     var a = 2;
// }
// test();

// ```

// * **Answer:** undefined



// ---

// ### **7. Question:**

// What does symbol provide? Option A: unique identifiers, Option B: numbers, Option C: strings, Option D: arrays.

// * **Answer:** Option A: unique identifiers

// ---

// ### **8. Question:**

// Lexical environment determines scope based on what? Option A: Run time, Option B: Code structure, Option C: Async queue, Option D: Browser.

// * **Answer:** Option B: Code structure

// ---

// ### **9. Question:**

// Microtasks are executed when? Option A: Before call stack. Option B: After current execution. Option C: After microtask. Option D: Random.

// * **Answer:** Option B: After current execution

// ---

// ### **10. Question:**

// What will be the output?

// ```javascript
// console.log([] == ![]);

// ```

// * **Answer:** A. true



// ---

// ### **11. Question:**

// What will be the output?

// ```javascript
// console.log(null == 0);

// ```

// * **Answer:** B. false



// ---

// ### **12. Question:**

// What causes memory leaks in JavaScript? Option A: primitive variables, Option B: unused closures or references, Option C: functions, Option D: loops.

// * **Answer:** Option B: unused closures or references

// ---

// ### **13. Question:**

// Which queue has higher priority? Option A: set timeout, Option B: set interval, Option C: promise.then, Option D: do.

// * **Answer:** Option C: promise.then

// ---

// ### **14. Question:**

// What is the scope chain used for? Option A: loop control, Option B: variable resolution, Option C: async handling, Option D: memory cleanup.

// * **Answer:** Option B: variable resolution


let a = {x:1};
let b = a;
a = {x:2};
console.log(b.x);

// ekhane 
// let a = {x:1}
// একটি object তৈরি হলো। a সেই object-টিকে reference করছে।
// a = {x:2};
// এখানে a-কে নতুন object দেওয়া হচ্ছে। কিন্তু b আগের object-টিকেই reference করছে।
// JavaScript-এ asynchronous কাজের জন্য বিভিন্ন queue থাকে।

// দুটি গুরুত্বপূর্ণ queue:
// - Macrotask queue: setTimeout, setInterval, DOM events ইত্যাদি।
// - Microtask queue: Promise.then(), queueMicrotask(), MutationObserver ইত্যাদি।

// example
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// output//
// Start
// End
// Promise
// Timeout

// কেন এমন হলো?
// 1. Start synchronous, তাই প্রথমে execute।
// 2. setTimeout callback macrotask queue-তে যায়।
// 3. Promise callback microtask queue-তে যায়।
// 4. End synchronous, তাই Promise-এর আগেই execute।
// 5. Call stack খালি হলে microtask queue execute হয়।
// 6. এরপর macrotask queue থেকে Timeout execute হয়।

// Execution order
// 1. Synchronous code
// 2. Microtask queue
// 3. Macrotask queue

for (var i=0; i<3; i++){
    setTimeout(()=>console.log(i),0);
}

// Answer: 3 3 3


// প্রথমে loop বুঝি:
// Iteration	i-এর value
// 1st	         0
// 2nd	         1
// 3rd           2
// Loop শেষ	     3

// এখন প্রশ্ন হলো, setTimeout কখন execute হবে?

// setTimeout asynchronous। তাই loop শেষ হওয়ার পর callback-গুলো execute হবে।

// কিন্তু এখানে var ব্যবহার করা হয়েছে।

// var হলো function-scoped। অর্থাৎ তিনটি callback একই i variable-কে reference করছে।

// Loop শেষ হওয়ার পর i = 3।

// তাই তিনটি callback-ই 3 print করবে।
// 3
// 3
// 3


// What will be the output?
// console.log(NaN === NaN);


// Answer: B. false
// NaN অর্থ Not a Number।

console.log(NaN === NaN); // false

// কারণ JavaScript-এর নিয়ম অনুযায়ী NaN নিজেকেও equal মনে করে না।

// তাহলে NaN check করব কীভাবে?
console.log(Number.isNaN(NaN)); // true

console.log(isNaN("hello"));        // true
console.log(Number.isNaN("hello")); // false

// NaN === NaN সবসময় false।

let x = 10;

(function(){
    console.log(x);
    let x = 20;
})();

// Answer: C. ReferenceError
// এটি Temporal Dead Zone (TDZ)-এর উদাহরণ।
// // let x = 10;
// Global scope-এ x = 10।

// এরপর IIFE (Immediately Invoked Function Expression) execute হয়:

// Temporal Dead Zone (TDZ)

// let এবং const variable-এর declaration-এর শুরু থেকে initialization হওয়ার আগ পর্যন্ত সময়কে TDZ বলে।


// What does Symbol provide?
// Options:
// - A. Unique identifiers
// - B. Numbers
// - C. Strings
// - D. Arrays
// Answer: A. Unique identifiers
// JavaScript-এর Symbol হলো একটি primitive data type। এটি unique identifier তৈরি করতে ব্যবহার করা হয়।


// . Lexical environment determines scope based on what?
// Options:
// - A. Run time
// - B. Code structure
// - C. Async queue
// - D. Browser
// Answer: B. Code structure
// Lexical scope নির্ধারিত হয় কোড কোথায় লেখা হয়েছে, তার উপর।

// অর্থাৎ একটি function কোন scope-এর ভিতরে declare করা হয়েছে, সেটিই তার outer scope নির্ধারণ করে।

// Example:
// let name = "Global";

// function outer() {
//     let age = 21;

//     function inner() {
//         console.log(name);
//         console.log(age);
//     }

//     inner();
// }

// outer();


// Output:
// Global
// 21


// কেন?

// inner() function-টি outer() function-এর ভিতরে লেখা হয়েছে। তাই inner() তার নিজের scope-এর পাশাপাশি outer() এবং global scope-এর variable-ও access করতে পারে।

// এটিই lexical scope-এর ধারণা।