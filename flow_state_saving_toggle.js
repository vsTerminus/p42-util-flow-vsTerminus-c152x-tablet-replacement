const var_state = 'L:C152X_SSONOFF';
const var_sound = 'L:XMLVAR_C152X_PLAYSSONOFF';
const var_icon_enabled = 'mdi:content-save';
const var_icon_disabled = 'mdi:content-save-outline';
const var_text_enabled = "State Saving Enabled";
const var_text_disabled = "State Saving Disabled";

run(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	const sound = this.$api.variables.get(var_sound, "Boolean");

	this.$api.variables.set(var_state, "Boolean", state ? 0 : 1);
	this.$api.variables.set(var_sound, "number", sound == 3 ? 2 : 3);

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