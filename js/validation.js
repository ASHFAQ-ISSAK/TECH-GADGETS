document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate inputs
        let isValid = true;

        // Validate name
        const nameInput = document.getElementById('name');
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            isValid = false;
            setErrorFor(nameInput, 'Name cannot be blank');
        } else {
            setSuccessFor(nameInput);
        }

        // Validate email
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            isValid = false;
            setErrorFor(emailInput, 'Email cannot be blank');
        } else if (!isValidEmail(emailValue)) {
            isValid = false;
            setErrorFor(emailInput, 'Email is not valid');
        } else {
            setSuccessFor(emailInput);
        }

        // Validate message
        const messageInput = document.getElementById('message');
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            isValid = false;
            setErrorFor(messageInput, 'Message cannot be blank');
        } else {
            setSuccessFor(messageInput);
        }

        // If all inputs are valid, submit the form and store form data in an object
        if (isValid) {
            const formData = {
                name: nameValue,
                email: emailValue,
                message: messageValue
            };

            // Example of what to do with formData object
            console.log('Form Data:', formData);

            // Reset the form
            form.reset();

           
        }
    });

    function setErrorFor(input, message) {
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector('small');
    
        // Add error message and class
        small.innerText = message;
        formControl.className = 'form-control error';
    
        // Show an alert with the error message
        alert(message);
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement; // .form-control
        formControl.className = 'form-control success';
    }

    function isValidEmail(email) {
        // Basic email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

