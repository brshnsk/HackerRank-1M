/*Given an array of integers, where all elements but 
one occur twice, find the unique element.*/


function lonelyinteger(a: number[]) {
    
    let repeat = {} as any;
    
    a.forEach(num => {
        if(!repeat.hasOwnProperty(num)){
            repeat[num] = 1;
        } else{
            repeat[num] += 1;
        }
    })
    
    for(let i in repeat){
        if(repeat[i] == 1) {
            return parseInt(i)
        }
    }
}