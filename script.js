

   let input = document.getElementById("input");
   let submit = document.getElementById("submitWeather");


   submit.addEventListener("click", function () {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=e1e90a3c7a628db7d39dcee70ad79160')

          .then((response) => {
             return response.json()
          })

          .then(data => {
              console.log(data);

              


          })
   });
    













/*$(document.ready(function () {

    $('#submitWeather').click(function () {
        let city = $("#city").val();

        if (city != '') {

        }
        else {
            $("#error").html("field can not be empty");
        }
    })

}));*/

/*
1: fetch van api (kan met axios)
2: data filteren (json terug -> variable)
3: tonen op pagina (variable in html pompen */
// keep it stupid simple, stupid!!!
