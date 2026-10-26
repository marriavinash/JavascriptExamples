//wrtie a function findTheLargest that takes string as input and returns the longest word in the string.
//if there are multiple longest words, return the first one occurs on string.

 function findTheLargest(str){
    let words = str.split(" ");
    if(words.length === 0){
        return false;
    }
    let sortedWords = words.sort((a,b)=> b.length - a.length);
    return sortedWords[0];
 }

function findTheLargest(str){
    let words = str.split(" ");
    if(words.length === 0) {
        return false;
    }
    let longestWord = words[0];
    for(let i=1; i<words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}

function findTheLargest(str){
    let words = str.split(" ");
    if(words.length === 0) {
        return false;
    }
    return words.reduce((accum, currentWord) => currentWord.length > accum.length ? currentWord : accum, ""); 
}

 console.log(findTheLargest("I am a software engineering10012 programmer")); // Output: "engineer"
 