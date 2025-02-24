$(document).ready(function () {
    $("#btnsubmit").click(function (event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        let from = $("#from").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        if (from === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("From: " + from + "\nSubject: " + subject + "\nMessage: " + message);

        $("#biking").fadeOut("slow");
    });
});