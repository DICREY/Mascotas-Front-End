// Main arrays
const petList = async (picturesContainer) => {
    const URL = "https://api.thecatapi.com/v1/images/search?limit=10"
    fetch(URL)
    .then(res => res.json())
    .then(datas => datas.forEach(i => {
        const img = document.createElement("img")
        img.src = i.url
        img.className = "pet-picture"
        picturesContainer.appendChild(img)
    }))
    .catch((err) => {
        const p = document.createElement("h2")
        p.innerText = `Error ${err.message}`
        picturesContainer.appendChild(p)
    })
}

const servicesList = () => {
    const URL = ""   
    fetch(URL)
    .then(res => res.json())
    .then(datas => {
        let info = datas

    })
}

const productList = [
    {
        name: "Dog Dish",
        img: "https://i.pinimg.com/564x/1d/1f/9a/1d1f9a2d6e6927d41551c70e72bd65eb.jpg",
        price: 5000,
        description: "It's a plate designed specifically for dogs to eat or drink. This object is made of plastic that is resistant to drops and minor scratches.",
        categories: "Food",
        for: ""
    },
    {
        name: "Rubber Bone",
        img: "https://i.pinimg.com/564x/61/79/0b/61790b3731b71c011bb9cc19c7900990.jpg",
        price: 3000,
        description: "",
        categories: "Toy",
        for: ""
    },
    {
        name: "Cyan Necklace",
        img: "https://i.pinimg.com/564x/8f/b2/25/8fb2258fa4e5b5ca702d16a851e63cd2.jpg",
        price: 10000,
        description: "",
        categories: "Clothes",
        for: ""
    },
    {
        name: "Dog Pajamas",
        img: "https://i.pinimg.com/236x/29/26/94/2926948b4b142da056b1b6d8b68d9e4b.jpg",
        price: 20000,
        description: "",
        categories: "Clothes",
        for: ""
    },
    {
        name: "Brown Necklace",
        img: "https://i.pinimg.com/236x/05/84/1a/05841aa7aa0771a98a61a4d492174518.jpg",
        price: 12000,
        description: "",
        categories: "Clothes",
        for: ""
    },
    {
        name: "Bed Hot Dog",
        img: "https://i.pinimg.com/236x/aa/a6/01/aaa601284e586ab9913e200f742d2839.jpg",
        price: 18000,
        description: "",
        categories: "Tools",
        for: ""
    },
    {
        name: "Feeder Elegant",
        img: "https://i.pinimg.com/564x/28/13/d8/2813d85fe22d258ec3104d0e60b9e592.jpg",
        price: 35000,
        description: "",
        categories: "Food",
        for: ""
    },
    {
        name: "Pet Bed",
        img: "https://i.pinimg.com/564x/cf/44/b0/cf44b03d8656641596a5d041c7a5064a.jpg",
        price: 40000,
        description: "",
        categories: "Tools",
        for: ""
    },
    {
        name: "Bath Gloves",
        img: "https://i.pinimg.com/736x/86/63/f4/8663f4da97aeb47a234cbe588f113f18.jpg",
        price: 25000,
        description: "",
        categories: "Tools",
        for: ""
    },
    {
        name: "Wipes",
        img: "https://i.pinimg.com/236x/b9/12/e6/b912e69222e68c80c385843c601d8f8e.jpg",
        price: 7000,
        description: "",
        categories: "Accessories",
        for: ""
    }
]

// Appointment Arrays
const DateName = [
    ["It Write the date of appointment","text","date-appoint input","Date Appointment"],
    ["It Write the pet's name to find a appointment","text","pets-name input","Pet's Name"]
]
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
let daysAvailable = [
    {
        month: "November",
        year: 2024,
        days: [
            1,20,12,4,14,15
        ]
    },
    {
        month: "December",
        year: 2024,
        days: [
            6,7,10,13,14,15
        ]
    }
]
let timesAvailable = [
    "6am - 7am","7am - 8am","8am - 9am","9am - 10am","10am - 11am"
]
let listPets = [ 
    "Sammy","Rocky","Max","Simba"
]
let listServices = [
    "Vacunación","Consulta Veterinaria General","Desparasitación","Limpieza Dental",
    "Baño y Corte de Pelo","Cirugía Menor","Consulta de Emergencia"
]
let listVeterinarys = [
    {
        name: "Luis",
        lastName: "Rodríguez"
    },
    {
        name: "Carlos",
        lastName: "Martínez"
    },
    {
        name: "Daniel",
        lastName: "Jiménez"
    },
    {
        name: "Camila",
        lastName: "Reyes"
    },
]
// Login Arrays 
const usersList = [
    {
        email: "cristianarrietar4@gmail.com",
        password: "cristian123"
    },
    {
        email: "davidarrieta@gmail.com",
        password: "david123"
    }
]
const dataUser = [
    {
        email: "cristianarrietar4@gmail.com",
        name: "cristian",
        pastPassword: [
            "cristian123","cristian2025#","cristian2024"
        ]
    }
]