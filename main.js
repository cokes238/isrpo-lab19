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


let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);
console.log(numbersArr[0]);
console.log(numbersArr[1]);

//7.4пр
let colors = ["красный", "синий", "белый"]
console.log(colors[0])
console.log(colors[colors.length - 1])
colors[1] = "белый"
console.log(colors)

console.log(numbersArr.length);
numbersArr.push(10);
console.log(numbersArr);
numbersArr.pop();
console.log(numbersArr);

//7.7 пр
let students = []
students.push("Дима")
students.push("Андрей")
students.push("Алиса")
students.pop()
console.log(students)


let numbers2  = [10, 20, 30] ;
for (let i = 0 ; i < numbers2.length; i++) {
console.log(numbers2[i]);
}

for (let value of numbers2) {
console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

console.log(numbersArr.includes (1));
console.log(numbersArr.indexOf(2));

console.log(fruits.includes ("яблоко")); // true
console.log(fruits.includes ("манго")); // false

let cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск", "Екатеринбург"]
let searchCity = "Казань"

//7.12пр
if (cities.includes(searchCity)) {
    let index = cities.indexOf(searchCity)
    console.log(`Город ${searchCity} найден, индекс: ${index}`)
} else {
    console.log(`Город ${searchCity} не найден в массиве`)
}


let user2 = {
name: "Ivan",
age: 20,
isStudent:
true,
};
console.log(user2);

console.log(user2.name);
console.log(user2.age);

console.log(user2["name"]);

//8.4 пр
let book = {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869
}

console.log(book.title)
console.log(book.author)
console.log(book.year)

book.year = 2024

console.log("После изменения:")
console.log(book.title)
console.log(book.author)
console.log(book.year)


user2.age = 30;
user2.name = "Кирилл";
delete user2.isStudent;
console.log(user2);

let user2 = {
    name: "Ivan",
    age: 20,
    isStudent: true,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}
user2.sayHello()

//8.7 пр
let car = {
    brand: "BMW",
    year: 2020,
    getInfo: function() {
        console.log(`Автомобиль: ${this.brand}, Год выпуска: ${this.year}`)
    }
}
car.getInfo()


for (let key in user2) {
console.log(key + ":" + user2 [key]);
}

//8.9 пр
let product = {
    name: "Ноутбук",
    price: 55000,
    brand: "Lenovo",
    inStock: true,
    color: "белый"
}
for (let key in product) {
    console.log(key + ": " + product[key])
}


let student = {
пате: "Григорий",
skills: ["HTML", "CSS", "JS"],
address: {
city: "Волжский",
street: "Пушкина",
},
};
console.log(student.skills[0]);
console.log(student.address.city);