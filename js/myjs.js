function pageAnimate(PageA,PageB,CALLBACK){//页面滑动
		if(PageB!=PageA){
		$(PageB).animate({top:'-500px'},'middle',function(){
			$(PageB).hide();
			$(PageB).animate({top:'1000px'});
		});
			$(PageA).show();
			$(PageA).animate({top:'130px'},'middle',CALLBACK);
		}
		
	}
function blockAnimate(BlockA,BlockB,CALLBACK){//页面滑动
		if(BlockA!=BlockB){
		$(BlockB).fadeOut(function(){$(BlockA).fadeIn(CALLBACK)});
		}
	}
function lineAnimate(Line,Width,Point,CALLBACK){
		if(Point!=null)
		$(Line).animate({width:Width},'fast',function(){
			$(Point).fadeIn('fast',CALLBACK);
		});
		else $(Line).animate({width:Width},'fast',CALLBACK);
		
	}	
function Pageanimate(i){$('.keywords').stop();$('.keywords').hide();$('.line').stop();$('.line').css({width:'0px'});$('.point').stop();$('.point').hide();
/*if(i=='1')$('#introBlock1').rotate3Di(90, 1000,{complete:function(){$('#introBlock1').hide();$('#introBlock2').show();$('#introBlock2').rotate3Di(180, 1000,{complete:function(){}});}});*/
if(i=='2')$('.keywords').fadeIn(2000);
if(i=='3')lineAnimate("#line1","145px","#point1",function(){lineAnimate("#line2","145px","#point2",function(){lineAnimate("#line3","145px","#point3",function(){lineAnimate("#line4","145px",null,function(){$('.market').fadeIn();});});});});
}	
function Pageanimate3(){}	
function Pageanimate4(){}	

$(document).ready(function(e) {
	$('#point2,#point4,#point7').darkTooltip({
		animation:'flipIn',
		size:'large',
		gravity:'north',
		theme:'dark',
		trigger:'click'
	});
	$('#point1,#point6,#point3,#point5,#point8').darkTooltip({
		animation:'flipIn',
		size:'large',
		gravity:'south',
		theme:'dark',
		trigger:'click'
	});
var pre=0;  
var page1_pre=1;
var page3_pre=1;
//$("#introBlock1 a").hover(function(){(this).addClass("up")},function(){});
$('#page4 ul').roundabout();
         $("#page1_p1").click(function(){if(page1_pre!=1)$('#page1 .pp').removeClass('on');$(this).addClass('on');blockAnimate("#introBlock1","#introBlock"+page1_pre);page1_pre=1;});
		 $("#page1_p2").click(function(){if(page1_pre!=2)$('#page1 .pp').removeClass('on');$(this).addClass('on');blockAnimate("#introBlock2","#introBlock"+page1_pre);page1_pre=2;});
		 
		 $("#page3_p3").click(function(){if(page3_pre!=3)$('#page3 .pp').removeClass('on');$(this).addClass('on');blockAnimate("#experBlock3","#experBlock"+page3_pre,function(){lineAnimate("#line8",'145px',"#point6",function(){lineAnimate("#line9",'145px',"#point7",function(){lineAnimate("#line10",'145px',"#point8",function(){lineAnimate("#line11",'145px',null,function(){$('.dmarket').fadeIn();});});});});page3_pre=3;})});
		 $("#page3_p2").click (function(){if(page3_pre!=2)$('#page3 .pp').removeClass('on');$(this).addClass('on');blockAnimate("#experBlock2","#experBlock"+page3_pre,function(){lineAnimate("#line5",'195px',"#point4",function(){lineAnimate("#line6",'195px',"#point5",function(){lineAnimate("#line7",'195px',null,function(){$('.rmarket').fadeIn();});});});});page3_pre=2;});
		 $("#page3_p1").click(function(){if(page3_pre!=1)$('#page3 .pp').removeClass('on');$(this).addClass('on');blockAnimate("#experBlock1","#experBlock"+page3_pre,function(){lineAnimate("#line1",'145px',"#point1",function(){lineAnimate("#line2",'145px',"#point2",function(){lineAnimate("#line3",'145px',"#point3",function(){lineAnimate("#line4",'145px',null,function(){$('.market').fadeIn();});});});});page3_pre=1;})});
	$("#block-nav img").click(
		function(){ $("#block-nav img").attr('src','images/icon2.png');$(this).attr('src','images/icon1.png'); var i=$("#block-nav img").index(this)+1; pageAnimate("#page"+i,"#page"+pre,function(){Pageanimate(i);});pre=i;}
		);
		 $("#block-nav img").rotate({
        bind: {
            mouseover: function(){
                $(this).rotate({
                    animateTo: 90
                });
            },
            mouseout: function(){
                $(this).rotate({
                    animateTo: 0
                });
            }
        }
    });
	
});
	// JavaScript Document