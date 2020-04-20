function initAJAX(){
	var xmlHttpRequest;
	 if (window.XMLHttpRequest) {
		    // code for modern browsers
		 xmlHttpRequest = new XMLHttpRequest();
		 } else {
		    // code for old IE browsers
			 xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
	 
	 return xmlHttpRequest;
}


function sayHello(){
	console.log("Testing!");
	var zipCode=document.getElementById("zipcode").value;
	var AJAX = initAJAX();
	var uri="https://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",";
	var appid="us&appid=6dd02007701b49ff962bed38af51032a"
	
	AJAX.open("GET",uri+appid,true)
	AJAX.send();
	AJAX.onreadystatechange=processResponse;
	function processResponse(){
		if(AJAX.readyState==4 && AJAX.status==200){
			console.log(AJAX.responseText);
			var divTag=AJAX.responseText;
			var result=eval("("+divTag+")");
			 temp_min=result.main.temp_min;
			 temp_max=result.main.temp_max;
			 cityName=result.name;
			x="city: "+cityName+"<br>"+"temp_min: "+temp_min+"<br>"+"temp_max: "+temp_max+"<br>";
			document.getElementById("result").innerHTML = x;

			//document.write(temp_min);
			
		
		}
	}
}





