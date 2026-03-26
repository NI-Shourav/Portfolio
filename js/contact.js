// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');

    if (submitButton) {
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('body').value.trim();

            // Validate form
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Disable submit button to prevent double submission
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Prepare template parameters
            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Send email using EmailJS
            emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
                .then(function (response) {
                    alert('Message sent successfully!');
                    document.getElementById('myForm').reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }, function (error) {
                    alert('Failed to send message. Please try again later.');
                    console.error('EmailJS error:', error);
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                });
        });
    }
});
