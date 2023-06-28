var startingPlane = 0;
run(() => {
	if (this.$api.variables.get("GENERAL ENG COMBUSTION:1", "bool") == 0 && startingPlane == 0) {
		startingPlane = 1;
		this.$api.variables.set("LIGHT LANDING", "bool", 0);
		this.$api.variables.set("LIGHT PANEL", "bool", 0);
		this.$api.variables.set("K:MAGNETO1_OFF", "number", 0);
		
		// delay work around as anim will not go from 0-100 100-0
		this.$api.variables.set("K:ADF_VOLUME_SET", "number", 50);
		setTimeout(() => {
			this.$api.variables.set("K:ADF_VOLUME_SET", "number", 0);
		}, 500);
		
		setTimeout(() => {
			if (this.$api.variables.get("GENERAL ENG FUEL VALVE:1", "bool") == 0) {
				this.$api.variables.set("K:TOGGLE_FUEL_VALVE_ENG1", "number", 1);
			}					
			this.$api.variables.set("GENERAL ENG MIXTURE LEVER POSITION:1", "percent", 50);
			this.$api.variables.set("A:GENERAL ENG ANTI ICE POSITION:1", "position 16k", 0);
		}, 1000);
		
		setTimeout(() => {
			this.$api.variables.set("ELECTRICAL MASTER BATTERY:1", "number", 1);
			this.$api.variables.set("K:ALTERNATOR_SET", "number", 1);
		}, 2000);
		
		setTimeout(() => {
			this.$api.variables.set("LIGHT BEACON", "bool", 1);
			this.$api.variables.set("GENERAL ENG THROTTLE LEVER POSITION:1", "percent", 11);
			if (this.$api.variables.get("BRAKE PARKING INDICATOR", "bool") == 0) {
				this.$api.variables.set("K:PARKING_BRAKES", "number", 1);
			}				
		}, 3000);
		
		setTimeout(() => {
			this.$api.variables.set("RECIP ENG PRIMER:1", "bool", 1);
		}, 4000);
		setTimeout(() => {
			this.$api.variables.set("L:XMLVAR_PUMPED_FUEL", "gallons", 0.029);
		}, 6000);
		
		setTimeout(() => {
			this.$api.variables.set("L:C152X_DOOR_PILOT", "bool", 0);
			this.$api.variables.set("L:C152X_DOOR_COPILOT", "bool", 0);
		}, 7000);	

		setTimeout(() => {
			this.$api.variables.set("L:C152X_WINDOW_HANDLE_PILOT", "number", 1);
		}, 7300);

		setTimeout(() => {
			this.$api.variables.set("L:C152X_PILOT_WINDOW", "number", 16384);
			// this.$api.variables.set("LIGHT LOGO:2", "number", 16384);
		}, 7500);
		
		setTimeout(() => {
			this.$api.variables.set("K:MAGNETO1_BOTH", "number", 0);
		}, 8000);
		
		setTimeout(() => {
			this.$api.variables.set("L:JPL152_CLEAR", "bool", 1);
		}, 9000);
		
		setTimeout(() => {
			if (this.$api.variables.get("GENERAL ENG COMBUSTION:1", "bool") == 0) {
				this.$api.variables.set("K:MAGNETO1_START", "number", 0);
			}
		}, 12200);
		
		setTimeout(() => {
			this.$api.variables.set("K:FLAPS_UP", "number", 0);
			this.$api.variables.set("L:JPL152_CLEAR", "bool", 0);
			this.$api.variables.set("L:C152X_SUMP_OIL_TEMPERATURE", "number", 120);
		}, 14000);

		// delay work around as anim will not go from 0-100 100-0
		setTimeout(() => {
			if (this.$api.variables.get("E:TIME OF DAY", "number") != 1) {
				this.$api.variables.set("K:LIGHT_POTENTIOMETER_5_SET", "number", 25);
				this.$api.variables.set("K:LIGHT_POTENTIOMETER_6_SET", "number", 75);
				this.$api.variables.set("LIGHT PANEL", "bool", 1);
			}
			this.$api.variables.set("K:COM1_VOLUME_SET", "number", 50);
			this.$api.variables.set("K:COM2_VOLUME_SET", "number", 50);
			setTimeout(() => {
				this.$api.variables.set("K:COM1_VOLUME_SET", "number", 100);
				this.$api.variables.set("K:COM2_VOLUME_SET", "number", 100);
			}, 500);				
		}, 14700);
		
		setTimeout(() => {
			this.$api.variables.set("TRANSPONDER STATE:1", "number", 4);
		}, 15000);
		
		setTimeout(() => {
			this.$api.variables.set("LIGHT NAV", "bool", 1);
		}, 15200);
		
		setTimeout(() => {
			this.$api.variables.set("LIGHT STROBE", "bool", 1);
		}, 15500);
		
		setTimeout(() => {
			this.$api.variables.set("LIGHT TAXI", "bool", 1);
		}, 15700);
		
		setTimeout(() => {
			if (this.$api.variables.get("A:AMBIENT TEMPERATURE", "celsius") < 5) {
				this.$api.variables.set("K:PITOT_HEAT_SET", "number", 1);
			}
			this.$api.variables.set("L:C152X_COPILOT_WINDOW", "number", 0);
		}, 16000);
		
		setTimeout(() => {
			Simplane.setTransponderToRegion();
			this.$api.variables.set("L:C152X_WINDOW_HANDLE_COPILOT", "number", 0);
			startingPlane = 0;
		}, 17000);
	}

	return true;
});

style(() => {
	return startingPlane ? 'active' : null;
})