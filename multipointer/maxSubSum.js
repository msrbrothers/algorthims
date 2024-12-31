function maxSubSum(arr, num) {
    const lenght = arr.length;
    if (num > lenght) {
        return null;
    }
    let max = 0;
    for (let i = 0; i < lenght - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
            if (temp > max) {
                max = temp;
            }
        }
    }

    return max;
}

//console.log(maxSubSum([2, 3, 5, 1,9], 3));


function optimized(arr, num) {
    let maxSum = 0;
    let tempSume = 0

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    for (let j = num; j < arr.length; j++) {
        tempSume = (maxSum + arr[j]) - arr[j - num];
        if (tempSume > maxSum) {
            maxSum = tempSume;
        }
    }

    return maxSum;
    //console.log(maxSum);

}

console.log(optimized([2, 3, 5, 1, 9], 3));
