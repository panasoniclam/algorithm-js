export default function  (arr=[]){
    let sum  = 0 
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            sum+= 1/arr[i]
        }
    }
    return sum
}
 