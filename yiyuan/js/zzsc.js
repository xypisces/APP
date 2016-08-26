$(function(){
    var nav = $(".nav");
    var init = $(".nav .m").eq(ind);
    var block = $(".nav .block");
    block.css({
        "left": init.position().left - 3
    });
    nav.hover(function() {},
    function() {
        block.stop().animate({
            "left": init.position().left - 3
        },
        100);
    });
    $(".nav").slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: ind,
        startFun: function(i, c, s, tit) {
            block.stop().animate({
                "left": tit.eq(i).position().left - 3
            },
            100);
        }
    });
});

var ind = 0;
//…Ë÷√
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//∑Á∏Ò
});





function tab1(n){
	var obj=document.getElementById("nav_1").getElementsByTagName("li")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
function tab2(n){
	var obj=document.getElementById("nav_2").getElementsByTagName("li")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
	function tab3(n){
	var obj=document.getElementById("nav_3").getElementsByTagName("li")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
function tab4(n){
	var obj=document.getElementById("nav_4").getElementsByTagName("li")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hover"
			document.getElementById(obj[i].id+"text").style.display="block";
			scrollDiv=document.getElementById("show" + (i+1));
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}
	
	function tab5(n){
	var obj=document.getElementById("nav_5").getElementsByTagName("li")
	for(var i=0;i<obj.length;i++){
		if(i==n){
			obj[i].className="hover"
			document.getElementById(obj[i].id+"text").style.display="block";
			}
		else{
			obj[i].className=""
		document.getElementById(obj[i].id+"text").style.display="none";
		}
	    }

	}

	$(document).ready(function(){
    $('.iro4bg').css('margin-top',$('.iro4bg').css('width')*0.05);
})




