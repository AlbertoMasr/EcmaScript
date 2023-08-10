const anotherFuncion = (isReady) => {
    return new Promise((resolve, reject) => {
        if(isReady) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    })
}

anotherFuncion(false)
    .then(response => console.log(response))
    .catch(error => console.log(error));