/* The code snippet is declaring three variables using `const` keyword:
1. `result`: It is storing the reference to the HTML element with the id "result". This element is
typically used to display the search results or data fetched from an API.
2. `filter`: It is storing the reference to the HTML element with the id "filter". This element is
usually an input field where users can type to filter the displayed data.
3. `listItem`: It is an empty array that will be used to store references to dynamically created
list items (li elements) that display country information fetched from an API. */
const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItem = []

/* The code snippet you provided is adding an event listener to the `filter` input field. When a user
types into the filter input field, this event listener triggers a function that performs the
following actions: */
filter.addEventListener("input",(e)=>{
    // thailand => thailand
    const search = e.target.value.toLowerCase()
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search)){
            //แสดงรายการ
            item.classList.remove("hide")
        }else{
            //ซ่อนรายการไม่เกี่ยวข้อง
            item.classList.add("hide")
        }
    })
})

async function getData(){
    const url = "https://restcountries.com/v3.1/all"
    const response = await fetch(url)
    const items= await response.json()
    result.innerHTML= ""
    items.forEach(data => {
        const li = document.createElement("li")
        listItem.push(li)
        li.innerHTML=
        `
            <img src="${data.flags.svg}">
            <div class="info">
                <h4>${data.name.common}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>
        `
        result.appendChild(li)
    });
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

getData()