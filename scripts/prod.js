const fs = require('fs');
const path = require("path");
var recursive = require("recursive-readdir");
var filewatcher = require('filewatcher');

var liveServer = require("live-server");
var watcher = filewatcher();
let basePath = "";
let config = JSON.parse(fs.readFileSync(basePath+"package.json").toString());
function isFileCompilable(fileName) {
    var compilableFiles = [
        ".vue",
        ".js",
        ".css",
        ".html"

    ]
    for (let format of compilableFiles) {
        if (fileName.includes(format)) {
            return true;
        }
    }
    return false;
}



function start() {
    for (let directory of config.directories) {
        recursive(`${basePath}${directory}`).then((files) => {
            for (let file of files) {
                //console.log(file);
                compileFile(file, directory);
            }
        }).catch((reason) => {
            console.log("Error recopiling files");
            console.log(reason);
        });
    }
    for (let indiv of config.files) {
        compileFile(basePath + indiv, "");
    }
   
    setTimeout(() => {
        console.clear();
        console.log("Files compiled sucessfully");
    }, 1000)

}

function compileFile(file, folder = null) {


    var re = new RegExp("--rootpath--", 'g');
    console.log(`Compiling ${folder == null ? "root" : folder}/${file}`)
    if (!fs.existsSync(basePath+"dist")) {
        fs.mkdirSync(basePath+"dist/");
    }
    let fileFolder = basePath+"dist/" + folder;
    if (!fs.existsSync(fileFolder)) {
        fs.mkdirSync(fileFolder);
    }
    if (isFileCompilable(file)) {
        let text = fs.readFileSync(file).toString();
        let cleanText = text.replace(re, "/.gr3cache");
        fs.writeFileSync(fileFolder + path.basename(file), cleanText);
    } else {
        fs.writeFileSync(fileFolder + path.basename(file), fs.readFileSync(file));
    } 
}
start();