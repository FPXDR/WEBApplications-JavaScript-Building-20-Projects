const progressEl = document.querySelector(".progress");
window.onscroll=()=>scrollProgress();

function scrollProgress(){
    //console.log("เลื่อนดูเนื้อหา")
    // 0 - 1
    const pangHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop/pangHeight)*100;
    progressEl.style.visibility="visible";
    progressEl.style.width=scrollPercentage+"%";
}