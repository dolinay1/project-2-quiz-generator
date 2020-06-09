$("#btn").on("click", function () {
    console.log("Hey!")
})

$("#questionCount-input").on("change", function () {
    let count = parseInt($(this).children("option:selected").val());



    if (count === 5) {
        for (let i = 0; i < 5; i++) {
            const htmlBlock = `<label class="block">
<span class="text-gray-700">Question ${i + 1}</span>
<input type="text" class="form-input mt-1 block w-full" id="q1" placeholder="Your question goes here">
</label>`
            $(".container").append(htmlBlock)
        }
    }
    else if (count === 10) {
        for (let i = 0; i < 10; i++) {
            $(".container").append(htmlBlock)
        }
    }
    else if (count === 15) {
        for (let i = 0; i < 15; i++) {
            $(".container").append(htmlBlock)
        }
    }
});