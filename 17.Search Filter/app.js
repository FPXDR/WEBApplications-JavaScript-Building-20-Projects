const result = document.getElementById("result")
const listItem = []


async function getData(){
    const url = "https://restcountries.com/v3.1/all"
    const response = await fetch(url)
    const items=await response.json()
    result.innerHTML= " "
    items.forEach(data => {
        const li = document.createElement("li")
        listItem.push(li)
        li.innerHTML=
        `
            <img src="${data.flags.svg}">
            <div class="info">
                <h4>${data.demonyms.eng.f}</h4>
                <p>${data.population}</p>
            </div>
        `
        result.appendChild(li)
    });
}
getData()