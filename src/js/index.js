/* eslint-env node, mocha */

import $ from 'jquery';
import { FormValid } from './components/form';

'use strict';

$(document).ready(function () {
	
	const $page = $('html, body');

	// Open hidden menu
	$('#open__menu, #open__fot').on('click', () => {
		$('#aside').css({
			left: '0px'
		});
	});

	// Close hidden menu
	$('.aside__close__bth').on('click', () => {
		$('aside').css({
			left: '-400px'
		});
	});

	$('.aside__ul').on('click', 'a', function (event) {
		event.preventDefault(); 
		var id  = $(this).attr('href'), 
			top = $(id).offset().top; 
		$page.animate({scrollTop: top}, 1000);
	});

	FormValid();

});