// Función normal
function square(x) {
  return x * x;
}

console.log("Función normal: "+ square(2));

// Función flecha
const square = (x) => {
    return x * x;
}

console.log("Función flecha: "+ square(2));

// Función flecha con return implicito
const square = x => x * x;

console.log("Función flecha implicita: "+ square(2));