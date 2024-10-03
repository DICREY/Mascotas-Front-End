document.addEventListener("DOMContentLoaded",() => {
    const btnMenu = document.querySelector(".btn-menu")
    const menuDeploy = document.querySelector(".menu-deploy")

    btnMenu.addEventListener("click",() => {
        btnMenu.classList.toggle("rotate")

        if (btnMenu.className == "bx bx-x btn-menu"){
            btnMenu.className = "bx bx-menu btn-menu"
            menuDeploy.classList.toggle("inactive")
        } else {
            btnMenu.className = "bx bx-x btn-menu"
            menuDeploy.classList.toggle("inactive")
        }
    })
})