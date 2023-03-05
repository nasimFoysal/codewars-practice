// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     let present = 0;
//     for(let sheep of arrayOfSheep){
//       if(sheep === true){
//         present+= 1;
//       }
//         //  present+= 1; 
//     }
//     return present;
//   }

//   var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];

// console.log(countSheeps(array1));



const rps = (p1, p2) => {
    if (p1 === 'scissors' && p2 === 'paper') {
        return "Player 1 won!";
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return 'Player 2 won!';
    } else if (p1 === "paper" && p2 === "paper") {
        return "Draw";
    }
};


//   console.log(rps('scissors', "paper"));



let n = 15;
// function descendingOrder(n){
//     //...

//     let myN = n.toString();
//     let newMyN = myN.split("");
//     // console.log(newMyN);
//     newMyN.sort(function(a,b){return b-a});
//     return parseFloat(newMyN.join(""));
//   }

// console.log(descendingOrder(n));

// descendingOrder(n)

let nn = n.toString().split('');
// console.log(nn);




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


console.log(validatePIN('1234'));

//   console.log(num.length);

// let pin = '7667'
// console.log(pin.charAt(0)); 



let numbers = [1, 2, 2];
let newNumbers = numbers.map(n=>n*n)
const sum = newNumbers.reduce((acc,curr)=>{return acc+curr},0)
console.log(sum);