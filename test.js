

async function promis(index) {
    return new Promise((res, rej)=>{
        const mul = index * 2
        console.log("prmiss");
        
        setTimeout(() => {
            res(mul)
        }, 1000);
    })
}


setTimeout(() => {
    console.log('time ut utside');
    
}, 1000);


async function main(params) {
    for (let index = 1; index < 6; index++) {
       const res = await promis(index);
       console.log(res); 
    }
}


main()