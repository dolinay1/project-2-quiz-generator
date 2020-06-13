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
        $(".quizContainer").append(`<div>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline mr-1">Test</button>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline mr-1">Edit</button>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline mr-1">Delete</button>
<span class="border bg-green-100 px-4 py-2 w-auto">Quiz name: ${quizData[i].quizName}, Category: ${quizData[i].category}, Number of questions: ${quizData[i].questionCount}</span>
<div>`)
      }
    });
  });

  $("#createQuizBtn").on("click", function () {
    window.location.replace("/createQuiz");
  })
});
