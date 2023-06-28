const var_charging = 'L:C152X_BATTERY_CHARGE';
const var_ext_pwr_avail = 'EXTERNAL POWER AVAILABLE';
const var_ext_pwr_toggle = 'K:TOGGLE_EXTERNAL_POWER';
const var_ext_pwr_on = 'EXTERNAL POWER ON';
const var_bat_pct = 'ELECTRICAL BATTERY ESTIMATED CAPACITY PCT';
const var_bat_volts = 'ELECTRICAL BATTERY VOLTAGE';
const var_parked = 'Z:PLANE_PARKED';
const var_icon_charging = 'mdi:battery-charging';
const var_icon_100 = 'mdi:battery';
const var_icon_80 = 'mdi:battery-80';
const var_icon_60 = 'mdi:battery-60';
const var_icon_40 = 'mdi:battery-40';
const var_icon_20 = 'mdi:battery-20';
const var_icon_empty = 'mdi:battery-outline';

run(() => {
	const charging = this.$api.variables.get(var_charging, "Boolean");
	const ext_pwr_avail = this.$api.variables.get(var_ext_pwr_avail, "Boolean");
	const ext_pwr_on = this.$api.variables.get(var_ext_pwr_on, "Boolean");
	const bat_pct = this.$api.variables.get(var_bat_pct, "Percent");
	const bat_volts = this.$api.variables.get(var_bat_volts, "volts");
	const parked = this.$api.variables.get(var_parked, "Boolean");
	
	if ( parked && !charging && bat_pct < 99 && ext_pwr_avail ) {
		if ( !ext_pwr_on ) {
			this.$api.variables.set(var_ext_pwr_toggle, "Boolean", 1)
		}
		this.$api.variables.set(var_charging, "Boolean", 1);
	} 
	else {
		if ( ext_pwr_on ) {
			this.$api.variables.set(var_ext_pwr_toggle, "Boolean", 0);
		}
		this.$api.variables.set(var_charging, "Boolean", 0);
	}
	
	return true;
});

style(() => {
	const charging = this.$api.variables.get(var_charging, "Boolean");
	const bat_pct = this.$api.variables.get(var_bat_pct, "Percent");
	const parked = this.$api.variables.get(var_parked, "Boolean");
	const ext_pwr_on = this.$api.variables.get(var_ext_pwr_on, "Boolean");
	
	
	if ( bat_pct == 100 ) {
		if ( ext_pwr_on ) {
			this.$api.variables.set(var_ext_pwr_toggle, "Boolean", 0);
		}
		this.$api.variables.set(var_charging, "Boolean", 0);
		return 'disabled';
	}
	else if ( !parked ) {
		return 'disabled';
	}
	else {
		return charging ? 'active' : null;
	}
})

state(() => {
	const charging = this.$api.variables.get(var_charging, "Boolean");
	const bat_pct = this.$api.variables.get(var_bat_pct, "Percent");
	if ( charging ) {
		return var_icon_charging;
	}
	else if ( bat_pct >= 90 ) {
		return var_icon_100;
	}
	else if ( bat_pct >= 70 ) {
		return var_icon_80;
	}
	else if ( bat_pct >= 50 ) {
		return var_icon_60;
	}
	else if ( bat_pct >= 30 ) {
		return var_icon_40;
	}
	else if ( bat_pct >= 10 ) {
		return var_icon_20;
	}
	else {
		return var_icon_empty;
	}
});

info(() => {
	const bat_pct = this.$api.variables.get(var_bat_pct, "Percent");
	const bat_volts = this.$api.variables.get(var_bat_volts, "volts");
	return "Battery Charge: " + bat_pct.toFixed(1) + "% " + bat_volts.toFixed(1) + "V";
});