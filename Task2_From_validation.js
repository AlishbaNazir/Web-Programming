document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation for username and password
        if (username.trim() === '') {
            alert('Username cannot be empty');
            return;
        }

        if (password.trim() === '') {
            alert('Password cannot be empty');
            return;
        }

        // Perform sign in logic here
        console.log('Signing in...');
    });

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const newPassword = document.getElementById('newPassword').value;

        // Basic validation for full name, email, and password
        if (fullName.trim() === '') {
            alert('Full Name cannot be empty');
            return;
        }

        if (email.trim() === '') {
            alert('Email cannot be empty');
            return;
        }

        if (!validateEmail(email)) {
            alert('Invalid email format');
            return;
        }

        if (newPassword.trim() === '') {
            alert('Password cannot be empty');
            return;
        }

        // Additional validation logic can be added for other fields

        // Perform sign up logic here
        console.log('Signing up...');
    });

    // Function to validate email using regex
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
