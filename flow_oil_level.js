const var_state = 'L:C152X_OILREM';
const var_parked = 'Z:PLANE_PARKED';
const var_icon_enabled = 'mdi:oil-level';

run(() => {
	const state = this.$api.variables.get(var_state, "Number");
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( parked ) {
		this.$api.variables.set(var_state, "Number", 7);
	}
	return true;
});

style(() => {
	const level = this.$api.variables.get(var_state, "Number");
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( !parked || level >= 6.9 ) {
		return 'disabled';
	}
	else {
		return null;
	}
})

state(() => {
	return var_icon_enabled;
});

info(() => {
	const state = this.$api.variables.get(var_state, "Number");
	const remaining = Math.round(state * 10) / 10; // Raw number is in qts
	const remaining_L = remaining * 0.946353;
	const liters = "Oil Remaining: " + remaining.toFixed(1) + "qt / " + remaining_L.toFixed(1) + "L";
	return liters;
});