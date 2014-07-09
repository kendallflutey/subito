// Fix the indentation for readability
// You also have a document ready in "start_app.js" can these start points be
// merged into one place?
$(document).ready(function() {
 $('#page-select').change(function(){
	window.location = $('#page-select').val();

});
 	$('#page-select').customSelect();
});
