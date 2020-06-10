// Render the right amount of questions according to the question count dropdown menu
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

$("#questionCount-input").on("change", function () {
    let count = parseInt($(this).children("option:selected").val());
    console.log(count);

    if (count === 5) {
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
    else if (count === 10) {
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
    else if (count === 15) {
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
});