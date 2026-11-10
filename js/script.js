
// Get the button from our HTML
const welcomeButton = document.getElementById("welcomeBtn");

// Get the message paragraph from our HTML
const message = document.getElementById("message");

// Listen for a button click
welcomeButton.addEventListener("click", function() {

    // Display a message when the button is clicked
    message.textContent = "Thanks for visiting my portfolio!";

});
