let fruit = "apple";

if (true) {
	let fruit = "pear";
	let name = "dan"
	console.log( "fruit", fruit );
};

/////////////////////////////////////////
{
	let colors= ["red", "blue", "green"];
	var rainbow = {};

	rainbow.getRainbowColors = () => {
		// console.log( "colors", colors );
		return colors;
	}

	rainbow.addColors = (whichone) => {
		colors.push(whichone)
	}

}
/////////////////////////////////////////
{

	var weather = {};
	let weatherKinds = ["snow", "bad", "rain", "sunny"];

	weather.getWeatherKinds = () => {
		return weatherKinds;
	}

	weather.addKind = (whatkind) => {
		weatherKinds.push(whatkind)
	}

}
/////////////////////////////////////////
//new page
{
	rainbow.addFairies = (who) => {
		console.log( "fairies", who );
	}
}
/////////////////////////////////////////



















