$( document ).ready(function() {


var hide_text = $('.filmtext p')
	hide_text.slideToggle();


function filmdetails(event){
	event.preventDefault();

	var linkto = $(this).find('a').attr('href');

	var windowwidth = $(window).width();
	

	if ( windowwidth > 500 ){
		window.location.href = linkto;
	} else {
		hide_text.slideToggle();
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

		$('.film').show();

		$('.film').each(function(){
		
			if ($(this).data('genre') !== genre) {
				$(this).hide();
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











