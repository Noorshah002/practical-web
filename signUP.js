
const usernameRegex = /^[a-zA-Z0-9]{3,}$/; 
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 



document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    // Username Validation
    const username = document.getElementById('username').value;
    if (!usernameRegex.test(username)) {
        document.getElementById('username').classList.add('is-invalid');
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('username').classList.remove('is-invalid');
        document.getElementById('usernameError').style.display = 'none';
    }

    // Email Validation
    const email = document.getElementById('email').value;
    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('is-invalid');
        document.getElementById('emailError').style.display = 'none';
    }

    // Password Validation
    const password = document.getElementById('password').value;
    if (!passwordRegex.test(password)) {
        document.getElementById('password').classList.add('is-invalid');
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('password').classList.remove('is-invalid');
        document.getElementById('passwordError').style.display = 'none';
    }

 
    if (isValid) {
       
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

       
        Swal.fire({
            title: 'Sign-Up Successful!',
            text: 'You can now login.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'login.html'; 
            }
        });
    }
});

