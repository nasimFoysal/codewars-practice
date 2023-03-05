


// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.



const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);















// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s){
  let arrS = s.split(" ");
  let shortest = +Infinity;
  let shortestWord = "";
  for(let word of arrS){
    if(word.length < shortest){
      shortest = word.length;
      shortestWord = word;
    }
  }
  // return shortestWord;
  return shortest;
  
}

// console.log(findShort("bitcoin take over the world"));



// function findShort(s){
//   return Math.min(...s.split(" ").map (s => s.length));
// }


// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 
function litres(time) {
  
  return Math.floor(time/2);
}

// console.log(litres(2));











// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let diff = [];
  for(let num of a){
    if(b.includes(num) === false){
      diff.push(num);
    }
  }
  return diff;
  
}









// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  //...
  if ( bool === true ) {
    return "Yes"
  }
  return "No"
}







// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
  //...
  let textArr = text.toLowerCase().split("");
  let uniqueLetters = [];
  let duplicateLetters = []
  for(let text of textArr){
    if(uniqueLetters.includes(text) === false){
      uniqueLetters.push(text);
    } else if(uniqueLetters.includes(text) === true){
      duplicateLetters.push(text);
    }
  }
  let uniqueDuplicateLetters = [];
  for(let e of duplicateLetters){
    if(uniqueDuplicateLetters.includes(e) === false){
      uniqueDuplicateLetters.push(e);
    }
  }
  return uniqueDuplicateLetters.length;
}













// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.



function makeNegative(num) {
  // Code?
  if(num<0){
    return num;
  } else if(num === 0){
    return num;
  } else {
    return num * -1;
  }
}



















// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""



// korinai bujhinai

function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}















// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


function addBinary(a,b) {
  let sum = a+b;

  return sum.toString(2)

}


















// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.


function findEvenIndex(arr)
{
  //Code goes here!
  let equalOrNot = [];
  for(let i=0; i<arr.length; i++){
    let part1 = arr.slice(0, i);
    let part2 = arr.slice(i+1);
    let sum1 = part1.reduce((a,b)=>a+b,0);
    let sum2 = part2.reduce((a,b)=>a+b,0);
    // console.log(part1, sum1, part2,sum2);
    // console.log(arr[i]);
    // console.log(i,part2);
    if(sum1 === sum2){
      equalOrNot.push('equal');
    }else{
      equalOrNot.push('not');
    }
  }
  // console.log(equalOrNot);
  if(equalOrNot.includes('equal') === true){
    return equalOrNot.indexOf("equal");

  }else{
    return -1;
  }
}

// let arr=[1,2,3,4,3,2,1]
// console.log(findEvenIndex(arr));;















// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let s = 0;
  for(let n of arr){
    if(n>0){
      s+=n
    }
  }
  return s
  
}


function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}












// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



function bmi(weight, height) {
  
  const bmi = weight/(height*height);
  if(bmi>30){
    return "Obese";
  } else if (25 < bmi && bmi <= 30){
    return "Overweight";
  } else if(18.5 < bmi && bmi <= 25){
    return "Normal";
  } else if (bmi<=18.5){
    return "Underweight";
  }
 
}















// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"




function likes(names) {
  // TODO
  if(names.length === 0){
    return  "no one likes this";
  } else if(names.length === 1){
    return `${names[0]} likes this`;
  } else if(names.length === 2){
     return `${names[0]} and ${names[1]} like this`;
    
  }else if(names.length === 3){
     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    
  } else {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    
  }
}







// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9.


function squareSum(numbers){
  let newNumbers = numbers.map(n=>n*n)
  const sum = newNumbers.reduce((acc,curr)=>{return acc+curr},0)
  return sum;

}