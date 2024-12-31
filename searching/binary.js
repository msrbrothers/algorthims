const arr = [1,2,4,5,6,7];

function search(arr,n) {
    let start = 0, end = arr.length;
    for(let index = 0; index < arr.length; index++) {
        let mid =  Math.floor((start + end ) /2);
        if(arr[mid] === n){
            return mid
        }else{
            if(arr[mid] < n){
                start = mid + 1;
            }else{
               end = mid
            }
        }
    }
    return -1
}

console.log("5 numer is at ",search([1,2,4,5,6,7],8));
