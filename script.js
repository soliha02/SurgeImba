let num1 = +prompt("Birinchi soningizni kiriting")
let num2 = +prompt("Ikkinchi soningizni kiriting")
let option = +prompt(`Choose your option:
1.qoshish
2.ayirish
3.bolish
4.kopaytirish`
)
if (option == 1) {
console.log( num1 + num2)
} else if (option == 2) {
    console.log( num1 - num2)
} else if (option == 3) {
    console.log( num1 / num2)
} else if (option == 4) {
    console.log( num1 * num2)
}