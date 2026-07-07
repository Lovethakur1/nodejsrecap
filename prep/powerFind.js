function power(a , b){
    let current = 1

    for(let i=0;i<b;i++){
        current*=a;
    }

    return current;
}


console.log(power(2,3));

