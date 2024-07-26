// 2024 Ogabek

function findFibonacci(){
let whichFibonacci = 2

// This if/else used to avoid unnecessary working of compiler
if(whichFibonacci <= 0){
    /*
    returns NaN if 
    */
    return NaN
} else if (whichFibonacci == 1){
    // 
    return 0
} else if (whichFibonacci == 2){
    //
    return 1
}
 // Our program easily could return value for 1st, 2nd and non-fibonacci number
 // for 3rd and higher fibonacci numbers we use loop

while (whichFibonacci - 2 > 0){
   // For 3rd fibonacci number we need only 1 cycle of loop
   // For 4th => 2 cycles
   // For 5th => 3 cycles
   // For 6th => 4 cycles
   // ...

   // here comes interesting point
   // To find (n)th fibonacci number we need (n - 2) cycles of loop

let firstNumber = 0;
let secondNumber = 1;
    console.log(`Nimadurla ${firstNumber}`)
    firstNumber++
}
}


console.log(findFibonacci())
