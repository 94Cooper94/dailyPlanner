// displays time at the top of the page
$(document).ready(function () {
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();
});


// recolors the time-blocks based on currentHour
var coloringHour = moment().format('hh');
var coloringHourInt = parseInt(currentHour);

// assign each timeblock's data-hour to a solid numerical value
$("#nineTime").attr("data-hour", moment("9:00 am", "h:mm a").format("hh"));
$("#tenTime").attr("data-hour", moment("10:00 am", "hh:mm a").format("hh"));
$("#elevenTime").attr("data-hour", moment("11:00 am", "hh:mm a").format("hh"));
$("#twelveTime").attr("data-hour", moment("12:00 pm", "hh:mm a").format("hh"));
$("#thirteenTime").attr("data-hour", moment("1:00 pm", "h:mm a").format("hh"));
$("#fourteenTime").attr("data-hour", moment("2:00 pm", "h:mm a").format("hh"));
$("#fifteenTime").attr("data-hour", moment("3:00 pm", "h:mm a").format("hh"));
$("#sixteenTime").attr("data-hour", moment("4:00 pm", "h:mm a").format("hh"));
$("#seventeenTime").attr("data-hour", moment("5:00 pm", "h:mm a").format("hh"));

$(document).ready(function() {
    if (timeBlock == currentHour) {
        $(this).css("background-color", "red");
    } else {
        $(this).css("background-color", "grey");
    }
    // nineTime will be recolored
    // currentHour holds the active time    
});


// saves user-input to the localstorage-- can easily overwrite by changing the input-value and pressing the save button.
$(".saveBtn").click(function(){
    var str = $(this).siblings(".time-block").val()
    var hour = $(this).siblings(".time-block").attr("id")
    localStorage.setItem(hour, str);
});