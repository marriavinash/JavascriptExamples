//write a function countChar that takes two inputs string and character to count. The function should
//return number of times the sc=pecified character appears in the string

function countChar(str, char){
    let characters = str.split("");
    if(characters.length === 0){
        return false;
    }
    // let count =0;
    // for(let i=0; i<characters.length; i++){
    //     if(characters[i].toLowerCase() === char.toLowerCase()){
    //         count = count + 1;
    //     }
    // }
    // return count;
    // let totalCount = characters.reduce((accum , character)=>{ 
    //     if(character.toLowerCase() === char.toLowerCase()){
    //         accum++;
    //     }
    //         return accum;
    //     }, 0);
    return totalCount;
}

console.log(countChar('AnimalAuthorization', "i"));
