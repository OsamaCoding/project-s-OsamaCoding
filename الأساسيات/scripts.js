// var number = 10;
// var decimalNumber = 45.94;
// var name = 'osama';
// var isNull = true;

// const pi = 3.14;
// const academyName = 'osama';

// let firstNam = 'osama';
// let osama = 'osama' + '3mk'
// let firstNumber, secondNumber;

// firstNumber = 7; secondNumber = 8;

// Statemnts.

/*
 multi
 line
Commnt
*/

// alert('osama 3mk')
// console.log('osama 3mk');
// document.write('اهلا يا اسامة')

// var heading = document.getElementById('title');

// heading.innerHTML = 'osama ahla bk';

// let firstNumber = 5;
// let secondNumber = 8;
// let sum = firstNumber + secondNumber;
// console.log('result is :' + sum)

// let number = 20;

//Incremnting Operator
// number++;
// console.log(number)

//Decrementing Operator
// number--;
// console.log(number)

// let x = 5;
//     y = 10;

// let result = x != y;
// console.log(result);
// let result = 5 < 7 && 9 < 6;
// caches.log(result);
// let result = 5 != 7 || 9 > 6;
// console.log(result);

// let academy = 'hsoub';

// //Get character by index
// console.log(academy.charAt(1));// prints 's'

// //Get index of text
// console.log(academy.indexOf('oub'));// prints '2'

// //Get string length
// console.log(academy.length);

// //Extract a part of string
// console.log(academy. substring(1,4));// prints'sou'
// console.log(academy.slice (1,4));// prints'sou'
// console.log(academy.substr (1,3));// prints'sou'

// //Replace string
// console.log(academy.replace('hsoub', 'hsoub academy'));// prints'hsoub academy'

// //Upper & Lower case
// console.log(academy.toUpperCase());// prints'HSOUB'
// console.log(academy.toLowerCase());// prints'hsoub'

// let currentDate = new Date();

// let year = currentDate.getFullYear();
// let month = currentDate.getMonth()+1;
// let day = currentDate.getDate();
// let hour = currentDate.getHours();
// let minutes = currentDate.getMinutes();

// let fullDateTime = year + '/' + month + '/' + day +  '-'  + hour + ':' + minutes;

// console.log(fullDateTime);

// let result = 9;

// if(result >= 10){
//     console.log('you succeed');
// }else{
//     console.log('you failed')
// }

// let x = 20,
//   y = 10;

// let Operator = "+";

// switch (Operator) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);
//     break;
//   case "*":
//     console.log(x * y);
//     break;
//   case "/":
//     console.log(x / y);
//     break;
// }

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter++;
// }

// do {
//   console.log(counter);
//   counter++;
// } while (counter < 10);

// function sayHello() {
//   let userName = document.getElementById("txtName").value;

//   alert("Welcome, " + userName);
// }

// function sum(x, y) {
//   return x + y;
// }
// let firstNumber = 78,
//   secondNumber = 45;

// alert(sum(firstNumber, secondNumber));

// DOM
// let heading = document.getElementById("title");

// let paragraph = document.getElementsByClassName("content");

// let allParagraphs = document.getElementsByTagName("p");

// console.log(heading);
// heading.innerHTML = "THis is a title";

// console.log(paragraph);
// paragraph[0].innerHTML = "<u>This is the paragraph content.</u>";

// console.log(allParagraphs);
// allParagraphs[1].innerHTML =
//   "<b style= 'color:purple; '>This is the second paragraph.</b>";

// const newPargraph = document.createElement("p");

// newPargraph.innerHTML = "Thid i s the content of the newly cteated paragraph";

// let content = document.getElementById("content");

// content.appendChild(newPargraph);

//Array
// let names = ["kalid", "Ahmed", "osama"];

// let numbers = [6, 9, 3, 7, 5, 23];

// console.log(numbers.length);

// names.sort();

// console.log(names);

// for (i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let person = {
//   name: "Ahmed",
//   age: 32,
//   address: "Egypt, cairo, 12",
//   isMarried: true,
// };

// console.log(person);

//Scope

//local

//Global

// let academyName = "hsoub";

// function displayName() {
//   console.log(academyName);
// }

// console.log(academyName);

// academyName = "hsoub";

// console.log(academyName);

// var academyName;
//hoisting declaration

//Events

// function changeStyle() {
//   let control = document.getElementById("txtName");

//   control.style.backgroundColor = "beige";
//   control.style.border = "2px solid orange";
// }

// call Bake

// let title = document.getElementById("title");

// title.addEventListener("click", function () {
//   title.innerHTML = "You clicked on the title!";
// });

// function validate() {
//   let age = document.getElementById("age").value;
//   let isChecked = document.getElementById("agree").checked;

//   return isChecked && !isNaN(age);
// }
