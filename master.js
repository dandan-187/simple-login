// For future functionality, like form submission or validation.
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for now
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Logged in successfully!');
    } else {
        alert('Please enter both username and password');
    }
});
