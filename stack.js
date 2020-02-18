class Stack {
    constructor(){
        this.count = 0 
        this.storage = {}
    }
    push(value){
        this.storage[this.count] = value
        this.count ++
    }
    pop(){
        if(this.count ==0 ){
            return undefined
        }

        this.count  -- 
        var result = this.storage[this.count]
        delete(this.storage[this.count])
        return result
    }
    // size(){
    //     return this.count
    // }
    peek(){
        return this.storage[this.count-1]
    }
}
Stack.prototype.size = function(){
    return this.count 
}

const stack  = new Stack()
console.log(stack.size())