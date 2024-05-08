const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
// 0-4
const messages=[
    "สวัสดีตอนเช้า",
    "Hello Wrold",
    "Good Morning",
    "ราตรีสวัสดิ์",
    "Good Night",
    "FPXD"
]
btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEI = document.createElement("div")
    notificationEI.classList.add("notification")
    notificationEI.innerText = randomMessage()
    container.appendChild(notificationEI)
    setTimeout(()=>{
        notificationEI.remove()
    },3000)
}


function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}
console.log(randomMessage())
