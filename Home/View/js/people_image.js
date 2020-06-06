function getFileURL(file) {
    let getUrl = null;
    if (window.createObjectURL !== undefined) { // basic
        getUrl = window.createObjectURL(file);
    } else if (window.URL !== undefined) { // mozilla(firefox)
        getUrl = window.URL.createObjectURL(file);
    } else if (window.webkitURL !== undefined) { // webkit or chrome
        getUrl = window.webkitURL.createObjectURL(file);
    }
    return getUrl;
}

let fileElement = document.querySelector("#head-file");
let imgElement = document.querySelector(".people-head");
fileElement.onchange = function () {
    let url = getFileURL(fileElement.files[0])
    imgElement.setAttribute("src", url)
};