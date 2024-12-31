function pettern(str) {
    for (const char of str) {
        if (/[a-z]/.test(char)) {
            console.log('Lower case ::', char);
        } else if (/[A-Z]/.test(char)) {
            console.log('Upper Case', char);
        } else if (/[0-9]/.test(char)) {
            console.log('Numer', char);
        } else {
            console.log('Some special char ::', char);

        }
    }
}

pettern('Ravi@1009')


function charCount(str) {
    const obj = {};
   for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if(/[a-z A-Z 0-9]/.test(char)){
          if(obj[char] > 0){
           obj[char]++;
          }else{
            obj[char] = 1
          }
      }
   }
   return obj;
}

console.log(charCount('Ravindra@00011'));
