/*根据classname获取元素*/
function getbyclassName(obj,cls){
	var elements=obj.getElementsByTagName("*");
	var result=[];
	
	for (var i=0; i<elements.length; i++) {
		if(elements[i].className==cls){
			result.push(elements[i]);
		}
	}
	return result;
}

/*removeclass*/
function removeclass(obj,cls){
	if(hasclass(obj,cls)){
		var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");
		obj.className=obj.className.replace(reg,"");
	}
}
/*addclass*/
function addclass(obj,cls){
	if(!hasclass(obj,cls)){
		obj.classname+=" "+cls;
	}
}
/*判断是否符合class*/
function hasclass(obj, cls){
	/*现有元素的classname是否符合class*/
	return obj.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));
}

window.onload=function(){
	window.onscroll=function(){
		/*js 获取滚动条的距离顶部的距离;先判断document.documentElement是否有这个*/
		var top=document.documentElement ? document.documentElement.scrollTop:document.body.scrollTop;
		
		/*获取右边menu下的a元素*/
		var menu=document.getElementById("menuRight").getElementsByTagName("a");
		
		/*获取左边的每一个item*/
		var items=document.getElementById("contentLeft").getElementsByClassName("item");
		
		var currentthis="";
		/*遍历content下的所有item*/
		for (var i=0; i<items.length; i++) {
			var _itemsthis=items[i];
			var _itemsthisTop=_itemsthis.offsetTop; /*获取左边每一个的offsettop*/
			if(top>_itemsthisTop-200){
				currentthis=_itemsthis.id;
				console.log(currentthis+'djfju');
			}else{
				break;
			}
		}
		
		if(currentthis){
			/*改正确的menu添加类*/
			for (var j=0; j<menu.length; j++) {
				var  _menu=menu[j];
				var _href=_menu.href.split("#"); /*拆分href的值*/
				
				if(_href[_href.length-1] !=currentthis){
					_menu.removeclass(_menu,"current");
				}else{
					_menu.addclass(_menu,"current");
				}
			}
		}
		
	}
}
