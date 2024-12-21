
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        Swal.fire({
            title: 'Login Successful!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = 'home.html'; 
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Incorrect username or password.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }
});
