// Start the page with 5 empty question boxes:
$(document).ready(() => {
    for (let i = 0; i < 5; i++) {
        $(".qContainer").append(`<label class="block">
                <span class="text-gray-700">Question ${i + 1}</span>
                <input type="text" class="form-input mt-1 block w-full" id="q${i + 1}" placeholder="Your question goes here">
            </label>
            <div class="block">
            <div class="mt-2">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="radio${i + 1}" value="1">
                            <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                placeholder="answer 1">
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                placeholder="answer 2">
                            <input type="radio" class="form-radio" name="radio${i + 1}" value="2">
                        </label>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="radio${i + 1}" value="3">
                            <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                placeholder="answer 3">
                        </label>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                placeholder="answer 4">
                            <input type="radio" class="form-radio" name="radio${i + 1}" value="4">
                        </label>
                    </div>
                </div>
            </div>
        </div>`)
    }

    $("#questionCount-input").on("change", function () {
        const qCount = parseInt($("#questionCount-input option:selected").val());
        console.log(qCount)
        if (qCount === 5) {
            $(".qContainer").empty();
            for (let i = 0; i < 5; i++) {
                $(".qContainer").append(`<label class="block">
                <span class="text-gray-700">Question ${i + 1}</span>
                <input type="text" class="form-input mt-1 block w-full" id="q${i + 1}" placeholder="Your question goes here">
            </label>
        
            
            <div class="block">
                <div class="mt-2">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="1">
                                <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 1">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                    placeholder="answer 2">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="2">
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="3">
                                <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 3">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                    placeholder="answer 4">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="4">
                            </label>
                        </div>
                    </div>
                </div>
            </div>`)
            }
        }
        else if (qCount === 10) {
            $(".qContainer").empty();
            for (let i = 0; i < 10; i++) {
                $(".qContainer").append(`<label class="block">
                <span class="text-gray-700">Question ${i + 1}</span>
                <input type="text" class="form-input mt-1 block w-full" id="q${i + 1}" placeholder="Your question goes here">
            </label>
        
            
            <div class="block">
                <div class="mt-2">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="1">
                                <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 1">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                    placeholder="answer 2">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="2">
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="3">
                                <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 3">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                    placeholder="answer 4">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="4">
                            </label>
                        </div>
                    </div>
                </div>
            </div>`)
            }
        }
        else if (qCount === 15) {
            $(".qContainer").empty();
            for (let i = 0; i < 15; i++) {
                $(".qContainer").append(`<label class="block">
                <span class="text-gray-700">Question ${i + 1}</span>
                <input type="text" class="form-input mt-1 block w-full" id="q${i + 1}" placeholder="Your question goes here">
            </label>
        
            
            <div class="block">
                <div class="mt-2">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="1">
                                <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 1">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                    placeholder="answer 2">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="2">
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="3">
                                <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 3">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                    placeholder="answer 4">
                                <input type="radio" class="form-radio" name="radio${i + 1}" value="4">
                            </label>
                        </div>
                    </div>
                </div>
            </div>`)
            }
        }
    })

    // Getting references to our inputs:
    const createQuizForm = $("form.createQuiz");

    // We validate that the input fields are not empty:
    createQuizForm.on("submit", event => {
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

        // Question data for the createQuestions route
        const questionData = {}

        // If all the fields are complete, run the createQuiz function
        createQuiz(quizData);
    });

    // POST request to the /api/createQuiz api route:
    function createQuiz(quizData) {
        $.post("/api/createQuiz", quizData)
            .then(() => {
                console.log("quiz data created")
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});