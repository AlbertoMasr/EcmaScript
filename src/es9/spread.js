const user = {
    username: 'batman',
    age: 32,
    country: 'Gotham'
}

const { username, ...values} = user;

console.log(username);
console.log(values);