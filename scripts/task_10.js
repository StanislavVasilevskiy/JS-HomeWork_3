	// Задание № 10
console.log("");
console.log("Задание № 10");
console.log("");

let n10 = 256;

console.log("Исходное число: " + n10)
console.log("");

// Пункт "а"

	console.log("Пункт \"а\"");

	let StrN10 = String(n10);

	for (let i10 = 0; i10 < 3; i10++) {
		console.log(StrN10[i10]);
	}

// Пункт "b"

	console.log("");
	console.log("Пункт \"b\"");

	let i10 = 0;

	for (;; i10++) {
		if (StrN10[i10] == undefined) {
			break;
		}
	}

	console.log("Количество чисел в исходном числе: " + i10);

	let lenght10 = i10;

// Пункт "c"

	console.log("");
	console.log("Пункт \"c\"");

	let sum10 = 0;

	for (let i10 = 0; i10 < lenght10; i10++) {
		sum10 += +StrN10[i10];
	}

	console.log("Сумма чисел исходного числа: " + sum10);

// Пункт "d"

	console.log("");
	console.log("Пункт \"d\"");

	let nReverse10 = "";
	for (let i10 = lenght10-1; i10 >= 0; i10--) {
		nReverse10 += StrN10[i10];
	}

	console.log("Обратное число исходному числу: " + +nReverse10);