function click0(){
    currtime.setHours(currtime.getHours()+1)
    update()
}
function click1(){
    currtime.setMinutes(currtime.getMinutes()+1)
    update()
}
function click2(){
    currtime.setSeconds(currtime.getSeconds()+1)
    update()
}
function click3(){
    currtime.setHours(currtime.getHours()-1)
    update()
}
function click4(){
    currtime.setMinutes(currtime.getMinutes()-1)
    update()
}
function click5(){
    currtime.setSeconds(currtime.getSeconds()-1)
    update()
}
function click6(){
    currtime.setMilliseconds(currtime.getMilliseconds()+125)
    update()
}
function click7(){
    currtime.setMilliseconds(currtime.getMilliseconds()-125)
    update()
}

let currtime = new Date(0, 0, 0, 0, 0, 0, 0);
function startTimer(){
    let timer = new Promise((resolve, reject) => {
        if(currtime>new Date (0, 0, 0, 0, 0, 0, 0)){
            setTimeout(startTimer, 125)
            update()
            document.getElementById('button').style.visibility="hidden"
            currtime.setMilliseconds(currtime.getMilliseconds()-125)
        } else {
            resolve(currtime)
        }
    })
    .then(value => {
            update()
            document.getElementById('button').style.visibility = "visible"
            alert('Конец')
        }
    );
}
function mss(ms){
    let text="000"
    if(ms>100) text = ms.toString()
    if (ms<10) text = "00".toString()+ms.toString()
    if (ms>=10 & ms <=99) text = "0".toString()+ms.toString()
    return text
}
function update(){
    let text = getZero(currtime.getHours()).toString()+":"+getZero(currtime.getMinutes()).toString()+ ":" +getZero(currtime.getSeconds()).toString() + ":".toString()+ mss(currtime.getMilliseconds())
    document.getElementById('time').innerHTML = text
}
function getZero(ms){
    let text="00"
    if(ms>10) text = ms.toString()
    if (ms<10) text = "0".toString()+ms.toString()
    return text
}


