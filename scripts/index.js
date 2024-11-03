document.addEventListener("DOMContentLoaded",() => {
    // containers 
    const menuDeploy = document.querySelector(".menu-deploy")
    const contenedorAds = document.querySelector(".ads-offers")
    const sectionProducts = document.querySelector(".section-products")

    // btns 
    const btnMenu = document.querySelector(".btn-menu")
    const btnScrollLeft = document.querySelector(".bx-chevron-left")
    const btnScrollRight = document.querySelector(".bx-chevron-right")

    // Events 
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
        contenedorAds.scrollBy({ left:-200, behavior: 'smooth' })
    })

    btnScrollRight.addEventListener("click",() => {
        contenedorAds.scrollBy({ left:200, behavior: 'smooth' })
    })

    // functions
    function addAds(list) {
        for (let i of list){
            const ads = document.createElement("img")
            ads.src = i.url
            ads.alt = i.name
            ads.title = i.name
            contenedorAds.appendChild(ads)
        }
    }

    function addProducts(list) {
        for (let i of list ) {
            const product = document.createElement("div")
            const imgProduct = document.createElement("img")
            const nameProduct = document.createElement("p")
            const priceProduct = document.createElement("p")
            const btnBuy = document.createElement("button")

            product.classList.add("productCard")
            imgProduct.src = i.img
            nameProduct.innerText = "Name: " + i.name
            priceProduct.innerText = "Price: $" + i.price
            btnBuy.innerText = "Add Cart"
            btnBuy.classList.add("btn-link")

            product.appendChild(imgProduct)
            product.appendChild(nameProduct)
            product.appendChild(priceProduct)
            product.appendChild(btnBuy)
            sectionProducts.appendChild(product)
        }
    }

    // All functions 
    addAds(adsList)
    addProducts(productList)
})