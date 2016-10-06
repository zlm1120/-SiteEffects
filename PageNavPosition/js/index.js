$(document).ready(function(){
	/*滚动条发生滚动*/
	$(window).scroll(function(){
		var top=$(document).scrollTop(); /*获取滚动条距离顶部的距离*/
		var menu=$(".menu");
		var items=$(".content").find('.item');
		var currentID=""; 
		
		items.each(function(){
			var itemsthis=$(this);
			var itemsTop=itemsthis.offset().top; /*获取每一个item相对于顶部的距离*/
			
			if(top>itemsTop-200){
				currentID="#"+itemsthis.attr('id');
			}else{
				return false;
			}
		});
		/*给相应的楼层添加类*/
		var curretnlink=menu.find(".current");
		if(currentID && curretnlink.attr("href") !=currentID){
			curretnlink.removeClass("current");
			menu.find("[href="+currentID+"]").addClass("current");
		}
	});
	
});
