document.addEventListener("DOMContentLoaded",() => {
    // Container labels 
    const header = document.getElementById("header")
    const containerFilter = document.getElementById("container-filter")
    const filters = document.getElementById("filter")
    const sectionServices = document.getElementById("section-services")
    const footer = document.getElementById("footer")

    // Btns
    const btnMenu = document.getElementById("btn-menu")
    const btnMenuFilter = document.getElementById("span-btn-menu-filter")

    // Dynamic labels 
    const menuDeploy = document.getElementById("menu-deploy")
    const iconMenuFilters = document.getElementById("btn-menu-filter")

    // Events
    btnMenuFilter.addEventListener("click",deployFiltersMenu)

    // Functions
    function deployFiltersMenu() {
        let verifyClass = iconMenuFilters.className === "bx bx-menu btn-menu"
        if (verifyClass) {
            iconMenuFilters.className = "bx bx-x btn-menu"
            filters.classList.remove("inactive")
            containerFilter.style.animation = "translate .3s linear forwards"
        } else {
            iconMenuFilters.className = "bx bx-menu btn-menu"
            filters.classList.add("inactive")
            containerFilter.style.animation = "none"
        }
    }

    // Call functions
    createHeader(header)
    dynamicNav(btnMenu,menuDeploy)
    createFooter(footer)
})