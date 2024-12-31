const arr = [2, 7, 4,11, 15, -6,-4];
const target = 0;

function towSum(array) {
    let myMap = new Map();
    for (let i = 0; i < array.length; i++) {
        let key = target - array[i];
        myMap.set(array[i], 1)
       if(myMap.get(key)){
         console.log(`${array[i]}  + ${ key }  = ${target}` );
       }
    }
}

towSum(arr)

