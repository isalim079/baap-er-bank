// step 1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log("clicked Hoice")
    // step 2: get the email address inside the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password)

    // DANGER: Do not verify email password on the client side
    // step 4: verify email and password
    if(email === 'tkchai@gmail.com' && password === 'tklagbe'){
        // console.log('Valid user');
        window.location.href = 'bank.html';
    }
    else{
        alert('You typed wrong user or password');
    }
})