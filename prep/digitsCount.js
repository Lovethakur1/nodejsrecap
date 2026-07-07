function digitCount(num){
    if(num===0) return i

    if(num<0){
        num=-num
    }

    let count =0;

    while(num>=1){
        let rem = num%10
        num = (num - rem)/10

        count++
    }

    return count;
}
console.log(digitCount(49687));

