const { faker } = require('@faker-js/faker')

class Products {
    constructor(){
        this.products = []
        this.generate()
    }
    generate() {
        this.products.push({
            name: faker.commerce.productName(),
            url: faker.image.url()
        })
    }
    find() {
        return this.products
    }
    findM() {
        return [
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
            {
                name: "Bone toy",
                img: "https://i.pinimg.com/564x/61/79/0b/61790b3731b71c011bb9cc19c7900990.jpg",
                price: 2000,
            },
            {
                name: "Bone toy",
                img: "https://i.pinimg.com/564x/61/79/0b/61790b3731b71c011bb9cc19c7900990.jpg",
                price: 2000,
            },
        ]
    }
}

module.exports = Products