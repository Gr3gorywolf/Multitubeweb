
const getFilePath = (file) => {
    if (process.env.VUE_APP_MODE === "prod") {
        return "/" + file.split(/(\\|\/)/g).pop();
    }
    else {
        return file;
    }
}


export const decodeData = (data) => {
    var parsedData = [];
    var allElements = data.split("¤").sort();
    for (var element of allElements) {
        if (element.trim() != "") {
            var individualElements = element.split("²");
            if (individualElements[0] != null && data.trim() != "") {
                var name = individualElements[0];
                var link = individualElements[1];
                var file = getFilePath(individualElements[2]);
                var imageUrl = process.env.VUE_APP_PORTRAITS_PATH + link.split("=")[1];
                parsedData.push({
                    image: imageUrl,
                    link: link,
                    name: name,
                    file: file
                });
            }
        }
    }
    return parsedData;
}


