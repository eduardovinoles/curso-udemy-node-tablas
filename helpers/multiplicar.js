const fs = require("fs")
const colors = require('colors')

const createFile = async (base = 5, l = false, u) => {

    try {
        
        let salida = ""
        let cons = ""
        for (let i = 1;(u)? i <= u : i <= 10; i++) {
            salida += (` ${base} x ${i} = ${base * i}\n`)
            cons += (` ${base} ${"x".red} ${i} ${"=".red} ${base * i}\n`)
        }
        if(l){   
            console.log("==================".america)
            console.log("TABLE OF:", base)
            console.log(`==================`.america)
            console.log(cons)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`

    } catch (err) {
        throw err
    }
}

module.exports = {
    createFile
}