const fs = require('fs')
function generalBinary() {
    fs.readFile("input.txt", (err, data) => {
        if (err) {
            console.log("error read file ")
        } else {
            let arr = []
            let n = parseInt(data.toString())
            for (let i = 0; i < n; i++) {
                arr[i] = 0
            }
            fs.writeFile("output.txt", (arr.toString() + "\n") , (err) => {
                return err
            })
            for (let i = n - 1; i >= 0; i--) {
                if (arr[i] == 0) {
                    arr[i] = 1
                    for (let j = i + 1; j < n; j++) {
                        arr[j] = 0
                    }
                    i = n
                }
                fs.writeFile("output.txt", (arr.toString() + "\n") , (err) => {
                    return err
                })
            }
        }
    })
}

generalBinary()
