$(document).ready(function() {
	$("#login-btn").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();

		if (username === "user1" && password === "password1") {
			window.location.href = "user1.html";
			$("#login").addClass("hidden");
			$("#user1").removeClass("hidden");
			$("#user1-info").html("Smart Car Information for User 1");
		} else if (username === "user2" && password === "password2") {
			window.location.href = "user2.html";
			$("#login").addClass("hidden");
			$("#user2").removeClass("hidden");
			$("#user2-info").html("Smart Car Information for User 2");
		} else {
			$("#login-error").removeClass("hidden");
		}
	});

	$(".logout-btn-1").click(function() {
		$("#user1").addClass("hidden");
		$("#username, #password").val("");
		$("#login-error").addClass("hidden");
		$("#login").removeClass("hidden");
	});

	$(".logout-btn-2").click(function() {
		$("#user2").addClass("hidden");
		$("#username, #password").val("");
		$("#login-error").addClass("hidden");
		$("#login").removeClass("hidden");
	});

});


