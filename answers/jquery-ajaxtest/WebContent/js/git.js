$(document).ready(function() {
	
	$.ajax({
	
		url: "https://api.github.com/users"
		
	}).then(function(data) {
		
		console.log(data);
		var table = $("#usersTable");
		var contents = "";
		
		$.each(data, function(idx) {
			var url=data[idx].followers_url;
			var linkurl=url.toString();
			var click="<a href='"+linkurl+"'>"+data[idx].login+"</a>";	
			var followNum=data[idx].followers_url.length;
			contents +=  "<tr>";
			contents += "<td>" + click + "</td>";
			contents += "</tr>";
			
			//contents += "<td> <img src='" + data[idx].avatar_url + "' width=50 height=50 /></td>";
		})

		console.log(contents);
		table.append(contents);
	
		
	});
	
});