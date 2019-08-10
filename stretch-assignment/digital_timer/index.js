//creating elements

    const divContainer = document.createElement("div");
    const divSecondTens = document.createElement("div");
    const divSecondOnes = document.createElement("div");
    const divColon = document.createElement("div");
    const divmsHundreds = document.createElement("div");
    const divmsTens = document.createElement("div");

//structuring elements

    divContainer.appendChild(divSecondTens)
    divContainer.appendChild(divSecondOnes)
    divContainer.appendChild(divColon)
    divColon.appendChild(divmsHundreds)
    divContainer.appendChild(divmsTens)

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