/*
import './node_modules/jquery/dist/jquery.min.js';
import './npm_bundle.js';

//import Popper from './node_modules/popper.js/dist/popper.min.js';
//window.Popper = Popper;
//console.log(Popper);
//window.Popper = Popper;
//import './node_modules/tooltip.js/dist/umd/tooltip.min.js';
import './lib/js-yaml.min.js';
import './node_modules/sugar/dist/sugar-es5.min.js';
Sugar.extend();

import './libs/js.cookie.js';
*/

//import './node_modules/interactjs/dist/interact.min.js';
const select = q => document.querySelector(q);


//import './node_modules/@github/time-elements/dist/time-elements.js';

const times = {
	LIFE:'4,000,000',
	YEAR:'40,000',
	DAY:'100',
	HOUR:'4',
	MINUTE:'0.06',
	SECOND:'0.001'
};

window.addEventListener('DOMContentLoaded', (event) => {
	var field_time = select('#ab-time');

	/*
	interact(field_time).draggable({
		onmove: ev => {
			ev.dx;
			let dt = (new Date(item.time)).format();
			this.$('#info-when').setAttribute('datetime', dt);
		}
	}).on('tap', 
	*/

	var toggle = () => {
		let keys = Object.keys(times);
		let index = keys.indexOf(field_time.textContent)+1;
		if(index > (keys.length-1)) index = 0;
		console.log(index);
		select('#ab-time').textContent = keys[index];
		select('#ab-money').textContent = times[keys[index]];
	};

	toggle();
	field_time.addEventListener('click', ev => toggle());
});