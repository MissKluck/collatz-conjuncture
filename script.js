// Først finne form elementet
/** Hjelper javascript å forstå at dette skal operere med et HTMLelement og gir da alle relevante kommandoer
 *  @type {HTMLFormElement}
 */
const inputForm = document.getElementById("collatz-input")
inputForm.addEventListener("submit", (event)=>{
    event.preventDefault() 
    
    const inputElement = document.getElementById("input-number")
    const input = inputElement.value

    // Sjekk om verdien som er skrevet inn er gyldig ! står for ikke, du kan invertere kode bare ved å legge til et uttropstegn(10 === 20)= false --> !(10 === 20)= true
    if (!(input > 0)) {
        return
    }

    const result = collatz(input) // Prosseser input
    const newElement = createElement(result) // Lag et nytt resultat element
    const resultContainer =document.getElementById("result-container") // Hent ut hvor det skal settes inn
    resultContainer.appendChild(newElement) // Sett inn i dokumentet

    // Reset input feltet
    // inputElement.value = 0
    inputForm.reset()

    // console.log("2 should be even: " + isEven(2))
    // console.log("3 should be odd: " + isEven(3))
})

/**
 * Denne funksjonen går igjennom collatz conjecture
 * med tallet den får
 * @param {number} number 
 * @returns 
 */
function collatzA(number) {
    // Avslutt hvis tallet er 1
    if (number === 1) {
        console.log(number + " is final")
        return
    }
    // finne ut om tallet er partall eller oddetall
    const isEven = (number % 2) === 0

    if (isEven) {
        // Partalls logikk
        console.log(number + " is even")

        number = number / 2
    } else {
        // Oddetalls logikk
        console.log(number + " is odd")

        number = (number * 3) + 1
    }

    // Gå igjennom algoritmen på nytt (via rekursjon)
    collatz(number)
}    

function collatzB(number) {
    // Avslutt hvis tallet er 1
    while (number > 1) {
    // finne ut om tallet er partall eller oddetall
    const isEven = (number % 2) === 0

    if (isEven) {
        // Partalls logikk
        console.log(number + " is even")

        number = number / 2
    } else {
        // Oddetalls logikk
        console.log(number + " is odd")

        number = (number * 3) + 1
    }
}

    // Gå igjennom algoritmen på nytt (via rekursjon)
    collatz(number)
}   
   
const numberA = 13
collatzB(numberA)

// Noe logikk
//     console.log(number)

//    const newNumber = number - 1

//if (newNumber <= 0) {
        //return newNumber
  //  } else {
        // Rekursjon, 
      //  return collatz(newNumber)
    //}


//function isEven (number) {
  //  return number % 2 === 0
// } 

//function isOdd (number) {
  //  return number % 2 === 1
//}
    


//function createElement(number) {
  //  const element = document.createElement("li")
    //element.textContent = number
    //return element
//}