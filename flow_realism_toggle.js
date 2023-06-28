const var_state = 'L:C152X_MAINTENANCE_ON';
const var_icon_enabled = 'mdi:wrench';
const var_icon_disabled = 'mdi:wrench-outline';
const var_text_enabled = "Maintenance Enabled";
const var_text_disabled = "Maintenance Disabled";

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
	return state ? 'active' : null;
})

info(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	return state ? var_text_enabled : var_text_disabled;
});