document.addEventListener("DOMContentLoaded",() => {
    // containers
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")
    const sectionPrivacy = document.getElementById("section-privacy")
    const sectionSelectAppointment = document.getElementById("select-appointment")
    const sectionAppointments = document.getElementById("sub-select-appointment")
    const sectionAppointmentCalendar = document.getElementById("section-appointment-data")
    const sectionAppointmentInputs = document.getElementById("section-appointment-inputs")
    const formRequest = document.getElementById("form-request-appointment")
    const formConsult = document.getElementById("form-consult-appointment")
    const consultAppointment = document.getElementById("consult-appointment")
    const requestAppointment = document.getElementById("request-appointment")
    const dateNameAppoint = document.getElementById("date-name-appointment")
    const daysContainer = document.getElementById("month-days")

    // Dynamic labels
    const veterinary = document.getElementById("veterinary")
    const pets = document.getElementById("pets")
    const services = document.getElementById("services")
    const times = document.getElementById("time-appointment")
    const monthYear = document.getElementById("month-year")

    // Btns
    const btnI = document.querySelectorAll("#btn-i")
    const btnBackAppointRequest = document.getElementById("btn-back-appointment")
    const btnBackAppointConsult = document.getElementById("btn-back-appointment-consult")
    const btnConsultAppointDate = document.getElementById("consult-appoint-date")
    const btnConsultAppointPetsName = document.getElementById("consult-appoint-pets-name")
    const btnNextAppointmentRequest = document.getElementById("btn-next-appointment")
    const btnPrevMonth = document.getElementById("prev-month")
    const btnNextMonth = document.getElementById("next-month")
    const dayAppointment =  document.querySelectorAll(".available")
    
    // Events 
    btnI.forEach(i => i.addEventListener("click",showToggle))
    dayAppointment.forEach(i => i.addEventListener("click",addDayAppointment))
    btnBackAppointRequest.addEventListener("click",showFormRequest)
    btnBackAppointConsult.addEventListener("click",showFormConsult)
    requestAppointment.addEventListener("click",showFormRequest)
    consultAppointment.addEventListener("click",showFormConsult)
    btnConsultAppointDate.addEventListener("click",() => showDateInput(DateName[0]))
    btnConsultAppointPetsName.addEventListener("click",() => showDateInput(DateName[1]))
    btnPrevMonth.addEventListener("click",prevMonthCalendar)
    btnNextMonth.addEventListener("click",nextMonthCalendar)
    btnNextAppointmentRequest.addEventListener("click",showSectionFormRequest)
    
    // Vars 
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth()

    // functions
    function showToggle() {
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

    function showSectionFormRequest() {
        sectionAppointmentCalendar.classList.toggle("inactive")
        sectionAppointmentInputs.classList.toggle("inactive")   
    }

    function addDayAppointment() {
        // const p = document.createElement('p')
        // p.innerHTML = `${day}/${currentMonth}/${currentYear}`
        // sectionAppointmentCalendar.appendChild(p)
        alert("asdkakhsd")
    }

    function showDateInput(list) {
        const existP = dateNameAppoint.querySelector("p")
        const existInput = dateNameAppoint.querySelector("input")

        if (existP || existInput) {
            dateNameAppoint.removeChild(existP)
            dateNameAppoint.removeChild(existInput)
        }

        const input = document.createElement("input")
        const p = document.createElement("p")

        p.innerText = list[0]
        p.className = "p"
        input.placeholder = list[3]
        input.type = list[1]
        input.className = list[2]
        
        dateNameAppoint.appendChild(p)
        dateNameAppoint.appendChild(input)
    }

    function prevMonthCalendar() {
        --currentMonth
        if (currentMonth < 0) {
            --currentYear
            currentMonth = 11
        }
        renderCalendar()
    }

    function nextMonthCalendar() {
        ++currentMonth
        if (currentMonth > 11) {
            ++currentYear
            currentMonth = 0
        }
        renderCalendar()
    }

    function optsSelects() {
        listVeterinarys.forEach(i => {
            const opt = document.createElement("option")
            opt.value = i.name
            opt.innerText = i.name + " " + i.lastName
            veterinary.appendChild(opt)
        })
        listPets.forEach(i => {
            const opt = document.createElement("option")
            opt.value = i
            opt.innerText = i
            pets.appendChild(opt)
        })
        listServices.forEach(i => {
            const opt = document.createElement("option")
            opt.value = i
            opt.innerText = i
            services.appendChild(opt)
        })
    }

    function renderCalendar() {
        const firsthDayOfMonth = new Date(currentYear,currentMonth, 0).getDay()
        const daysInMonth = new Date(currentYear,currentMonth + 1, 0).getDate()

        monthYear.textContent = `${months[currentMonth]} ${currentYear}`
        daysContainer.innerText = ""

        for (let i = 0; i < firsthDayOfMonth; i++) daysContainer.innerHTML += `<span></span>`
        for (let day = 1; day <= daysInMonth; day++) {
            const span = document.createElement("span")

            span.innerText = day
            daysAvailable.forEach(i => {
                if(i.month === months[currentMonth] && i.year === currentYear) {
                    if (i.days.includes(day)) span.classList.add("available")
                }
            })
            daysContainer.appendChild(span)
        }
    }
    
    // Call to functions
    renderCalendar()
    optsSelects()
})