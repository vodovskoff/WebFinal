let btns = []
let k = -1
let record = 0
let count = 0
let active = false
let lvl = -1;
let ttl = document.getElementById('ttl')
let time = document.getElementById('time')
let button = document.getElementById('button')
var rad=document.getElementsByName('r1');

for(i = 0; i<16; i++){
    btns.push(document.getElementById(String(i)))
}
for(i = 0; i<16; i++) {
    let MessageText = document.createTextNode(String(btns[i].id))
    //k = Math.floor(Math.random() * 16)
    //btns[i].append(MessageText)
}
    btns.forEach(elem => {
        elem.addEventListener('mousedown', () => {
            if(active){
                if (Number(elem.id) === Number(k)) {
                    record++
                    console.log(record)
                    let MessageText = document.createTextNode('Счёт: ' + record)
                    ttl.innerText = MessageText.data;
                    let audio = new Audio('okSound.mp3')
                    audio.play()
                    changeBackColor(true)
                    ret = setTimeout(returnBackColor, 100)
                } else{
                    changeBackColor(false)
                    let audio = new Audio('wrongSound.mp3')
                    //record--
                    console.log(record)
                    let MessageText = document.createTextNode('Счёт: ' + record)
                    ttl.innerText = MessageText.data;
                    audio.play()
                    ret = setTimeout(returnBackColor, 100)

                }
            }
        })
    })

function changeBackColor(isAMole){
    if(isAMole){
        document.body.style.background = "#b1ffbd"
    } else {
        document.body.style.background = "#ffc6c6"

    }
}
function returnBackColor(){
    document.body.style.background = "white"
}

//let timerId = setInterval(() =>showMole(), 300);

function showMole(){
    k=Math.floor(Math.random() * 16)
    count++
    console.log('count ' + count)
    let left
    if(lvl===0)  left = 30-count
    if(lvl===1)  left = 30-count/2
    if(lvl===2)  left = 30-count/4

    if(left%1===0){
        let mt = document.createTextNode('Время: '+left)
        time.innerText=mt.data
    }
    for(i=0; i<btns.length; i++){
        btns[i].style.backgroundColor="white";
    }
    btns[k].style.backgroundColor="black"
    if(left<=0){
        clearInterval(timerId)
        active=false
        button.style.visibility='visible'
        for(i=0; i<btns.length; i++){
            btns[i].style.backgroundColor="white";
            time.style.visibility="hidden"
        }
    }
}
function repeat() {
    if(lvl === 0) timerId = setInterval(showMole, 1000)
    if(lvl === 1) timerId = setInterval(showMole, 500)
    if(lvl === 2) timerId = setInterval(showMole, 250)
    count++
    console.log('count ' + count)
}
function Play(){
    record=0
    active=true
    count=0
    button.style.visibility='hidden'
    ttl.innerText='Счет: ' + record
    time.style.visibility='visible'
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
            lvl=i
        }
    }
    repeat()
}
//repeat()