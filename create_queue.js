function Create_Queue() {
    const collection  = []
    this.print = ()=>{
        return console.log(collection)
    }

    this.dequeue = ()=>{
        return collection.shift();
    }

    this.enqueue = element=>{
        return collection.push(element)
    }

    this.size = ()=>{
        return collection.length
    }

    this.emtry = ()=>{
        return (collection.length ==0)
    }

}

const a = new Create_Queue()
a.enqueue("ee")
a.enqueue("ssss")
a.print()
a.dequeue()
a.print()