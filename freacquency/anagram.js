function validAnagram(str) {
    // add whatever parameters you deem necessary - good luck!
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - (i + 1)]) {
            return false;
        }
    }

    return true;

}

console.log(validAnagram('ara2'))

function isStrSame(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= lookup[letter];
        }
    }


    console.log(lookup);

    return true;
}

console.log("is same ::", isStrSame('rav', 'var'));
