$(document).ready(() => {

  // Getting references to our form and input
  const signUpForm = $("form.signup");
  // const adminIDInput = $('#adminID-input option:selected').val();
  // const adminUserInput = $("input#adminUser-input");
  const usernameInput = $("input#username-input");
  const passwordInput = $("input#password-input");
  const firstNameInput = $("input#firstName-input");
  const lastNameInput = $("input#lastName-input");
  const middleInitialInput = $("input#middleInitial-input");
  // const cityInput = $("input#city-input");
  // const stateInput = $("input#state-input");

  // When the signup button is clicked, we validate the username and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      middleInitial: middleInitialInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an username and password, run the signUpUser function
    signUpUser(userData.username, userData.password, userData.firstName, userData.lastName, userData.middleInitial);
    usernameInput.val("");
    passwordInput.val("");
    firstNameInput.val("")
    lastNameInput.val("")
    middleInitialInput.val("")
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, password, firstName, lastName, middleInitial) {
    $.post("/api/signup", {
      // adminID: adminID,
      // adminUser: adminUser,
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      middleInitial: middleInitial,
      // city: city,
      // state: state
    })
      .then(() => {

        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  // Cancel button
  $("#cancelBtn").on("click", function () {
    window.location.replace("/");
  })

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
