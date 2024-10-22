document.addEventListener("DOMContentLoaded",() => {
    const sectionPrivacy = document.querySelector("#section-privacy")
    const sectionSelectAppointment = document.querySelector("#select-appointment")
    const formRequest = document.querySelector("#form-request-appointment")
    const btnI = document.querySelectorAll("#btn-i")
    const veterinary = document.querySelector("#veterinary")
    const pets = document.querySelector("#pets")
    const services = document.querySelector("#services")

    btnI.forEach(i => i.addEventListener("click",showToggle))

    async function showToggle() {
        setTimeout(() => {
            sectionPrivacy.classList.toggle("inactive")
            sectionSelectAppointment.classList.toggle("inactive")
        },500)
    }

    function optsSelects() {
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
        let listPets = [
            {
                name: "Sammy"
            },
            {
                name: "Rocky"
            },
            {
                name: "Max"
            },
            {
                name: "Simba"
            },
        ]
        let listServices = [
            {
                name: "Vacunación"
            },
            {
                name: "Consulta Veterinaria General"
            },
            {
                name: "Desparasitación"
            },
            {
                name: "Limpieza Dental"
            },
            {
                name: "Baño y Corte de Pelo"
            },
            {
                name: "Cirugía Menor"
            },
            {
                name: "Consulta de Emergencia"
            },
        ]
        for (i of listVeterinarys) {
            const opt = document.createElement("option")
            opt.value = i.name
            opt.innerText = i.name + " " + i.lastName
            veterinary.appendChild(opt)
        }
        for (i of listPets) {
            const opt = document.createElement("option")
            opt.value = i.name
            opt.innerText = i.name
            pets.appendChild(opt)
        }
        for (i of listServices) {
            const opt = document.createElement("option")
            opt.value = i.name
            opt.innerText = i.name 
            services.appendChild(opt)
        }
    }
    
    optsSelects()
})