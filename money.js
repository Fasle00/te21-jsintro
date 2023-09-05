// pegakonverterare

let amount = 100;

// sek to usd
let exchangerate = [
    0.345,
    1.25,
    10.99,
    11.97
]

exchangerate.forEach(ex => {
    console.log(amount * ex)
})
