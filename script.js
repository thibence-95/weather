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

/*
1fetch van api (kan met axios)
2data filteren (json terug -> variable)
3tonen op pagina (variable in html pompen */
// keep it stupid simple, stupid!!!
