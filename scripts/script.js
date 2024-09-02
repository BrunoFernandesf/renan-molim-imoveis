const imoveis = document.querySelectorAll(".imovel");

fetch("resources/json/imoveis.json")

.then(response =>{
    return response.json();
})
.then(data =>{
    imoveis.forEach((imovel, index) => {
        if (data[index]){
            imovel.innerHTML = `
            <img src="${data[index].img}" alt="${data[index].name}">
            <h3>${data[index].name}</h3>
            <p>${data[index].location}</p>
            <p>${data[index].value}</p>
            <p>${data[index].details}</p>
        `;
        }
    });
});
