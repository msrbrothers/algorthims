// This is the best way regx is time consuming 

function charCount(str) {
    const obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (IsAlphNumeric(char))
            obj[char] = ++obj[char] || 1
    }
    return obj;
}

// a -z = 96 - 123
// A-Z = 64 - 91
// 0-9 = 47-58
function IsAlphNumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 96 && code < 123) && !(code > 64 && code < 91) && !(code > 47 && code < 58)) {
        return false
    }
    return true
}
console.log(charCount('Ravindra0011@'));
