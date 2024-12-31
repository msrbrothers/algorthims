function findLongestSubstring(str) {
    if (str.length < 1) return 0;

    const seen = {}
    let longest = 0;
    let start = 0;


    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }
        longest = Math.max(longest,i - start + 1)
        seen[char] = i + 1;
    }
    console.log("seen ::", seen);

    return longest;
}

console.log(findLongestSubstring('rithmschool'))// 7);
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6