const var_state = 'L:C152X_GTN750';
const var_icon_enabled = 'mdi:crosshairs-gps';
const var_icon_disabled = 'mdi:crosshairs';
const var_text_enabled = "GTN750 Enabled";
const var_text_disabled = "GTN750 Disabled";

run(() => {
	const state = this.$api.variables.get(var_state, "Boolean");
	this.$api.variables.set(var_state, "Boolean", state ? 0 : 1);
	
	setTimeout(() => {
		if (this.$api.variables.get(var_state, "Boolean") == 0) {
			if (this.$api.variables.get("GPS DRIVES NAV1", "Boolean") == 1) {
				this.$api.variables.set("K:TOGGLE_GPS_DRIVES_NAV1", "number", 0);
			}
		}
	}, 25);
	
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