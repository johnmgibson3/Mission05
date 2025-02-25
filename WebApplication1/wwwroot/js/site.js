$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = $("#hours").val();
        let rate = parseFloat($("#rate").val());

        // Validation: Ensure input is a positive number
        if (hours === "" || isNaN(hours) || hours <= 0) {
            alert("Please enter a valid number of hours.");
            return;
        }

        let total = hours * rate;
        $("#total").val(total.toFixed(2)); // Show total with 2 decimal places
    });
});