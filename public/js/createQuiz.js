// Start the page with 5 empty question boxes:
$(document).ready(() => {

    $("form.createQuiz").on("submit", event => {
        event.preventDefault();

        // Quiz data for the createQuiz route
        const quizData = {
            quizName: $("#quizName-input").val().trim(),
            category: $("#quizCat-input option:selected").val().trim(),
            questionCount: parseInt($("#questionCount-input option:selected").val()),
            question1: {
                title: $("#q1").val().trim(),
                answers: [{
                    answer1: {
                        title: $("#q1a1").val().trim(),
                        correct: true
                    },
                    answer2: {
                        title: $("#q1a2").val().trim(),
                        correct: false
                    },
                    answer3: {
                        title: $("#q1a3").val().trim(),
                        correct: false
                    },
                    answer4: {
                        title: $("#q1a4").val().trim(),
                        correct: false
                    }
                }]
            },
            question2: {
                title: $("#q2").val().trim(),
                answers: [{
                    answer1: {
                        title: $("#q2a1").val().trim(),
                        correct: true
                    },
                    answer2: {
                        title: $("#q2a2").val().trim(),
                        correct: false
                    },
                    answer3: {
                        title: $("#q2a3").val().trim(),
                        correct: false
                    },
                    answer4: {
                        title: $("#q2a4").val().trim(),
                        correct: false
                    }
                }]
            },
            question3: {
                title: $("#q3").val().trim(),
                answers: [{
                    answer1: {
                        title: $("#q3a1").val().trim(),
                        correct: true
                    },
                    answer2: {
                        title: $("#q3a2").val().trim(),
                        correct: false
                    },
                    answer3: {
                        title: $("#q3a3").val().trim(),
                        correct: false
                    },
                    answer4: {
                        title: $("#q3a4").val().trim(),
                        correct: false
                    }
                }]
            }
        };
        createQuiz(quizData);
    });



    // API Routes:
    // POST request to the / api / createQuiz api route:
    function createQuiz(quizData) {
        $.post("/api/createQuiz", quizData)
            .then(() => {
                console.log("done");
            })
            .catch(handleErr);
    }

    function handleErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});