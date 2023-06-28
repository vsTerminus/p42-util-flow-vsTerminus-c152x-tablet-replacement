const var_state = 'L:C152X_XPNDR';
const var_gps = 'L:C152X_GTN750';
const var_icon_enabled = 'mdi:card-account-details';
const var_icon_disabled = 'mdi:card-account-details-outline';
const var_text_enabled = "Transponder (GTX330) Enabled";
const var_text_disabled = "Transponder (GTX330) Disabled";

run(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	this.$api.variables.set(var_state, "Boolean", state ? 0 : 1);
	return true;
});

state(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	return state ? var_icon_enabled : var_icon_disabled;
});

style(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	const gps = this.$api.variables.get(var_gps, "Boolean");
	if ( gps ) {
		return 'disabled';
	}
	else {
		return state ? 'active' : null;
	}
})

info(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	return state ? var_text_enabled : var_text_disabled;
});