import { slotMachine } from "./slotMachine.js";

function init() {
	console.log("Init");
	// TODO: log the document using console.log to test if you can get access to it
	console.log(document);
	// TODO: log the submit button. If that works, store that button in a variable
	const button = document.querySelector("#button");
	console.log(button);
	// TODO: attach an event listener to that button and show a log "button clicked"
	document.querySelector("#button").addEventListener("click", function () {
		pullLever();
	});
	// TODO: if the submit button is clicked, the lever is pulled (= call that function)
}

function pullLever() {
	// TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
	// TODO: spin the slot machine
	slotMachine.spin();
	// TODO: show slots and win status
	showSlots();
	showGameResult();
}

function showSlots() {
	// TODO: show the slot symbols in HTML
	let slots = "";
	for (let i = 0; i < slotMachine.slots.length; i++) {
		slots +=
			'<span class=0"' +
			slotMachine.slots[i] +
			'">' +
			slotMachine.slots[i] +
			"</span>";
	}

	console.log(slotMachine.slots.length);
	console.log(slots);

	document.querySelector("#result").innerHTML = slots;
}

function showGameResult() {
	// TODO: show a win or lose message in HTML
	if (slotMachine.win == true) {
		document
			.querySelector("#result")
			.insertAdjacentHTML("beforeend", "<h1>JE WINT 🎉💰</h1>");
	} else {
		document
			.querySelector("#result")
			.insertAdjacentHTML("beforeend", "<h1>JE VERLIEST 😭🥺</h1>");
	}
}

init();
