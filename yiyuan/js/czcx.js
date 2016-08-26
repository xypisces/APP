// JavaScript Document

var scrollDiv=document.getElementById("show1");
function marques(lh,speed,delay){    
		var intervalFunction;    
		var oHeight = 210; /** div的高度 **/  
		 
		var preTop = 0;   
		scrollDiv.scrollTop = 0;   
		//var p=false;   
		 
		function start(){    
			intervalFunction=setInterval(scrolling,speed);       
		};    
		
		function scrolling(){  
		    if( scrollDiv.scrollHeight-scrollDiv.offsetHeight<scrollDiv.scrollTop){   
				preTop = scrollDiv.scrollTop;   
				scrollDiv.scrollTop+=1;   
				if(preTop >= scrollDiv.scrollHeight || preTop==scrollDiv.scrollTop){   
					scrollDiv.scrollTop = 0;   
				}   
			}else{   
			  // clearInterval(intervalFunction);    清除定时器
			  // setTimeout(start,delay);    继续定时器
			}  
			 scrollDiv.scrollTop+=1; 
			 //mouse事件只有写在方法内才能保证over和out的scrollTop高度一致性
	         scrollDiv.onmouseover=function() {clearInterval(intervalFunction)}; 
	         scrollDiv.onmouseout=function() {intervalFunction=setInterval(scrolling,speed)};  
		};
		    
		setTimeout(start,delay);    
	};
	marques(20,80,500);    
    /**marquees(一次滚动高度,速度,停留时间);**/   
