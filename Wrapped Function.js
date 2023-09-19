/*

Create a function method that allow you to wrap an existing function. 
The method signature would look something like this:

*/

/*

Создайте метод функции, позволяющий обернуть существующую функцию. 
Сигнатура метода будет выглядеть следующим образом:

*/

/*

Usage Example:
function speak(name){
   return "Hello " + name;
}

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
})
var greeting = speak("Mary", "Kate");

*/

// Создаем метод wrap для всех функций, добавляя его в прототип объекта Function
Function.prototype.wrap = function (wrapper) {
   // Сохраняем ссылку на оригинальную функцию в переменной original
   const original = this;

   // Возвращаем анонимную функцию, которая станет оберткой для оригинальной функции
   return function (...args) {
      // Внутри обертки вызываем функцию wrapper, 
      // передавая ей оригинальную функцию (original) и все переданные аргументы с помощью оператора Rest (args)
      return wrapper(original, ...args);
   };
};