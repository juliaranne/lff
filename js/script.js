$( document ).ready(function() {
    
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    

	    var target = this.hash;
	    var $target = $(target);
	     console.log(this);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});

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


});











