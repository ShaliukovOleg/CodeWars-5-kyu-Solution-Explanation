// Solution / Решение

function fibonacci(n, memo = {}) {
    if (n < 2) return n; // обработка базового случая чисел Фибоначчи
    if (memo[n]) return memo[n]; // проверка наличия значения в "памяти"
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // если значение не найдено, вычисляем рекурсивно
    return memo[n]; // сохраняем значение в "памяти" и возвращаем его
}

// Short version
const fibonacci = (n, memo = {}) => n < 2 ? n : memo[n] || (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));

/*

Problem Context
The Fibonacci sequence is traditionally used to explain tree recursion.

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
This algorithm serves welll its educative purpose but it's tremendously inefficient, 
not only because of recursion, but because we invoke the fibonacci function twice, 
and the right branch of recursion (i.e. fibonacci(n-2)) 
recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. 
You may go for a cup of coffee or go take a nap while you wait for the answer. 
But if you try it here in Code Wars you will most likely get a code timeout before any answers.

For this particular Kata we want to implement the memoization solution. 
This will be cool because it will let us keep using the tree recursion algorithm while 
still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure 
(most likely an associative array) where we will store the Fibonacci numbers as we calculate them. 
When a Fibonacci number is calculated, we first look it up in the cache, 
if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

Refactor the function into a recursive Fibonacci function 
that using a memoized data structure avoids the deficiencies of tree recursion. 
Can you make it so the memoization cache is private to this function?

*/


/*

Контекст проблемы
Последовательность Фибоначчи традиционно используется для объяснения древовидной рекурсии.

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
Этот алгоритм хорошо выполняет свою образовательную функцию, но он крайне неэффективен, 
не только из-за рекурсии, но и потому, что мы дважды вызываем функцию фибоначчи, 
и правая ветвь рекурсии (т.е. fibonacci(n-2)) 
пересчитывает все числа Фибоначчи, уже вычисленные левой ветвью (т.е. fibonacci(n-1)).

Этот алгоритм настолько неэффективен, что время вычисления любого числа Фибоначчи, превышающего 50, просто слишком велико. 
В ожидании ответа можно пойти выпить чашечку кофе или вздремнуть. 
Но если вы попробуете сделать это здесь, в Code Wars, то, скорее всего, получите таймаут кода до получения ответа.

Для этого конкретного Ката мы хотим реализовать решение по мемоизации. 
Это будет здорово, потому что позволит нам продолжать использовать алгоритм древовидной рекурсии и при этом 
при этом он будет достаточно оптимизирован для быстрого получения ответа.

Хитрость мемоизированной версии заключается в том, что мы будем хранить в кэше структуру данных 
(скорее всего, ассоциативный массив), в которой мы будем хранить числа Фибоначчи по мере их вычисления. 
Когда вычисляется число Фибоначчи, мы сначала ищем его в кэше, 
если его там нет, то вычисляем его и помещаем в кэш, в противном случае возвращаем кэшированное число.

Рефакторинг функции в рекурсивную функцию Фибоначчи 
что использование мемоизированной структуры данных позволяет избежать недостатков древовидной рекурсии. 
Можно ли сделать так, чтобы кэш мемоизации был частным для этой функции?

*/