const scroll_rate = 50;
let block_scroll = false;
const var_trim_pct = 'RUDDER TRIM PCT';
const var_trim = 'RUDDER TRIM';
const var_trim_set = 'K:RUDDER_TRIM_SET';
const var_parked = 'Z:PLANE_PARKED';
const var_icon_centered = 'mdi:format-horizontal-align-center';
const var_icon_left = 'mdi:arrow-expand-left';
const var_icon_right = 'mdi:arrow-expand-right';

let data = { trim: 0 };
data = this.$api.datastore.import(data);

run(() => {
	return true;
});

info(() => {
	const trim_pct = Math.round(this.$api.variables.get(var_trim_pct, "Percent"));
	let msg = 'Trim Tab <br/>';
	if ( trim_pct < 0 ) {
		msg += Math.abs(trim_pct) + '% Left';
	}
	else if ( trim_pct > 0 ) {
		msg += Math.abs(trim_pct) + '% Right';
	}
	else {
		msg += 'Centered';
	}
		
	return msg;
});

state(() => {
	const trim_pct = Math.round(this.$api.variables.get(var_trim_pct, "Percent"));

	if ( data.trim != trim_pct ) {
		const trim_set = this.$api.variables.set(var_trim_set, "Number", data.trim);
	}

	if ( trim_pct < 0 ) {
		return var_icon_left;
	}
	else if ( trim_pct > 0 ) {
		return var_icon_right;
	}
	else {
		return var_icon_centered;
	}
});

style(() => {
	const trim = Math.round(this.$api.variables.get(var_trim_pct, "Percent"));
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( !parked ) {
		return 'disabled';
	}
	else { 
		return trim != 0 ? 'active' : null;
	}
});

scroll((event) => {
	const parked = this.$api.variables.get(var_parked, "Boolean");
	if ( parked ) {
		if(event.scroll < 0 && !block_scroll) {
			if ( data.trim < 100 ) { data['trim']++ }
			block_scroll = true;
			setTimeout(function(){block_scroll = false;}, scroll_rate);
		}
		else if(event.scroll > 0 && !block_scroll)
		{
			if ( data.trim > -100 ) { data['trim']-- }
			block_scroll = true;
			setTimeout(function(){block_scroll = false;}, scroll_rate);
		}
		this.$api.datastore.export(data);
	}
});