const userEmail = document.querySelector("#email");
const button = document.querySelector(".ticket-btn");
const validateInput = document.createElement("p");
const emailInput = document.querySelector(".email-input");
const iconInfo2 = document.createElement("img");
const fullName = document.querySelector("#full_name");
const confHeader = document.querySelector(".conf_header-dekstop");
const secureText = document.querySelector(".secure-dekstop");
const formSection = document.querySelector(".form_section");
const githhub = document.querySelector("#github");
const text = document.querySelector(".opening_text");
const ticketLogo = document.querySelector(".logo");
const header = document.querySelector("header");
const headerLogo = document.createElement("img");
const headerText = document.createElement("h1");
const emailText = document.createElement("p");
const squiggly = document.querySelector(".squiggly");
const squigglyBottom = document.querySelector(".squiggly_bottom")
const squigglyBottomTicket = document.createElement("img")
const circlePattern = document.querySelector(".circle_pattern")
const circle_patternTicket = document.createElement("img")
const ticketText = document.querySelector(".ticket_texts")



const ticketItem = document.createElement("div")
let dateAndLocation = document.createElement("p")
let date = new Date();
let removeDay = date.toDateString().slice(0, 3);
date = date.toDateString().replace(removeDay, "")


const confHeaderMobile = document.querySelector(".conf_header-mobile")
const secureTextMobile = document.querySelector(".secure-mobile")



button.addEventListener("click", () => {
    if (!fullName.value || !githhub.value) {
        alert("Please fill out the missing field")
        return
    }


    if (!userEmail.value.includes("@gmail.com")) {
        iconInfo2.src = "./assets/images/icon-info2.png"
        emailInput.insertAdjacentElement("afterbegin", iconInfo2);
        iconInfo2.classList.add("info_icon2")
        validateInput.textContent = "Please enter a valid email address"
        emailInput.insertAdjacentElement("beforeend", validateInput);
        validateInput.classList.add("validateEmail")
        userEmail.style.border = "1px solid #f67464"
    } else {
        formSection.textContent = ""

        //Conf logo
        header.appendChild(headerLogo)
        headerLogo.src = "./assets/images/logo-full.svg"
        headerLogo.classList.add("conf_logo")


        //Conf Header
        confHeader.textContent = ""
        confHeaderMobile.textContent = ""
        ticketText.appendChild(headerText)
        headerText.innerHTML = `Congrats, <span style= 'color: #f67464;'>${fullName.value}</span> <br />Your ticket is ready.`
        headerText.classList.add("header_text")


        //Secure text
        secureText.textContent = ""
        secureTextMobile.textContent = ""



        //Email Text
        ticketText.appendChild(emailText)
        emailText.classList.add("email-text")

        const query = window.matchMedia("(min-width: 360px) and (max-width: 480px)")
        function handleQuery(e) {
            if (e.matches) {
                emailText.innerHTML = `We've emailed your ticket to <br /> <span style= 'color: #f67464;'>${userEmail.value}</span> and will send <br /> updates in the run up to event.`
                squigglyBottom.classList.add("squiggly_bottom-mobile")
                squiggly.classList.add("squiggly_logo")
                circlePattern.classList.add("circle_pattern-mobile")
            } else {
                emailText.innerHTML = `We've emailed your ticket to <br /> <span style= 'color: #f67464;'>${userEmail.value}</span> and will send updates in <br /> the run up to event.`
                squigglyBottom.classList.add("squiggly_bottom")
                squiggly.classList.add("squiggly")
                circlePattern.classList.add("circle_pattern")
            }
        }

        handleQuery(query)
        query.addEventListener("change", handleQuery)


        //Ticket
        const ticketSection = document.createElement("section")
        ticketText.insertAdjacentElement("afterend" ,ticketSection)
        ticketSection.classList.add("ticket_section")


        //Ticket Details
        const ticket = document.createElement("div")
        ticketSection.appendChild(ticket).appendChild(ticketItem).appendChild(ticketLogo)
        ticket.classList.add("ticket")
        ticketLogo.classList.add("ticket_logo")


        const userDetails = document.createElement("div")
        ticket.insertAdjacentElement("beforeend", userDetails)


        const ticketImage = document.createElement("img")
        ticketImage.classList.add("user_image")
        ticketImage.src = URL.createObjectURL(inputField.files[0])
        userDetails.appendChild(ticketImage)


        const userName = document.createElement("p")
        userName.textContent = fullName.value
        userDetails.appendChild(userName)
        userName.classList.add("user_name")


        const githhubLogo = document.createElement("img")
        userDetails.appendChild(githhubLogo)
        githhubLogo.classList.add("github_logo")
        githhubLogo.src = "./assets/images/icon-github.svg"


        const githubUsername = document.createElement("p")
        userDetails.appendChild(githubUsername)
        githubUsername.textContent = githhub.value
        githubUsername.classList.add("github_username")




        //Ticket Number
        const ticketNumber = document.createElement("div")
        const ticketNumberItem = document.createElement("div")
        const ticketId = document.createElement("p")
        ticketSection.appendChild(ticketNumber).appendChild(ticketNumberItem).appendChild(ticketId)
        ticketNumber.classList.add("ticket_number")
        ticketId.textContent = generateTIcketNumber()
        ticketId.classList.add("ticket_id")



        //Cut-Out
        const cut_out1 = document.createElement("div")
        const cutOutParagraph1 = document.createElement("p")
        cut_out1.classList.add("cut-out-top")
        ticketSection.appendChild(cut_out1).appendChild(cutOutParagraph1)


        const cut_out2 = document.createElement("div")
        const cutOutParagraph2 = document.createElement("p")
        cut_out2.classList.add("cut-out-bottom")
        ticketSection.appendChild(cut_out2).appendChild(cutOutParagraph2)


        //Squiggly background image
        squigglyBottom.src = ""
        const imageBackground = document.querySelector(".img_bg")
        squigglyBottomTicket.src = "./assets/images/pattern-squiggly-line-bottom-desktop.svg"
        imageBackground.appendChild(squigglyBottomTicket)
        squigglyBottomTicket.classList.add("squiggly_ticket")

         //Circle Pattern
        circlePattern.src = ""
        circle_patternTicket.src = "./assets/images/pattern-circle.svg"
        imageBackground.insertAdjacentElement("afterbegin", circle_patternTicket)
        circle_patternTicket.classList.add("circle_pattern_ticket")
    }
})


function generateTIcketNumber() {
    return "#" + Math.floor(Math.random() * (10 ** 5))
}



navigator.geolocation.getCurrentPosition(gotLocation, failed)

async function getData(lat, long) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=930971becfa941f882053344220412&q=${lat},${long}&aqi=yes`)
    const result = response.json()
    return result
}

async function gotLocation(position) {
    const userLocation = await getData(position.coords.latitude, position.coords.longitude)
    const state = userLocation.location.region
    const city = userLocation.location.name

    dateAndLocation.textContent = `${date} / ${city}, ${state}`
    ticketItem.insertAdjacentElement("beforeend", dateAndLocation)
    dateAndLocation.classList.add("location")
}

function failed() {
    throw new Error("Failed to get location")
}