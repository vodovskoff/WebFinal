let btns = []
for(j=0; j<4; j++){
    btns[j]=[]
}
ttl = document.getElementById('ttl')
btnreplay = document.getElementById('button')
let steps=0

for(i = 0; i<4; i++){
    for(j=0; j<4; j++) {
        btns[i].push(document.getElementById(String(i * 4 + j)))
        //btns[i][j].innerText = i * 4 + j
    }
}
for(i=0; i<4; i++){
    btns[i].forEach(elem => {
        elem.addEventListener('mousedown', () => {
            if (!isVictory()){
                steps++
                ttl.innerText='Количество шагов: ' + steps
                for (k=0; k<4; k++){
                    changeColor(btns[k][Number(elem.id)%4]);
                }
                for (k=0; k<4; k++){
                    changeColor(btns[Math.floor(Number(elem.id)/4)][k]);
                }
                changeColor(elem)
                if(isVictory()) {
                    console.log('aye')
                    ttl.innerText='Холодильник открыт за ' + steps + ' шагов!'
                }
            } else {
                btnreplay.style.visibility="visible"
            }

        })
    })
}

function initializeRefrigirator(){
    steps=0
    ttl.innerText=''
    for(i = 0; i<4; i++){
        for(j=0; j<4; j++){
            t=Math.floor(Math.random()*2);
            if (t>0.5){
                btns[i][j].style.backgroundColor="red"
            } else {
                btns[i][j].style.backgroundColor="blue"
            }
        }
    }
}
function changeColor(cell){
    if(cell.style.backgroundColor=="red"){
        cell.style.backgroundColor="blue"
    } else {
        cell.style.backgroundColor="red"
    }
}
function isVictory(){
    foundBlue=false
    foundRed=false
    for(i=0; i<4; i++){
        for(j=0; j<4; j++){
            if(btns[i][j].style.backgroundColor=="red") foundRed=true
            if(btns[i][j].style.backgroundColor=="blue") foundBlue=true
        }
    }
    if(!foundRed || !foundBlue) return true
    else return false
}
initializeRefrigirator()
//repeat()