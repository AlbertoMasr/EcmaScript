// Encadenamiento de objetos literales
function newUser(name, age, country, uId) {
    return { name, age, country, id: uId }
}

console.log(newUser('Oscar', 32, 'MX', 1));