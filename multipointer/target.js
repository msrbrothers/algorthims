function sumeZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sume = arr[left] + arr[right];
        if (sume === 0) {
            console.log([arr[left], arr[right]]);
            right--;
            left++;
        // return [arr[left], arr[right]] if we awant nly one output
        }else if(sume > 0){
           right--;
        }else {
            left++;
        }
    }
}

console.log(sumeZero([-4,-3,-2,-1,0,1,2,3,10]));
