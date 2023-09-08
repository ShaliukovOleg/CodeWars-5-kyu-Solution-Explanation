/*

Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

*/

/*

Напишите алгоритм, который берет массив и перемещает все нули в конец, 
сохраняя порядок следования остальных элементов.

*/

function moveZeros(arr) {
    // Создаем массив ненулевых элементов
    const nonZeros = arr.filter(element => element !== 0);

    // Вычисляем количество нулей
    const zeroCount = arr.length - nonZeros.length;

    // Заполняем новый массив нулями на основе количества нулей
    return nonZeros.concat(Array(zeroCount).fill(0));
}

const результат = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(результат); // Вывод: [false, 1, 1, 2, 1, 3, "a", 0, 0]