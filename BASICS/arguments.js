// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}
let sum = add(1, 2, 3)
console.log(sum)

// Default arguments 
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - score: ' + score
}
console.log(getScoreText(undefined, 99))

// Template Strings
let name = 'Jen'
console.log(`hey, my name is ${name + 'sun'}`)