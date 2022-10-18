// Написати цикли, які роблять наступне:

// ________________________________________________________________
// - Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
let resultNumbers = '';

for (let i = 20; i < 30; i += 0.5) {
    if (i === 29.5) {
        resultNumbers = `${resultNumbers + i}`;
        // resultNumbers = `${resultNumbers + i.toFixed(1)}`;
        continue;
    }
    resultNumbers = `${resultNumbers + i} `;
    // resultNumbers = `${resultNumbers + i.toFixed(1)} `;
}

alert(resultNumbers);
document.getElementById('hw_01').innerHTML = resultNumbers;

// ________________________________________________________________
// - Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const valueDollar = 27;
let costDollar = '';

for (let i = 10; i <= 100; i += 10) {
    if (i === 100) {
        costDollar = `${costDollar + valueDollar * i}`;
        continue;
    }
    costDollar = `${costDollar + valueDollar * i} `;
}

alert(costDollar);
document.getElementById('hw_02').innerHTML = costDollar;


// ________________________________________________________________
// - Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
const number = 122;
let intNumbers = '';

for (let i = 1; i < 100; i += 1) {
    if ((i * i) <= number) {
        if (i === 100) {
            intNumbers = `${intNumbers + i}`;
            continue;
        }
        intNumbers = `${intNumbers + i} `;
    }
}
alert(intNumbers);
document.getElementById('hw_03').innerHTML = intNumbers;


// ________________________________________________________________
// - Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const num = 11;
const messageIsInt = 'Це просте число';
const messageIsNotInt = 'Це число не відноситься до простого';
let resultMessage = '';

if (num > 1 && num % num === 0 && num / 1 === num) {
    for (let i = 1; i <= num; i += 1) {
        if (i !== 1 && i !== num && num % i === 0) {
            resultMessage = `${num} ${messageIsNotInt}`;
            break;
        } else {
            resultMessage = `${num} ${messageIsInt}`;
        }
    }
} else {
    resultMessage = `${num} ${messageIsNotInt}`;
}

alert(resultMessage);
document.getElementById('hw_04').innerHTML = resultMessage;


// ________________________________________________________________
// - Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
const someNumber = 15;
let answerMessage;

if (someNumber % 3 === 0 && someNumber !== 0) {
    answerMessage = `${someNumber} можна одержати шляхом зведення числа 3 у деякий ступінь`;
} else {
    answerMessage = `${someNumber} не можна одержати шляхом зведення числа 3 у деякий ступінь`;
}

alert(answerMessage);
document.getElementById('hw_05').innerHTML = answerMessage;