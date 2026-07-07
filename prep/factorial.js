function factorial(num){

    let fac = 1;
    for(let i=num ; i>=1;i--){
        fac*=i
    }

    console.log(fac);
    

}

factorial(10)