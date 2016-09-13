//根据设备加载不同的样式  方法一
var setStyle = function(cssArr){
    var i= 0,len = cssArr.length;
    for(i;i<len;i++){
        document.write('<link href="'+cssArr[i]+'" type="text/css" rel=stylesheet>');
    }
};
//判断是否为移动端运行环境
if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
        //访问环境是 Android|webOS|iPhone|iPod|BlackBerry 则加载以下样式
        setStyle(['mobile/css/public/base.css','mobile/css/layout.css','mobile/css/home.css']);
    }
    else if(/iPad/i.test(navigator.userAgent)){
        //判断访问环境是 iPad 则加载以下样式
        setStyle(['css/public/base.css','css/layout.css','css/home.css']);
    }
    else{
        //判断访问环境是 其他移动设备 则加载以下样式
    }
}else{
    setStyle(['css/public/base.css','css/layout.css','css/home.css']);
}


//方法二
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    document.writeln("您的浏览设备为：");
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        document.writeln("phone");
    } else {
        document.writeln("pc");
    }
}
 



//js判断手机移动设备是Android平台还是ios平台
if (/android/i.test(navigator.userAgent)){
    // todo : android
}
 
if (/ipad|iphone|mac/i.test(navigator.userAgent)){
    // todo : ios
}


