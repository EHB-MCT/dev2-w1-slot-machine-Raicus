export const slotMachine = {
	calculateStatus: function () {
		// TODO: check for three similar symbols and update 'win'-boolean
		if (this.slots[0] == this.slots[1] && this.slots[1] == this.slots[2]) {
			console.log("WIN");
			this.win = true;
		} else {
			console.log("LOSE");
			this.win = false;
		}
	},
	getRandomSymbol: function () {
		// TODO: return a single random symbol
		const index = Math.floor(Math.random() * 3);
		return this.symbols[index];
	},
	reset: function () {
		// TODO: Empty out the slots and reset 'win'-boolean
	},
	symbols: ["♠", "♥", "♣", "♦"],
	slots: [],
	slotsAmount: 3,
	spin: function () {
		// TODO: generate three random symbols, and add them to the slots of the slotMachine
		this.slots = [];
		for (let i = 0; i < this.slotsAmount; i++) {
			this.slots.push(this.getRandomSymbol());
		}
		console.log(this.slots);
		this.calculateStatus();
		console.log();
	},
	win: true,
};
