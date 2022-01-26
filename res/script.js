if(localStorage.length>0){
    count = localStorage.getItem('count')
} else {
    count = 0
}
function ShowMessage(){
    let TextHolder = document.getElementById('in')
    let MessageText = document.createTextNode(TextHolder.value)
    if(MessageText.textContent.length>0){
        showRealMesasge(MessageText)
        count++
        localStorage.setItem('count', count)
        localStorage.setItem(count, MessageText.textContent)
    }

}
function showRealMesasge(text){
    let messagebox=document.getElementById('messages')
    let message = document.createElement("div")
    message.className="message"
    message.append(text)
    messagebox.append(message)
}
addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
        ShowMessage()
})
document.addEventListener("DOMContentLoaded", function(event) {
    download();
})
function download(){
    for(i = 1; i<=localStorage.getItem('count');i++){
        var MessageText = document.createTextNode(localStorage.getItem(i))
        //MessageText.textContent=localStorage.getItem(i)
        showRealMesasge(MessageText)
    }
}