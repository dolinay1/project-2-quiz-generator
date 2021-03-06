$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const usernameInput = $("input#username-input");
  const passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an username and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an username and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password,
    })
      .then(() => {
        $.get("/api/user_data").then(data => {
          if (data.adminUser === true) {
            window.location.replace("/adminDashboard");
            console.log(data.adminUser)
            // If there's an error, log the error
          }
          else {
            window.location.replace("/userDashboard");
            console.log(data.adminUser)
            // If there's an error, log the error
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Redirect the user to the signup page when clicking the "create account" button
  $("#signupBtn").on("click", function () {
    window.location.replace("/signup");
  });
});

