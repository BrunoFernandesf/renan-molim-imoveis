let form = document.querySelector(".main-register-data-form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value
    let tel = document.getElementById("tel").value
    let email = document.getElementById("email").value
    let type = document.getElementById("type").value

    let formArray = []

    let text = "";
    let cel = "5511975602377"

    formArray.push(name)
    formArray.push(tel)
    formArray.push(email)
    formArray.push(type)

    

    formArray.forEach(elem => {
        text += elem + " ";
        console.log(text)
    })


    const url = `https://wa.me/${cel}?text=${text}`

    window.open(url, '_blank').focus();

})