export default function(arr=[]){
    let sum  =  0
    for(let i=0;i<arr.length;i++){
        sum=sum+ Math.pow(arr[i],2)
    }
    return sum
}
