
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// ------------------Powerful you are. You have ranked up to 7 kyu in JavaScript.--------------------------------//
// points: 50->150



//     Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let present = 0;
    for(let sheep of arrayOfSheep){
      if(sheep === true){
        present++;
      }
    }
    return present;
  }


  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }






//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//   Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

  function lovefunc(flower1, flower2){
//   moment of truth
  if (flower1%2 === 0 && flower2%2 === 1 ||  flower1%2 === 1 && flower2%2 === 0) {
    return true
  }
  return false
}






// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if(p1 === 'scissors' && p2 === 'paper'){
      return "Player 1 won!";
    } else if(p1 === 'scissors' && p2 === 'rock'){
      return 'Player 2 won!';
    } else if(p1 === 'paper' && p2 === 'scissors'){
      return "Player 2 won!";
    } else if(p1 === 'rock' && p2 === 'paper'){
      return "Player 2 won!"
    } else if(p1 === "paper" && p2 === "rock"){
      return "Player 1 won!"
    }else if (p1 === 'rock' && p2 === 'scissors'){
      return "Player 1 won!";
    } else if(p1 === p2){
      return "Draw!";}}


    //   const rps = (p1, p2) => {
    //     if (p1 == p2)
    //       return 'Draw!';
          
    //      if (p1 == 'rock' && p2 == 'scissors') 
    //        return 'Player 1 won!'
    //      else if (p1 == 'scissors' && p2 == 'paper') 
    //        return 'Player 1 won!'
    //      else if (p1 == 'paper' && p2 == 'rock') 
    //        return 'Player 1 won!'
    //      else
    //        return 'Player 2 won!';
    //   };






    //   Given an array of integers.

    //   Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
      
    //   If the input is an empty array or is null, return an empty array.
      
    //   Example
    //   For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


      function countPositivesSumNegatives(input) {
        // your code here
        let myArray = [];
        if(Array.isArray(input) === false || input.length === 0){
          return myArray;
        } else{
          let positiveCount = 0;
          let negativeSum = 0;
          for(let value of input){
            if(value>0){
              positiveCount++;
            } else if(value<0){
              negativeSum += value;
            }
          }
          myArray.push(positiveCount);
          myArray.push(negativeSum);
          return myArray;
          
        }
      }





//       Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //...
    
    let myN = n.toString();
    let newMyN = myN.split("");
    // console.log(newMyN);
    newMyN.sort(function(a,b){return b-a});
    return parseFloat(newMyN.join(""));
  }





//   DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN(pin) {
    //return true or false
    if (pin.length === 4 || pin.length === 6) {
        let indicator = 5;
        for (let i = 0; i < pin.length; i++) {
            if (typeof pin.charAt(i) !== 'number') {
                indicator++;
            }
        }
        return indicator;
    }
    return false;
}





// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	// TODO
  return n*n*n
}





// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
  let myS = s.split();

  for(let i=1; i<n; i++){
      myS.push(s);
  }


  return myS.join('');
  
}




// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split('').reverse().join('');  
}


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
function highAndLow(numbers){
  // ...
  let numArr = numbers.split(" ");
  numArr.sort(function(a, b){return b - a});

  let biggest = numArr[0];
  let smallest = numArr[numArr.length-1];

  return biggest + " " + smallest;

  console.log(numArr);

}

// console.log(highAndLow('5 2 7 1 8 9'));






// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if(n<0 || m<0){
    return 0;
  }
  return m*n
  
}









// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



function longest(s1, s2) {
  // your code
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');

  let comArray = arrS1.concat(arrS2);
  
  let uniqueArrS1 = [];
 
  
  for(let letter of comArray){
    if(uniqueArrS1.includes(letter) === false){
      uniqueArrS1.push(letter);
    }
  }
  
  
  return uniqueArrS1.sort().join('');
 
  

}


let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// console.log(longest(a,b));




// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7









// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
  // Return a new array with the strings filtered out
  let numArr = [];
  for(let element of l){
    if(typeof element === 'number'){
      numArr.push(element);
    }
  }
  return numArr;
}











// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7




const stringToNumber = function(str){
  // put your code here
  return parseInt(str);
}



// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
  //code here
   let s =n.toString().split('').reverse();
  let newArr = [];
  for(let e of s){
    newArr.push(parseInt(e));
  }
  return newArr;
}

let n = 35231;
// console.log(digitize(n));














// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
  let arr = x.split('');
  let newStr = [];
  for(let e of arr){
    //  console.log('hell');
    if(e>=5){
      newStr.push(1)
    }else{
      newStr.push(0);
    }
  }
  return newStr.join('');

}



// console.log(fakeBin('45385'));










// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.


// / Sum Numbers
function sum (numbers) {
    "use strict";
  if(numbers.length === 0){
    return 0;
  }
  let sum = 0;
  for(let num of numbers){
    sum+=num;
  }
  return sum
    
    
};














// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  //your code here
//   let name = prompt("Whats your name? ")
  
  return `Hello, ${name} how are you doing today?`
  
}










// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]


function friend(friends){
  //your code here
  let myFriends = friends.filter(friend => {
    return friend.length === 4;
  });
  return myFriends
}





// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  //You got this!
   let newStr = str.slice(1, str.length-1);
   return newStr;
 
 };





//  Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5



var min = function(list){
  return Math.min(...list);
    
}

var max = function(list){
    
    return Math.max(...list);
}













// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]




function openOrSenior(data){
  // ...
  let output = [];
  for(let array of data){
    if(array[0] >= 55 && array[1] > 7){
      output.push("Senior");
    }  else {
     output.push("Open");
    
  }
  }
 
  return output;
}









// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square



function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let num = Math.sqrt(sq);
  if(Number.isInteger(num) === true){
    return Math.pow(num+1, 2);
  }
  return -1;
}







