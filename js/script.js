$( document ).ready(function() {


var hide_text = $('.description');
	hide_text.slideUp();


function filmdetails(event){
	event.preventDefault();

	var linkto = $(this).find('a').attr('href');
	var currentfilm = $(this).next('.description');

	var windowwidth = $(window).width();
	

	if ( windowwidth > 500 ){
		window.location.href = linkto;
	} else if(!currentfilm.hasClass('active')) {
		hide_text.removeClass('active').slideUp();
		currentfilm.addClass('active').slideDown();
	}
}
$('.film').on('click', filmdetails );


//hide filmtext
//film class on click prevent default
//if screen width is greater than 500px follow link
//else filmtext slidedown.

/*********************
 Scroll page to href nav
***********************/

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


	
/*********************
 filter films when Genre is selected 
***********************/

	$('select.genre').on('change',function(event){
		event.preventDefault();
		var genre = $(this).val().toLowerCase();

		 $('.filmoverlay').css('fill', '#00E3E3');
		 $('.filmtext').css('backgroundColor', '#00E3E3');

		$('.film').each(function(){
		
			if ($(this).data('genre') === genre) {
				
				var matchgenre = $(this).find('.filmoverlay');
				var desc = $(this).parent('.filmtext');
				matchgenre.css('fill', '#FF7474');
				desc.css('backgroundColor', '#FF7474');
			} 
		});
	});


		
/*********************
 filter films when Date is selected 
***********************/
$('select.dates').on('change', function(event){
	event.preventDefault();
	var dates = ($(this).val().toLowerCase()).replace(/\s+/g, '');
	

	$('.film').show();

	$('.film').each(function(){

		if ($(this).data('dates') !== dates) {
			
			$(this).hide();
		 } if ( dates == 'selectadate') {
		 	$('.film').show();
		 
		 }
	});
});

/*********************
 filter films when Cinema is selected 
***********************/
		$('select.location').on('change',function(event){
		event.preventDefault();
		var location = ($(this).val().toLowerCase()).replace(/\s+/g, '');
		


		$('.film').show();
		

		$('.film').each(function(){
		
			if ($(this).data('location') !== location) {
				
				$(this).hide();
			} if ( location == 'selectcinema') {
				$('.film').show();
			}

		});
	});


		$('select.location').on('change',function(event){
			event.preventDefault();
			var location = ($(this).val().toLowerCase()).replace(/\s+/g, '');


			$('.cinemaoverlay').css('fill', '#00FFCC');


			$('.cinema').each(function(){
			var cinema = $(this).data('location');
			
				
			if ( cinema === location ){
				var colorchange = $(this).find('.cinemaoverlay');
				colorchange.css('fill', '#FF471A');
			}
		});

	});

 // //
 // function imageswap(){

 // $('.film').each(function(){

	// // var films = ($('.film').each());
	// var arr = [$(this).find('img').attr('src')];
	// // console.log(arr);


	// var items = arr[Math.floor(Math.random()* arr.length)];
	// return (items);

	//  $('header').css('background-image', 'url(../images/' + items + ')'); 

 // });

 // };

 // imageswap();



});











