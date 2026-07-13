// ======================================
// Contact Form Validation
// ======================================

// Select the contact form
const contactForm = document.getElementById("contactForm");

// Run validation when the form is submitted
contactForm.addEventListener("submit", function(event) {

    // Prevent the form from submitting immediately
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Validate Email
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate Subject
    if (subject === "") {
        alert("Please enter the subject.");
        return;
    }

    // Validate Message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // Success message
    alert("Your message has been submitted successfully!");

    // Clear the form
    contactForm.reset();

});