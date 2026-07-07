function Fibonacci(num){
   if(num<=0) return 0;
   if(num===1) return 1;

   let prev = 0
   let current =1 ;


    for(let i=2;i<=num;i++){

        let next = prev + current

        prev = current
        current = next

    }

    return current;

}
console.log(Fibonacci(3));

