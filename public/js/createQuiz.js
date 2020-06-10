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
                generateQuestions();
            })
            .catch(handleLoginErr);
    }

    // Function to generate empty question boxes:
    function generateQuestions() {
        const qCount = parseInt($("#questionCount-input option:selected").val());
        console.log(qCount)
        if (qCount === 5) {
            $(".qContainer").empty();
            for (let i = 0; i < 5; i++) {
                $(".qContainer").append(`<label class="block">
                <span class="text-gray-700">Question ${i + 1}</span>
                <input type="text" class="form-input mt-1 block w-full" id="q1" placeholder="Your question goes here">
            </label>
        
            
            <div class="block">
                <div class="mt-2">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="1">
                                <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 1">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                    placeholder="answer 2">
                                <input type="radio" class="form-radio" name="radio" value="2">
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="3">
                                <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 3">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                    placeholder="answer 4">
                                <input type="radio" class="form-radio" name="radio" value="4">
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
                <input type="text" class="form-input mt-1 block w-full" id="q1" placeholder="Your question goes here">
            </label>
        
            
            <div class="block">
                <div class="mt-2">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="1">
                                <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 1">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                    placeholder="answer 2">
                                <input type="radio" class="form-radio" name="radio" value="2">
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="3">
                                <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 3">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                    placeholder="answer 4">
                                <input type="radio" class="form-radio" name="radio" value="4">
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
                <input type="text" class="form-input mt-1 block w-full" id="q1" placeholder="Your question goes here">
            </label>
        
            
            <div class="block">
                <div class="mt-2">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="1">
                                <input type="text" id="ans1" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 1">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans2" class="form-input mt-1 mr-2 block w-full"
                                    placeholder="answer 2">
                                <input type="radio" class="form-radio" name="radio" value="2">
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="3">
                                <input type="text" id="ans3" class="form-input mt-1 ml-2 block w-full"
                                    placeholder="answer 3">
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="text" id="ans4" class="form-input mt-1 mr-2 block w-auto"
                                    placeholder="answer 4">
                                <input type="radio" class="form-radio" name="radio" value="4">
                            </label>
                        </div>
                    </div>
                </div>
            </div>`)
            }
        }
    }


    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

});
