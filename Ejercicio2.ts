/*Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers. */

function miniMaxSum(arr: number[]): void {
    let arrSort: number[] = arr.sort();
    let minNum: number = 0;
    let maxNum: number = 0;
    
    for(let i = 0; i< arrSort.length; i++){
        if(i === 0) continue
        else{
            maxNum += arrSort[i]
        } 
    }
    let arrSortReverse: number[] = arr.sort().reverse();
    
    for(let i = 0; i< arrSortReverse.length; i++){
        if(i === 0) continue
        else{
            minNum += arrSort[i]
        } 
    }
    
    
    console.log(minNum, maxNum)
    
}