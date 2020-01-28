var updatedCurrentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));
var hoursArray = [];

generateHoursArray();
generateTimeblock();
updateTextAreaColor()

function generateHoursArray() {
    for (var i = 0; i < 9; i++) {
        var hour = moment().hour(i + 9).format("h a");
        hoursArray.push(hour);
    };
};

function generateTimeblock() {
    for (var i = 0; i < hoursArray.length; i++) {

        var generateRow = $("<div>");
        generateRow.addClass("row time-block").attr("id", "timeblock" + i);
        $(".container").append(generateRow);

        var timeblock = $("#timeblock" + i);
        var hoursArea = $("<div>");
        var descriptionArea = $("<textarea>");
        var saveButton = $("<button>");

        hoursArea.addClass("col-sm-1 hour").text(hoursArray[i]).attr("data-hour", i + 9);
        timeblock.append(hoursArea);

        descriptionArea.addClass("col-sm-10 description").attr("id", "description" + i).attr("data-row", i);
        timeblock.append(descriptionArea);

        saveButton.addClass("col-sm-1 saveBtn").html("<i class=\"fas fa-save\"></i>");
        timeblock.append(saveButton);
    };
};

function updateTextAreaColor() {
    for (var i = 0; i < hoursArray.length; i++) {
        if (moment().isSame(moment().hour(9 + i))) {
            $("#description" + i).addClass("present");
        } else if (moment().isBefore(moment().hour(9 + i))) {
            $("#description" + i).addClass("future");
        } else {
            $("#description" + i).addClass("past");
        };
    };
};

$(document).on("click", "button", function() {
    descriptionText = $(this).parent().find(".description");
    console.log(descriptionText.val());
});