const { createFile } = require("./helpers/multiplicar")
const argv = require("./config/yargs")
const colors = require('colors')

console.clear()


//console.log(argv);

//º const [ , , arg3 = "base=5" ] = process.argv // base=5 by default if nothing else
// const [ , base = 5] = arg3.split("=")

// const base = 3

createFile( argv.b, argv.l ,argv.u)
    .then( fileName => console.log( fileName.rainbow, "created".green))
    .catch( err => console.log(err))

///ctrl + k + c
//ctrl + k + u 