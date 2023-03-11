/*Given a square matrix, calculate the absolute difference between the sums of its diagonals. */

function diagonalDifference(arr: number[][]): number {  
    let sum1: number = 0; 
    let sum2: number = 0; 
    let index = arr.length - 1;
    
    for(let i = 0; i < arr.length; i++){
        sum1 += arr[i][i]    
        sum2 += arr[i][index]
        index--
    }
    if(sum1 >sum2){
        return sum1-sum2;
    }
    
    return sum2-sum1;
}