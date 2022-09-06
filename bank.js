document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    if((userEmail.value == 'sontan@baap.com') && (userPassword.value == 'secret')){
        window.location.href = 'banking.html';
    }
    userEmail.value = '';
});



