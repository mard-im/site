var scroll0=460;
var sl=1;
var title1=803;
		
			function post1(){
$('body,html').animate({scrollTop:title1+1},800);
			}

			function post2(){
$('body,html').animate({scrollTop:title1+($('#des4').outerHeight())+50},800);
			}

			function post3(){
$('body,html').animate({scrollTop:title1+($('#des4').outerHeight())+($('#des5').outerHeight())+100},800);
			}

			function post4(){
$('body,html').animate({scrollTop:title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+150},800);
			}

			function post5(){
$('body,html').animate({scrollTop:title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())+200},800);				
			}

			function post6(){
$('body,html').animate({scrollTop:title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())+($('#des8').outerHeight())+250},800);				
			}

			function post7(){
$('body,html').animate({scrollTop:title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())+($('#des8').outerHeight())+($('#des9').outerHeight())+300},800);				
			}

			function post8(){
$('body,html').animate({scrollTop:title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())+($('#des8').outerHeight())+($('#des9').outerHeight())+($('#des10').outerHeight())+350},800);				
			}





		


function allpost(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page1, #page2, #page4').hide();
			$('#page3').fadeIn(1000);
			document.title = "Все статьи";
		});
}








		
		
		$(document).ready(function(){
/*open title*/
		$('.post p').hide();

		
			$('#des1 h1, #des1 img').click(function(){
				$('#des1 p').slideToggle(1000);
			});



			$('#des2 h1, #des2 img').click(function(){
				$('#des2 p').slideToggle(1000);
			});



			$('#des3 h1, #des3 img').click(function(){
				$('#des3 p').slideToggle(1000);
			});



			$('#des4 h1, #des4 img').click(function(){
				$('#des4 p').slideToggle(1000);
			});



			$('#des5 h1, #des5 img').click(function(){
				$('#des5 p').slideToggle(1000);
			});



			$('#des6 h1, #des6 img').click(function(){
				$('#des6 p').slideToggle(1000);
			});



			$('#des7 h1, #des7 img').click(function(){
				$('#des7 p').slideToggle(1000);
			});



			$('#des8 h1, #des8 img').click(function(){
				$('#des8 p').slideToggle(1000);
			});



			$('#des9 h1, #des9 img').click(function(){
				$('#des9 p').slideToggle(1000);
			});			

			$('#des10 h1, #des10 img').click(function(){
				$('#des10 p').slideToggle(1000);
			});	

			$('#des11 h1, #des11 img').click(function(){
				$('#des11 p').slideToggle(1000);
			});	

/*link page*/



	$('#page2, #page3, #page4').hide();

	$('#one').click(function(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page2, #page3, #page4').hide();
			$('.post p').slideUp(1000);
			$('#page1').fadeIn(1000);
			document.title = "Главная";
		});
	});



	$('#two').click(function(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page1, #page3, #page4').hide();
			$('.post p').slideUp(1000);
			$('#page2').fadeIn(1000);
			document.title = "Категории";
		});
	});



	$('#three').click(function(){
		allpost();
		$('.post p').slideUp(1000);
	});



	$('#four').click(function(){
		$('body,html').animate({scrollTop:0},800, function(){
			$('#page1, #page2, #page3').hide();
			$('.post p').slideUp(1000);
			$('#page4').fadeIn(1000);
			document.title = "Галерея";
		});
	});




												/*hide slider*/
			$('#buthidehead').click(function(){
				$("header").slideToggle(1000, 
					function(){
						if (sl==1) {
							$('#buthidehead').css({'backgroundImage':'url(img/button/down.png)','margin':'0 auto'});
							sl=0;
							scroll0=100;
							title1=title1-360;

						}

						else {
							
							$('#buthidehead').css({'backgroundImage':'url(img/button/up.png)','margin':'32px auto'});
							sl=1;
							scroll0=460;
							title1=title1+360;
						}
					});
			});


