var fs = require("fs");

fs.appendFile("mynewfile1.txt", "Hellp content!", function(err){
    if(err) throw err;
    console.log("Saved!");
})