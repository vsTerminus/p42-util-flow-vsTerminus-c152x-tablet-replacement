const var_state = 'L:C152X_CoPilotsState';
const var_icon_enabled = 'mdi:account-multiple-minus';
const var_icon_disabled = 'mdi:account-multiple-plus';
const var_text_enabled = "Hide Copilot";
const var_text_disabled = "Show Copilot";

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