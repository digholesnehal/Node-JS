const chalk = require("chalk")
const getNotes = require("./Notes.js")

console.log(getNotes(chalk.green(" Success")))

// const fs = require("fs");
// fs.writeFileSync("Notes.txt", "I am Snehal.")
// fs.appendFileSync("Notes.txt", " I am learning Node.js")