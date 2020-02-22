// function generalBinary(n){
//     let arr = []
//     for(let i =0;i<n;i++){
//         arr[i]=0
//     }
//     console.log(arr)
//     for(let i=n-1;i>=0;i--){
//         if(arr[i]==0){
//             arr[i] =1
//             for(let j=i+1;j<arr.length;j++){
//                 arr[j] =0
//             }
//             console.log(arr)
//         }
//     }
//     for(let i =0 ;i<arr.length;i++){
//         if(arr[i] ===0){
//             arr[i] =1
//             console.log(arr)
//         }
    
//     }
// }
function generalBinary(n){
    let arr = []
    for(let i=0;i<n;i++){
        arr[i] = 0
    }
    console.log(arr)
    for(i=n-1;i>=0;i--){
        if(arr[i]===0){
            arr[i] = 1
            console.log(arr)
            for(let  j = i+1;j<arr.length;j++){
                arr[j]=0
            }
            console.log(arr)
        }
    }
}
generalBinary(3)