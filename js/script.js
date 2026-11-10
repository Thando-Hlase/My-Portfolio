
// Get the button from our HTML
const welcomeButton = document.getElementById("welcomeBtn");

// Get the message paragraph from our HTML
const message = document.getElementById("message");

// Listen for a button click
welcomeButton.addEventListener("click", function() {

    // Display a message when the button is clicked
    message.textContent = "Thanks for visiting my portfolio!";

});


// Get the mobile menu button
const menuToggle = document.getElementById("menuToggle");

// Get the navigation links
const navLinks = document.querySelector(".nav-links");

// Listen for clicks on the menu button
menuToggle.addEventListener("click", function() {

    // Show or hide the navigation menu
    navLinks.classList.toggle("active");

    // Update accessibility information
    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the menu icon
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

