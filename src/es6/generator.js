function* iterador(arr) {
    for(let value of arr) {
        yield value;
    }
}

const iterar = iterador(["Hola", "Mundo", "Generators"])
console.log(iterar.next().value)
console.log(iterar.next().value)
console.log(iterar.next().value)
console.log(iterar.next().value)

function* getId() {
    let contador = 0

    while (true) {
      yield contador++
    }
  }
  
  const id = getId()
  console.log(id.next().value)
  console.log(id.next().value)
  console.log(id.next().value)