document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Perform form validation and submission here
        // You can use JavaScript to send the form data to your server or API

        // Example: Display a confirmation message
        alert("Thank you for contacting us! We will get back to you soon.");
        contactForm.reset();
    });
});
