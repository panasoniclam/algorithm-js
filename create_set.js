function Create_Set() {
    const collection  = []

    this.has = element=>{

        return (collection.indexOf(element)!==-1)
    }

    this.add = element=>{
        if(!this.has(element)){
            collection.push(element)
            return true

        }
        return  false
    }

    this.remote =  element=>{
        if (this.has(element)){
            let index = collection.indexOf(element)
            collection.splice(index,1)
            return true

        }
        return  false
    }

    this.values = ()=>{
        return collection
    }
    this.union = otherSet =>{
        const unionSet = new Create_Set() ;
        const firstSet = unionSet.values();
        const secondSet = otherSet.values() ;

        firstSet.forEach(element=>{
            if (!unionSet.has(element)){
                unionSet.add(element)
            }
        })

        secondSet.forEach(element=>{
            if (!unionSet.has(element)){
                unionSet.add(element)
            }
        })
        return unionSet
    }

}