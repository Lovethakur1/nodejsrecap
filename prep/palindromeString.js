function palindromeStr(str){

    let rev = "";
    for(let i =str.length-1;i>=0;i-- ){
        rev +=str[i]
    }

    if(rev === str) return true;
    
    return false;
}

console.log(palindromeStr("naman"));
