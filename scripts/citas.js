document.addEventListener("DOMContentLoaded",() => {
    const sectionPrivacy = document.querySelector("#section-privacy")
    const sectionSelectAppointment = document.querySelector("#select-appointment")
    const btnI = document.querySelectorAll("#btn-i")

    btnI.forEach(i => i.addEventListener("click",showToggle))

    async function showToggle() {
        setTimeout(() => {
            sectionPrivacy.classList.toggle("inactive")
            sectionSelectAppointment.classList.toggle("inactive")
        },100)
    }

})