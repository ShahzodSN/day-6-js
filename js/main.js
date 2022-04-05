/* class work */
/*
let son1 = prompt('1-sonni kiriting')
let son2 = prompt('2-sonni kiriting')

console.log(isNaN(son1), isNaN(son2));

if(son1 && son2) {
    if(isNaN(son1) || isNaN(son2)) {
        console.log('son kiriting');

        if(isNaN(son1)) {
            console.log('1-kiritilgan son xato');
        }

        if(isNaN(son2)) {
            console.log('2-kiritilgan son xato');
        }
    } else {
        console.log('Natija:', Number(son1) + Number(son2));
    }
} else {
    console.log('son kiriting');
}
*/

/* calculator */
let number1 = Number(prompt('1-sonni kiriting'));
let solver = prompt('amalni kiriting: + - * / %');
let number2 = Number(prompt('2-sonni kiriting'));

if (number1 && number2) {
    if(isNaN(number1) || isNaN(number2)) {
        console.log('son kiriting');

        if(isNaN(number1)) {
            console.log('1-kiritilgan son xato');
        }

        if(isNaN(number2)) {
            console.log('2-kiritilgan son xato');
        }

    } else if (solver == '+'){
        console.log('Natija:', number1 + number2);
    } else if (solver == '-'){
        console.log('Natija:', number1 - number2);
    } else if (solver == '*'){
        console.log('Natija:', number1 * number2);
    } else if (solver == '/'){
        console.log('Natija:', number1 / number2);
    } else if (solver == '%'){
        console.log('Natija:', number1 % number2);
    } else {
        console.log('togri amalni kiriting');
    }
} else {
    console.log('son kiriting');
}