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



function start(recompiling = false) {


    console.log("Injecting test data...");
    rimraf(basePath+"dev");
    copyFolderSync(basePath+"testdata",basePath+"dev");
    console.log("Moving files to dev folder...");
   
    for (let directory of config.directories) {
        recursive(`${basePath}${directory}`).then((files) => {
            for (let file of files) {
                //console.log(file);
                compileFile(file, directory);
            }
        }).catch((reason) => {
            console.log("Error recopiling files");
            console.log(reason);
        }).finally(() => {
            if (!recompiling)
                watcher.add(`${basePath}${directory}`);
        });
    }
    for (let indiv of config.files) {
        compileFile(basePath + indiv, "");
        if (!recompiling)
            watcher.add(basePath + indiv);
    }
   
    setTimeout(() => {
        console.clear();
        console.log("Files compiled sucessfully");
        if (!recompiling) {
            console.log("Running Watcher....");
            runWatcher();
            runHttpServer();
        }
    }, 1000)

}

function compileFile(file, folder = null) {


    var re = new RegExp("--rootpath--", 'g');
    console.log(`Compiling ${folder == null ? "root" : folder}/${file}`)
    if (!fs.existsSync(basePath+"dev")) {
        fs.mkdirSync(basePath+"dev/");
    }
    let fileFolder = basePath+"dev/" + folder;
    if (!fs.existsSync(fileFolder)) {
        fs.mkdirSync(fileFolder);
    }
    if (isFileCompilable(file)) {
        let text = fs.readFileSync(file).toString();
        let cleanText = text.replace(re, "");
        fs.writeFileSync(fileFolder + path.basename(file), cleanText);
    } else {
        fs.writeFileSync(fileFolder + path.basename(file), fs.readFileSync(file));
    } 
}

function rimraf(dir_path) {
    if (fs.existsSync(dir_path)) {
        fs.readdirSync(dir_path).forEach(function(entry) {
            var entry_path = path.join(dir_path, entry);
            if (fs.lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                fs.unlinkSync(entry_path);
            }
        });
        fs.rmdirSync(dir_path);
    }
}

function copyFolderSync(from, to) {
    fs.mkdirSync(to);
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}




function runWatcher() {
    watcher.on('change', function (file, stat) {
        console.log('File modified: %s', file);
        if (!stat) console.log('file deleted');
        console.log("recompiling...");
        start(true);
    });
}


function runHttpServer() {

    var params = {
        port: 3600, // Set the server port. Defaults to 8080.
        host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
        root: basePath+"dev", // Set root directory that's being served. Defaults to cwd.
        open: true, // When false, it won't load your browser by default.
        file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
        wait: 0, // Waits for all changes, before reloading. Defaults to 0 sec.,
        logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
        middleware: [function (req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
    };
    liveServer.start(params);


}




start();