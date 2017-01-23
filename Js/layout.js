// JavaScript Documentvar startPosition, endPosition, deltaX, deltaY, moveLength;  

//公共  导航 
function showNav(){
	$('.mm-slider1').addClass('anima');
	$('.mm-slider1').removeClass('left-Anima');
	}
function HideNav(){
	 $('.mm-slider1').removeClass('anima');
	 $('.mm-slider1').addClass('left-Anima');
	}
$('.slider-icon').click(function(){
	showNav();
	})
$('.nav-left,.ui-icon-close').click(function(){
	HideNav();
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
$('#insur-type').bind('touchend',function(){
		$('.pro-alert-wrap').show();
		$('.type-selec').show();
		$('.obj-selec').hide();
		})
$('.goods-sort-type .ui-icon-next').eq(0).bind('touchend',function(){
		$('.pro-alert-wrap').show();
		$('.type-selec').show();
		$('.obj-selec').hide();
	})

$('#insur-obj').bind('touchend',function(){
		$('.pro-alert-wrap').show();
		$('.obj-selec').show();
		$('.type-selec').hide();
		})
$('.goods-sort-type .ui-icon-next').eq(1).bind('touchend',function(){
		$('.pro-alert-wrap').show();
		$('.obj-selec').show();
		$('.type-selec').hide();
	})

$('.ui-icon-close').bind('touchend',function(){
		$('.pro-alert-wrap').hide();
		$('.obj-selec').hide();
		$('.type-selec').hide();
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
	$('.compare-alert').show();
	})
$('.compare-alert .ui-icon-close').click(function(){
	$('.compare-alert').hide();
	})

$('.plan-info>span').bind('touchend',function(){
	$(this).addClass('active').siblings('span').removeClass('active');
	})
//保费测算
$('#insure-sub').bind('touchend',function(){
	var name=$("input[name='iname']").val(),
		phone=$("input[name='iphone']").val(),
		regName=/^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/,
		regTel=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if(name){
		if(!regName.test(name)){
			alert("姓名格式错误！");
			$("input[name='iname']").focus();
			return false;
			}
		}
	if(phone){
		if(!regTel.test(phone)){
			alert("电话号码格式错误！");
			$("input[name='iphone']").focus();
			return false;
			}
		}
	})
//渠道专区
var character=$('.character');
	character.unbind('click').click(function(){
		var i=$(this).index();
		if(i==0){
			$('.LeaLis-hidd').show();
			console.log($(this).find('input').val());
			}
		if(i==1){
			$('.LeaLis-hidd').hide();
			console.log($(this).find('input').val());
			}
		})
	$('#form-leas').click(function(){
			var uname=$('#uname').val();
			var tel=$('#tel').val();
			var email=$('#email').val(); 
			var company=$('#company').val();
			var job=$('#job').val();
			var charac=$("input[name='character']:checked").val();
			var reg1=/^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;//姓名
			var reg2=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;//手机
			var reg3=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;//邮箱
			if(uname.length==0||tel.length==0||email.length==0){
				$('.err').html("请将信息补充完整！");
				return false;
				}
			if(charac==0){
				if(company.length==0||job.length==0){
					$('.err').html("请将信息补充完整！");
					return false;
					}
				}
			if(!reg1.test(uname)){
				$('.err').html("姓名填写格式错误！");
				$('#uname').focus();
				return false;
				}
			if(!reg2.test(tel)){
				$('.err').html("电话号码格式错误！");
				$('#tel').focus();
				return false;
				}
			if(tel.length!=11){
				$('.err').html("电话号码格式错误！");
				$('#tel').focus();
				return false;
				}
			if(!reg3.test(email)){
				$('.err').html("邮箱地址格式错误！");
				$('#email').focus();
				return false;
				}	
		})
})
