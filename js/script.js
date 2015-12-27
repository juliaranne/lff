/* Would still like to have the three select lists relate to each other
 - looping through those films visible rather than all the films each time. 
 Would also like the to be able to slide the films up on a second click, rather than
 having to click a different film */

$( document ).ready(function() {


function filmdetails(event){

			event.preventDefault();
			console.log(this);

			var linkto = $(this).find('a').attr('href');
			var windowwidth = $(window).width();
			var currentfilm = $(this);
			var filmdesc = $(this).next('.description');
			


			if (windowwidth > 590 ){
				window.location.href = linkto;

			} else {

				if (currentfilm.hasClass('active')){
					filmdesc.slideUp();
					currentfilm.removeClass('active');
				} else {
					$('.description').slideUp();
					$('.film').removeClass('active');
					currentfilm.addClass('active');
					filmdesc.slideDown();
				}
	
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

		$('.description').hide();

		 $('.filmoverlay').css('fill', '#00E3E3');
		 $('.filmtext').css('backgroundColor', '#00E3E3');

		$('.film').each(function(){

			var matchgenre = $(this).find('.filmoverlay');
			var desc = $(this).parent('.film_wrapper');
		
			if ($(this).data('genre') === genre) {
				matchgenre.css('fill', '#FF7474');
				desc.css('backgroundColor', '#FF7474');
			 } else if (genre === 'genre') {
			 	matchgenre.css('fill', '#00E3E3');
				desc.css('backgroundColor', '#00E3E3');
			 }

		});
	});


		
/*********************
 filter films when Date is selected 
***********************/
$('select.dates').on('change', function(event){
	event.preventDefault();
	var dates = ($(this).val().toLowerCase()).replace(/\s+/g, '');
	
	$('.description').hide();

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
		
		$('.description').hide();

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
//  var header = $('header');

//  var imgArray = [
//  "url('../lff/images/black-mass-01.jpg')",
//  "url('../lff/images/departure-03.jpg')",
//  "url('../lff/images/bigger-splash-02.jpg')",
//  "url('../lff/images/ayanda-05.jpg')",
//  "url('../lff/images/der-nachtmar-02.jpg')",
//  "url('../lff/images/an-03.jpg')",
//  "url('../lff/images/invention-03.jpg')",
//  "url('../lff/images/shooting-stars-01.jpg')",
//  "url('../lff/images/suffragette-002.jpg')",
//  "url('../lff/images/valley-of-love-04.jpg')"];

// function randomImg() {
//     var randomNum = (Math.floor((Math.random() * 1000000000)) % (imgArray.length));
//     // document.body.style.backgroundImage = imgArray[randomNum];
//     header.css('background-image', imgArray[randomNum]);

// }

//  window.onload = randomImg;



});











