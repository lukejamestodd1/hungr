
//========== SET UP PAGE ==========//

// CLEAR SCREEN
var setupPage = function() {
  $('#mainContainer').children().each( function(child) {
      $(this).remove();
	});
}

//============== START ROUTER ==============//
$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});