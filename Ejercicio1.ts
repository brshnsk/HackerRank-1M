/*Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  places
after the decimal.*/


function plusMinus(arr: number[]): void {
    let total: number = arr.length;
    let positiveNumber: number[] = arr.filter(num => num > 0);
    let negativeNumber: number[] = arr.filter(num => num < 0);
    let zero: number[] = arr.filter(num => num === 0);
    
    let resultPositive: number = (positiveNumber.length / total);
    
    let resultNegative: number = (negativeNumber.length / total);
 
    let resultZero: number = (zero.length / total);

    console.log(`${resultPositive}\n${resultNegative}\n${resultZero}`)
   
}
