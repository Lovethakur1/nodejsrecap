function isPrime(num){
    if(num===1) return false

    if(num===2) return true

    if(num%2===0) return false

    const boundry = Math.sqrt(num)

    for(let i = 3;i<=boundry;i+=2){
        if(num%i===0)return false
    }
return true

    
}

console.log(isPrime(11));

