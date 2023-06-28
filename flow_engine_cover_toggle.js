const var_eng_cover = 'L:C152X_ENG_COVER';
const var_eng_smoke = 'A:SMOKE ENABLE:3';
const var_pitot_cover = 'L:C152X_PITOT_COVER';
const var_pitot_smoke = 'A:SMOKE ENABLE:4';
const var_parked = 'Z:PLANE_PARKED';
const var_eng_running = 'GENERAL ENG COMBUSTION:1';
const var_starter_engaged = 'GENERAL ENG STARTER ACTIVE:1';
const var_smoke_on = 'K:SMOKE_ON';
const var_smoke_off = 'K:SMOKE_OFF';
const icon_enabled = 'mdi:alpha-a-circle';
const icon_disabled = 'mdi:alpha-a-circle-outline';
const text_enabled = "Hide Engine & Pitot Covers";
const text_disabled = "Show Engine & Pitot Covers";

run(() => {
	const isPlaced = this.$api.variables.get(var_eng_cover, "Boolean");
	this.$api.variables.set(var_eng_cover, "Boolean", isPlaced ? 0 : 1 );
	this.$api.variables.set(var_pitot_cover, "Boolean", isPlaced ? 0 : 1 );
	return true;
});

state(() => {
	const parked = this.$api.variables.get(var_parked, "Boolean");
	const eng_cover = this.$api.variables.get(var_eng_cover, "Boolean");
	const eng_smoke = this.$api.variables.get(var_eng_smoke, "Boolean");
	//const pitot_cover = this.$api.variables.get(var_pitot_cover, "Boolean");
	//const pitot_smoke = this.$api.variables.get(var_pitot_smoke, "Boolean");
	if ( parked ) {
		if ( eng_cover && !eng_smoke ) {
			this.$api.variables.set(var_smoke_on, "Number", 3);
			this.$api.variables.set(var_smoke_on, "Number", 4);
		}
		else if ( !eng_cover && eng_smoke ) {
			this.$api.variables.set(var_smoke_off, "Number", 3);
			this.$api.variables.set(var_smoke_off, "Number", 4);
		}
	}

	const isPlaced = this.$api.variables.get(var_eng_cover, "Boolean");
	if ( isPlaced ) {
		const engRunning = this.$api.variables.get(var_eng_running, "Boolean");
		const isStarting = this.$api.variables.get(var_starter_engaged, "Boolean");
		if ( isStarting || engRunning ) {
			this.$api.variables.set(var_eng_cover, "Boolean", 0);
			this.$api.variables.set(var_pitot_cover, "Boolean", 0);
		}
		return icon_enabled;
	}
	return icon_disabled;
});

style(() => {
	const isActive = this.$api.variables.get(var_eng_cover, "Boolean");
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( !parked ) {
		return 'disabled';
	}
	return isActive ? 'active' : null;
})

info(() => {
	const isEnabled = this.$api.variables.get(var_eng_cover, "Boolean");
	return isEnabled ? text_enabled : text_disabled;
});