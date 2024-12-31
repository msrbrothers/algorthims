function maxSubarraySum(array, n) {
    const length = array.length;
    if (length < n) return null;

    let maxSume = 0;

    for (let i = 0; i < n; i++) {
        maxSume += array[i]
    }
    
    let tempMax = maxSume;
    for (let i = n; i < length; i++) {
        tempMax = tempMax - array[i - n] + array[i];
        maxSume = Math.max(tempMax, maxSume)
    }

    return maxSume;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
  console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
  console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
  console.log(maxSubarraySum([2,3], 3) );// null