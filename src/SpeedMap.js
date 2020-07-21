const anglerange = 144 + 144;
const startangle = -144;
const nmarks = 15;
const speedrange = 140;
const speedstep = speedrange/(nmarks-1);

const ticks = []
const callouts = []

let currentspeed = 0;
for (let i = 0; i < nmarks; i++) {
	if (i % 2 == 0) 
		callouts.push(currentspeed)
	else 
		ticks.push(currentspeed)
	currentspeed += speedstep;
}

function mapVelocity(speed) {
	return startangle + anglerange * (speed/speedrange)
}
function whichTicks() {
	return ticks
}
function whichCallouts() {
	return callouts
}
export {mapVelocity, whichTicks, whichCallouts};
