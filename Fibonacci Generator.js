/*

Create a function generator genfib() that returns a function fib() 
which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).

*/

/*

Создать генератор функций genfib(), возвращающий функцию fib(), 
которая при каждом обращении всегда возвращает следующее (согласно списку) число Фибоначчи (а при первом обращении возвращает 0).

*/

/*
var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2
*/

function genfib() {
    // Инициализируем две переменные для хранения последних значений чисел Фибоначчи
    let a = 0;
    let b = 1;

    // Возвращаем функцию путем замыкания, для замыкания переменных a, b при каждом вызове
    return function fib() {
        // Сохраняем текущее значение 
        const result = a;
        // Обновляем значения (a, b), для генерации следующего значения
        [a, b] = [b, a + b];
        // Возвращаем результат
        return result;
    }
}

var fib = genfib();

console.log(fib()); // -> 0
console.log(fib()); // -> 1
console.log(fib()); // -> 1
console.log(fib()); // -> 2