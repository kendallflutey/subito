
$(document).ready(function() {
 $('#page-select').change(function(){
	window.location = $('#page-select').val();

});
 	$('#page-select').customSelect();
});
