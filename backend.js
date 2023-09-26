const scriptURL = 'https://script.google.com/macros/s/AKfycbyhWNtGIixGxcHRlHWqrwy7lsp-DPNSx4EZVW7gUBPcsFw6PfyvE9pBvnSa4fIIlbIV/exec';

const form = document.forms['contact-form'];

// Function to create and display the customizable alert box
function showAlert(message, isSuccess) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');

    if (isSuccess) {
        alertBox.classList.add('alert-success');
    } else {
        alertBox.classList.add('alert-error');
    }

    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        document.body.removeChild(alertBox);
        if (isSuccess) {
            window.location.reload();
        }
    }, 3000); // Remove the alert after 3 seconds (adjust as needed)
}

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                // Customize the success message here
                showAlert("Your form is submitted successfully  ", true);
            } else {
                // Customize the error message here
                showAlert("Custom Error Message: Something went wrong.", false);
            }
        })
        .catch(error => {
            // Customize the error message here
            console.error('Custom Error Message:', error.message);
            showAlert("Custom Error Message: Something went wrong.", false);
        });
});