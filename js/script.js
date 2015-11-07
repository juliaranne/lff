$( document ).ready(function() {


	 function scrollto(e){
	 	e.preventDefault();

	 	var hashtag = $(this).find('a');
	 	var target = hashtag.attr('href');

	 	var $target = $(target);

	 	$('html, body').stop().animate({
	          'scrollTop': $target.offset().top
	     }, 900, 'swing');
	 }
	

	 $('.navlink').on('click', scrollto);
	

	$('select.genre').on('change',function(event){
		event.preventDefault();
		var genre = $(this).val().toLowerCase();

		$('.film').show();

		$('.film').each(function(){
		
			if ($(this).data('genre') !== genre) {
				$(this).hide();
			} 
		});
	});
		

$('select.dates').on('change', function(event){
	event.preventDefault();
	var dates = ($(this).val().toLowerCase()).replace(/\s+/g, '');

	$('.film').show();

	$('.film').each(function(){

		if ($(this).data('dates') !== dates) {
			$(this).hide();
		}
	});
});


});











