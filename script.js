// Задание 1  ----------------------------------------------------------

let person = {
    name: "Oliver",
    age: 35,
    city: "London"
}

console.log(person)



// Задание 2  ----------------------------------------------------------

console.log(person.name, person.age)

person.city = "New york"

console.log(person.city)



// Задание 3  ----------------------------------------------------------

person.greet = function() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!!`)
}

person.greet()



// Задание 4  ----------------------------------------------------------

let obj1 = {a: 10, b: 20}
let obj2 = {a: 10, b: 20}

console.log( obj1 == obj2 )  // false
console.log( obj1 === obj2 )  // false
// Оба сравнения оказались ложными, потому что сравнение объектов истинно только если оба
// объекта ссылаются на одну и ту же ячейку памяти. Это можно достичь только если 
// один из объектов был объявлен используя другой. Например 
//   let obj2 = obj1;  ниже пример 

let obj3 = obj1;
console.log(obj1 == obj3);  //  true
console.log(obj1 === obj3);  //  true


// Задание 5  ----------------------------------------------------------

let book = {
    title: "Moby-Dick; or, The Whale",
    author: "Herman Melville",
    details: {
        year: 1792,
        pages: 635
    }
}

let sameBook = Object.assign({},book);
book.details.year = 1851

console.log(sameBook.details.year)  //  изменилось тоже на 1851
// Это произошло из-за того что свойство которое будет копировано это вложенный объект.
// Получается вместо копирования объекта создается новая ссылка на объект
// Чтобы производить глубокое копирование всех вложенных объектов нужно
// использовать функцию "structuredClone"
// ниже пример использования этой функции

let obj4 = {a: 0, b: 0, c: {d: 0}};
let obj5 = structuredClone(obj4);

obj5.c.d = 55
console.log(obj4.c.d)  //  0 



// Задание 6  ----------------------------------------------------------

let calculator = {
    a: 8,
    b: 7,
    sum: function(){
        return this.a + this.b;
    },
    multiply: function(){
        return this.a * this.b;
    }
}

console.log( calculator.sum(), calculator.multiply() )

// Но лучше использовать конструктор объектов для таких случаев:

function Calculator(num1,num2) {
    this.num1 = num1
    this.num2 = num2
    this.sum = function(){
        return this.num1 + this.num2;
    }
    this.multiply = function(){
        return this.num1 * this.num2;
    }
}

let calc = new Calculator(5,9);
console.log(calc.sum(), calc.multiply());

// Задание 7  ----------------------------------------------------------

const car = {
    brand: "Nissan",
    model: "Qashqai"
}

car.brand = "Toyota"
car.model = "Camry"

console.log(car)  //  {brand: 'Toyota', model: 'Camry'}
// Объявление Объекта через "const" не означает что его содержимое останется неизменным.
// Содержимое объекта можно будет менять и даже добавлять и удалять новые ключи и свойства
// Единственный запрет - это то что данный объект нельзя будет переназначить через "let" или "const"
