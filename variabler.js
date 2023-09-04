console.log("Hello World")

let firstName // definiera
firstName = "Fabian" // tilldelar ett värde
let lastName = "Sigfridsson" // definiera och tilldelar ett värde - Deklarerar

let num = 200.3 + true + "3"
num = [2] + 2
console.log(typeof(num))
console.log(num)

const NAME = "Stina"
console.log(NAME)

for (let i = 0;i < 10; i++){
    console.log(NAME)
}

var skola = "NTI"
console.log(skola)

let a = "Fabian" // string
let b = 'Fabian' // string rekomenderas
let c = `Mitt name är ${a}` // string med template literals
let d = 'Mitt namn är ' + b // konkatinering

let e = 12 // num
let f = 16.7 // num

let g = true // boolean
let h = false // boolean
let i = !g // inverted boolean
console.log(c, e, g, h, i)