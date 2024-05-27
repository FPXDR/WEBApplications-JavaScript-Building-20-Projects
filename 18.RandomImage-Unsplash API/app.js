const conteainer = document.querySelector(".conteainer")
const row = 4
const cols = 5

function randomNumber(){
    return Math.floor(Math.random()*500)
}
for(let i = 0 ;i<row*cols;i++){
    //link
    const url = `https://source.unsplash.com/random/${randomNumber()}`
    //พื้นที่แสดงภาพ
    const imageEI = document.createElement("img")
    imageEI.src=url
    conteainer.appendChild(imageEI)
}