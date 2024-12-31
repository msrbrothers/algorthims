// fib(4) // 3 
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// [1,1,2,3]
function fib(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    let pre = 1, next = 1, temp;
    
    for (let i = 2; i < n; i++) {
        temp = pre + next;
        pre = next;
        next = temp; 
    }
    
    return next;
 }
 
 console.log(fib(4))