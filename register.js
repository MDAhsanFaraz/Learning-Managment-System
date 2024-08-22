document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");
  const registerMessage = document.getElementById("registerMessage");

  registerButton.addEventListener("click", function () {
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const mobile = document.getElementById("regMobile").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    registerMessage.innerHTML = "";

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
      setTimeout(() => {
        window.location.href = "login.html";
      }, 500);
    }
  });
});
