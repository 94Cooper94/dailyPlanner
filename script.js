// displays time at the top of the page
$(document).ready(function () {
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();
});


$(document).ready(function () {
    var parseHour = $(".time-block")("#currentDay").val()
})


// compare each block id to a time value to colorizing
$(document).ready(function () {
    var bgColor = $(input).siblings("#currentDay").val()
    var parseHour = $(input).siblings("#currentDay").attr("id")
        $("input").css("background-color", "green")
    });


// saves user-input to the localstorage-- can easily overwrite by changing the input-value and pressing the save button.
$(".saveBtn").click(function(){
    var str = $(this).siblings(".time-block").val()
    var hour = $(this).siblings(".time-block").attr("id")
    localStorage.setItem(hour, str);
});