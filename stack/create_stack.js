function create_stack() {
    this.count = 0 ;
    this.storygate = {} ;

    this.push = value=>{
        this.storygate[this.count] = value
        this.count ++
    }

    this.pop = ()=>{
        this.count --
        let result = this.storygate[this.count]
        delete this.storygate[this.count]
        return result
    }

    this.size = ()=>{
        return this.count
    }

    this.peek  = ()=>{
        return this.storygate[this.count-1]
    }
}