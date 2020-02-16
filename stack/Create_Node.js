class Note {
    constructor(data,left=null,right=null) {
        this.data  = data
        this.right = right
        this.left = left
    }
}

class SBT {
    constructor() {
        this.root = null
    }

     add(data){
        const note = this.root
         if(note=== null){
             this.root = new Note(data)
             return ;
         }else if (note!== null){
             const searchTree = function (note ) {
                 if (data<note.data){
                     if (note.left=== null){
                         note.left = new Note(data)
                         return ;
                     } else if (note.left!== null){
                         return searchTree(note.left)
                     }
                 } else if (data>note.data){
                     if (note.right=== null){
                         note.right = new Note(data)
                         return;
                     }else if (note.right!== null){
                         return searchTree(note.right)
                     }
                 }else {
                     return null
                 }
             }
             return searchTree(note)
         }
     }
     findMin = ()=> {
        let current = this.root
         while(current.left){
            current = current.left
         }
         return current.data
     }
     findMax = ()=>{
        let current = this.root
         while(current.right){
            current = current.right
         }
         return current.data
     }


}