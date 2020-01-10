$(document.ready(function () {

    $('#submitWeather').click(function () {
        let city = $("#city").val();

        if (city != '') {

        }
        else {
            $("#error").html("field can not be empty");
        }
    })

}))