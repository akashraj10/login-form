document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can add your own validation here
    if (username === 'akash07' && password === '123456') {
        // Redirect or do something on successful login
        alert('Login successful!');
        // For demonstration purposes, I'm just logging in the console
        console.log('Username:', username);
        console.log('Password:', password);
    } else {
        // Show error message
        var errorMessage = document.getElementById('error-msg');
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
