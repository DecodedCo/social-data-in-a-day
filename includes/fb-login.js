// FACEBOOK LOGIN SCRIPT -> https://developers.facebook.com/docs/howtos/login/getting-started/

	// Additional JS functions here
	window.fbAsyncInit = function() {
	    FB.init({
		    appId      : '432120793529647', // App ID
		    channelUrl : 'channel.html', // Channel File
		    status     : true, // check login status
		    cookie     : true, // enable cookies to allow the server to access the session
		    xfbml      : true  // parse XFBML
	    });

    // Additional init code here
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
			    // connected
			    $('#facebook-button').hide();
			    $('#facebook-logout').show();
			    appBehaviour();
			} else if (response.status === 'not_authorized') {
			 	// not_authorized
				$('#facebook-button').show();
				$('#facebook-logout').hide();
			} else {
				// not_logged_in
				$('#facebook-button').show();
				$('#facebook-logout').hide();
			}
		});


		$('#facebook-button').click(function(){
	 		FB.login(function(response) {
		        if (response.authResponse) {
		            // connected
		            $('#facebook-button').hide();
		            $('#facebook-logout').show();
		            appBehaviour();
		        }
		    });   
	 	});

	 	$('#facebook-logout').click(function(){
	 		FB.logout(function(response) {
		        location.reload();
		    });
	 	})


	 	function appBehaviour() {
		    console.log('Welcome!  Fetching your information.... ');
		    FB.api('/me', function(response) {
		        console.log('Good to see you, ' + response.name + '.');
		    });
		}
 	};


// Load the SDK Asynchronously
(function(d){
var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));
