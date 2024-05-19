const search = document.querySelector(".search")
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    //console.log("มีการคลิกไอคอน")
    search.classList.toggle("active")
    input.focus()
})