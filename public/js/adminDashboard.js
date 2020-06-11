$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(userData => {
    //Display welcome message
    $(".member-name").text(userData.username);

    // GET request to display the user's quizzes:
    const queryURL = "/api/quiz_data/" + userData.id;
    $.get(queryURL).then(quizData => {
      // let data = JSON.parse(quizData)
      console.log(quizData);
      $(".quizContainer").empty();
      for (let i = 0; i < quizData.length; i++) {
        $(".quizContainer").append(`<li>
<button class="bg-teal-300 hover:bg-teal-700 px-6 py-2 rounded-lg m-1">Test</button>
<button class="bg-teal-300 hover:bg-teal-700 px-6 py-2 rounded-lg m-1">Edit</button>
<button class="bg-teal-300 hover:bg-teal-700 px-6 py-2 rounded-lg m-1">Delete</button>
<span class="border m-2 px-64 py-2 bg-teal-100">Quiz name: ${quizData[i].quizName}, Category: ${quizData[i].category}, Number of questions: ${quizData[i].questionCount}</span>
</li>`)
      }
    });
  });

  $("#createQuizBtn").on("click", function () {
    window.location.replace("/createQuiz");
  })
});
