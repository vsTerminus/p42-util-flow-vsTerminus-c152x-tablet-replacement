const var_chocks_left = 'L:C152X_CHOCKSL';
const var_smoke_left = 'A:SMOKE ENABLE:1';
const var_chocks_right = 'L:C152X_CHOCKSR';
const var_smoke_right = 'A:SMOKE ENABLE:2';
const var_parked = 'Z:PLANE_PARKED';
const var_eng_running = 'GENERAL ENG COMBUSTION:1';
const var_starter_engaged = 'GENERAL ENG STARTER ACTIVE:1';
const var_smoke_on = 'K:SMOKE_ON';
const var_smoke_off = 'K:SMOKE_OFF';
const var_plane_version = 'Z:PLANE_VERSION';
const icon_enabled = 'mdi:alpha-b-circle';
const icon_disabled = 'mdi:alpha-b-circle-outline';
const text_enabled = "Hide Wheel Chocks";
const text_disabled = "Show Wheel Chocks";

run(() => {
	const plane_version = this.$api.variables.get(var_plane_version, "Number");
	const isPlaced = this.$api.variables.get(var_chocks_left, "Boolean");
	if ( plane_version != 3 ) {
		this.$api.variables.set(var_chocks_left, "Boolean", isPlaced ? 0 : 1 );
		this.$api.variables.set(var_chocks_right, "Boolean", isPlaced ? 0 : 1 );
	}
	return true;
});

state(() => {
	const parked = this.$api.variables.get(var_parked, "Boolean");
	const chocks_left = this.$api.variables.get(var_chocks_left, "Boolean");
	const smoke_left = this.$api.variables.get(var_smoke_left, "Boolean");
	//const chocks_right = this.$api.variables.get(var_chocks_right, "Boolean");
	if ( parked ) {
		if ( chocks_left && !smoke_left ) {
			this.$api.variables.set(var_smoke_on, "Number", 1);
			this.$api.variables.set(var_smoke_on, "Number", 2);
		}
		else if ( !chocks_left && smoke_left ) {
			this.$api.variables.set(var_smoke_off, "Number", 1);
			this.$api.variables.set(var_smoke_off, "Number", 2);
		}
	}

	const isPlaced = this.$api.variables.get(var_chocks_left, "Boolean");
	if ( isPlaced ) {
		const engRunning = this.$api.variables.get(var_eng_running, "Boolean");
		const isStarting = this.$api.variables.get(var_starter_engaged, "Boolean");
		if ( isStarting || engRunning ) {
			this.$api.variables.set(var_chocks_left, "Boolean", 0);
			this.$api.variables.set(var_chocks_right, "Boolean", 0);
		}
		return icon_enabled;
	}
	return icon_disabled;
});

style(() => {
	const isActive = this.$api.variables.get(var_chocks_left, "Boolean");
	const plane_version = this.$api.variables.get(var_plane_version, "Number");
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( !parked || plane_version == 3 ) {
		return 'disabled';
	}
	else {
		return isActive ? 'active' : null;
	}
})

info(() => {
	const isEnabled = this.$api.variables.get(var_chocks_left, "Boolean");
	return isEnabled ? text_enabled : text_disabled;
});