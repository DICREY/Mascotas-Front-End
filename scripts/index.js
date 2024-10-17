document.addEventListener("DOMContentLoaded",() => {
    const btnMenu = document.querySelector(".btn-menu")
    const menuDeploy = document.querySelector(".menu-deploy")
    const btnScrollLeft = document.querySelector(".bx-chevron-left")
    const btnScrollRight = document.querySelector(".bx-chevron-right")
    const contenedorAds = document.querySelector(".ads-offers")
    const sectionProducts = document.querySelector(".section-products")

    const adsList = [
        {
        url: "https://i.pinimg.com/564x/b2/7d/2d/b27d2d22ab6b6c7d9e7dfd862d607786.jpg",
        name:"HappyDog",
        },
        {
        url: "https://i.pinimg.com/564x/ec/eb/f2/ecebf26fa18819027996e70f0cf8aacb.jpg",
        name:"Dog",
        },
        {
        url: "https://i.pinimg.com/564x/00/43/65/004365dafc00aafb10554d5ce5e07133.jpg",
        name:"DogFlow",
        },
        {
        url: "https://i.pinimg.com/564x/2f/f0/4e/2ff04e635be5d4182ae3951dce071574.jpg",
        name:"GatoLeon",
        },
        {
        url: "https://i.pinimg.com/564x/8b/3b/a7/8b3ba7ec66c1b2ffa5e86884e189055f.jpg",
        name:"GatoFrances",
        },
        {
        url: "https://i.pinimg.com/564x/64/72/75/6472757b246d9d27826dd13544bef275.jpg",
        name:"ParejaGatosFranceses",
        },
        {
            url:"https://i.pinimg.com/564x/e7/d3/93/e7d3938170a39009b9c05045c8f0186b.jpg",
            name:"Raton con sombrero",
        },
        {
            url:"https://i.pinimg.com/564x/c6/da/13/c6da1347910ea85e0530573c8e4c2b6f.jpg",
            name:"Dog Happy",
        }
    ]
    
    const productList = [
        {
            name: "Croquetas",
            img: "https://i.pinimg.com/564x/1d/1f/9a/1d1f9a2d6e6927d41551c70e72bd65eb.jpg",
            price: 5000,
        },
        {
            name: "Bone toy",
            img: "https://i.pinimg.com/564x/61/79/0b/61790b3731b71c011bb9cc19c7900990.jpg",
            price: 2000,
        },
    ]


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

    addAds(adsList)
    addProducts(productList)
})