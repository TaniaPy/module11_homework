// function practiceUnit (){
//   const tryItYouself = 'Повторение мать учения';
//   console.log(tryItYouself)
// }
// practiceUnit ()




//Задание 1
// let arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', null];


// function evenOddAnother(arr) { 
// let even = 0; 
// let odd = 0; 
// let another = 0; 
  
// for (let i = 0; i < arr.length; i++){
//    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
//        another++;
//     } else {
//        if (arr[i] % 2 === 0) {
//            even++;
//        } else {
//            odd++;
//        }
//     }
// }
//   return [even, odd, another];
// }

// const done = evenOddAnother(arrNumber);

// console.log("Четные " + done[0]);
// console.log("Нечетные " + done[1]);
// console.log("Другое " + done[2]);

//Задание 1

//Задание 2
// function differentNumbers(num){
//     if ((num < 2) || (num > 1000)) {
//         return "Не правильно!";
//     } else {
//         for (let i = 2; i < num; i++){
//             if (num % i === 0) {
//                 return 'Не простое число';
//             }
//         }
//         return 'Простое число';
//     }
// }

// let randNumbers = Math.floor(Math.random() * 1611);
// let prise =  differentNumbers(randNumbers);
// console.log("Число " + randNumbers + ' является  ' + prise);

//Задание 2



//Задание 3
// function someFunc (num5) {
//     return function (num3) {
//         return num5 + num3;
//     }
// }

//console.log(someFunc(5)(3));
//Задание 3

//Задание 4

// function numbersCount(a, b) {
//     let result = a;

//     let intervalId = setInterval(function () {
//         if (result <= b) {
//             console.log(result);
//             result++;
//         }
//         else clearInterval(intervalId);
//     }, 1000);
// }

//  numbersCount(5, 15);

//Задание 4


//Задание 5
// const docSum = (x, n) => {
//     return x * n;
// }

// console.log(docSum(15, 14));


//Задание 5

















