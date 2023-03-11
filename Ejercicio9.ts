//Given a sentence , tell Roy if "S" it is a pangram or not.

function pangrams(s: string): string {
    const stringLowerCase: string = s.toLowerCase()
    const pangram = "pangram";
    const notPangram = "not pangram"
    
    let count: number = 0;
    let letter: string[] = [];
    
    letter.push(stringLowerCase[0])
    
    for(let i = 1; i < stringLowerCase.length; i++){
        if(letter.includes(stringLowerCase[i])){
            continue
        }else{
            letter.push(stringLowerCase[i])
            count ++
        }
    }
    
    if(count == 26) return pangram;
    return notPangram
}
