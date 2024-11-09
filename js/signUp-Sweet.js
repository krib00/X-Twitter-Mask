document.getElementById('nextBtn').addEventListener('click', function () {
    swal("Congrats!", "You have successfully created an account!", "success").then(() => {
        nextButton.disabled = true;
        closeSignup();
    });
});

function successLogin() {
    swal("Congrats!", "You have successfully logged into your account!", "success").then(() => {
        nextBtnLogin.disabled = true; 
        closeLogin();  
    });
}