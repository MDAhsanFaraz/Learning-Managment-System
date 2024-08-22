document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("courseForm");
  const courseMessage = document.getElementById("courseMessage");

  form.addEventListener("submit", function (event) {
    const selectedCourses = document.querySelectorAll(
      'input[name="courses"]:checked'
    );

    // Clear any previous messages
    courseMessage.innerHTML = "";

    // Validation
    if (selectedCourses.length < 2) {
      courseMessage.innerHTML =
        '<span style="color: red;">Please select at least two courses.</span>';
      event.preventDefault(); // Prevent form submission
    }
  });
});
