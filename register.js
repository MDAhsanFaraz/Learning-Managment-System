document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");
  const registerMessage = document.getElementById("registerMessage");

  registerButton.addEventListener("click", function () {
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const mobile = document.getElementById("regMobile").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear any previous messages
    registerMessage.innerHTML = "";

    // Basic validation
    if (
      username === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      registerMessage.innerHTML =
        '<span style="color: red;">All fields are required.</span>';
    } else if (password !== confirmPassword) {
      registerMessage.innerHTML =
        '<span style="color: red;">Passwords do not match.</span>';
    } else if (!/^\d{10}$/.test(mobile)) {
      registerMessage.innerHTML =
        '<span style="color: red;">Mobile number must be exactly 10 digits.</span>';
    } else {
      // Redirect to login page if validation is successful
      setTimeout(() => {
        window.location.href = "login.html";
      }, 500); // Delay to allow message display
    }
  });
});
