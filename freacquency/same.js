function isSame(arr1,arr2) {
    //1 Check the size
    if(arr1.length !== arr2.length) return false;

    const frequency1 = {}
    const frequency2 = {}

    //2. Create frequency 1 obj
    for (const value of arr1) {
        frequency1[value] = ++frequency1[value] || 1
    }

    //3. Create frequency 2 obj
    for (const value of arr2) {
        frequency2[value] = ++frequency2[value] || 1
    }

    console.log("f1 ::", frequency1);
    console.log("f2 ::", frequency2);
    
    
    // Check frequency

    for (const key in frequency1) {
        if(!(key ** 2 in frequency2)){
            return false;
        }
        
        if(frequency1[key] !== frequency2[key ** 2]){
            return false
        }
    }

    // return

    return true
    
}

console.log('responce ::', isSame([1,1,2,3], [1,1,4,9]));
