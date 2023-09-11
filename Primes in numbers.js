/*

Given a positive number n > 1 find the prime factor decomposition of n. 
The result will be a string with the following form :
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Для положительного числа n > 1 найдите разложение n по простым множителям. 
В результате будет получена строка следующего вида :
в которой p(i) расположены в порядке возрастания, а n(i) пусто, если n(i) равно 1.

*/

/*

"(p1**n1)(p2**n2)...(pk**nk)"
n = 86240 should return "(2**5)(5)(7**2)(11)"
console.log(primeFactors(7775460)); // (2**2)(3**3)(5)(7)(11**2)(17)

*/

function primeFactors(n) {
    const factors = []; // Создаем массив для хранения простых множителей
    let divisor = 2; // Устанавливаем начальный делитель (1 будет бесполезна, поэтому её пропускаем)

    // Ищем простые множители числа "n"
    while (n >= 2) {
        if (n % divisor === 0) { // Если "n" делится на divisor без остатка
            factors.push(divisor); // Добавляем divisor в массив множителей
            n /= divisor; // Делим "n" на divisor
        } else {
            divisor++; // Или увеличиваем делитель для поиска следующего простого множителя
        }
    }

    const result = []; // Создаем массив для хранения частей результата
    let currentFactor = factors[0]; // Присваем множителю первый элемент в массиве
    let count = 1; // Инициализируем счетчик текущего множителя

    // Обходим массив factors для формирования результата
    for (let i = 1; i < factors.length; i++) {
        if (factors[i] === currentFactor) { // Если счетчик совпадает с предыдущим
            count++; // увеличиваем счетчик на 1
        } else { // в противном случае 
            result.push(count > 1 ? `(${currentFactor}**${count})` : `${currentFactor}`)
            // Добавляем множитель и, если степень больше 1 прописываем её дополнительно
            currentFactor = factors[i]; // Обновляем текущий множитель
            count = 1; // Сбрасываем счетчик
        }
    }

    result.push(count > 1 ? `(${currentFactor}**${count})` : `(${currentFactor})`);
    // Добавляем последний множитель и, если степень больше 1 прописываем её дополнительно

    return result.join(''); // объединяем все в строку результата
}

// Вариант 2 (более оптимизированный)

function primeFactors(n) {
    let result = ''; // Создаем пустую строку для хранения результата.

    // Перебираем возможные делители от 2 до n.
    for (let divisor = 2; divisor <= n; divisor++) {
        let count = 0; // Инициализируем счетчик для подсчета степени делителя.

        // Пока n делится на divisor без остатка:
        while (n % divisor === 0) {
            count++; // Увеличиваем счетчик.
            n /= divisor; // Делим n на divisor.
        }
        if (count > 0) {
            // Если были деления, добавляем в строку результатов текущий делитель
            // и его степень (если степень больше 1).
            result += `(${divisor}${count > 1 ? `**${count}` : ''})`;
        }
    }

    // Возвращаем строку результата или исходное значение n, если оно простое.
    return result || `(${n})`;
}

console.log(primeFactors(7775460));

// Вариант 3 (максимально оптимизированный)

function primeFactors(n) {
    let result = ''; // Инициализируем пустую строку для результата
    // Перебираем делители от 2 до n
    for (let divisor = 2; divisor <= n; divisor++) { 
        let count = 0; // Счетчик для подсчета степени делителя
        // Пока n делится на divisor без остатка
        while (n % divisor === 0) {
            count++, // + счетчик делителя
            n /= divisor // делим n на divisor (делитель)
        };
        // Если count (счетчик делителя) больше 0, то divisor - множитель числа n
        // Добавяляем его к результату, включая степень (если степень больше 1).
        result += count ? `(${divisor}${count > 1 ? `**${count}` : ''})` : '';
    }
    // Если n осталось больше 1, это означает, что оно не является простым множителем
    // Формируем результат
    return result || `(${n})`;
}

console.log(primeFactors(7775460));