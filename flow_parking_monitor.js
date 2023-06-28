const var_parked = 'Z:PLANE_PARKED';
const var_eng_running = 'GENERAL ENG COMBUSTION:1';
const var_velocity = 'GROUND VELOCITY';
const var_icon_enabled = "mdi:car-brake-parking";
const var_icon_disabled = "mdi:car-brake-parking";
const var_text_enabled = "Plane is Parked";
const var_text_disabled = "Plane is Not Parked";

run(() => {
	return true;
});

state(() => {
	const parked = this.$api.variables.get(var_parked, "Boolean");
	return parked ? var_icon_enabled : var_icon_disabled;
});

style(() => {
	const parked = this.$api.variables.get(var_parked, "Boolean");
	const eng_running = this.$api.variables.get(var_eng_running, "Boolean");
	const velocity = this.$api.variables.get(var_velocity, "Number");
	const isParked = (!eng_running && velocity == 0) ? 1 : 0;
	if ( parked != isParked ) {
		this.$api.variables.set(var_parked, "Boolean", isParked);
	}
	return isParked ? 'active' : null;
})

info(() => {
	const parked = this.$api.variables.get(var_parked, "Boolean");
	return state ? var_text_enabled : var_text_disabled;
});