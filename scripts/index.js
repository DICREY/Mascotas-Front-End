document.addEventListener("DOMContentLoaded",() => {
    const btnMenu = document.querySelector(".btn-menu")
    const menuDeploy = document.querySelector(".menu-deploy")
    const btnFloat = document.querySelector(".btn-float")
    const btnFloatIcon = document.querySelector(".icon-btn-float")
    const btnFloatWhatsapp = document.querySelector("#icon-whatsapp")
    const btnFloatPhone = document.querySelector("#icon-phone")
    const btnFloatGmail = document.querySelector("#icon-gmail")

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

    function floatBtn(){
        const name = "bx bxs-chat icon-btn-float"
        let nameClass = name == btnFloatIcon.className ? "bx bx-x icon-btn-float" : "bx bxs-chat icon-btn-float"
        btnFloatIcon.className = nameClass
        btnFloatWhatsapp.classList.toggle("icon-whatsapp")
        btnFloatPhone.classList.toggle("icon-phone")
        btnFloatGmail.classList.toggle("icon-gmail")
    }

})