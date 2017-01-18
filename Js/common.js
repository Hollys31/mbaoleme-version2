// JavaScript Documentvar startPosition, endPosition, deltaX, deltaY, moveLength;  

//公共  导航 
$('.mm-slider').click(function(){
	$('.mm-slider').hide();
	$('nav').removeClass('anima');
	$('nav').addClass('left-Anima');
	})
$('.slider-icon').click(function(){
	$('.mm-slider').show();
	$('nav').addClass('anima');
	$('nav').removeClass('left-Anima');
	})
$('.ui-icon-close').click(function(){
	$('.mm-slider').hide();
	 $('nav').removeClass('anima');
	 $('nav').addClass('left-Anima');
	})
//首页
function indexAnima(){
	$('.home-panel').each(function(index, element) {
		var i=index,
			height=$(window).height(),
			scrollTop=$(window).scrollTop(),
			top=$(this).offset().top;
		if(top-scrollTop<=height){
			$(this).addClass('anima');
			}
	});
}
indexAnima();
//热门专题
function hotAnima(){
	$('.hotTopic li').each(function(index, element) {
    var h=$(window).height(),
	    scrollTop=$(window).scrollTop(),
	    i=$(this).index();
	var top= $(this).offset().top;
	if(top-scrollTop<=h){
		$(this).addClass('anima');
		}
	});
}
hotAnima();
$(window).scroll(function(){
	indexAnima();
    //热门专题
    hotAnima();
})

//产品
var chick=0;
$('.add-contrast').click(function(){
	var html=$(this).html();
	var title=$(this).attr('title');
    var cp_add1=$('.compair-pro1 .cp_add').html();
	var cp_add2=$('.compair-pro2  .cp_add').html();
	if(chick<2 && html=="添加对比+"){
		chick++;
		$(this).html("添加对比-");
		if(cp_add1=="您还可以继续<br>添加"&&html=="添加对比+"){
			$('.compair-pro1 .cp_add').html(title).attr('id','cpdb_title_'+this.id);
			$("<span class='del'>删除</span>").insertAfter('.compair-pro1 .cp_add').attr('id','cpdb_sc_'+this.id);
			$(".cpdb_1").val(this.id).attr("id","cpdb_"+this.id);
			}else if(cp_add2=="您还可以继续<br>添加"&&html=="添加对比+"){
			$('.compair-pro2 .cp_add').html(title).attr('id','cpdb_title_'+this.id);
			$("<span class='del'>删除</span>").insertAfter('.compair-pro2 .cp_add').attr('id','cpdb_sc_'+this.id);
			$(".cpdb_2").val(this.id).attr("id","cpdb_"+this.id);
			}	
		}else if(html=="添加对比-"){
			chick--;
			$(this).html("添加对比+");
			$("#cpdb_sc_"+this.id).remove();
			$("#cpdb_title_"+this.id).html("您还可以继续<br>添加");
			}else if(html=="添加对比+"){
				alert("最多2款产品进行对比。");
				}	
	$('.cp_db_num').html(chick);
	})
function clearAll(){
	$('.del').remove();
	$('.cp_add').attr('id',"");
	chick=0;
	$('.cp_db_num').html(chick);
	$('.cp_add').html("您还可以继续<br>添加");
	$('.add-contrast').html("添加对比+");
}

//资讯 分享	
$('.ui-icon-share').bind('tap',function(){
	$('.share-alert-block').addClass('animate');
	})
$('.share-alert-block span').bind('tap',function(){
	$('.share-alert-block').removeClass('animate');
	})
//产品
$(function(){
	$('#insur-type,.ui-icon-next').bind('tap',function(){
		$('.type-selec').show();
		$('.mm-slider').show();
		})
$('#insur-obj,.ui-icon-next').bind('tap',function(){
		$('.obj-selec').show();
		$('.mm-slider').show();
		})
$('.selecAll-block .ui-icon-close,.selecAll-block li,.mm-slider').bind('tap',function(){
		$('.selecAll-block').hide();
		$('.mm-slider').hide();
		})
$('.compair-wrap .ui-icon-close').bind('tap',function(){
	$('.compair-wrap').hide();
	})
$('.add-contrast').bind('tap',function(){
	$('.compair-wrap').show();
	})
$('.type-selec li').bind('tap',function(){
	var vals=$(this).html();
	$('#insur-type').html(vals);
	})
$('.obj-selec li').bind('tap',function(){
	var vals=$(this).html();
	$('#insur-obj').html(vals);
	})
$('.cpdb-icon-sub .a').click(function(){
	$('.mm-slider').show();
	$('.alert-wrap').show();
	})
$('.ui-icon-close').click(function(){
	$('.mm-slider').hide();
	$('.alert-wrap').hide();
	})
$('.plan-info>span').bind('touchend',function(){
	$(this).addClass('active').siblings('span').removeClass('active');
	})

})
