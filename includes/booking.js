var bookingData = {};

$.ajaxSetup({ cache:false });

// Declare loadBooking function
function loadBooking() {
	
	// Use JQuery's AJAX function to get data from the JSON file    
	$.getJSON('data.json', function(data) {

		// If file not empty then..
		if (data != null) {
			
			// Save the contents as a JS object
			bookingData = data;

			// Go through each piece of data in the object...
			$.each(bookingData, function(key, val) {

				// And add the profile image of each person to the relevant Div
				$('div#' + key + ' a').html('<img src="https://graph.facebook.com/' + val + '/picture">');
			});

		} 
	});
}

function makeBooking(){
	// Assign booking based on ID of <div> clicked
	var booking = this.id;

	// Re-form data - edit the relevant element in the object
	bookingData[booking] = userId;
	console.log(bookingData);
	// Submit new data object
	$.post('includes/json.php', bookingData, function() {
		loadBooking();
	});

	return false;

}