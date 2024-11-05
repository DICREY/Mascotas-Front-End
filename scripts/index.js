document.addEventListener("DOMContentLoaded",() => {
    // containers 
    const contenedorAds = document.getElementById("ads-offers")
    const sectionProducts = document.getElementById("section-products")
    
    // Dynamic Labels 
    const menuDeploy = document.getElementById("menu-deploy")
    const ShopingCart = document.getElementById("Shoping-Cart")

    // btns 
    const btnMenu = document.getElementById("btn-menu")
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
        sectionProducts.scrollBy({ left:-200, behavior: 'smooth' })
    })

    btnScrollRight.addEventListener("click",() => {
        sectionProducts.scrollBy({ left:200, behavior: 'smooth' })
    })

    // functions
    function addAds() {
        for (let i of adsList){
            const ads = document.createElement("img")
            ads.src = i.url
            ads.alt = i.name
            ads.title = i.name
            contenedorAds.appendChild(ads)
        }

        let scrollAmount = 0
        let leftScroll = 200
        const scrollInterval = setInterval(() => {
            contenedorAds.scrollBy({ left: leftScroll, behavior: 'smooth' })
            scrollAmount += leftScroll
            if (scrollAmount > (200 + (contenedorAds.scrollWidth - contenedorAds.clientWidth))) {
                contenedorAds.scrollTo({ left: 0, behavior: 'smooth' })
                scrollAmount = 0
            }
        },0)
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
    addAds()
    addProducts(productList)

})