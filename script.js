document.getElementById("emailCaptureForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailInputField = document.getElementById("emailInputField");
    var messageDisplay = document.getElementById("messageDisplay");

    if (validateEmail(emailInputField.value)) {
        messageDisplay.textContent = "Email is Valid! Thanks for submitting.";
        messageDisplay.style.color = "green";
        emailInputField.value = "";
    } else {
        messageDisplay.textContent = "Please enter a valid email address.";
        messageDisplay.style.color = "red";
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
