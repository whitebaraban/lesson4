var doc = document;

// Первое задание:
function splitNumber (num) { // Обрабатывает целые и дробные числа.
    let number = {};
    
    if (!isNaN(num) && (num <= 999 && num >= 0)) {
        num = parseInt(num);
        num / 100 >= 1 ? number.Hun = parseInt(num / 100) : number.Hun = 0;
        num % 100 >= 10 ? number.Tens = parseInt(num % 100 / 10) : number.Tens = 0;
        num % 10 >= 1 ? number.Units = parseInt(num % 10) : number.Units = 0;
        return number;
    } else {
        console.log ('Недопустимое значение или неверный тип данных параметра функции.')
        return number;
    }
}

var result = splitNumber(prompt('Введите число: '));
console.log(result);

// Второе задание: 


