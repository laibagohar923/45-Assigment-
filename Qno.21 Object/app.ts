// Question no. 21 Objects

interface item {
    name : string
    price : number
}

//create two object
const book: item = {
    name : "ESSENTIAL TYPESCRIPT",
    price : 200
}

const apple: item = {
    name : "apple",
    price : 100
}

console.log(`book name: ${book.name}, prices: $${book.price}`)
console.log(`book name: ${apple.name}, prices: $${apple.price}`)