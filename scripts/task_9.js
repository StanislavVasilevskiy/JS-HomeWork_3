	// Задание № 9
console.log("");
console.log("Задание № 9");
console.log("");

let n9 = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57",
	min9 = +n9[0],
	max9 = +n9[0],
	num9 = "";

for (let i9 = 0; i9 < n9.length; i9++) {

	if (n9[i9] != " ") {
		num9 += n9[i9];
	} else {
		if (+num9 < min9) {
			min9 = +num9;
		}

		if (+num9 > max9) {
			max9 = +num9;
		}

		num9 = "";
	}
}

console.log("Минимальное число: " + min9);
console.log("Максимальное число: " + max9);
