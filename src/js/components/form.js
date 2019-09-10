/* eslint-env node, mocha */

import $ from 'jquery';

'use strict';

export function FormValid () {
	const email = $('#emailImp').val() == undefined ? '' : $('#emailImp').val().trim(),
		name = $('#nameImp').val() == undefined ? '' : $('#nameImp').val().trim(),
		text = $('#textImp').val() == undefined ? '' : $('#textImp').val().trim();
    
	$('#submit').on('click', () => {
		if (email === '') 
			email.style.borderColor = 'red';
		else if (name === '')
			name.style.borderColor = 'red';
		else if(text.length < 5)
			text.style.borderColor = 'red';
		else 
			alert(`Thank! Your message has been sent to ${email}`);
	});
}
