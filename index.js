const fs = require('fs')
fs.readFile("input.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    const n  = parseInt(data.toString())
    const arr = []
    for(let i=0;i<n;i++){
        arr[i] = 0
    }
    for(let o=0;o<n;o++){
        console.log(arr[o])
    }
  
    for(let i=n-1;i<n;i--){
        if(arr[i]==0){
            arr[i] = 1
        }
        for(let j=i+1;j<n;j++){
            arr[j] =0
        }
        for(let k=0;i<n;k++){
            console.log(arr[k])
        }
        i=n
    }
})