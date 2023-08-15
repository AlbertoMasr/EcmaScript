const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Banana, Kiwi, Apple, Orange, Apple, Mango';

for(const match of fruits.matchAll(regex)) {
    console.log(match);
}