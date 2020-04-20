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
	var lat=document.getElementById("lat").value;
	var lon=document.getElementById("lon").value;
	var AJAX = initAJAX();
	var uri="https://api.openweathermap.org/data/2.5/find?lat="+lat+"&lon="+lon+"&cnt=10&appid=";
	var appid="6dd02007701b49ff962bed38af51032a"
	
	AJAX.open("GET",uri+appid,true)
	AJAX.send();
	AJAX.onreadystatechange=processResponse;
	function processResponse(){
		if(AJAX.readyState==4 && AJAX.status==200){
			console.log(AJAX.responseText);
			//var divTag=document.getElementById("content");
			//divTag.innerHTML=AJAX.responseTest
			var divTag=AJAX.responseText;
			var result=eval("("+divTag+")");
			 //temp_min=result.main.temp_min;
			 //temp_max=result.main.temp.max;
			// cityName=result.list.name;
			
			//document.write(temp_min);
		 var i;
		 var text="";
			for(i=0;i<10;i++){
			text+=result.list[i].name+"<br>" ;
		 }
			document.getElementById("result").innerHTML = text;
		
		}
	}
}





