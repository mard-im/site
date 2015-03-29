var scroll1=100;
var sl=0;
var title1=435;
		



		
		
		$(document).ready(function(){

			$("header").hide();
	
			$('#buthidehead').click(function(){
				$("header").slideToggle(1000, 
					function(){
						if (sl==1) {
							$('#buthidehead').css('backgroundImage', 'url(img/button/down.png)');
							sl=0;
							scroll1=100;
							title1=title1-600;

						}

						else {
							
							$('#buthidehead').css('backgroundImage', 'url(img/button/up.png)');
							sl=1;
							scroll1=700;
							title1=title1+600;

								
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


	


});






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
});