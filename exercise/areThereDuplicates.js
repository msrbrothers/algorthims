function areThereDuplicates(...arr) {
    const frequency = {};

    for (const char of arr) {
        if (frequency[char]) {
            return true;
        } else {
            frequency[char] = 1
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a'))// true