document.addEventListener("DOMContentLoaded",() => {
    // Container labels 
    const header = document.getElementById("header")
    const servicesContainer = document.getElementById("services-container")
    const footer = document.getElementById("footer")

    // Btns
    const btnMenu = document.getElementById("btn-menu")

    // Dynamic labels 
    const menuDeploy = document.getElementById("menu-deploy")

    function createServicesCard () {
        listServices.forEach(i => {
            // Create labels 
            const servicesCard = document.createElement("div")
            const img = document.createElement("img")
            const title = document.createElement("p")
            const viewServices = document.createElement("span")

            // Modify labels
            img.src = i.url
            title.className = "sub-title"
            title.innerHTML = i.name
            viewServices.className = "btn-view-description"
            viewServices.innerHTML = "View Description"
            
            // Add childs
            servicesContainer.appendChild(servicesCard)
            servicesCard.appendChild(img)
            servicesCard.appendChild(title)
            servicesCard.appendChild(viewServices)

            let service = {
                img: i.url,
                title: i.name,
                description: i.description
            }

            // Events 
            viewServices.addEventListener("click",() => viewDescription(service))
        })
    }

    function viewDescription(service) {
        // fetch("",{
        //     method: 'POST',
        //     body: {
        //         ...service
        //     }
        // })
    }

    // Call functions
    createHeader(header)
    dynamicNav(btnMenu,menuDeploy)
    createServicesCard()
    createFooter(footer)
})