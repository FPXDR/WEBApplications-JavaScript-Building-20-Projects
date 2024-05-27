const conteainer = document.querySelector(".conteainer")
const row = 6
const cols = 4

function randomNumber(){
    return Math.floor(Math.random()*500)
}
for(let i = 0 ;i<row*cols;i++){
    //link
    const url = `https://picsum.photos/seed/picsum/1366/720`
    //พื้นที่แสดงภาพ
    const imageEI = document.createElement("img")
    imageEI.src=url
    conteainer.appendChild(imageEI)
}