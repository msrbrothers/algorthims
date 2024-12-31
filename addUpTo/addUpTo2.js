
function addUpTo(n) {
    let total = 0;
    for (let index = 1; index <= n; index++) {
        total = total + index;
    }

    return total
}

const t1 = performance.now();
const totalSume = addUpTo(1000000000);

const t2 = performance.now()

console.log(`Time Elapsed : ${(t2-t1)/1000}` );
