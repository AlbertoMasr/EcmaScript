// Destructuración de arreglos
let colores = ["Rojo", "Verde", "Azul"];
let [rojo, verde, azul] = colores;
console.log(rojo, colores[0]);

// Destructuración de objetos
let persona = {
    nombre: "Manuel",
    apellido: "Sotelo",
    edad: 24
}
let { nombre, edad } = persona;
console.log(nombre, edad);

// Spread Operator
let person = {
    name: "Manuel",
    age: 24
}
let job = "developer"

let personInformation = {
    id: 1,
    ...person,
    job
}
console.log(personInformation);

// Rest Operator
function sum(num, ...values) {
    console.log(num);
    console.log(values);
    return num + values[0]
}

console.log(sum(1, 2, 3, 4, 5, "hola"));