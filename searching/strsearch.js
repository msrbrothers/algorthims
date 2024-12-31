let str1 = 'lorie loled lolp', str2 = 'lol';

function naiveSearch(longStr, sortStr) {
    let count = 0;
    const indexArr = []
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < sortStr.length; j++) {
            if (sortStr[j] !== longStr[i + j]) {
                break
            } 
            if(j === sortStr.length -1){
                let obj = {
                    start : i,
                    end : i + j
                }
               indexArr.push(obj)
            }
            
        }
       
    }

    console.log(indexArr);
    
}

naiveSearch(str1,str2)