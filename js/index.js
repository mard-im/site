var scroll1=460;
var sl=1;
var title1=755;
		



		
		
		$(document).ready(function(){
/*open title*/
		$('.post p').hide();



			$('#dis1 h1').click(function(){
				$('#dis1 p').slideToggle(1000);
			});



			$('#dis2 h1').click(function(){
				$('#dis2 p').slideToggle(1000);
			});



			$('#dis3 h1').click(function(){
				$('#dis3 p').slideToggle(1000);
			});




			$('#dis1 img').click(function(){
				$('#dis1 p').slideToggle(1000);
			});

			

			$('#dis2 img').click(function(){
				$('#dis2 p').slideToggle(1000);
			});



			$('#dis3 img').click(function(){
				$('#dis3 p').slideToggle(1000);
			});



/*numbers page*/

	$('#page2, #page3, #page4').hide();

	$('#one').click(function(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page2, #page3, #page4').hide();
			$('#page1').fadeIn(1000);
			document.title = "Главная";
		});
	});



	$('#two').click(function(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page1, #page3, #page4').hide();
			$('#page2').fadeIn(1000);
			document.title = "Категории";
		});
	});



	$('#three').click(function(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page1, #page2, #page4').hide();
			$('#page3').fadeIn(1000);
			document.title = "Все статьи";
		});
	});



	$('#four').click(function(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page1, #page2, #page3').hide();
			$('#page4').fadeIn(1000);
			document.title = "Галерея";
		});
	});




												/*hide slider*/
			$('#buthidehead').click(function(){
				$("header").slideToggle(1000, 
					function(){
						if (sl==1) {
							$('#buthidehead').css('backgroundImage', 'url(img/button/down.png)');
							sl=0;
							scroll1=100;
							title1=title1-360;

						}

						else {
							
							$('#buthidehead').css('backgroundImage', 'url(img/button/up.png)');
							sl=1;
							scroll1=460;
							title1=title1+360;

								
						}						
						

					});



			});

			$('#text0').click(function(){
				$('body,html').animate({scrollTop:0},800);
			});

			$('#text1').click(function(){
				$('body,html').animate({scrollTop:title1+1},800);
			});

			$('#text2').click(function(){
				$('body,html').animate({scrollTop:title1+($('#dis1').outerHeight())+50},800);
			});

			$('#text3').click(function(){
				$('body,html').animate({scrollTop:title1+($('#dis1').outerHeight())+($('#dis2').outerHeight())+100},800);
			});




					$('.link').click(function(){
						$('.link').css({'display': 'none'});
						$('.spoiler').css({'display': 'block'});
					});



});//document ready end






$(window).scroll(function() {

														/*menu*/
			if ($(this).scrollTop() < scroll1){
				$('#menu').removeClass("scrolldown");
				$('#blockmenu').removeClass("scrolldown");
				$('#menu ul li').removeClass("scrolldown");

				
			}
			
			else{

				$('#menu').addClass("scrolldown");
				$('#blockmenu').addClass("scrolldown");
				$('#menu ul li').addClass("scrolldown");

			}



											/*titlename*/

			if ($(this).scrollTop() > title1){
				$('#postfull #titlename').addClass("fixed");

			}

			else {
				$('#postfull #titlename').removeClass("fixed");
				$('#text1').removeClass('active');
				$('#text2').removeClass('active');
				$('#text3').removeClass('active');
			}

			if (($(this).scrollTop() > title1) && ($(this).scrollTop() < title1+($('#dis1').outerHeight()))){
				$('#text1').addClass('active');
				$('#text2').removeClass('active');

			} 

			if (($(this).scrollTop() > title1+($('#dis1').outerHeight())) && ($(this).scrollTop() < title1+($('#dis1').outerHeight())+($('#dis2').outerHeight()))) {
				$('#text1').removeClass('active');
				$('#text2').addClass('active');
				$('#text3').removeClass('active');
			}

			if ($(this).scrollTop() > title1+($('#dis1').outerHeight())+($('#dis2').outerHeight())) {
				
				$('#text2').removeClass('active');
				$('#text3').addClass('active');
			}

			/*if ($(this).scrollTop() < 30){
				$('body,html').animate({scrollTop:31},100)
			}

			if ($(this).scrollTop() = 31){
				$('body,html').stop();
			}

			*/
});




