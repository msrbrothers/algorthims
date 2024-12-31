function isSubsequence(str1, str2) {
    let i = 0, j = 0;

    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) i++;

        j++;

    }
    if (i === str1.length) return true;
    return false;

}



console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting'));// true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)