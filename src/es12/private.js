class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    set uAge (age) {
        this._age = age;
        this.#sayHi();
    }

    get uAge () {
        return this._age;
    }

}

const manuel = new User('Manuel', 30);
console.log(manuel.uAge);
console.log(manuel.uAge = 40);
console.log(manuel.sayHi()); // Error