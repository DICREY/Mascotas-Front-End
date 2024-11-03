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
    {
        name: "Necklace",
        img: "https://i.pinimg.com/564x/8f/b2/25/8fb2258fa4e5b5ca702d16a851e63cd2.jpg",
        price: 10000,
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
            20,12,4,14,15
        ],
        times: [
            "6am - 7am","7am - 8am","8am - 9am","9am - 10am","10am - 11am"
        ]
    },
    {
        month: "December",
        year: 2024,
        days: [
            6,7,10,13,14,15
        ],
        times: [
            "6am - 7am","7am - 8am","8am - 9am","9am - 10am","10am - 11am"
        ]
    }
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