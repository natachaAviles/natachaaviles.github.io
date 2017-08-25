$(document).ready(function(){
	$(".button-collapse").sideNav();

	
	$('.parallax').parallax();

	$('.tooltipped').tooltip({delay: 50});


	$(function(){
		$('a[href*="#"]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 1000);
					return false;
				}
			}
		});
	});
    //scroll spy
    $('.scrollspy').scrollSpy();
    //smoove transition
    $('.foo').smoove({opacity:'0', moveY: '90px'});
    
    $('.block').smoove({offset:'40%'});

    jQuery('.skillbar').each(function(){
    	jQuery(this).find('.skillbar-bar').animate({
    		width:jQuery(this).attr('data-percent')
    	},6000);
    });



});
