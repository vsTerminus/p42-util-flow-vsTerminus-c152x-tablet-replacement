const var_state = 'L:C152X_APVIZ';
const var_icon_enabled = 'mdi:account-tie-hat';
const var_icon_disabled = 'mdi:account-tie-hat-outline';
const var_text_enabled = "Autopilot Enabled";
const var_text_disabled = "Autopilot Disabled";

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