function occurrences(num , target){

    let count = 0 ;

    while(num>0){

        const lastDigit = num%10

        if(lastDigit===target){
            count++;
        }

        num = (num/10) | 0;


    }

    return count;


}


console.log(occurrences(45657 , 4));
