let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersDos = []
for (let index = 1; index < numbers.length; index += 1) {
    numbersDos.push( numbers[index - 1] * numbers[index])
    if (index == numbers.length -1) {
        numbersDos.push(numbers[index] * 2)
    }
}

console.log(numbers)
console.log(numbersDos)