document.addEventListener("DOMContentLoaded",() => {
    const btnMenu = document.querySelector(".btn-menu")
    const menuDeploy = document.querySelector(".menu-deploy")

    btnMenu.addEventListener("click",() => {
        if (btnMenu.className === "bx bx-x btn-menu"){
            btnMenu.className = "bx bx-menu btn-menu"
            menuDeploy.classList.add("inactive")
        } else {
            btnMenu.className = "bx bx-x btn-menu"
            menuDeploy.classList.remove("inactive")
        }
    })
})