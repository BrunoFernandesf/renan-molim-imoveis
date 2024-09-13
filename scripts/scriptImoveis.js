//Resources
const URL = 'resources/json/imoveis.json'

//Container Imovel
const imoveis = document. querySelectorAll(".imovel");

//Filters
const type = document.querySelector(".filter-aquis");

//Initial Search
fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(data => {

        imoveis.forEach((imovel, index) =>{
            if(data[index]){
                imovel.innerHTML = `
                    <img src="${data[index].img}">
                    <h3>${data[index].value}</h3>
                    <p>${data[index].name}</p>
                    <p>${data[index].location}</p>
                    <p>${data[index].value}</p>
                    <p>${data[index].details}</p>
                `
            }
        })
    })

type.addEventListener("click", () => {
    console.log(type.value)

})



