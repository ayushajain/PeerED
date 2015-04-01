
$(document).ready(function() {
	var myDataRef = new Firebase('https://luminous-fire-1623.firebaseio.com/');
	$("#submit").click(function() {
		var name = $(".name").val();
		var email = $(".email").val();
		var title = $(".essayTitle").val();
		var essay = $(".essayInput").val();
		$(this).hide();
		myDataRef.push({name: name, email: email, title : title, essay : essay});
	});
});
