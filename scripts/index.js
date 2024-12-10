document.addEventListener("DOMContentLoaded",() => {
    // containers 
    const header = document.getElementById("header")
    const main = document.getElementById("main")
    const nav = document.getElementById("var-nav")
    const contenedorAds = document.getElementById("ads-offers")
    const sectionPictures = document.getElementById("section-pictures")
    const sectionInfo = document.getElementById("section-info")
    const sectionProducts = document.getElementById("section-products")
    const footer = document.getElementById("footer")
    
    // Dynamic Labels 
    const menuDeploy = document.getElementById("menu-deploy")
    const shopingCart = document.getElementById("Shoping-Cart")
    const shopCantCart = document.getElementById("shop-cant")
    const totalPrice = document.getElementById("total-price")

    // btns 
    const btnMenu = document.getElementById("btn-menu")
    const btnScrollLeft = document.querySelector(".bx-chevron-left")
    const btnScrollRight = document.querySelector(".bx-chevron-right")

    // Vars 
    let totPrice = 0

    // Events 
    btnScrollLeft.addEventListener("click",() => {
        sectionProducts.scrollBy({ left:-200, behavior: 'smooth' })
    })

    btnScrollRight.addEventListener("click",() => {
        sectionProducts.scrollBy({ left:200, behavior: 'smooth' })
    })

    // functions
    async function addPets(picturesContainer) {
        await petList(picturesContainer)

        let scrollAmount = 0
        let leftScroll = 400
        const scrollInterval = setInterval(() => {
            contenedorAds.scrollBy({ left: leftScroll, behavior: 'smooth' })
            scrollAmount += leftScroll
            if (scrollAmount > (800 + picturesContainer.scrollWidth - picturesContainer.clientWidth)) {
                picturesContainer.scrollTo({ left: 0, behavior: 'smooth' })
                scrollAmount = 0
            }
        },2000)
    }

    function addProducts() {
        // Loop
        productList.forEach(i => {

            // Create labels
            const product = document.createElement("div")
            const imgProduct = document.createElement("img")
            const nameProduct = document.createElement("p")
            const priceProduct = document.createElement("p")
            const spanbtnView  = document.createElement('span')
            const btnView  = document.createElement('span')
            const btnBuy = document.createElement("button")

            // Modify labels
            product.className = "productCard"
            imgProduct.src = i.img
            nameProduct.innerText = "Name: " + i.name
            priceProduct.innerText = "Price: $" + i.price
            btnView.className = "btn-view-description"
            btnView.textContent = "View Product"
            btnBuy.innerHTML = "<i class='bx bxs-cart-add'></i>"
            btnBuy.className = "btn-add-cart"

            // Add labels
            spanbtnView.appendChild(btnView)
            product.appendChild(imgProduct)
            product.appendChild(nameProduct)
            product.appendChild(priceProduct)
            product.appendChild(btnBuy)
            product.appendChild(spanbtnView)
            sectionProducts.appendChild(product)

            // Object
            const productElements = {
                name: i.name,
                img: i.img,
                price: i.price,
                description: i.description,
                category: i.categories
            }

            // Add events
            btnBuy.addEventListener("click",() => addShopCart(productElements))
            btnView.addEventListener("click",() => showDescription(productElements))
        })
    }

    function showDescription(container) {
        mainBlur()
        const sectionExist = main.querySelector(".product-description")

        if (sectionExist) main.removeChild(sectionExist)

        // Create labels
        const productDescription = document.createElement('section')
        const btnExitDescription = document.createElement('button')
        const imgProduct = document.createElement('img')
        const spanP = document.createElement('span')
        const nameProduct = document.createElement('p')
        const priceProduct = document.createElement('p')
        const categProduct = document.createElement('p')
        const desProduct = document.createElement('p')

        // Modify labels
        btnExitDescription.innerHTML = `<i class='bx bx-x'></i>`
        btnExitDescription.className = "btn-exit-description"
        imgProduct.src = container.img
        nameProduct.innerHTML = `<strong>Name: </strong>${container.name}`
        priceProduct.innerHTML = `<strong>Price: </strong>${container.price}`
        categProduct.innerHTML = `<strong>Category: </strong>${container.category}`
        desProduct.innerText = container.description
        productDescription.className = "product-description"

        // Add labels
        spanP.appendChild(nameProduct)
        spanP.appendChild(priceProduct)
        spanP.appendChild(categProduct)
        spanP.appendChild(desProduct)
        productDescription.appendChild(btnExitDescription)
        productDescription.appendChild(imgProduct)
        productDescription.appendChild(spanP)
        main.appendChild(productDescription)

        // Add events 
        btnExitDescription.addEventListener("click",() => {
            mainBlur()
            main.removeChild(productDescription)
        })
    }

    function addShopCart(productElements) {
        const li = document.createElement("li")
        const container = document.createElement("section")
        const img = document.createElement("img")
        const span = document.createElement("span")
        const name = document.createElement("p")
        const price = document.createElement("p")
        const quitProduct = document.createElement("button")

        img.src = productElements.img
        name.innerHTML = `Name: ${productElements.name}`
        price.innerHTML = `Price: $${productElements.price}`
        container.className = "card-shop-product"
        quitProduct.innerHTML = "<i class='bx bx-x'></i>"

        container.appendChild(img)
        span.appendChild(name)
        span.appendChild(price)
        container.appendChild(span)
        container.appendChild(quitProduct)
        li.appendChild(container)
        shopingCart.appendChild(li)
        cantProductCart()
        cartTotalPrice(productElements.price)

        quitProduct.addEventListener("click",() => {
            shopCantCart.removeChild(li)
        })
    }

    // // Dynamic functions
    function mainBlur() {
        header.classList.toggle("blur")
        nav.classList.toggle("blur")
        sectionPictures.classList.toggle("blur")
        sectionInfo.classList.toggle("blur")
        sectionProducts.classList.toggle("blur")
        footer.classList.toggle("blur")
    }

    function cantProductCart() {
        let lis = shopingCart.querySelectorAll("li")
        const messageEmpty = shopingCart.querySelector(".empty-message")

        if (lis.length > 0) {
            shopCantCart.innerText = "" + lis.length
            shopingCart.removeChild(messageEmpty)
        } else {
            const p = document.createElement("p")

            shopCantCart.innerText = "0"
            p.className = "empty-message"
            p.innerText = "You don't have products on the cart"
            p.style = "min-width: 150px; color: var(--second); font-size: var(--font-size); font-weight: bold;"

            shopingCart.appendChild(p)
        }
    }

    function cartTotalPrice(price) {
        const existBtnBuy = shopingCart.querySelector(".btn-buy-cart")

        totPrice += price
        totalPrice.innerText = `Total price: $${totPrice}`

        if (existBtnBuy) shopingCart.removeChild(existBtnBuy)

        if (totPrice > 0 ) {
            const btnBuy = document.createElement("button")
            btnBuy.className = "btn-add-cart btn-buy-cart"
            btnBuy.type = "button"
            btnBuy.innerText = "Buy"
            shopingCart.appendChild(btnBuy)
        }
    }
    
    // Call functions 
    dynamicNav(btnMenu,menuDeploy)
    addPets(contenedorAds)
    addProducts()
    createFooter(footer)
    cantProductCart()
})
