// Statemnts.

/*
* multi
* line
Commnt
*/
//alert('osama 3mk')

//let username;
//username = 'alix';
//alert(username)
// =
//let username = 'alix';
//alert(username);

// let username;
// username = 'alix';
// let age = 16;
// alert(username);
// alert(age);

// let username = 'alix' , age = 16;
// // console.log(username);
// // username = 'bob';
// // console.log(username);

// const username = 'alix' , age = 16;
// console.log(username);
// username = 'bob';
// console.log(username);

// const COLOR_GREEN = 'green';
// const COLOR_BLUE = 'blue';

// Primitive Types.
// // Numbers.
// let age = 14, pi = 3.14;

// // BigInt.
// const bigInt = 1234567890987654321n;

// // Stings.
// let name = 'alix';

// // Booleans.
// let isStudent = false;

// // Nall.
// let lenth = null;

// // Undefine
// let grade;

// let value = true;
// console.log(typeof value);
// value = String(value);
// console.log(typeof value);

// console.log('10' / '2');
// let str = '123';
// console.log(typeof str);
// let num = Number(str);
// console.log(typeof num);

// console.log(Boolean(1));

// let langs = ['java', 'Ruby', 'PHP'];
// console.log(langs);
// // console.log(langs[0]);
// langs[3] = 10;
// console.log(langs);

// console.log(8 + 2);
// console.log(8 - 2);
// console.log(8 * 2);
// console.log(8 / 2);

// //Reminder
// console.log(4 % 2);
// console.log(8 % 3);

// //Increment & decrement.
// let x = 4;
// console.log(x++);
// console.log(x);
// console.log(--x);

// //concatenation.
// console.log('Hello' + ' ' + 'hsoub');
// console.log('1' + 2);
// console.log(2 + '1');
// console.log(2 + 2 + '1');

// console.log(4 <= 1);
// console.log(1 !== 1);
// console.log(1 === '1');
// console.log(1 == '1');
// console.log(true == 1);
// console.log(true == 0);
// console.log(false == 0);
// console.log(false == 1);

// let year = prompt('in which year JavaScript released?');

// if(year == 1996) {
//     alert('Correct!');
//  } else {
//     year = prompt('in which year JavaScript released?');
//     if(year == 1996) {
//         alert('Correct!');
//     } else {
//         alert('incorrect!');
//     }
//  }

// let day = prompt('Enter day')

// if(day == 0) alert('Sunday');
// else if(day == 1) alert('Monday');
// else if(day == 2) alert('Tuesday');
// else if(day == 3) alert('Wednesday');
// else if(day == 4) alert('Thursday');
// else if(day == 5) alert('Friday')
// else if(day == 6) alert('Saturday');
// else alert('Invalid Input!');

// let age = prompt('Enter your age:');

//  if(age > 16) {
//      alert('you can drive');
//  } else {
//      alert('You can’t drive');
//  }

// // condition ? value if true : value if false;
// age > 16 ? alert('you can drive') :  alert('You can’t drive');
// =
// let result = age > 16 ? 'you can drive' : 'You can’t drive';
// alert (result)

// let day = +prompt('Enter day:');

// switch(day) {
//     case 0:
//         console.log('Sunday');
//         break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Invalid Input!');
//         break;
// }

// let i = 10;
// while(i >= 1) {
//     if(i % 2) console.log(i);
//     i--;
//}

// let total = 0;
// while(total <= 100) {
//     total += Number(prompt(`Your total is ${total}`));
//     console.log(total);
// }

// let i = 1;
// do {
//      if(i % 2) console.log(i);
//      i++;
//  } while(i <= 1) ;

// for(let i = 1; i <= 10; i++) {
//     if(i % 2) console.log(i);
// }

//  const msgs = [
//      'Hello',
//      'Hi',
//      'How are you?',
//      'I am fine'
//  ];

// let index = 0;
// while(index <= msgs.length) {
//     console.log(index, msgs[index]);
//     index++;
// }

// for(let i = 0; i < msgs.length; i++) {
//     console.log(i, msgs[i]);

// let index = msgs.length - 1
// while(index >= 0) {
//     console.log(index, msgs[index])
//     index--
// }
// for(let i = 0; i < msgs.length; i++) {
//     console.log(i, msgs[i])
// }
// for(let index in msgs)
//     console.log(index, msgs[index])
// }

// for(let item of msgs) {
//     console.log(item);
// }

// function greetings() {
//     let name = 'osama';
//     console.log('Hello ' + name);
// }

// function odd() {
//     for(let i = 1; i <= 10; i++) {
//         if (i % 2) console.log(i);
//     }
// }

//greetings('osama');

// function greetings(name) {
//     console.log('Hello ' + name);
// }

// greetings('osama');

// function sum(num1, num2 = 0) {
//     return num1 + num2;
// }

// let result = sum(4);
// console.log('result', result);

// //Declaration.
// start();
// function start() {
//     console.log('Start');
// }

// //Expression.
// let stop = function() {
//     console.log('Stop');
// };
// stop();

// const sum = (a, b) => {
//    return  a + b;
// }
// console.log(sum(4,6));

// const square = num => num * num;
// console.log(square(4));

// const hello = () => console.log('Hello World');
// hello();

//  function sum(num1, num2) {
//     //console.log(arguments);
//     let total = 0;
//     for (let num of arguments) total += num;
//     return total;
// }

// console.log(
//     sum(4, 6, 5, 10)
// );

// function sum(first, ...numbers) {
//     console.log(numbers);
//     let total = first;
//     for (let num of numbers) total += num;
//     return total;
// }

// console.log(
//     sum(4, 6, 5, 10)
// );
