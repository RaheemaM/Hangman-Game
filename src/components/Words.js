var favourite_foods = [
    "chocolate",
    "pineapples",
    "tacos",
    "strawberries",
    "pizza",
    "chips",
    "burgers",
    "chicken",
    "cheese",
    "steak",
    "falafel",
    "soup",
    "bread",
    "smoothies",
    "pancakes",
    "mangoes",
    "cashews",
    "shawarma"
]

function randomWord() {
    return favourite_foods[Math.floor(Math.random() * favourite_foods.length)]
}

export { randomWord }