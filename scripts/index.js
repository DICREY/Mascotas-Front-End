document.addEventListener("DOMContentLoaded",() => {
    const btnMenu = document.querySelector(".btn-menu")
    const menuDeploy = document.querySelector(".menu-deploy")
    const btnFloat = document.querySelector(".btn-float")
    const btnFloatIcon = document.querySelector(".icon-btn-float")
    const btnFloatWhatsapp = document.querySelector("#icon-whatsapp")
    const btnFloatPhone = document.querySelector("#icon-phone")
    const btnFloatGmail = document.querySelector("#icon-gmail")
    const btnScrollLeft = document.querySelector(".bx-chevron-left")
    const btnScrollRight = document.querySelector(".bx-chevron-right")
    const contenedorAds = document.querySelector(".ads-offers")

    let list = [
        {
        url: "https://i.pinimg.com/564x/b2/7d/2d/b27d2d22ab6b6c7d9e7dfd862d607786.jpg",
        name:"HappyDog",
        },
        {
        url: "https://i.pinimg.com/564x/ec/eb/f2/ecebf26fa18819027996e70f0cf8aacb.jpg",
        name:"Dog",
        },
        {
        url: "https://i.pinimg.com/564x/00/43/65/004365dafc00aafb10554d5ce5e07133.jpg",
        name:"DogFlow",
        },
        {
        url: "https://i.pinimg.com/564x/2f/f0/4e/2ff04e635be5d4182ae3951dce071574.jpg",
        name:"GatoLeon",
        },
        {
        url: "https://i.pinimg.com/564x/8b/3b/a7/8b3ba7ec66c1b2ffa5e86884e189055f.jpg",
        name:"GatoFrances",
        },
        {
        url: "https://i.pinimg.com/564x/64/72/75/6472757b246d9d27826dd13544bef275.jpg",
        name:"ParejaGatosFranceses",
        },
    ]

    btnFloat.addEventListener("click",floatBtn)

    btnMenu.addEventListener("click",() => {
        if (btnMenu.className === "bx bx-x btn-menu"){
            btnMenu.className = "bx bx-menu btn-menu"
            menuDeploy.classList.add("inactive")
        } else {
            btnMenu.className = "bx bx-x btn-menu"
            menuDeploy.classList.remove("inactive")
        }
    })

    btnScrollLeft.addEventListener("click",() => {
        contenedorAds.scrollBy({ left:-100, behavior: 'smooth' })
    })

    btnScrollRight.addEventListener("click",() => {
        contenedorAds.scrollBy({ left:100, behavior: 'smooth' })
    })

    function floatBtn(){
        const name = "bx bxs-chat icon-btn-float"
        if (btnFloatIcon.className === name) {
            btnFloatIcon.className = "bx bx-x icon-btn-float"
        } else {
            btnFloatIcon.className = name
        }
        btnFloatWhatsapp.classList.toggle("icon-whatsapp")
        btnFloatPhone.classList.toggle("icon-phone")
        btnFloatGmail.classList.toggle("icon-gmail")
    }

    function cardImg(list) {
        for (let i of list){
            const ads = document.createElement("img")
            ads.src = i.url
            ads.alt = i.name
            ads.title = i.name
            contenedorAds.appendChild(ads)
        }
    }

    cardImg(list)
})