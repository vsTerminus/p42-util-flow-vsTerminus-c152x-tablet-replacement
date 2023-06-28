const var_state = 'L:C152X_MAINTENANCE_TIME';
const var_parked = 'Z:PLANE_PARKED';
const var_icon_enabled = 'mdi:engine';

run(() => {
	const state = this.$api.variables.get(var_state, "Number");
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( parked ) {
		this.$api.variables.set(var_state, "Number", 0);
	}
	return true;
});

style(() => {
	const damage = this.$api.variables.get(var_state, "Number");
	const eng_pct = enginePercent(damage);
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( !parked || eng_pct == 100 ) {
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
	return "Engine Health: <br/>" + enginePercent(state) + "%";
});

function enginePercent(damage) {
	return Math.round(100 - (damage/1800000*100));
}