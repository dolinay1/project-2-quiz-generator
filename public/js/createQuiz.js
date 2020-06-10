$(document).ready(() => {

    // Getting references to our inputs:
    const createQuizForm = $("form.createQuiz");

    // We validate that the input fields are not empty:
    createQuizForm.on("submit", event => {
        event.preventDefault();

        const quizName = $("#quizName-input");
        const quizCat = $("#quizCat-input option:selected").val().trim();
        const qCount = parseInt($("#questionCount-input option:selected").val())

        const quizData = {
            quizName: quizName.val().trim(),
            category: quizCat,
            questionCount: qCount
        };
        console.log(quizData)

        if (!quizData.quizName) {
            return;
        }

        // If all the fields are complete, run the createQuiz function
        createQuiz(quizData.quizName, quizData.category, quizData.questionCount);
    });

    // POST request to the /api/createQuiz api route:
    function createQuiz(quizName, category, questionCount) {
        $.post("/api/createQuiz", {
            quizName: quizName,
            category: category,
            questionCount: questionCount
        })
            .then(() => {
                console.log("done");
                // window.location.replace("/members");
                // If there's an error, handle it by throwing up an alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});
