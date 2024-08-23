document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginMessage = document.getElementById("loginMessage");

  form.addEventListener("submit", function (event) {
    loginMessage.innerHTML = "";

    if (username.value === "" || password.value === "") {
      loginMessage.innerHTML =
        '<span style="color: red;">Both fields are required.</span>';
      event.preventDefault();
    } else if (password.value.length < 6) {
      loginMessage.innerHTML =
        '<span style="color: red;">Password must be at least 6 characters long.</span>';
      event.preventDefault();
    } else {
      window.location.href = "dashboard.html";
      event.preventDefault();
    }
  });
});
