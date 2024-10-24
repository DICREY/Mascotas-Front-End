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
}

module.exports = Products