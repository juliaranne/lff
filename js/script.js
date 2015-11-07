$( document ).ready(function() {


var hidep = $('.filmtext p')
	hidep.slideUp();


// function slideup(e){
// 	e.preventDefault();

// 	alert('now');

// }

// $('.filmtext').on('click', 'slideup');
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











