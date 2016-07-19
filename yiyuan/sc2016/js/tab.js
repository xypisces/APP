function tab6(n){
	var obj=document.getElementById("nav_6").getElementsByTagName("li")
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