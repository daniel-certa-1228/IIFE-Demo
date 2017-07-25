console.log( "IIFE.js" );

let resistanceLocation = "D'Quar";

let getLocation = document.getElementById("checkLocation");
getLocation.addEventListener("click", (event) => {
	console.log( "Hey, Darth we are located at: ", resistanceLocation );
});

let objButton = document.getElementById("checkObject");
objButton.addEventListener("click", introduceStarwars);

function introduceStarwars(event){
	console.log( "Starwars IIFE", Starwars );
}

let darkButton = document.getElementById("getDarkPlayers");
darkButton.addEventListener("click", getDarkPlayers);

function getDarkPlayers(event){
	console.log( "Darkside PLayers", Starwars.getEvil() );
}

let locbtn = document.getElementById("btn-getLocationD");
locbtn.addEventListener("click", (event) => {
	Starwars.getLocation(locbtn.getAttribute("whoIsIt"));
});

let locbtnL = document.getElementById("btn-getLocationL");
locbtnL.addEventListener("click", (event) => {
	Starwars.getLocation(locbtnL.getAttribute("whoIsIt"));
});

let addPlayer = document.getElementById("btn-signup");
addPlayer.addEventListener("click", (event) => {
	let newPlayerName = document.getElementById("newperson").value;
	let whichSelected;
	var radios = document.getElementsByName("whichside")
	for (var i = 0; i < radios.length; i++) {
		//1 = good, 2= evil, 0 = jedi
		if (radios[i].checked) {
			whichSelected = radios[i].value;
			break;
		}
	}

	console.log( "whichSelected", whichSelected );

	if (whichSelected == 0){
		Starwars.addJedi(newPlayerName);
	}  else if (whichSelected == 1) {
		Starwars.addKeyPlayer(newPlayerName);
	}  else if (whichSelected == 2)  {
		Starwars.addEvil(newPlayerName);
	}

});








