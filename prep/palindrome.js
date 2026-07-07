function palindrome(num){

    if(num<0)return false

    let currentNum = num ;

    let reverse =0

    while(num>=1){
        let lastnumber = num%10
        reverse= (reverse *10)+lastnumber
        num = (num-lastnumber)/10
    }

   return reverse===currentNum;

   


}

console.log(palindrome(131));
console.log(palindrome(-131));
console.log(palindrome(132));


