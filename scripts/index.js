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
        btnFloatPhone.classList.toggle("icon-phone").classList.toggle("inactive")
        btnFloatGmail.classList.toggle("icon-gmail").classList.toggle("inactive")
    }
})