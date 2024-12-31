function linearSearch(arr,n){
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
      console.log(n)
      if(arr[i] == n) {
          console.log(arr[i])
          return i
      }
   }
   
   return -1
  }
  
  
  linearSearch([100], 100)