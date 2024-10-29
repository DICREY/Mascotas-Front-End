document.addEventListener("DOMContentLoaded",() => {
    // containers 
    const formLogin = document.getElementById("form-login")
    const formDataPassword = document.getElementById("form-data-password")

    // dynamic labels
    const email = document.getElementById("email-forgot")
    const name = document.getElementById("name-forgot")
    const pastPassword = document.getElementById("password-forgot")

    // btns 
    const iconPassword = document.querySelectorAll(".i-password")
    const inputPassword = document.querySelector(".password")
    const btnForgotPassword = document.getElementById("forgot-password")
    const btnBacklog = document.getElementById("remember-password")
    const btnSendPassword = document.getElementById("send-new-password")

    // add events 
    iconPassword.forEach(i => i.addEventListener("click",showPassword))
    btnBacklog.addEventListener("click",logDatas)
    btnForgotPassword.addEventListener("click",logDatas)
    btnSendPassword.addEventListener("click",sendPassword)

    // functions 
    function showPassword() {
        const locked = "bx bx-lock icon i-password"
        const unlocked = "bx bx-lock-open icon i-password"
        if (iconPassword.className === unlocked) {
            iconPassword.className = locked
            inputPassword.type = "password"
        } else {
            iconPassword.className = unlocked
            inputPassword.type = "text"
        }
    }

    function logDatas() {
        formLogin.classList.toggle("inactive")
        formDataPassword.classList.toggle("inactive")
    }
    
    function sendPassword() {
        const dataUser = [
            {
                email: "cristianarrietar4@gmail.com",
                name: "cristian",
                pastPassword: [
                    "cristian123","cristian2025#","cristian2024"
                ]
            }
        ]
        const emailValue = email.value
        const nameValue = name.value
        const pastPasswordValue = pastPassword.value
        dataUser.forEach(i => i.name === nameValue || i.email === emailValue? 
            alert(`Review your email ${emailValue}`): alert("Datas not found"))
        setTimeout(() => {
            location.reload()
        },3000)
    }

})