// // যেসব সংখ্যা 5 দিয়ে নিঃশেষে ভাগ যায়, সেগুলো 5-এর multiple।
// Original grade	Next multiple of 5	Difference	Final grade
// 73	               75	                              2	          75
// 67	70	3	67
// 38	40	2	40
// 33	35	2	33
// 84	85	1	85
// 29	30	1	29
// 57	60	3	57
// 75	80	5	75

var gradingStudents = function (grades) {
   let result = [];
   for (let grade of grades){
    if (grade < 38){
        result.push(grade);
    }else{
        let nextMultiple = Math.ceil(grade/5) *5;
        let difference =nextMultiple - grade;
        if (difference<3){
 result.push(nextMultiple);
        }else {
            result.push(grade);
        }
    }
   }
   return result;
}
console.log(gradingStudents([84, 29, 57, 33]));


// Concept	Meaning
// var	Declares a variable
// let	Declares a block-scoped variable
// function=Creates a reusable function
// parameter = Input variable in function definition
// argument =Actual value passed during function call
// array = A collection of elements/store multiple values in a single variable
// for..of   = Iterates over elements of an array
// if...else= execute code based on a condition


// var is a JavaScript keyword used to declare a variable.
//javascript e variable devlare korar jonno var use kora hoy
// eta gradingStudents function name 
//  the function key word use to create a function in JavaScript.
// kunu nirdishto kaj korar jonno reuseable block of code 
// toiri korte function use kora hoy 
// grades holo parameter of the function gradingStudents
//  function er vitore baire theke je input grohon kora hoy 
// take parameter bole.
// gradingStudents([73, 67, 38, 33]); //function call
// তাহলে [73, 67, 38, 33] হলো argument।
// parameter = function defination er vitorer variable 
// argument = function call korar somoy pathanu actual value
// আমাদের কাছে একটি array আছে:
//  let grades = [73 ,67,38,33]
// : Create an empty array
// let result = []
// for (let grade of grades) {
//     // logic to determine the final grade
// }
// for = loop chalanur key word
// let = variable declare korar keyword
// grade = protibar ekta kore number accept korbe
// of = array theke protiti element ber kore anbe
// grades = our original array
// Check whether grade is below 38
//  if (grade < 38 ){
//  result.push(grade);
// }
// if = kunu condition check kore 
// < = less than operator
// 38 = minimum passing grade
// push() =array er shesh e notun element add kore
// Math.cell()  //কোনো দশমিক সংখ্যাকে তার পরবর্তী পূর্ণসংখ্যায় নিয়ে যায়। //rounds a number up to the nearest integer.

// Math.ceil(2.1);  // 3
// Math.ceil(2.5);  // 3
// Math.ceil(2.9);  // 3
// Math.ceil(2.0);  // 2
// Math.ceil(grade/5) * 5;
// 73/5= 14.6
// Math.ceil(14.6) = 15
// 15*5 = 75
// 75-73 = 2
// let nextMultiple =Math.ceil(grade/5) * 5;
// console.log(nextMultiple); // 75
// calculate the difference between next multiple and grade
// let difference = nextMultiple - grade;
// nextMultiple = 75
// grade = 73
// // difference = 75-73 = 2
// if (difference < 3) {
//     result .push(nextMultiple);
// }else {
//     result.push(grade);
// }

// return result //Return the final array after processing all grades.

// The main idea is to iterate through each grade. If a grade is below 38, we keep it unchanged. Otherwise,
//  we calculate the next multiple of 5 using Math.ceil(grade / 5) * 5. Then we calculate the difference. 
//  If the difference is less than 3, we round up; otherwise, we keep the original grade. Finally, we return the new array."
