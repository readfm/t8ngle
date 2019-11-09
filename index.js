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

const selectAll = qs => Array.prototype.slice.call(
	document.querySelectorAll(qs)
);

window.addEventListener('DOMContentLoaded', (event) => {
	selectAll('select').map(el => {
		el.addEventListener('change', function(){
			if(this.dataset.on)
				selectAll(this.dataset.on).map(cont => {
					cont.textContent = this.value;
				});
		});
		var event = new Event('change');
		el.dispatchEvent(event);
	});

	/*
	var field_time = select('#ab-time');

	
	var toggle = () => {
		let keys = Object.keys(times);
		let index = keys.indexOf(field_time.textContent)+1;
		if(index > (keys.length-1)) index = 0;

		select('#ab-time').textContent = keys[index];
		select('#ab-money').textContent = times[keys[index]];
	};

	interact(field_time).draggable({
		onmove: ev => {
			console.log(ev.dx);
			//let dt = (new Date()).format();

			var field = select('#ab-time').textContent;
			var count = parseInt(field);
			var key = (field.indexOf(' ')+1)?field.split(' ')[1]:field;
			key = key.replace(/s/g, '');
			if(key == 'LIFE') key = 'YEAR';
			
			console.log(ev, count, key);

			if(!count) count = 1;
			count += parseInt(ev.dx);

			select('#ab-time').textContent = (count == 1)?key:(count + ' ' + key + 's');
			select('#ab-money').textContent = times[key] * count;		
		}
	}).on('tap', ev => toggle());


	toggle();
	*/
});