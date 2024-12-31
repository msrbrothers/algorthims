// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false



function isSame(n1,n2) {
    const str1= `${n1}`
    const str2= `${n2}`

    if(str1.length !== str2.length){
        return false;
    }

    const frequency1 = {}

    for (const char of str1) {
        frequency1[char]? frequency1[char]++ : frequency1[char] = 1;
    }
    
  
    for (const char of str2) {
        if(!frequency1[char]){
            return false;
        }else{
            frequency1[char]--; 
        }
    }

    return true
}

console.log("Responce ::", isSame(182,281));
console.log("Responce ::", isSame(34,14));
console.log("Responce ::", isSame(3589578,5879385));
console.log("Responce ::", isSame(22,222));