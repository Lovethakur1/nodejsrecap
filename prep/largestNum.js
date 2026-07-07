function largestesNumber(a, b, c){
    if(a>b && a>c){
        return a;
    }
    else
        if(b>c)
    {
        return b;
    }
    else{
        return c;
    }
}

console.log(largestesNumber(7,6,5));
