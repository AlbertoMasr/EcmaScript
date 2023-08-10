function newUser(name, age, country) {
    var name = name || 'Manuel';
    var age = age || 24;
    var country = country || 'Mexico';
    console.log(name, age, country);
}

newUser();
newUser('Alberto', 25, 'Mexico');

// ES6
function newAdmin(name = "Manuel", age = 24, country = "Mexico") {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Alberto', 25, 'Mexico');