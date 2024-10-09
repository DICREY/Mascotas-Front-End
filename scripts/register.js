document.addEventListener("DOMContentLoaded",() => {
    const iconPassword = document.querySelector(".i-password")
    const inputPassword = document.querySelector(".password")

    iconPassword.addEventListener("click",showPassword)

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
})