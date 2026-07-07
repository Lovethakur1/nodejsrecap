function wordCount(sentence){

    let count = 0
    let inWord = false

    for(let char of sentence){
        if(char !== " " && !inWord){
            count++;
            inWord = true;
        }else if (char === " ") {
            inWord = false;
        }
    }

    return count

}

console.log(wordCount("I love JavaScript"));


