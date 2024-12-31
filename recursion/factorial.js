function factorial(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i
    }
    
    return total;
}

console.log(factorial(4)); // 3*2*1=6


// Convert it in recusion

function recursion(num) {
     if(num === 1) return 1

     return num * recursion(num -1)
     
}


 let total = recursion(7);
 console.log(total);
 