// JavaScript Document
$(function(){
	//储蓄分红
	$('.ins-icon,.ins-inp').click(function(){
		$('.choice').toggle(); 
		})
	$('.choice li').click(function(){
		$('.choice').hide();
		var val=$(this).attr('data-value');
		$('.ins-inp').val(val);
		})
	$('.gender-item').click(function(){
		$(this).addClass('active');
		$(this).find('input').attr('checked',true);
		$(this).siblings('label').removeClass('active');
		$(this).siblings('label').find('input').attr('checked',false)
		})
	$('.tijiao').click(function(){
		var userName=$('#userName').val();
		var userTel=$('#userTel').val();
		var ins=$('#ins-inp').val();
		var reg= /^[\u4E00-\u9FA5]{2,4}$/;
		var reg1 = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
		if(userName.length==0){
			alert("姓名不能为空！");
			$('#userName').focus();
			return false;
			}
		if(!reg.test(userName)){
			alert("姓名格式有误！!!!!!");
			$('#userName').focus();
			return false;
			}
		if(userTel.length==0){
			alert("手机号不能为空！");
			$('#userTel').focus();
			return false;
			}
		if(!reg1.test(userTel)){
			alert("手机号码格式有误！");
			$('#userTel').focus();
			return false;
			}
		if(ins.length==0){
			alert("请选择意向险种！");
			$('#ins-inp').focus();
			return false;
			}
		})
	//其他专题  3
	$('.measure,.jsForm').click(function(){
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
	$('#zjSubmit').click(function(){
		var name=$(".zName").val(),
		age=$('.zAge').val(),
		zNum=$('.zNum').val(),
		phone=$(".zTel").val(),
		regName=/^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/,
		regTel=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
		regNum=/^\+?[1-9][0-9]*$/;//正整数
		if(name){
			if(!regName.test(name)){
				alert("姓名格式错误！");
				$(".zName").focus();
				return false;
				}
			}
		if(test){
			if(!regTel.test(phone)){
				alert("电话号码格式错误！");
				$('.zTel').focus();
				return false;
				}
			}
		if(age){
			if(!regNum.test(age)){
			alert("年龄格式有误！");
			$('.age').focus();
			return false;
			}
			}
		if(zNum){
			if(!regNum.test(zNum)){
			alert("预设保额格式有误！");
			$('.zNum').focus();
			return false;
			}
			}
	})
		
			
			
	})

