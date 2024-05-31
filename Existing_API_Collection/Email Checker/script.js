function checkEmail() {
    const email = document.getElementById('email').value;
    fetch(`https://disposable.debounce.io/?email=${email}`)
        .then(response => response.json())
        .then(data => {
            if (data.disposable === "true") {
                alert("Disposable email");
            } else {
                alert("Email is genuine");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred while checking the email.");
        });
}