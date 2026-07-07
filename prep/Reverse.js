function reverse(num){

    let isNag = num<0;

    if(isNag){
        num = -num
    }

    let reversNum = 0

    while(num>=1){
        let lastNumber = num%10;
        reversNum = (reversNum*10)+lastNumber
        num = (num-lastNumber)/10
    }

    return isNag ? -reversNum : reversNum

}

console.log(reverse(-198));
