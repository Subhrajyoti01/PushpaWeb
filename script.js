// Get the menu toggle button, the menu, and the overlay
const menuToggle = document.getElementById('menuToggle');
const menu1 = document.getElementById('menu1');
const overlay = document.getElementById('overlay');

// Add click event listener to the toggle button
menuToggle.addEventListener('click', function() {
    // Toggle the display of the menu and the overlay
    if (menu1.style.display === "none" || menu1.style.display === "") {
        menu1.style.display = "block";
        overlay.style.display = "block"; // Show overlay
    } else {
        menu1.style.display = "none";
        overlay.style.display = "none"; // Hide overlay
    }
});

// Close the menu when the overlay is clicked
overlay.addEventListener('click', function() {
    menu1.style.display = "none";
    overlay.style.display = "none";
});
