$(document).ready(function(){
	initializePage();	
})

function initializePage(){
	
	$('a.accordion-toggle').click(function() {
		var thisfa = $(this).find('.fa');
		if ( $(this).find('.fa').hasClass('fa-angle-down') ) {
			thisfa.removeClass('fa-angle-down').addClass('fa-angle-right');
			//$(this).text('Close');
		} else {
			thisfa.removeClass('fa-angle-right').addClass('fa-angle-down');
			//$(this).text('Find Cafe');
		}
	});
}