// displays time at the top of the page
$(document).ready(function () {
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();
});


// recolors the time-blocks based on currentHour
var currentHour = moment().format('hh');
var currentHourInt = parseInt(currentHour);

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