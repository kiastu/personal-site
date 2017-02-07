/** Handles the logic for displaying different pages. . **/
var partialsPath = "/partials";
function main() {

	// Fade in elements
	// Fade in the text after the header animation has completed.
	 $("#about_header").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	 	$("#about_text").removeClass("hidden");
	 });

	 $("#about_header").removeClass("hidden");
 }

$(document).ready(main);