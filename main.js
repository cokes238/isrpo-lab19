for (let i = 0 ; i < 5; i++) {
console.log(i);
}

//5.3пр
console.log("Числа от 1 до 10:")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("Чётные числа от 1 до 10:")
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

let sum = 0
for (let i = 1; i <= 10; i++) {
    sum = sum + i
}
console.log("Сумма чисел от 1 до 10:", sum)


let count = 0;
while (count < 3) {
console.log("Count:", count);
count++;
}

//5.5 пр
let number = 5
while (number >= 0) {
    console.log(number)
    number--
}

let doValue = 0;
do {
console.log("Value:", doValue);
doValue++;
} while (doValue < 3);

//5.8пр
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    if (i === 8) {
        break
    }
    console.log(i)
}


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`)
    }
}

//пр5.10

for (let i = 1; i <= 4; i++) {
    let stars = ""
    for (let j = 1; j <= i; j++) {
        stars = stars + "*"
    }
    console.log(stars)
}

function sum(a, b) {
return a + b;
}
console.log(sum(3, 5));


//6.3пр
function multiply(a, b) {
    return a * b
}
let result = multiply(5, 3)
console.log(result)


function sayHello(name) {
    console.log(`Hello, ${name}`)
}
sayHello("Тимофей")


//6.5пр

function printInfo(name, age) {
    console.log(`Имя: ${name}, Возраст: ${age}`)
}
printInfo("Дима", 18)

function greet (name = "Гость") {
console.log("Привет, " + name);
}
greet();
greet("Анастасия");

//6.7пр
function calculateDiscount(price, discount = 10) {
    let finalPrice = price - (price * discount / 100)
    return finalPrice
}
console.log(calculateDiscount(1000, 20))
console.log(calculateDiscount(1000))


const add = function (a, b) {
return a + b;
};
console.log(add(2, 3));


function makeCounter() {
let count = 0; // Локальная переменная
return function () {
count++; // Функция "помнит" count
return count;
};
}
const counter = makeCounter();
console.log(counter()); //1
console.log(counter()); // 2
console.log(counter()); //3


function sumFunc(a, b) {
return a + b;
}
const sumFunc2 = (a, b) => a + b;
const double  = x => x * 2;
const sumFunc3  = (a, b) =>a+b
const sayGreeting = () => console.log("Hello");
const square = x=>x*x;
const calculate = (a, b) => {
let result = a + b;
return result * 2;
};