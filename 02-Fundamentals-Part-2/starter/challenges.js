// Challenge 1

function calcAverage (a, b, c) {
	const average = Math.round((a + b + c) / 3);
	return average;
}

function checkWinner (avgDolphins, avgKoalas) {
	const dolphins = calcAverage(avgDolphins);
	const koalas = calcAverage(avgKoalas);

	if (dolphins >= koalas * 2) {
		console.log(`Dolphins win (${dolphins} vs ${koalas})`);
	}
	else if (koalas >= dolphins * 2) {
		console.log(`Koalas win (${koalas} vs ${dolphins})`);
	}
}
