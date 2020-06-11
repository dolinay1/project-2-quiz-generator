// Start the page with 5 empty question boxes:
$(document).ready(() => {

    // Getting references to our inputs:
    const createQuizForm = $("form.createQuiz");

    // We validate that the input fields are not empty:
    createQuizForm.on("submit", event => {
        event.preventDefault();
        //grab all the info
        // $(".qustions").

        // $(".answers")

        // var questions = $(".questions")
        // console.log(questions)

        // var answers = $(".answers")
        // console.log(answers)

        //loop question and create key and values inse de object quizData

        // Quiz data for the createQuiz route
        const quizData = {
            quizName: $("#quizName-input").val().trim(),
            category: $("#quizCat-input option:selected").val().trim(),
            questionCount: parseInt($("#questionCount-input option:selected").val()),
            question1: {
                question: $("#q1").val().trim(),
                answers: [{
                    answer1: {
                        answer: $("#q1a1").val().trim(),
                        corret: true
                    },
                    answer2: {
                        answer: $("#q1a2").val().trim(),
                        correct: false
                    },
                    answer3: {
                        answer: $("#q1a3").val().trim(),
                        correct: false
                    },
                    answer4: {
                        answer: $("#q1a4").val().trim(),
                        correct: false
                    }
                }]
            },
            question2: {
                question: $("#q2").val().trim(),
                answers: [{
                    answer1: {
                        answer: $("#q2a1").val().trim(),
                        correct: true
                    },
                    answer2: {
                        answer: $("#q2a2").val().trim(),
                        correct: false
                    },
                    answer3: {
                        answer: $("#q2a3").val().trim(),
                        correct: false
                    },
                    answer4: {
                        answer: $("#q2a4").val().trim(),
                        correct: false
                    }
                }]
            },
            question3: {
                question: $("#q3").val().trim(),
                answers: [{
                    answer1: {
                        answer: $("#q3a1").val().trim(),
                        correct: true
                    },
                    answer2: {
                        answer: $("#q3a2").val().trim(),
                        correct: false
                    },
                    answer3: {
                        answer: $("#q3a3").val().trim(),
                        correct: false
                    },
                    answer4: {
                        answer: $("#q3a4").val().trim(),
                        correct: false
                    }
                }]
            }
        };
        console.log(quizData)
        //grab all the info
        // $(".qustions").

        // $(".answers")

        //loop question and create key and values inse de object quizData
        // var id = $(this).attr("id")   
        // questionData["q" + id] = { title: "", a: [] }
        // { q1: { title: "q1", answers: { a1: { title: "", bool: true }, a2: { title: "", bool: false } } } }

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