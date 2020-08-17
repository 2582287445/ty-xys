$(function(){
	$(window).scroll(function(e){
		var scrtop = $(document).scrollTop()
		//console.log(scrtop)
		if(scrtop<340){
			
			$('.backtop').fadeOut()
		}
		
		if(scrtop>340){
			$('.backtop').fadeIn()
		}
		if($(window).width()>576){
			if(scrtop>100){
				
				$('.textlist>li').css('margin-left','1000px')
				$('.textlist>li').eq(0).animate({'margin-left':'0'},800)
				$('.textlist>li').eq(1).animate({'margin-left':'0'},1000)
				$('.textlist>li').eq(2).animate({'margin-left':'0'},1200)
				$('.textlist>li').eq(3).animate({'margin-left':'0'},1400)
			}
		}else{
		
			if(scrtop>20){
				$('.textlist>li').eq(0).siblings().css('margin-left','1000px')
				$('.textlist>li').eq(1).animate({'margin-left':'0'},1000)
				
				
				
			}
			if(scrtop>400){
				$('.textlist>li').eq(2).animate({'margin-left':'0'},1000)
			}
			
			if(scrtop>800){
				$('.textlist>li').eq(3).animate({'margin-left':'0'},1000)
			}
		}
		
	})
	console.log()
	$('.backtop').click(function(){
		 $('html,body').animate({scrollTop:0},800)
	})
	
	
	$('#name').blur(function(){
		if($(this).val()==''){
			$(this).css('border-color','#e4393c').attr('placeholder','姓名不能为空')
		}else{
			$(this).css('border-color','#ced4da')
		}
		
	})
	$('#tel').blur(function(){
		if($(this).val()==''){
			$(this).css('border-color','#e4393c').attr('placeholder','电话不能为空')
		}else{
			var res = /^1{3,5,7,8}\d$/;
			var telflag = res.test($(this).val())
			if(telflag){
				$(this).css('border-color','#ced4da')
			}else{
				$(this).css('border-color','#e4393c').attr('placeholder','请输入正确的电话')
			}
			
		}
	})
	$('#content').blur(function(){
		if($(this).val()==''){
			$(this).css('border-color','#e4393c').attr('placeholder','内容不能为空')
		}else{
			$(this).css('border-color','#ced4da')
		}
	})
	
	
	
	
})


