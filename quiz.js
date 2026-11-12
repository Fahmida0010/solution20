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