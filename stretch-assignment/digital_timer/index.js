axios.get("/Users/hectorvaldez/Desktop/github/DOM-I/stretch-assignment/digital_timer/index.js")
.then(response => {
    console.log(response)
})

function creatingTimer() {

//creating elements

    const divContainer = document.createElement("div");
    const divSecondTens = document.createElement("div");
    const divSecondOnes = document.createElement("div");
    const divColon = document.createElement("div");
    const divmsHundreds = document.createElement("div");
    const divmsTens = document.createElement("div");
    const btn = document.createElement("button");

//structuring elements

    divContainer.appendChild(divSecondTens)
    divContainer.appendChild(divSecondOnes)
    divContainer.appendChild(divColon)
    divColon.appendChild(divmsHundreds)
    divContainer.appendChild(divmsTens)
    divContainer.appendChild(btn)

//adding classes to elements

    divContainer.classList.add("digits")
    divSecondTens.classList.add("digit")
    divSecondOnes.classList.add("digit")
    divColon.classList.add("digit")
    divmsHundreds.classList.add("digit")
    divmsTens.classList.add("digit")

//adding id to elements

    divSecondTens.setAttribute("id", "secondTens")
    divSecondOnes.setAttribute("id", "secondOnes")
    divColon.setAttribute("id", "colon")
    divmsHundreds.setAttribute("id", "msHundreds")
    divmsTens.setAttribute("id", "msTens")

//setting up timer

    const tickingTimer = setInterval(creatingTimer, 10000);
  
    return divContainer;
}

const addingToDom = document.querySelector(".digits")
addingToDom.appendChild(creatingTimer())