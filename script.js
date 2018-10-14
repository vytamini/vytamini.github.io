// jQuery (with help of third party resources)

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The number 800 is milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });
});


// Function for the "back to top" button
window.onscroll = function(){scrollFunction()}; // Ensures the function only runs if the page is being scorlled

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { 
    document.getElementById("topBtn").style.display = "block"; // If the user scrolls down more than 100px, button appears
  } else {
    document.getElementById("topBtn").style.display = "none";  // If the user is on top of the page, the button is not visible
  } 
} //End if