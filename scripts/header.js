function createHeader(header) {
    // Create labels
    const picture = document.createElement("picture")
    const img = document.createElement("img")
    const pNameCorp = document.createElement("p")
    const spanlog = document.createElement("span")
    const olLog = document.createElement("ol")
    const liLog = document.createElement("li")
    const aUser = document.createElement("a")
    const deployingLog = document.createElement("ol")
    const deployingLiLog = document.createElement("li")
    const deployingLiReg = document.createElement("li")

    // label class
    img.className = "logo"
    pNameCorp.className = "name-corp"
    liLog.className = "btn-link"

    // Modify label attribute
    img.src = "https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/PetsParadiseLogo.png?raw=true"
    img.alt = "dog"
    pNameCorp.translate = false
    aUser.className = "btn-link"
    deployingLog.className = "deploying access"
    
    // label content
    pNameCorp.textContent = "Pets Paradise"
    aUser.innerHTML = "<i class='bx bx-user-circle'></i>User"
    deployingLiLog.innerHTML = '<a class="btn-link" href="./login.html">Login</a>'
    deployingLiReg.innerHTML = '<a class="btn-link" href="./register.html">Register</a>'
    

    // Add childs to header
    header.appendChild(picture)
    header.appendChild(pNameCorp)
    header.appendChild(olLog)
    picture.appendChild(img)
    olLog.appendChild(liLog)
    olLog.appendChild(deployingLog)
    liLog.appendChild(aUser)
    deployingLog.appendChild(deployingLiLog)
    deployingLog.appendChild(deployingLiReg)
}