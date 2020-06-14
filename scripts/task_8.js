	// Задание № 8
console.log("");
console.log("Задание № 8");
console.log("");

let sum8 = 0,
	aver8,
	i8;

for (i8 = 0;; i8++) {
	let UserNum8 = +prompt("Введите число");

	if (UserNum8) {
		sum8 += UserNum8;
	} else {
		break;
	}
}

aver8 = sum8 / i8;
console.log("Сумма чисел: " + sum8);
console.log("Среднее арифметическое: " + aver8);