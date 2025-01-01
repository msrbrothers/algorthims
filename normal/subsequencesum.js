const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4] // output : 6
//const arr1 = [-10, 1, 2, 3, 4]

function subSequence(array) {
    let maxSum = array[0];
    let tempSum = array[0];
    for (let i = 0; i < array.length; i++) {
         tempSum = Math.max(array[i], tempSum + array[i]);
         maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum

}

console.log("data ::", subSequence(arr2));
