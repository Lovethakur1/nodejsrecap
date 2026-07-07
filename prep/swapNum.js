function swapNum(a,b){
     let x = a
     let y = b
     console.log(`before swap a :- ${x} , b :-${y} `);
     y = y+x;
     x=y-x
     y=y-x

     console.log(`after swap  a :- ${x} , b :-${y} `);
     
}

swapNum(3,4)