const var_state = 'L:C152X_ADF';
const var_gps = 'L:C152X_GTN750';
const var_icon_enabled = 'mdi:compass';
const var_icon_disabled = 'mdi:compass-outline';
const var_text_enabled = "ADF (KR87) Enabled";
const var_text_disabled = "ADF (KR87) Disabled";

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
		return 'active';
	}
	else {
		return state ? 'active' : null;
	}
})

info(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	return state ? var_text_enabled : var_text_disabled;
});