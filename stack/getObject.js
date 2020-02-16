 function GetObject(object, path) {
    path = path? path.split("."): [ path ];
    for(let i = 0; i < path.length; i++) {
        let route = path[i];
        if (object === null) break;
        if (object === undefined) break;
        if (Array.isArray(object) && isNaN(+route))
            object = object.map((x) => {return (x || null) && x[route]});
        else
            object = object[route];
    }
    return object
}

// const obj =  '[{"schema" : "user_change_queue", "schemaCondition" : "is", "schemaConditionValue" : [{"value" : "duonglq2"}]},{"schema" : "queue", "schemaCondition" : "is", "schemaConditionValue" : [{"value" : "NOC"}]}]'
 const obj = [
     {
         "schema" : "user_change_queue",
         "schemaCondition" : "is",
         "schemaConditionValue" : [
             {
                 "value" : "duonglq2"
             }
         ]
     },
     {
         "schema" : "queue",
         "schemaCondition" : "is",
         "schemaConditionValue" : [
             {
                 "value" : "NOC"
             }
         ]
     }
 ]

 function test(object ,len){
    let arr = []
    for (let i=0;i<len;i++){
        if (object=== null) break ;
        if (object=== undefined) break ;
        if (Array.isArray(object[i])) {
            object[i] = object[i].map(x => {
             arr.push(x)
            })
        }
        arr.push(object[i])
    }
    return arr
 }

console.log(test(obj,obj.length))