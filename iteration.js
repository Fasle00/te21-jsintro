for(let i = 0; i < 10; i++){
    // console.log(i)
}

let names = ["Fabian", "Levi", "Alvin"]
for (let index = 0; index < names.length; index++) {
    // const element = names[index]
    // console.log(element)
    // console.log(names[index])
}

names.forEach(name => {
    // console.log(name)
});



let rolls = []

function tärning(sides) {
    return Math.ceil(Math.random() * sides)
}

for(let i = 0; i < 10; i++){
    const roll = tärning(6)
    // console.log(roll)
    rolls.push(roll)
}

console.log(rolls)

rolls.forEach((rull) => {
    console.log(rull)
});
