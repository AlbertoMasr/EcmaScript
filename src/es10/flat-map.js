// flat
const array = [1, 1, 2, 3, 4, [1, 3, 5, 7, [1, 2, 4]]]

console.log(array.flat(0))
console.log(array.flat(1))
console.log(array.flat(2))
console.log(array.flat(Infinity))

// flatMap
const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(value => [value, value * 2]))