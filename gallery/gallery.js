//Файл на виртуалке
function ShowShvarz(){
    fetch('tsconfig.json').then(response => {
        response.json().then(json => {
            showImageElement(json.shavrz);
        });
    });
}
//https://i.ibb.co/CMKgcr4/imgonline-com-ua-Resize-y5z-SYWS36-Doodkdk.jpg
function ShowPuzo(){
    fetch('tsconfig.json').then(response => {
        response.json().then(json => {
            showImageElement(json.puzo);
        });
    });
}
//base64
function ShowBukin(){
    fetch('tsconfig.json').then(response => {
        response.json().then(json => {
            showImageElement(json.bukin);
        });
    });
}

function showImageElement(url) {
    let htmlImageElement = new Image();
    htmlImageElement.src = url;
    document.querySelector('.block').appendChild(htmlImageElement);
}