const PASS = "SmartServTest@123";
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    // Validate email format
    var emailInput = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      document.getElementById("email-error").textContent =
        "Please enter a valid email address.";
      return;
    }

    // Validate password format
    var passwordInput = document.getElementById("password").value;
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/;
    if (!passwordRegex.test(passwordInput)) {
      document.getElementById("password-error").textContent =
        "Password must contain at least one uppercase letter, one number, and be at least 8 characters long.";
      return;
    }
    if (passwordInput == PASS) {
      window.location.href = "dashboard.html";
    } else {
      alert("Wrong Password");
    }
  });
