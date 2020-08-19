// displays time at the top of the page using moment.js
$(document).ready(function () {
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();
});


// this function takes a timeBlock, compares it to the currentHour element integer and changes the background color accordingly
function colorEvents(timeBlock, currentHour, block){
    if (parseInt(timeBlock) == parseInt(currentHour)) {
        $(block).css("background-color", "pink")
    } if (parseInt(timeBlock) < parseInt(currentHour)) {
        $(block).css("background-color", "lightgrey")
    } if (parseInt(timeBlock) > parseInt(currentHour)) {
        $(block).css("background-color", "green")
    }
}


// declaring var to hold hour in whole integer form
var coloringHour = moment().format('kk');


// runs the colorEvents() function for each data-hour div
var hour9 = $("#nineTime").attr("data-hour");
colorEvents(hour9, coloringHour,"#nineTime");
var hour10 = $("#tenTime").attr("data-hour");
colorEvents(hour10, coloringHour,"#tenTime");
var hour11 = $("#elevenTime").attr("data-hour");
colorEvents(hour11, coloringHour,"#elevenTime");
var hour12 = $("#twelveTime").attr("data-hour");
colorEvents(hour12, coloringHour,"#twelveTime");
var hour13 = $("#thirteenTime").attr("data-hour");
colorEvents(hour13, coloringHour,"#thirteenTime");
var hour14 = $("#fourteenTime").attr("data-hour");
colorEvents(hour14, coloringHour,"#fourteenTime");
var hour15 = $("#fifteenTime").attr("data-hour");
colorEvents(hour15, coloringHour,"#fifteenTime");
var hour16 = $("#sixteenTime").attr("data-hour");
colorEvents(hour16, coloringHour,"#sixteenTime");
var hour17 = $("#seventeenTime").attr("data-hour");
colorEvents(hour17, coloringHour,"#seventeenTime");


// saves user-input to the localstorage-- can easily overwrite by changing the input-value and pressing the save button.
$(".saveBtn").click(function(){
    var str = $(this).siblings(".time-block").val()
    var hour = $(this).siblings(".time-block").attr("id")
    localStorage.setItem(hour, str);
});


// pulling the localstorage values to be placed in the input field upon refreshing
$("#nineTime").val(localStorage.getItem("nineTime"))
$("#tenTime").val(localStorage.getItem("tenTime"))
$("#elevenTime").val(localStorage.getItem("elevenTime"))
$("#twelveTime").val(localStorage.getItem("twelveTime"))
$("#thirteenTime").val(localStorage.getItem("thirteenTime"))
$("#fourteenTime").val(localStorage.getItem("fourteenTime"))
$("#fifteenTime").val(localStorage.getItem("fifteenTime"))
$("#sixteenTime").val(localStorage.getItem("sixteenTime"))
$("#seventeenTime").val(localStorage.getItem("seventeenTime"))