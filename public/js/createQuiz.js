// Start the page with 5 empty question boxes:
$(document).ready(() => {

    // Getting references to our inputs:
    const createQuizForm = $("form.createQuiz");

    // We validate that the input fields are not empty:
    createQuizForm.on("submit", event => {
        event.preventDefault();

        const quizData = {
            quizName: $("#quizName-input").val().trim(),
            category: $("#quizCat-input option:selected").val().trim(),
            questionCount: parseInt($("#questionCount-input option:selected").val()),
            question1: {
                title: $("#q1").val().trim(),
                answer: [{
                    answer1: {
                        title: $("#q1a1").val().trim(),
                        corret: true
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
                answer: [{
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
                answer: [{
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

        if (!quizData.quizName) {
            return;
        }
        // If all the fields are complete, run the createQuiz function
        createQuiz(quizData);
    });

    // POST request to the /api/createQuiz api route:
    function createQuiz(quizData) {
        $.post("/api/createQuiz", quizData)
            .then()
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});