function createFruits() {
    if(true) {
        var fruit1 = 'apple';   // Function Scope
        let fruit2 = 'banana';  // Block Scope
        const fruit3 = 'kiwi';  // Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

createFruits();