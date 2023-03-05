


// function validity(mySt) {
//     let myStr = mySt.toString();
//     if(myStr.length === 4 || myStr.length === 6){
//         let myArray = myStr.split('');
//         let notNumbers = [];
//         for (let i = 0; i < myArray.length; i++) {
//             if (isNaN(myArray[i]) || myArray[i] === 'undefined') {
//                 notNumbers.push(myArray[i]);
//             }
//         }
//         if (notNumbers.length > 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

// let myStr = ' 234';
// console.log(validity(myStr));

// console.log(notNumbers);

// let naga = " 786".trim();
// let nagaStr = naga.split("");
// console.log(nagaStr);
// for(let e of nagaStr){
//     console.log(typeof parseFloat(e));
// }


function validatePIN (pin) {
    //return true or false
    let pinStr = pin.toString().trim();
    if(pinStr.length === 4 || pinStr.length === 6){
      let pinArray = pinStr.split('');
      let notNumbers = [];
      for(let element of pinArray){
        if(element === " "){
            notNumbers.push(element);
        }else if(isNaN(element)){
          notNumbers.push(element);
        }
      }


      if(notNumbers.length>0){
        return false;
      }
      return true;
      
    }
    return false;
  
  }

// console.log(validatePIN('78  89'));

// let myArr = [1,2,' ', 5, 8, ' ', 4];
// for(let element of myArr){
//     console.log(typeof element);
// }


function validatePIN (pin) {
    //return true or false
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }

let stt = "holy";
for(let i of stt){
    console.log(i);
}