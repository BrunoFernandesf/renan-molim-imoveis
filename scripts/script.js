const imoveisRel = document.querySelectorAll(".imovel-lancamento");
const imoveisTren = document.querySelectorAll(".imovel-trending");

fetch("resources/json/imoveis.json")

.then(response =>{
    return response.json();
})
.then(data =>{

    //Lançamentos
    const imovelrelease = data.filter(imovel => imovel.release == true)

    imovelrelease.forEach((imovel, index) => {
        if (imoveisRel[index]){
            imoveisRel[index].innerHTML = `
            <img src="${imovel.img}" alt="${imovel.name}">
            <h3>${imovel.name}</h3>
            <p>${imovel.location}</p>
            <p>${imovel.value}</p>
            <p>${imovel.details}</p>
        `;
        }
    });

    //Mais procurados
    const imovelTrending = data.filter(imovel => imovel.trending == true)

    imovelTrending.forEach((imovel, index) =>{
        if(imoveisTren[index]){
            imoveisTren[index].innerHTML = `
            <img src="${imovel.img}" alt="${imovel.name}">
            <h3>${imovel.name}</h3>
            <p>${imovel.location}</p>
            <p>${imovel.value}</p>
            <p>${imovel.details}</p>
        `;
        }
    });
});
