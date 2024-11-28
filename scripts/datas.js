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
        for: ["Dogs"]
    },
    {
        name: "Rubber Bone",
        img: "https://i.pinimg.com/564x/61/79/0b/61790b3731b71c011bb9cc19c7900990.jpg",
        price: 3000,
        description: "",
        categories: "Toy",
        for: ["Dogs"]
    },
    {
        name: "Cyan Necklace",
        img: "https://i.pinimg.com/564x/8f/b2/25/8fb2258fa4e5b5ca702d16a851e63cd2.jpg",
        price: 10000,
        description: "",
        categories: "Clothes",
        for: ["Dogs"]
    },
    {
        name: "Dog Pajamas",
        img: "https://i.pinimg.com/236x/29/26/94/2926948b4b142da056b1b6d8b68d9e4b.jpg",
        price: 20000,
        description: "",
        categories: "Clothes",
        for: ["Dogs"]
    },
    {
        name: "Brown Necklace",
        img: "https://i.pinimg.com/236x/05/84/1a/05841aa7aa0771a98a61a4d492174518.jpg",
        price: 12000,
        description: "",
        categories: "Clothes",
        for: ["Dogs"]
    },
    {
        name: "Bed Hot Dog",
        img: "https://i.pinimg.com/236x/aa/a6/01/aaa601284e586ab9913e200f742d2839.jpg",
        price: 18000,
        description: "",
        categories: "Tools",
        for: ["Dogs"]
    },
    {
        name: "Feeder Elegant",
        img: "https://i.pinimg.com/564x/28/13/d8/2813d85fe22d258ec3104d0e60b9e592.jpg",
        price: 35000,
        description: "",
        categories: "Food",
        for: [
            "Dogs","Cats"
        ]
    },
    {
        name: "Pet Bed",
        img: "https://i.pinimg.com/564x/cf/44/b0/cf44b03d8656641596a5d041c7a5064a.jpg",
        price: 40000,
        description: "",
        categories: "Tools",
        for: ["Dogs"]
    },
    {
        name: "Bath Gloves",
        img: "https://i.pinimg.com/736x/86/63/f4/8663f4da97aeb47a234cbe588f113f18.jpg",
        price: 25000,
        description: "",
        categories: "Tools",
        for: ["Dogs"]
    },
    {
        name: "Wipes",
        img: "https://i.pinimg.com/236x/b9/12/e6/b912e69222e68c80c385843c601d8f8e.jpg",
        price: 7000,
        description: "",
        categories: "Accessories",
        for: ["Dogs"]
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
    {
        name:"Vacunación",
        description: "Es un procedimiento esencial para proteger a las mascotas contra enfermedades infecciosas como el moquillo, parvovirus, rabia o leucemia felina. Durante el proceso, el veterinario evalúa el estado de salud del animal, aplica la vacuna correspondiente según su edad, especie y estilo de vida, y establece un calendario de refuerzos para mantener la inmunidad a largo plazo. Las vacunas no solo previenen enfermedades graves, sino que también contribuyen a la salud pública al reducir el riesgo de transmisión de zoonosis.",
        url: "https://cdn2.thecatapi.com/images/MTYwMzUxNg.jpg"
    },
    {
        name: "Consulta Veterinaria General",
        description: "Una consulta veterinaria general es el primer paso para evaluar la salud de tu mascota, prevenir problemas futuros y detectar enfermedades en etapas tempranas. Es un servicio esencial que todas las clínicas veterinarias ofrecen, y que debe realizarse de manera regular para garantizar el bienestar de tu compañero animal.",
        url: "https://cdn2.thecatapi.com/images/a2l.jpg"
    },
    {
        name: "Desparasitación",
        description: "La desparasitación en una veterinaria es un procedimiento esencial para mantener la salud de las mascotas y prevenir problemas que afectan tanto a los animales como a las personas. Consiste en eliminar parásitos internos (como lombrices) y externos (como pulgas y garrapatas) que pueden causar enfermedades graves si no se tratan.",
        url: "https://cdn2.thecatapi.com/images/MTUyOTY0OQ.jpg"
    },
    {
        name: "Limpieza Dental",
        description: "Es un procedimiento profesional que elimina la placa y el sarro acumulados en los dientes de las mascotas, ayudando a prevenir enfermedades bucales como gingivitis, periodontitis y mal aliento.Previene infecciones y pérdida dental.",
        url: "https://cdn2.thecatapi.com/images/MTgxNTAxOA.jpg"
    },
    {
        name: "Baño y Corte de Pelo",
        description: "El baño y corte de pelo en una veterinaria es un servicio profesional que garantiza la higiene, salud y apariencia de las mascotas,algunos beneficios son, la prevencion de problemas de piel y parásitos, mantener el pelaje saludable y sin enredos, contribuir al bienestar general y comodidad de la mascota.",
        url: "https://cdn2.thecatapi.com/images/0c9_EEtqQ.jpg"
    },
    {
        name: "Cirugía Menor",
        description: "La cirugía menor incluye procedimientos sencillos y de bajo riesgo, realizados generalmente de manera ambulatoria, como esterilizaciones, extracción de tumores pequeños, suturas de heridas superficiales y limpieza de abscesos. Estas intervenciones suelen implicar anestesia local o general según la complejidad, un corto tiempo de recuperación y monitoreo profesional para garantizar el bienestar del animal. Sus beneficios incluyen la prevención de problemas futuros, como infecciones o reproducción no deseada, y una mejora en la calidad de vida de la mascota, siendo menos invasivas y económicas que las cirugías mayores.",
        url: "https://cdn2.thecatapi.com/images/MTk4MTAxOQ.jpg"
    },
    {
        name: "Consulta de Emergencia",
        description: "La consulta de emergencia esta destinada a atender situaciones urgentes que ponen en riesgo la vida o salud de una mascota, como accidentes, heridas graves, intoxicaciones, dificultad para respirar, convulsiones o fiebre alta. En estos casos, el veterinario realiza una evaluación rápida y prioritaria para estabilizar al animal, identificar la causa del problema y aplicar el tratamiento necesario, que puede incluir medicamentos, fluidoterapia, curas o incluso cirugía inmediata. Este servicio es vital para actuar con rapidez y aumentar las posibilidades de recuperación en casos críticos.",
        url: "https://cdn2.thecatapi.com/images/cjt.jpg"
    }
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

function petsGet() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key":"live_zUUJgF0bKp5p2ql6OyJtavP7z0t2Dhyw6OAPoTbmSUg6t9JNiKYj8fdE1eTc5xwt"
    })
    const requestOption = {
        method: "GET",
        headers: headers
    }

    fetch("",requestOption)
    .then(res => res.json())
    .then(data => {
        let info = data
    })
}