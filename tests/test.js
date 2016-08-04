(function () {
	'use strict';
	describe( 'ractive-load', function () {
		var assert, load;
		assert = chai.assert;
		load = Ractive.load;

it( 'should load a progress-bar component with blank bar', function () {
			return load( '../templates/progress-bar.html' ).then( function ( Component ) {
				var ractive = new Component({
					data: {	
						bars:[{name:'progressbar#1', value:0}], 
						amounts: [{25}]
					}
				});
				
				assert.equal( ractive.toHTML(), '<div class="progress-bar-empty" style="width:50%;"><span class="progress-label">0%</span></div> <select value="progressbar#1"><optin value="1"> progress#1</option></select>');
				
				
			});
			
		});