/*button post*/
			$('#text0').click(function(){
				$('body,html').animate({scrollTop:0},800);
			});

			$('#text1').click(function(){
				post1();
			});

			$('#text2').click(function(){
				post2();
			});

			$('#text3').click(function(){
				post3();
			});

			$('#text4').click(function(){
				post4();
			});

			$('#text5').click(function(){
				post5();
			});

			$('#text6').click(function(){
				post6();
			});

			$('#text7').click(function(){
				post7();
			});

			$('#text8').click(function(){
				post8();
			});


/*read more*/
					$('.link').click(function(){
						$('.link').css({'display': 'none'});
						$('.read-more').css({'display': 'block'});
					});

/*link categories*/

			$('#link4, #last-link4').click(function(){
				allpost();
				$('#des4 p').slideDown(0, function(){
					post1();
				});
			});

			$('#link5, #last-link5').click(function(){
				allpost();
				$('#des5 p').slideDown(1000, function(){
					post2();
				});
			});

			$('#link6, #last-link6').click(function(){
				allpost();
				$('#des6 p').slideDown(1000, function(){
				post3();
				});
			});

			$('#link7, #last-link7').click(function(){
				allpost();
				$('#des7 p').slideDown(1000, function(){
				post4();
				});
			});

			$('#link8, #last-link8').click(function(){
				allpost();
				$('#des8 p').slideDown(1000, function(){
				post5();
				});
			});

			$('#link9, #last-link9').click(function(){
				allpost();
				$('#des9 p').slideDown(1000, function(){
				post6();
				})
			});

			$('#link10, #last-link10').click(function(){
				allpost();
				$('#des10 p').slideDown(1000, function(){
				post7();
				});
			});

			$('#link11, #last-link11').click(function(){
				allpost();
				$('#des11 p').slideDown(1000, function(){
				post8();
				});
			});



});//document ready end






$(window).scroll(function() {

														/*menu*/
			if ($(this).scrollTop() < scroll0){
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
				$('#text4').removeClass('active');
				$('#text5').removeClass('active');
				$('#text6').removeClass('active');
				$('#text7').removeClass('active');
				$('#text8').removeClass('active');
			}

			if (($(this).scrollTop() > title1) && ($(this).scrollTop() < title1+($('#des4').outerHeight()))){
				$('#text1').addClass('active');
				$('#text2').removeClass('active');

			} 

			if (($(this).scrollTop() > title1+($('#des4').outerHeight())) && ($(this).scrollTop() < title1+($('#des4').outerHeight())+($('#des5').outerHeight()))) {
				$('#text1').removeClass('active');
				$('#text2').addClass('active');
				$('#text3').removeClass('active');
			}

			if ($(this).scrollTop() > title1+($('#des4').outerHeight())+($('#des5').outerHeight())) {
				$('#text2').removeClass('active');
				$('#text3').addClass('active');
				$('#text4').removeClass('active');
			}



			if ($(this).scrollTop() > title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())) {
				$('#text3').removeClass('active');
				$('#text4').addClass('active');
				$('#text5').removeClass('active');
			}

			if ($(this).scrollTop() > title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())) {
				$('#text4').removeClass('active');
				$('#text5').addClass('active');
				$('#text6').removeClass('active');
			}

			if ($(this).scrollTop() > title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())+($('#des8').outerHeight())) {
				$('#text5').removeClass('active');
				$('#text6').addClass('active');
				$('#text7').removeClass('active');
			}


			if ($(this).scrollTop() > title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())+($('#des8').outerHeight())+($('#des9').outerHeight())) {
				$('#text6').removeClass('active');
				$('#text7').addClass('active');
				$('#text8').removeClass('active');
			}

			if ($(this).scrollTop() > title1+($('#des4').outerHeight())+($('#des5').outerHeight())+($('#des6').outerHeight())+($('#des7').outerHeight())+($('#des8').outerHeight())+($('#des9').outerHeight())+($('#des10').outerHeight())) {
				$('#text7').removeClass('active');
				$('#text8').addClass('active');
				
			}



			
});




