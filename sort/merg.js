const array = [2, 3, 5, 4, 67, 6, 7, 11, 5, 6, 4, 33];


function mergSort(arr) {
    const len = arr.length;
    if (len <= 1) return arr;

    const mid = (len / 2) | 0;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, len);

    return merg(mergSort(left), mergSort(right))

}

console.log(mergSort(array));


function merg(arr1, arr2) {
    let i = 0, j = 0;
    const output = [];
    while (arr1.length > i && arr2.length > j) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i])
            i++;
        } else {
            output.push(arr2[j])
            j++;
        }
    }
    while (arr1.length > i) {
        output.push(arr1[i])
        i++
    }

    while (arr2.length > j) {
        output.push(arr2[j])
        j++
    }

   return output
   // console.log(output);

}

//console.log(merg([1, 4, 7, 8], [2, 3, 5, 9]));
