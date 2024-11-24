function createFooter(footer) {
    // sections 
    const sectionImportant = document.createElement("section")
    const sectionContact = document.createElement("section")
    const sectionRedes = document.createElement("section")

    // important section labels
    const pImportant = document.createElement('p')
    const importantList = document.createElement('ol')
    const liImportantTerms = document.createElement('li')
    const liImportantPrivacy = document.createElement('li')
    const liImportantPay = document.createElement('li')

    // important section class 
    sectionImportant.className = "important footer-section"
    pImportant.className = "footer-subtitle"
    importantList.className = "footer-list"

    // important section texts 
    pImportant.innerText = 'Important'
    liImportantTerms.innerHTML = '<a class="footer-btn-link">Terms and Conditions</a>'
    liImportantPrivacy.innerHTML = '<a class="footer-btn-link">Privacy Policy</a>'
    liImportantPay.innerHTML = '<a class="footer-btn-link">Payment Methods</a>'

    // Contact section labels 
    const pContact = document.createElement('p')
    const olContact = document.createElement('ol')
    const liContactSales = document.createElement('li')
    const liContactService = document.createElement('li')
    const liContactSchedule = document.createElement('li')

    // Contact section class 
    sectionContact.className = "contacto footer-section"
    pContact.className = "footer-subtitle"
    olContact.className = "footer-list"

    // Contact section texts
    pContact.innerText = "Contact us"
    liContactSales.innerHTML = "<p class='footer-list-data'>Sales +57 320 5698976</p>"
    liContactService.innerHTML = "<p class='footer-list-data'>Customer service 601 5941919</p>"
    liContactSchedule.innerHTML = "<p class='footer-list-data'><strong>Schedule:</strong> <br> Monday to friday at 8:00 a.m to 6:00 p.m</p>"

    // Redes section labels 
    const pRedes = document.createElement('p')
    const olRedes = document.createElement('ol')
    const liRedesFacebook = document.createElement('li')
    const liRedesInstagram = document.createElement('li')
    const liRedesYoutube = document.createElement('li')
    
    // Redes section class 
    sectionRedes.className = "redes footer-section"
    pRedes.className = "footer-subtitle"
    olRedes.className = "footer-list footer-redes"

    // Redes section texts 
    pRedes.textContent = "Address"
    liRedesFacebook.innerHTML = '<a href="#"><i class="bx bxl-facebook footer-icon-red"></i></a>'
    liRedesInstagram.innerHTML = '<a href="#"><i class="bx bxl-instagram footer-icon-red"></i></a>'
    liRedesYoutube.innerHTML = '<a href="#"><i class="bx bxl-youtube footer-icon-red"></i></a>'

    // Add childs to important section
    sectionImportant.appendChild(pImportant)
    sectionImportant.appendChild(importantList)
    importantList.appendChild(liImportantTerms)
    importantList.appendChild(liImportantPrivacy)
    importantList.appendChild(liImportantPay)

    // Add childs to contact section
    sectionContact.appendChild(pContact)
    sectionContact.appendChild(olContact)
    olContact.appendChild(liContactSales)
    olContact.appendChild(liContactService)
    olContact.appendChild(liContactSchedule)

    // Add childs to redes section 
    sectionRedes.appendChild(pRedes)
    sectionRedes.appendChild(olRedes)
    olRedes.appendChild(liRedesFacebook)
    olRedes.appendChild(liRedesInstagram)
    olRedes.appendChild(liRedesYoutube)

    // Add sections to footer
    footer.appendChild(sectionImportant)
    footer.appendChild(sectionContact)
    footer.appendChild(sectionRedes)
}
