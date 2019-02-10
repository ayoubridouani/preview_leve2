$(function(){
	'use strict';
	var content1 = $('.content1'),
        content1_1 = $('.content1_1'),
        content1__2 = $('.content1 .content1__2'),
        content1__2__1=$('.content1 .content1__2 .bxslider .content1__2__1');
        

    	content1.height($(window).height());

	    content1_1.height($(window).height());

	    content1__2.css(
	    	"margin-top",($(window).height()/2)-50 +"px"
	    );

	    content1__2__1.css(
	    	"margin-left",($(window).width()/2)-250 +"px"
	    );
    
    $(window).resize(function () {
		content1.height($(window).height());
        content1_1.height($(window).height());
        content1__2.css("margin-top",($(window).height()/2)-50 +"px");
		content1__2__1.css("margin-left",($(window).width()/2)-250 +"px");

    });

    $(".content1 .content1_1 .content1__1 ul li").hover(function(){
    	$(this).addClass("color").siblings().removeClass("color");
    });
    $(".content1 .content1_1 .content1__1 ul li").mouseleave(function(){
    	$(this).removeClass("color");
    });

    $('.bxslider').bxSlider({
	  	pager:false
	});
	$(".content4 button:nth-of-type(1)").on("click",function(){
		$(".content4_1 *").show(500);
		$(this).css({"background-color":"#1ABC9C"});
		$(this).siblings().css({"background-color":"#fff"});
	});
	$(".content4 button:nth-of-type(2)").on("click",function(){
		$(".content4_1 img:nth-of-type(2),.content4_1 img:nth-of-type(3),.content4_1 img:nth-of-type(5),.content4_1 img:nth-of-type(6)").hide(500);
		$(".content4_1 img:nth-of-type(1),.content4_1 img:nth-of-type(4)").show(500);
		$(this).css({"background-color":"#1ABC9C"});
		$(this).siblings().css({"background-color":"#fff"});
	});
	$(".content4 button:nth-of-type(3)").on("click",function(){
		$(".content4_1 img:nth-of-type(1),.content4_1 img:nth-of-type(4),.content4_1 img:nth-of-type(5),.content4_1 img:nth-of-type(6)").hide(500);
		$(".content4_1 img:nth-of-type(3),.content4_1 img:nth-of-type(2)").show(500);
		$(this).css({"background-color":"#1ABC9C"});
		$(this).siblings().css({"background-color":"#fff"});
	});
	$(".content4 button:nth-of-type(4)").on("click",function(){
		$(".content4_1 img:nth-of-type(1),.content4_1 img:nth-of-type(2),.content4_1 img:nth-of-type(3),.content4_1 img:nth-of-type(4)").hide(500);
		$(".content4_1 img:nth-of-type(5),.content4_1 img:nth-of-type(6)").show(500);
		$(this).css({"background-color":"#1ABC9C"});
		$(this).siblings().css({"background-color":"#fff"});
	});
	$('html').niceScroll();
	$(".char").click(function(){
		$('html ,body').animate({
			scrollTop:$("#seri").offset().top -50 +"px"
		});
	});
	$(".chbr").click(function(){
		$('html ,body').animate({
			scrollTop:$("#serii").offset().top -50 +"px"
		});
	});
	$(".chcr").click(function(){
		$('html ,body').animate({
			scrollTop:$("#seriii").offset().top -50 +"px"
		});
	});
});