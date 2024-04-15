/*
Это задание повторяет предыдущее, 
но для его решения необходимо использовать шаблонные строки.
Исходный код:

const sayHello = (
	name = 'Иван',
  surname = 'Иванов',
  age = 10,
  greeting = 'Привет, ',
 ) => (
 	greeting + name + ' ' + surname + ', тебе ' + age + ' лет.'
)

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );
*/

const sayHello = (
    name = 'Иван', 
    surname = 'Иванов', 
    age = '10', 
    greeting = 'Привет',
) => (`${greeting}, ${name} ${surname}, тебе ${age}`);

alert( sayHello() );
alert( sayHello('Дима') );
alert( sayHello('Евгений', 'Петров', 25, 'Здравствуй') );