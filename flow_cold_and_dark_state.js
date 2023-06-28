run(() => {
	this.$api.variables.set("ELECTRICAL MASTER BATTERY:1", "number", 0);
	this.$api.variables.set("K:ALTERNATOR_SET", "number", 0);
	this.$api.variables.set("GENERAL ENG THROTTLE LEVER POSITION:1", "percent", 0);
	this.$api.variables.set("GENERAL ENG MIXTURE LEVER POSITION:1", "percent", 0);
	this.$api.variables.set("L:XMLVAR_PUMPED_FUEL", "gallons", 0.00);
	this.$api.variables.set("L:C152X_DOOR_PILOT", "bool", 1);
	this.$api.variables.set("L:C152X_DOOR_COPILOT", "bool", 0);
	this.$api.variables.set("K:PARKING_BRAKES", "number", 1);
	this.$api.variables.set("K:PITOT_HEAT_SET", "number", 0);
	this.$api.variables.set("LIGHT NAV", "bool", 0);
	this.$api.variables.set("LIGHT STROBE", "bool", 0);
	this.$api.variables.set("LIGHT BEACON", "bool", 0);
	this.$api.variables.set("LIGHT TAXI", "bool", 0);
	this.$api.variables.set("LIGHT LANDING", "bool", 0);
	this.$api.variables.set("LIGHT PANEL", "bool", 0);
	this.$api.variables.set("TRANSPONDER STATE:1", "number", 0);
	this.$api.variables.set("K:MAGNETO1_OFF", "number", 0);
	if (this.$api.variables.get("GENERAL ENG FUEL VALVE:1", "bool") == 1) {
		this.$api.variables.set("K:TOGGLE_FUEL_VALVE_ENG1", "number", 1);
	}	
	// delay work around as anim will not go from 0-100 100-0
	this.$api.variables.set("K:COM1_VOLUME_SET", "number", 50);
	this.$api.variables.set("K:COM2_VOLUME_SET", "number", 50);
	this.$api.variables.set("K:ADF_VOLUME_SET", "number", 50);
	this.$api.variables.set("L:C152X_SUMP_OIL_TEMPERATURE", "number", this.$api.variables.get("AMBIENT TEMPERATURE", "fahrenheit"));
	setTimeout(() => {
		this.$api.variables.set("K:COM1_VOLUME_SET", "number", 0);
		this.$api.variables.set("K:COM2_VOLUME_SET", "number", 0);
		this.$api.variables.set("K:ADF_VOLUME_SET", "number", 0);
	}, 500);

	return true;
});