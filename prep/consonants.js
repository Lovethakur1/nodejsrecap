function consonants(str){
    let count =0;
    const vowels = 'aeiou'

    for(let char of str.toLowerCase()){
        if( char >= "a" && char <= "z" && !vowels.includes(char)){
            count++
        }
    }

   return count
}


console.log(consonants('lovel1'));
