/*

Complete the following function that will return the difference in years (age) for a birthdate, 
and optionally a "now" date. Both arguments to the function are expected to be Date objects. 
The returned difference can be either positive or negative.

Напишите функцию, которая будет считать разницу в возрасте между двумя датами 
- датой рождения и, если нужно, текущей датой. Оба аргумента функции должны быть датами. 
Результатом будет число, показывающее, сколько лет человеку или событию от указанной даты 
до текущей (или другой указанной) даты. 
Это число может быть как положительным (если текущая дата в будущем), 
так и отрицательным (если текущая дата в прошлом).

getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8

*/

function getAge(birthDate, currentDate = new Date()) {
    const birthYear = birthDate.getFullYear();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        return age - 1;
    }
    return age;
}

function getAge(birthDate, nowDate = new Date()) {
    // Вычисляем разницу в годах между текущей датой и датой рождения
    const age = nowDate.getFullYear() - birthDate.getFullYear();

    // Сравниваем текущую дату с датой рождения в текущем году
    // Если текущая дата меньше даты рождения, уменьшаем возраст на 1 год, иначе оставляем возраст без изменений
    return (
        nowDate < new Date(
            nowDate.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
        ) ? age - 1 : age
    );
}

// Примеры использования:
console.log(getAge(new Date('1980/01/01'))); // 33
console.log(getAge(new Date('1913/01/01'), new Date('2013/01/01'))); // 100
console.log(getAge(new Date('2008/02/29'), new Date('2032/03/01'))); // 24
console.log(getAge(new Date('2008/01/01'), new Date('2000/01/01'))); // -8



