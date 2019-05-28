var yourMoney = prompt("Введите Ваш бюджет :", "2000грн");
var yourTilteShop = prompt("Введите название Вашего магазина :", "Фенечная Лавка Бо");
var employers = ["Мария","Егор","Александр"];
let mainList = {
	Money: yourMoney,
	title: yourTilteShop,
	Goods: [],
	People: employers,
	open: true
}

for (let i = 0; i < 3; i++) {
	let a = prompt("Какой тип товаров Вы будуте продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		mainList.Goods[i] = a;
		console.log('All GOod');
	} else {
		i--;
	}
}

/* Второй способ вывода вопроса

let i = 0;

while (i<3) {
	
	let a = prompt("Какой тип товаров Вы будуте продавать?");
	mainList.Goods[i] = a;
	i++;
}


*/




/* Третий способ вывода вопроса 

let i = 0;

do {
	let a = prompt("Какой тип товаров Вы будуте продавать?");
	mainList.Goods[i] = a;	
	i++;
}

while (i<3);

*/

console.log(mainList);

