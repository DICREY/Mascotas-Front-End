document.addEventListener("DOMContentLoaded",() => {
    // containers
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")
    const sectionPrivacy = document.querySelector("#section-privacy")
    const sectionSelectAppointment = document.querySelector("#select-appointment")
    const sectionAppointments = document.querySelector(".sub-select-appointment")
    const formRequest = document.querySelector("#form-request-appointment")
    const formConsult = document.querySelector("#form-consult-appointment")
    const consultAppointment = document.getElementById("consult-appointment")
    const requestAppointment = document.getElementById("request-appointment")
    const dateNameAppoint = document.getElementById("date-name-appointment")

    // Etiquetas dinamicas
    const veterinary = document.querySelector("#veterinary")
    const pets = document.querySelector("#pets")
    const services = document.querySelector("#services")

    // Botones
    const btnI = document.querySelectorAll("#btn-i")
    const btnBackAppointRequest = document.getElementById("btn-back-appointment")
    const btnBackAppointConsult = document.getElementById("btn-back-appointment-consult")
    const btnConsultAppointDate = document.getElementById("consult-appoint-date")
    const btnConsultAppointPetsName = document.getElementById("consult-appoint-pets-name")
    
    // Events 
    btnI.forEach(i => i.addEventListener("click",showToggle))
    btnBackAppointRequest.addEventListener("click",showFormRequest)
    btnBackAppointConsult.addEventListener("click",showFormConsult)
    requestAppointment.addEventListener("click",showFormRequest)
    consultAppointment.addEventListener("click",showFormConsult)
    btnConsultAppointDate.addEventListener("click",showDateInput)
    // btnConsultAppointPetsName.addEventListener("click",showDateInput(DateName[1]))
    
    // lists 
    const list = ["It Write the date of appointment","date","date-appoint input","Date Appointment"]

    // functions
    async function showToggle() {
        setTimeout(() => {
            sectionPrivacy.classList.toggle("inactive")
            sectionSelectAppointment.classList.toggle("inactive")
        },500)
    }

    function showFormRequest() {
        formRequest.classList.toggle("inactive")
        header.classList.toggle("blur")
        footer.classList.toggle("blur")
        formConsult.classList.toggle("blur")
        sectionAppointments.classList.toggle("blur")
        btnI.forEach(i => i.classList.toggle("blur"))
    }
    function showFormConsult() {
        formConsult.classList.toggle("inactive")
        header.classList.toggle("blur")
        footer.classList.toggle("blur")
        formRequest.classList.toggle("blur")
        sectionAppointments.classList.toggle("blur")
        btnI.forEach(i => i.classList.toggle("blur"))
    }

    function showDateInput() {
        const input = document.createElement("input")
        const p = document.createElement("p")
        if (dateNameAppoint.firstChild !== p) {
            p.innerText = list[0]
    
            input.placeholder = list[3]
            input.type = list[1]
            input.className = list[2]
    
            dateNameAppoint.appendChild(p)
            dateNameAppoint.appendChild(input)
        } else {
            return
        }
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
    
    // Call to functions
    optsSelects()
})