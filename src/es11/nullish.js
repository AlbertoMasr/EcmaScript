const number = null
const anotherNumber = 1

const validate = number ?? 5
const validate2 = anotherNumber ?? 5

console.log(validate) // 1
console.log(validate2) // 1