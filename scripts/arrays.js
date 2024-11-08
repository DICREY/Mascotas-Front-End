// Main arrays
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
        url: "https://i.pinimg.com/236x/4b/38/ca/4b38ca45c95c29710d4464c4641ef2f5.jpg",
        name: "Cat with Flow"
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
        url:"https://i.pinimg.com/564x/c6/da/13/c6da1347910ea85e0530573c8e4c2b6f.jpg",
        name:"Dog Happy",
    },
    {
        url: "https://i.pinimg.com/236x/e8/1d/9f/e81d9f2306439a6a9f5cf76ccba77dba.jpg",
        name:"Rapper Dog"
    },
    {
        url: "https://i.pinimg.com/236x/9e/eb/ba/9eebba971101f37513d646780f513349.jpg",
        name: "Potter Dog"
    }
]

const productList = [
    {
        name: "Dog Dish",
        img: "https://i.pinimg.com/564x/1d/1f/9a/1d1f9a2d6e6927d41551c70e72bd65eb.jpg",
        price: 5000,
        categories: ""
    },
    {
        name: "Rubber Bone",
        img: "https://i.pinimg.com/564x/61/79/0b/61790b3731b71c011bb9cc19c7900990.jpg",
        price: 3000,
        categories: ""
    },
    {
        name: "Cyan Necklace",
        img: "https://i.pinimg.com/564x/8f/b2/25/8fb2258fa4e5b5ca702d16a851e63cd2.jpg",
        price: 10000,
        categories: ""
    },
    {
        name: "Dog Pajamas",
        img: "https://i.pinimg.com/236x/29/26/94/2926948b4b142da056b1b6d8b68d9e4b.jpg",
        price: 20000,
        categories: ""
    },
    {
        name: "Brown Necklace",
        img: "https://i.pinimg.com/236x/05/84/1a/05841aa7aa0771a98a61a4d492174518.jpg",
        price: 12000,
        categories: ""
    },
    {
        name: "Bed Hot Dog",
        img: "https://i.pinimg.com/236x/aa/a6/01/aaa601284e586ab9913e200f742d2839.jpg",
        price: 18000,
        categories: ""
    },
    {
        name: "Feeder Elegant",
        img: "https://i.pinimg.com/564x/28/13/d8/2813d85fe22d258ec3104d0e60b9e592.jpg",
        price: 35000,
        categories: ""
    },
    {
        name: "Pet Bed",
        img: "https://i.pinimg.com/564x/cf/44/b0/cf44b03d8656641596a5d041c7a5064a.jpg",
        price: 40000,
        categories: ""
    },
    {
        name: "Bath Gloves",
        img: "https://i.pinimg.com/736x/86/63/f4/8663f4da97aeb47a234cbe588f113f18.jpg",
        price: 25000,
        categories: ""
    },
    {
        name: "Wipes",
        img: "https://i.pinimg.com/236x/b9/12/e6/b912e69222e68c80c385843c601d8f8e.jpg",
        price: 7000,
        categories: ""
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