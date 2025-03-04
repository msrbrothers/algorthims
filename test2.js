// selection sort

const arr = [1,2,4,3,5,6,4];
// function selectionsort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let smalestIndex = i;
//         for (let j = i+1; j < array.length; j++) {
//            if(array[j] < array[smalestIndex]){
//              smalestIndex = j
//            }       
//         }
    
//         if(i !== smalestIndex){
//            [array[smalestIndex], array[i]] = [array[i], array[smalestIndex]]
//         }

//    } 
// }

// function quicksort(array) {
//     if(array.length <= 1) return array
//     const left = [], right =[];
//     let poilat = array[array.length -1]
//     for (let i = 0; i < array.length-1; i++) {
//         if(array[i] < poilat){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
   
//     return [...quicksort(left),poilat,...quicksort(right)]
    
// }

//const arr = [1,2,4,3,5,6,4];
// console.log(quicksort(arr));




// function fab(n) {
//     let pre = 0;
//     let nex = 1

//     for (let i = 1; i < n; i++) {
//          let temp = pre + nex;
//          pre =  nex;
//          nex = temp;
//     }

//     console.log(nex);
         
// }


// fab(6)


// function isPalimdrum(str) {
//     const leng = str.length;
//     for (let i = 0; i < leng/2; i++) {
//          if(str[i] !== str[leng-i-1]){
//            return false;
//          }
//     }
//     return true;
// }

// console.log(isPalimdrum('maaaaam'));


// function sustring(str) {
//      let max = 0;
//      for (let i = 0; i < str.length; i++) {
//         const obj = {};
//        for (let j = i; j < str.length; j++) {
//           if(obj[str[j]]){
//             break;
//           }
//           obj[str[j]] = 1
//        }
//        max = Math.max(Object.keys(obj).length,max);
//      }
//      return max;
// }


// function sustring(str) {
//     let setObj = new Set();
//     let max = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(!setObj.has(str[i])){
//             setObj.add(str[i])
//         }else{
//            max = Math.max(max,setObj.size);
//            setObj.delete(str[i])
//         }
//     }
//     return max;
// }
// console.log(sustring('abceabcbb'));








// function cary(a,b,c) {
//      return a +b + c;
// }

// console.log(cary(1,2,3));

// function transform(a) {
//   return function(b){
//     return function(c) {
//         return a +b +c
//     }
//   }
// }

// console.log("output ::",transform(1)(2)(3));


const arrr = [1,3,4,5,7]

const result = arrr.splice(1,0,30)

console.log(result);


console.log(arrr);

console.log([1,2] + [1,2,4]); 

console.log({a :  "3"}+{});

