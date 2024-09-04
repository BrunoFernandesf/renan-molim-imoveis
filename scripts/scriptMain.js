const imoveisRel = document.querySelectorAll(".imovel-release");
const imoveisTren = document.querySelectorAll(".imovel-trending");
const imoveisSale = document.querySelectorAll(".imovel-sale");

fetch("resources/json/imoveis.json")

.then(response =>{
    return response.json();
})
.then(data =>{

    //Lançamentos
    const imovelrelease = data.filter(imovel => imovel.release == true)
    const limitRelease = 3;

    imovelrelease.forEach((imovel, index) => {
        if (imoveisRel[index] && index < limitRelease){
            imoveisRel[index].innerHTML = `
            <img src="${imovel.img}" alt="${imovel.name}">
            <h3>${imovel.value}</h3>
            <p>${imovel.location}</p>
            <p>${imovel.name}</p>
            <p>${imovel.details}</p>
        `;
        }
    });

    //Mais procurados
    const imovelTrending = data.filter(imovel => imovel.trending == true)
    const limitTrend = 3;

    imovelTrending.forEach((imovel, index) =>{
        if(imoveisTren[index] && index < limitTrend){
            imoveisTren[index].innerHTML = `
            <img src="${imovel.img}" alt="${imovel.name}">
            <h3>${imovel.value}</h3>
            <p>${imovel.location}</p>
            <p>${imovel.name}</p>
            <p>${imovel.details}</p>
        `;
        }
    });

    //Imóveis a venda
    const imovelSale = data.filter(imovel => imovel.type == "Sale")
    const limitSale = 3;

    imovelSale.forEach((imovel, index) =>{
        if(imoveisSale[index] && index < limitSale){
            imoveisSale[index].innerHTML = `
            <img src="${imovel.img}" alt="${imovel.name}">
            <h3>${imovel.value}</h3>
            <p>${imovel.location}</p>
            <p>${imovel.name}</p>
            <p>${imovel.details}</p>
        `;
        }
    });
});
