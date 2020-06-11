// Start the page with 5 empty question boxes:
$(document).ready(() => {

    let boxCount = 1
    // Start creating a quiz by providing a name, category and number of questions for it:
    $("form.createQuiz").on("submit", event => {
        event.preventDefault();

        // Quiz data for the createQuiz route
        const quizData = {
            quizName: $("#quizName-input").val().trim(),
            category: $("#quizCat-input option:selected").val().trim(),
            questionCount: parseInt($("#questionCount-input option:selected").val())
        };

        if (!quizData.quizName) {
            return;
        }

        // If all the fields are complete, run the createQuiz and render question box functions:
        createQuiz(quizData);
        renderQBox(boxCount);
    });

    // Next the user provides a question and answers:
    $("form.q-and-a").on("submit", event => {
        event.preventDefault();

        const questionData = {
            question: $(`#q${boxCount}`).val()
        }
        console.log(questionData);
        createQuestion(questionData);
    })

    // API Routes:
    // POST request to the /api/createQuiz api route:
    function createQuiz(quizData) {
        $.post("/api/createQuiz", quizData)
            .then(() => {
                console.log("done");
            })
            .catch(handleErr);
    }

    function createQuestion(questionData) {
        $.post("/api/createQuestion", questionData)
            .then(() => {
                console.log("question data created")
            })
            .catch(handleErr)
    }

    function renderQBox(boxCount) {
        // Starting with the first empty question box
        $(".qContainer").append(`<label class="block">
                <span class="text-gray-700">Question ${boxCount}</span>
                <input type="text" class="form-input mt-1 block w-full" id="q${boxCount}" placeholder="Your question goes here">
            </label>
            <div class="block">
            <div class="mt-2">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="radio${boxCount}" value="1">
                            <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                placeholder="answer 1">
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                placeholder="answer 2">
                            <input type="radio" class="form-radio" name="radio${boxCount}" value="2">
                        </label>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="radio${boxCount}" value="3">
                            <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                placeholder="answer 3">
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                placeholder="answer 4">
                            <input type="radio" class="form-radio" name="radio${boxCount}" value="4">
                        </label>
                    </div>
                </div>
            </div>
        </div>`)
    }

    function handleErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});