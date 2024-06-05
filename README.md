# collatz-conjuncture

## Algoriitmen

- Start med et valgfritt tall
- Hvis tallet er et partall
    - Del tallet på 2 ( n / 2 )
- Hvis tallet er et oddetall
    - Gang med 3 og legg til 1 ((n*3)+1)
- Repeter til tallet er 1

## Oppgave

## Steg 1

- Ta inn en tallverdi via et inpur element
- Bruk til å kjøre den gjennom Collatz Formodning
- Print alle tallene til konsollen

## Steg 2

- Oppsummer resultatet og vis det i et HTML element

## Optional

- Gjør kalkulasjonen i en egen tråd
    [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

## Lenker

- [Collatz Formodning] - (https://no.wikipedia.org/wiki/Collatz%E2%80%99_formodning)
- [Collatz Conjecture] - (https://en.wikipedia.org/wiki/Collatz_conjecture)

## Javascript
function handleSubmit(event) {
    /// Stopper form submit fra å refraehe nettsiden
    event.preventDefault() 
    console.log("Hello World!")

}
/// Arrow function, anonymous function, lambda function
(event) => {
    /// Stopper form submit fra å refraehe nettsiden
    event.preventDefault() 
    console.log("Hello World!")
}