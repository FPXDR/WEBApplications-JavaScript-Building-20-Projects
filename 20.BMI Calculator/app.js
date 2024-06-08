/* These lines of code are selecting HTML elements with the class names "btn" and "result" using the
`document.querySelector` method in JavaScript. */
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

/* The code snippet `btn.addEventListener("click", (e) => { ... })` is adding an event listener to the
button element selected by the variable `btn`. When the button is clicked, the function inside the
event listener is executed. */
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if(weight === "" || isNaN(weight)){
        return result.innerHTML = "กรุณาใส่ตัวเลขอย่าใส่ตัวอักษร !!อย่ามึน"
    }else if(height === "" || isNaN(height)){
        return result.innerHTML = "กรุณาใส่ตัวเลขอย่าใส่ตัวอักษร !!อย่ามึน"
    }else{
        //เริ่มต้นการคำนวณค่าดัชชนีมวลกาย
        //cm => m
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)

        // บอกเกณฑท์
        if(bmi<18.5){
            showrResult(bmi,"ผอมเกินไป","yellow")
        }else if(bmi>=18.5 && bmi <= 24.9){
            showrResult(bmi,"ปกติ","greed")
        }else if(bmi >= 25 && bmi <= 29.9){
            showrResult(bmi,"อ้วน","orange")
        }else{
            showrResult(bmi,"อ้วน","purple")
        }
    }
})

function showrResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML = `ผลลัพธ์ = ${bmi} (${message})`
}
//return result.innerHTML = "ข้อมูลถูกต้อง"