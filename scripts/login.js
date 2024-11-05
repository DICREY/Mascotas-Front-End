document.addEventListener("DOMContentLoaded",() => {
    // containers 
    const formLogin = document.getElementById("form-login")
    const formDataPassword = document.getElementById("form-data-password")

    // dynamic labels
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const emailForgot = document.getElementById("email-forgot")
    const name = document.getElementById("name-forgot")
    const pastPassword = document.getElementById("password-forgot")
    const message = document.getElementById("message")
    
    // btns 
    const iconPassword = document.querySelectorAll(".i-password")
    const inputPassword = document.querySelector(".password")
    const btnForgotPassword = document.getElementById("forgot-password")
    const btnBacklog = document.getElementById("remember-password")
    const btnSend = document.getElementById("btn-send")
    const btnSendPassword = document.getElementById("send-new-password")

    // add events 
    iconPassword.forEach(i => i.addEventListener("click",() => showPassword(i)))
    btnSend.addEventListener("click",verifyDatas)
    btnBacklog.addEventListener("click",logDatas)
    btnForgotPassword.addEventListener("click",logDatas)
    btnSendPassword.addEventListener("click",sendPassword)

    // functions 
    function showPassword(i) {
        const locked = "bx bx-lock icon i-password"
        const unlocked = "bx bx-lock-open icon i-password"
        if (i.className === unlocked) {
            i.className = locked
            inputPassword.type = "password"
        } else {
            i.className = unlocked
            inputPassword.type = "text"
        }
    }
    
    function verifyDatas(){
        let existUser = Boolean(usersList.forEach(i => i.email == email.value && i.password == password.value))
        if (existUser) {
            alert("hola")
            // window.location.href = "../index.html"
        } else {
            message.innerText = "Email or password incorrect"
            setTimeout(() => window.location.reload(),7000)
        } 
    }

    function logDatas() {
        formLogin.classList.toggle("inactive")
        formDataPassword.classList.toggle("inactive")
    }
    
    function sendPassword() {
        const emailValue = emailForgot.value
        const nameValue = name.value
        const pastPasswordValue = pastPassword.value
        dataUser.forEach(i => i.name === nameValue || i.email === emailValue? 
            alert(`Review your email ${emailValue}`): alert("Datas not found"))
        setTimeout(() => {
            location.reload()
        },3000)
    }
})