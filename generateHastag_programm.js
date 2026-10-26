//Write a function generateHashtag that takes a string as input and returns a hashtag version of the string. The hashtag should be in camel case format, with the first letter of each word capitalized and no spaces between words. If the input string is empty or contains only whitespace, the function should return false.

function generateHashtag(str){
    if(str.trim().length === 0){
        return false;
    }
    let words = str.split(" ");
    let camelCaseWords = words.map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    // let camelCaseWords = words.map(word=> word.replace(word[0], word[0].toUpperCase()));
return "#"+camelCaseWords.join("");
}

console.log(generateHashtag("I aM leaRniNG javaScriPt"));