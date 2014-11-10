		//¨÷¶b°Êµe	
		$(function(){
		// À° a. ¥[¤W click ¨Æ¥ó
			$('a.nav').click(function(){
			// Åý±²¶b¥Î°Êµeªº¤è¦¡²¾°Ê¨ì #header ªº top ¦ì¸m
			// ¨Ã¥[¤J°Êµe®ÄªG

				$('a.href0').click(function(){
					var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

					$body.animate({
						scrollTop: $('#index').offset().top //¥i+-¹Bºâ¡A¤£¥i¥Î50%µ¥
						//scrollTop:500
					},1000);
					document.getElementById("nav").style.width = 200 +"px";
					document.getElementById("nav").style.height = 40 +"px";
					document.getElementById("nav").style.fontSize = 32 +"px";
					document.getElementById("nav").style.right = 50 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
					return false;
				});
		});
		$(function(){
				$('a.href1').click(function(){
					var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
					$body.animate({
						scrollTop: $('#announcement').offset().top //¥i+-¹Bºâ¡A¤£¥i¥Î50%µ¥
						//scrollTop:500
					},1000);
					document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 40 +"px";
					document.getElementById("nav").style.fontSize = 20 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 200 +"px";
					document.getElementById("#announcement").style.height = 40 +"px";
					document.getElementById("#announcement").style.fontSize = 26 +"px";
					document.getElementById("#announcement").style.right = 50 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
					return false;
				});
		});
		$(function(){
				$('a.href2').click(function(){
					var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
					
					$body.animate({
						scrollTop: $('#visitors').offset().top //¥i+-¹Bºâ¡A¤£¥i¥Î50%µ¥
						//scrollTop:500
					},1000);
					document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 30 +"px";
					document.getElementById("nav").style.fontSize = 18 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#visitors").style.width = 200 +"px";
					document.getElementById("#visitors").style.height = 40 +"px";
					document.getElementById("#visitors").style.fontSize = 32 +"px";
					document.getElementById("#visitors").style.right = 50 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
					return false;
				});
		});
		$(function(){
				$('a.href3').click(function(){
					var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
					
					$body.animate({
						scrollTop: $('#students').offset().top //¥i+-¹Bºâ¡A¤£¥i¥Î50%µ¥
						//scrollTop:500
					},1000);
					$('.bg').parallax("30%", 0.4);
					document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 30 +"px";
					document.getElementById("nav").style.fontSize = 18 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#students").style.width = 200 +"px";
					document.getElementById("#students").style.height = 40 +"px";
					document.getElementById("#students").style.fontSize = 32 +"px";
					document.getElementById("#students").style.right = 50 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
					return false;
				});
		});
		$(function(){
				$('a.href4').click(function(){
					var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
					
					$body.animate({
						scrollTop: $('#teachers').offset().top//¥i+-¹Bºâ¡A¤£¥i¥Î50%µ¥
						//scrollTop:500
					},1000);
					document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 30 +"px";
					document.getElementById("nav").style.fontSize = 18 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 200 +"px";
					document.getElementById("#teachers").style.height = 40 +"px";
					document.getElementById("#teachers").style.fontSize = 32 +"px";
					document.getElementById("#teachers").style.right = 50 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";

					return false;
				});
			});
			
		});
		
		var A = document.getElementById('body');

		
		A.addEventListener('mousewheel',
        function (e) {
            var sum=A.scrollTop;
            console.log(sum);
            if (e.wheelDelta > 0 || e.wheelDeltaY < 0) {
                sum += e.wheelDelta;
                console.log(sum);
            } else {
               	sum += e.wheelDeltaY;
               	console.log(sum);
            }
            if(A.scrollTop>=0 && A.scrollTop<1000){
				document.getElementById("nav").style.width = 200 +"px";
					document.getElementById("nav").style.height = 40 +"px";
					document.getElementById("nav").style.fontSize = 32 +"px";
					document.getElementById("nav").style.right = 50 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
			}
            if(A.scrollTop>=1000 && A.scrollTop<2000){
				document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 40 +"px";
					document.getElementById("nav").style.fontSize = 20 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 200 +"px";
					document.getElementById("#announcement").style.height = 40 +"px";
					document.getElementById("#announcement").style.fontSize = 26 +"px";
					document.getElementById("#announcement").style.right = 50 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
			}
			if(A.scrollTop>=2000 && A.scrollTop<3000){
				document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 30 +"px";
					document.getElementById("nav").style.fontSize = 18 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#visitors").style.width = 200 +"px";
					document.getElementById("#visitors").style.height = 40 +"px";
					document.getElementById("#visitors").style.fontSize = 32 +"px";
					document.getElementById("#visitors").style.right = 50 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
			}
			if(A.scrollTop>=3000 && A.scrollTop<4000){
				$('.bg').parallax("30%", 0.4);
				document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 30 +"px";
					document.getElementById("nav").style.fontSize = 18 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#students").style.width = 200 +"px";
					document.getElementById("#students").style.height = 40 +"px";
					document.getElementById("#students").style.fontSize = 32 +"px";
					document.getElementById("#students").style.right = 50 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 150 +"px";
					document.getElementById("#teachers").style.height = 30 +"px";
					document.getElementById("#teachers").style.fontSize = 20 +"px";
					document.getElementById("#teachers").style.right = 0 +"px";
		}
			if(A.scrollTop>=5000 ){
				document.getElementById("nav").style.width = 150 +"px";
					document.getElementById("nav").style.height = 30 +"px";
					document.getElementById("nav").style.fontSize = 18 +"px";
					document.getElementById("nav").style.right = 0 +"px";
					document.getElementById("#announcement").style.width = 150 +"px";
					document.getElementById("#announcement").style.height = 30 +"px";
					document.getElementById("#announcement").style.fontSize = 18 +"px";
					document.getElementById("#announcement").style.right = 0 +"px";
					document.getElementById("#teachers").style.width = 200 +"px";
					document.getElementById("#teachers").style.height = 40 +"px";
					document.getElementById("#teachers").style.fontSize = 32 +"px";
					document.getElementById("#teachers").style.right = 50 +"px";
					document.getElementById("#visitors").style.width = 150 +"px";
					document.getElementById("#visitors").style.height = 30 +"px";
					document.getElementById("#visitors").style.fontSize = 20 +"px";
					document.getElementById("#visitors").style.right = 0 +"px";
					document.getElementById("#students").style.width = 150 +"px";
					document.getElementById("#students").style.height = 30 +"px";
					document.getElementById("#students").style.fontSize = 20 +"px";
					document.getElementById("#students").style.right = 0 +"px";

			}
        }, false);