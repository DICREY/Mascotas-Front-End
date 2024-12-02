document.addEventListener("DOMContentLoaded",() => {
    // Container labels 
    const searchForm = document.getElementById("search-form")
    const deleteForm = document.getElementById("delete-form")
    const resultCard = document.getElementById('result-card')
    const resultCardDelete = document.getElementById('result-delete')

    // Dynamic labels
    const deleteInput = document.getElementById('delete-input')
    const searchInput = document.getElementById('search-input')

    // btn labels
    const searchBtn = document.getElementById("search-btn")
    const deleteBtn = document.getElementById("delete-btn")
    const btnSearch = document.getElementById("btn-search")
    const btnDelete = document.getElementById("btn-delete")

    // Events
    searchBtn.addEventListener("click",showSearchForm)
    deleteBtn.addEventListener("click",showDeleteForm)
    btnSearch.addEventListener("click",searchProduct)
    btnDelete.addEventListener("click",deleteProduct)

    // functions
    function showSearchForm() {
        searchForm.classList.remove("inactive")
        deleteForm.classList.add("inactive")
    }

    function showDeleteForm() {
        searchForm.classList.add("inactive")
        deleteForm.classList.remove("inactive")
    }

    function searchProduct() {
        // vars
        const inputName = searchInput.value

        fetch("./datas/products.json")
        .then(res => res.json())
        .then(data => {
            const product = data.find(pro => pro.name === inputName)

            if(product) {
                resultCard.innerHTML = `
                <h3>Product find</h3>
                <p><strong>Nombre:</strong> ${product.name}</p>
                <p><strong>Descripción:</strong> ${product.description}</p>
                <p><strong>Precio:</strong> $${product.price}</p>
                <p><strong>Stock:</strong> ${product.stock}</p>
            `
            } else resultCard.innerHTML = '<p style="color: red;">Product not found</p>'
        })
    }

    function deleteProduct() {
        // Vars 
        const deleteInputName = deleteInput.value

        fetch("./datas/products.json")
        .then(res => res.json())
        .then(data => {
            const index = data.findIndex(prod => prod.name === deleteInputName)

            if(index !== -1) {
                const deletedProduct = data.splice(index, 1)[0]

                fetch("./datas/products.json", {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(() => {
                    resultCardDelete.innerHTML = `<p style="color: green;">${deletedProduct.name} ha sido borrado exitosamente.</p>`
                })
                .catch(err => {
                    console.error('Error al actualizar el archivo:', err);
                    resultCardDelete.innerHTML = '<p style="color: red;">Error al borrar el producto</p>'
                });
            } else {
                resultCardDelete.innerHTML = '<p style="color: red;">Producto no encontrado</p>'
            }
        })
        .catch(err => {
            console.error('Error al cargar productos:', err)
            resultCardDelete.innerHTML = '<p style="color: red;">Error al cargar productos</p>'
        })
    }
})
