function generalBinary(n){
    let arr =[]
    for(let i=0;i<n;i++){
        arr[i]= 0
    }
    console.log(arr)
    for(let i=n-1;i>=0;i--){
        if(arr[i]===0){
            arr[i] = 1
            for(let j=i+1;j<n;j++){
                arr[j]=0
            }
         i=n
        } 
         console.log(arr)
    }
}
generalBinary(4)