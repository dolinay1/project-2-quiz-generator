$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");

  // const adminUserInput = $("input#adminUser-input");
  const usernameInput = $("input#username-input");
  const passwordInput = $("input#password-input");
  const firstNameInput = $("input#firstName-input");
  const lastNameInput = $("input#lastName-input");
  const middleInitialInput = $("input#middleInitial-input");
  const cityInput = $("#city-input");
  const stateInput = $("#state-input");

  // When the signup button is clicked, we validate the username and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();

    const userData = {
      adminID: parseInt($("#adminID-input option:selected").val()) || 0,
      adminUser: parseInt($("#adminUser-input option:selected").val()),
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      middleInitial: middleInitialInput.val().trim(),
      city: cityInput.val(),
      state: $("#state-input option:selected").text()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an username and password, run the signUpUser function
    signUpUser(userData);
    $("#adminID-input option:selected").val("");
    $("#adminUser-input option:selected").val("");
    usernameInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    middleInitialInput.val("");
    cityInput.val("");
    stateInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(userData) {
    $.post("/api/signup", userData)
      .then(() => {
        if (userData.adminUser > 0) {
          window.location.replace("/adminDashboard");
        } else {
          window.location.replace("/userDashboard");
        }

        // If there's an error, handle it by throwing up an alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
