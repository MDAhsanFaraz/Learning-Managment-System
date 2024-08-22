document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginMessage = document.getElementById("loginMessage");

  form.addEventListener("submit", function (event) {
    loginMessage.innerHTML = "";

    if (username.value.trim() === "" || password.value.trim() === "") {
      loginMessage.innerHTML =
        '<span style="color: red;">Both fields are required.</span>';
    } else if (password.value.length < 6) {
      loginMessage.innerHTML =
        '<span style="color: red;">Password must be at least 6 characters long.</span>';
    }
  });
});
