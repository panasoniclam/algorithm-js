var letters = []
var word = "ahihi"
var rword=""
for(let i=0;i<word.length;i++){
    letters.push(word[i])
}

for(let i=0;i<word.length;i++){
    rword += letters.pop()
}
if(word==rword){
    console.log("success!")
}