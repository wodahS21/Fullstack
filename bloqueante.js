var fs = require("fs");
console.log("\nAbriendo Archivo... ");

var content = fs.readFileSync("quijote.txt");
console.log(content);

console.log("\nHaciendo otra cosa.");
console.log(process.uptime());