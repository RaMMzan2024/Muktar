document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Simulate successful login and store login status
            localStorage.setItem('loggedIn', 'true');
            // Redirect to the main page
            window.location.href = 'index.html';
        } else {
            alert('Пожалуйста, введите имя пользователя и пароль.');
        }
    });
});

function toggleVisibility(fieldId) {
    const inputField = document.getElementById(fieldId);
    const icon = document.getElementById(fieldId + '-icon');

    if (inputField.type === 'password') {
        inputField.type = 'text';
        icon.src = 'img/close-eye-login.png';
    } else {
        inputField.type = 'password';
        icon.src = 'img/open-eye-login.png';
    }
}
