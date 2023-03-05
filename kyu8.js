// 50 points 


// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]



// soln
function countBy(x, n) {
  let z = [];
  for(let i=1; i<=n; i++){
    z.push(i * x);
  }

  return z;
}




// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


var summation = function (num) {
  // Code here
  let sum = 0;
  for(let i=1; i<= num; i++){
    sum += i;
  }
  return sum;
}







// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints);
  let total = 0;
  for(let point of classPoints){
    total += point;
  }
  let avg = total/classPoints.length;
  if(avg>=yourPoints){
    return false;
  } else {
    return true;
  }
}






// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24











// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'



function smash (words) {
   return words.join(" ").trim();

};



// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
  //your code here
  return number * -1;
}


// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  if(array.length === 0){
    return 0;
  }else{
    let sum = 0;
  for(let num of array){
    sum += num
  }
  let avg = sum / array.length;
  return avg;
    
  }
}




// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    //your code here
    if(num>0){
      let value = "";
      for(let i=1; i<=num; i++){
        value += i + " sheep..."
    }
      return value;
    } else {
      return "";
        }
    }



