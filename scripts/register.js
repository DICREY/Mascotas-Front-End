document.addEventListener("DOMContentLoaded",() => {
    const iconPassword = document.querySelector(".i-password")
    const inputPassword = document.querySelector(".password")
    const btnNext = document.querySelector(".btn-next")
    const btnBack = document.querySelector(".btn-back")
    const primarySection = document.querySelector(".primary-section")
    const secondarySection = document.querySelector(".secondary-section")

    iconPassword.addEventListener("click",showPassword)
    btnNext.addEventListener("click",changeSection)
    btnBack.addEventListener("click",changeSection)

    function showPassword() {
        const unlocked = "bx bx-lock-open icon i-password"
        if (iconPassword.className === unlocked) {
            iconPassword.className = "bx bx-lock icon i-password"
            inputPassword.type = "password"
        } else {
            iconPassword.className = unlocked
            inputPassword.type = "text"
        }
    }

    function changeSection() {
        primarySection.classList.toggle("inactive")
        secondarySection.classList.toggle("inactive")
    }
})