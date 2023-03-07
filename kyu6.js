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

const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arrS = s.split(" ");
  let shortest = +Infinity;
  let shortestWord = "";
  for (let word of arrS) {
    if (word.length < shortest) {
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
  return Math.floor(time / 2);
}

// console.log(litres(2));

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];

function arrayDiff(a, b) {
  let diff = [];
  for (let num of a) {
    if (b.includes(num) === false) {
      diff.push(num);
    }
  }
  return diff;
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  //...
  if (bool === true) {
    return "Yes";
  }
  return "No";
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

function duplicateCount(text) {
  //...
  let textArr = text.toLowerCase().split("");
  let uniqueLetters = [];
  let duplicateLetters = [];
  for (let text of textArr) {
    if (uniqueLetters.includes(text) === false) {
      uniqueLetters.push(text);
    } else if (uniqueLetters.includes(text) === true) {
      duplicateLetters.push(text);
    }
  }
  let uniqueDuplicateLetters = [];
  for (let e of duplicateLetters) {
    if (uniqueDuplicateLetters.includes(e) === false) {
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
  if (num < 0) {
    return num;
  } else if (num === 0) {
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

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let sum = a + b;

  return sum.toString(2);
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

function findEvenIndex(arr) {
  //Code goes here!
  let equalOrNot = [];
  for (let i = 0; i < arr.length; i++) {
    let part1 = arr.slice(0, i);
    let part2 = arr.slice(i + 1);
    let sum1 = part1.reduce((a, b) => a + b, 0);
    let sum2 = part2.reduce((a, b) => a + b, 0);
    // console.log(part1, sum1, part2,sum2);
    // console.log(arr[i]);
    // console.log(i,part2);
    if (sum1 === sum2) {
      equalOrNot.push("equal");
    } else {
      equalOrNot.push("not");
    }
  }
  // console.log(equalOrNot);
  if (equalOrNot.includes("equal") === true) {
    return equalOrNot.indexOf("equal");
  } else {
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
  for (let n of arr) {
    if (n > 0) {
      s += n;
    }
  }
  return s;
}

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi > 30) {
    return "Obese";
  } else if (25 < bmi && bmi <= 30) {
    return "Overweight";
  } else if (18.5 < bmi && bmi <= 25) {
    return "Normal";
  } else if (bmi <= 18.5) {
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
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9.

function squareSum(numbers) {
  let newNumbers = numbers.map((n) => n * n);
  const sum = newNumbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
}

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

function nbYear(p0, percent, aug, p) {
  var count = 0;
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug);
    count++;
  }
  return count;
}

function nbYear(p0, percent, aug, p, years = 0) {
  if (p0 < p) {
    return nbYear(
      p0 + Math.floor((p0 * percent) / 100) + aug,
      percent,
      aug,
      p,
      ++years
    );
  }
  return years;
}

function nbYear(p0, percent, aug, p) {
  var i = 1;
  var mult = 1 + percent / 100.0;
  var prev = p0;
  while (prev < p) {
    var ne = Math.floor(prev * mult + aug);
    prev = ne;
    i++;
  }
  return i - 1;
}

//Recursive function: exit condition p0 >= p
function nbYear(p0, percent, aug, p) {
  p0 = Math.floor(p0 * (1 + percent / 100) + aug);
  if (p0 >= p) return 1;
  return nbYear(p0, percent, aug, p) + 1;
}

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// Note
// consecutive strings : follow one after another without an interruption

// const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
// const k = 2;

// const strarr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
// const k = 2

// const strarr = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"];
// const k = 1;

const strarr = ["zone", "abigail", "theta", "form", "libe", "zas"];
const k = -2;

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(strarr, k) {
  let n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return "";
  }
  // your code
  let longest = 0;
  let longestStr = "";
  for (let i = 0; i + k <= strarr.length; i++) {
    // console.log(i);
    const arr = strarr.slice(i, k + i);
    // console.log(arr);
    // console.log(arr.join("").length);
    if (arr.join("").length > longest) {
      longest = arr.join("").length;
      longestStr = arr.join("");
    }
  }
  //   console.log(longest);
  //   console.log(longestStr);
  return longestStr;
}

console.log(longestConsec(strarr, k));

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let counter = 0;
  for (let e of arr) {
    if (e.length === 2) {
      if (e[0] === ":" || e[0] === ";") {
        if (e[1] === ")" || e[1] === "D") {
          counter++;
        }
      }
    }
    if (e.length === 3) {
      if (e[0] === ":" || e[0] === ";") {
        if (e[1] === "-" || e[1] === "~") {
          if (e[2] === ")" || e[2] === "D") {
            counter++;
          }
        }
      }
    }
  }
  return counter;
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  return array.map((m) => m * -1);
}

// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

const greet = () => "hello world!";








function duplicateEncode(word) {
  // ...
  let wordArray = word.split("");
  const removeDuplicates = wordArray.filter((e, index) => {
    if(wordArray.indexOf(e) !== index){
      wordArray[index] = ")";
      e = ")";
     
    }
  });
  for(let item of wordArray){
    if(item !== ")"){
      item = "(";
    }
  }
  return wordArray;
}

const word = "112233344445678";

const result7 = duplicateEncode(word);
console.log(result7);












// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.


function getMiddle(s)
{
  //Code goes here!
  const l = s.length;
  return l%2 === 0 ? s.slice(l/2-1,(l/2)+1):s.slice(l/2,(l/2)+1);
}











// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){

  // code away
const nameArr = name.split(" ");
const initials = [];
initials.push(nameArr[0].split('')[0].toUpperCase());
initials.push(nameArr[1].split('')[0].toUpperCase());
return initials.join('.')

}





// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  // your code........
return number%2 === 0 ? number*8 : number*9; 
}










// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
 return dna.replaceAll('T',"U")
}







// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  //Code here
  const smallest = Math.min(...numbers);
  const smallestIndex = numbers.indexOf(smallest);
  numbers.splice(smallestIndex,1);
  const secondSmallest = Math.min(...numbers);
  return smallest + secondSmallest;
}



