class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set age (age) {
        this._age = age;
    }

    get age () {
        return this._age;
    }

}

const manuel = new User('Manuel', 30);
console.log(manuel.age);
console.log(manuel.age = 40);