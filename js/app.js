/*
Напишіть скрипт, який переводить години в секунди і має робити насутпне:

запитати у користувача кількість годин;
порахувати, скільки секунд у цій кількості годин;
записати обчислене значення у змінну;
вивести цю змінну користувачеві через alert.
*/

// Запитуємо у користувача кількість годин
const hours = parseInt(prompt("Введіть кількість годин:"));

// Переводимо години в секунди
const seconds = hours * 3600;

// Виводимо обчислене значення у вікно сповіщення (alert)
alert(`У ${hours} годинах ${seconds} секунд.`);