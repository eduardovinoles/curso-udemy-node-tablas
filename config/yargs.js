const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Multiply table base"
    })
    .option("l", {
        alias: "list",
        type: "boolean",
        default: false,
        describe: "Console log Table "
    })
    .option("u", {
        alias: "upto",
        type: "number",
        default: 10,
        describe: "Set a maximum number to multiply"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "Base must be a number"
        }
        return true
    })
    .argv

    module.exports = argv