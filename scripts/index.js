document.addEventListener("DOMContentLoaded",() => {
    // containers 
    const header = document.getElementById("header")
    const main = document.getElementById("main")
    const nav = document.getElementById("var-nav")
    const contenedorAds = document.getElementById("ads-offers")
    const sectionProducts = document.getElementById("section-products")
    const sectionPictures = document.getElementById("section-pictures")
    const footer = document.getElementById("footer")
    
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
            if (scrollAmount > (400 + (contenedorAds.scrollWidth - contenedorAds.clientWidth))) {
                contenedorAds.scrollTo({ left: 0, behavior: 'smooth' })
                scrollAmount = 0
            }
        },2000)
    }

    function addProducts() {
        for (let i of productList ) {
            const product = document.createElement("div")
            const imgProduct = document.createElement("img")
            const nameProduct = document.createElement("p")
            const priceProduct = document.createElement("p")
            const btnBuy = document.createElement("button")
            const spanbtnView  = document.createElement('span')
            const btnView  = document.createElement('p')

            product.classList.add("productCard")
            imgProduct.src = i.img
            nameProduct.innerText = "Name: " + i.name
            priceProduct.innerText = "Price: $" + i.price
            btnBuy.innerText = "Add Cart"
            btnBuy.classList.add("btn-link")
            btnView.className = "btn-view-description"
            btnView.textContent = "View Product"

            spanbtnView.appendChild(btnView)
            product.appendChild(imgProduct)
            product.appendChild(nameProduct)
            product.appendChild(priceProduct)
            product.appendChild(btnBuy)
            product.appendChild(spanbtnView)
            sectionProducts.appendChild(product)

            let productElements = {
                name: i.name,
                img: i.img,
                price: i.price,
                description: i.description,
                category: i.categories
            }

            btnView.addEventListener("click",() => showDescription(productElements))
        }
    }

    function showDescription(container) {
        const sectionExist = main.querySelector(".product-description")
        if (sectionExist) main.removeChild(sectionExist)
        mainBlur()
        const productDescription = document.createElement('section')
        const btnExitDescription = document.createElement('button')
        const imgProduct = document.createElement('img')
        const spanP = document.createElement('span')
        const nameProduct = document.createElement('p')
        const priceProduct = document.createElement('p')
        const categProduct = document.createElement('p')
        const desProduct = document.createElement('p')

        btnExitDescription.innerHTML = `<i class='bx bx-x'></i>`
        btnExitDescription.classList = "btn-exit-description"
        imgProduct.src = container.img
        nameProduct.innerHTML = `<strong>Name: </strong>${container.name}`
        priceProduct.innerHTML = `<strong>Price: </strong>${container.price}`
        categProduct.innerHTML = `<strong>Category: </strong>${container.category}`
        desProduct.innerText = container.description
        productDescription.className = "product-description"

        spanP.appendChild(nameProduct)
        spanP.appendChild(priceProduct)
        spanP.appendChild(categProduct)
        spanP.appendChild(desProduct)
        productDescription.appendChild(btnExitDescription)
        productDescription.appendChild(imgProduct)
        productDescription.appendChild(spanP)
        main.appendChild(productDescription)

        btnExitDescription.addEventListener("click",() => {
            mainBlur()
            main.removeChild(productDescription)
        })
    }

    function mainBlur() {
        header.classList.toggle("blur")
        nav.classList.toggle("blur")
        sectionPictures.classList.toggle("blur")
        sectionProducts.classList.toggle("blur")
        footer.classList.toggle("blur")
    }

    // Call functions 
    addAds()
    addProducts()

})