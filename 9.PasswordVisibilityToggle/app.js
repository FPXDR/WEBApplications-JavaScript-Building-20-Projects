const eyeIcon = document.querySelector("#eye")
const passwordEI = document.querySelector("#password")

eyeIcon.addEventListener("click",()=>{
    if(eyeIcon.classList.contains("fa-eye")){
        eyeIcon.classList.replace("fa-eye","fa-eye-slash")
        passwordEI.setAttribute("type","text")
    }else{
        eyeIcon.classList.replace("fa-eye-slash","fa-eye")
        passwordEI.setAttribute("type","password")
    }
})