/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 
13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, 
they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".

*/

/*

ROT13 - это простой шифр с заменой букв, в котором буква заменяется на букву 
расположенной через 13 букв после нее в алфавите. ROT13 является примером шифра Цезаря.

Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. 
Если в строке присутствуют цифры или специальные символы, 
они должны быть возвращены в исходном виде. 
Перемещаться должны только буквы латинского/английского алфавита, 
как в оригинальной "реализации" Rot13.

*/

function rot13(message) {
    // Создаем переменную result для хранения зашифрованной строки.
    let result = '';

    // Итерируемся по каждому символу во входной строке message.
    for (let i = 0; i < message.length; i++) {
        // Получаем текущий символ из строки.
        let char = message.charAt(i);

        // Проверяем, является ли символ буквой латинского алфавита.
        if (/[a-z]/i.test(char)) {
            // Если символ буква, определяем его смещение относительно 'a' или 'A'.
            let offset = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);

            // Производим ROT13-шифрование символа и добавляем его к результату.
            let shifted = (char.charCodeAt(0) - offset + 13) % 26 + offset;
            result += String.fromCharCode(shifted);
        } else {
            // Если символ не является буквой, добавляем его к результату без изменений.
            result += char;
        }
    }

    // Возвращаем зашифрованную строку.
    return result;
}

// Another solution (Другое решение) 

function rot13(message) {
    // Используем метод replace для замены символов в строке, соответствующих регулярному выражению [a-z],
    // то есть буквам латинского алфавита. Замену выполняет функция, переданная вторым аргументом.
    return message.replace(/[a-z]/gi, (char) => {
        // Определяем смещение (offset) для буквы, которое зависит от регистра (строчная или заглавная).
        let offset = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);

        // Производим ROT13-шифрование символа и возвращаем его в виде строки.
        return String.fromCharCode(((char.charCodeAt(0) - offset + 13) % 26) + offset);
    });
}

let input = "Hello, World!";
let encrypted = rot13(input);

console.log(encrypted);