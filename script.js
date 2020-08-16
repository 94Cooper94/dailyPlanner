// displays time at the top of the page
$(document).ready(function () {
function displayDate() {
    $("#currentDay").html(moment().format("LLLL"));
} setInterval(displayDate, 1000);
displayDate();
});


// creating variables to store user-input text
$(document).ready(function(){
    $("#saveBtn").click(function(){
        var str = $(nineAM).val();
        localStorage.setItem(nineAM, str);
    });
});


// var nineAMText = $("saveBtn").value;
// localStorage.setItem("nineAM", input);
// var tenAMText = $("saveBtn");
// localStorage.setItem("tenAM", input.val());
// var elevenAMText = $("saveBtn");
// localStorage.setItem("elevenAM", input.val());
// var twelvePMText = $("saveBtn");
// localStorage.setItem("twelvePM", input.val());
// var onePMText = $("saveBtn");
// localStorage.setItem("onePM", input.val());
// var twoPMText = $("saveBtn");
// localStorage.setItem("twoPM", input.val());
// var threePMText = $("saveBtn");
// localStorage.setItem("threePM", input.val());
// var fourPMText = $("saveBtn");
// localStorage.setItem("fourPM", input.val());
// var fivePMText = $("saveBtn");
// localStorage.setItem("fivePM", input.val());


// $(function() {
//     $(".saveBtn").click(function () {
//         $(".time-block").val("");
//     });
// });


// assigning time values to each time-block


// need a function that locks/unlocks when user toggles the saveBtn