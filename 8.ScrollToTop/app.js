// 0 - 100% => 0-1 => 30% => 0.3
const scrollBtn = document.querySelector(".top")
const rootEI = document.documentElement
document.addEventListener("scroll",showBtn)
scrollBtn.addEventListener("click",scrollToTop)

function showBtn(){
    //console.log("กำลังเลื่อนดูเนื้อหา")
    const scrollTotal = rootEI.scrollHeight - rootEI.clientHeight
    if(rootEI.scrollTop/scrollTotal>0.3){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}
function scrollToTop(){
    rootEI.scrollTo({
        top:0,
        behavior:"smooth"
    })
}