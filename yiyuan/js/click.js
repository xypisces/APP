
$(document).ready(function(){
	var aaa = location.search;
	var back = aaa.substring(7);
	$('.neike-ul li').each(function(i){
		if (i==back) {
			$('.neike-ul li').eq(i).addClass('neike-active');
		}
	});
	$('.neike-ul4 li').each(function(i){
		if (i==back) {
			$('.neike-ul4 li').eq(i).addClass('neike-active');
		}
	});

	var ccc = window.location.pathname ;
	if(ccc == "/m/about/" || ccc == "/m/tongzhiguanggao/"){
		console.log('11');
		 $('.neike-ul4 li').eq(0).removeClass('neike-active');
		}
});
