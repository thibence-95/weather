

   let input = document.getElementById("input");
   let submit = document.getElementById("submitWeather");


   submit.addEventListener("click", function () {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=metric&appid=e1e90a3c7a628db7d39dcee70ad79160')

          .then((response) => {
             return response.json()
          })

          .then(data => {
              console.log(data.list[0]);


              let avgTemp = arr => Math.floor(((arr.reduce((a,b) => a + b, 0) / arr.length)));

              let tempArr = [];
              let descriptionArr = [];

              for (let i=0; i < 40; i++) {
                  tempArr.push(data.list[i].main.temp);
                  descriptionArr.push(data.list[i].weather[0].description);
              }
              //console.log(tempArr);
              let dayOneTemp = tempArr.slice(0, 8);
              let dayTwoTemp = tempArr.slice(0, 16);
              let dayThreeTemp = tempArr.slice(16, 24);
              let dayFourTemp = tempArr.slice(24, 32);
              let dayFiveTemp = tempArr.slice(32, 40);

              console.log(dayOneTemp);


          })
   });
    









/*
1: fetch van api (kan met axios)
2: data filteren (json terug -> variable)
3: tonen op pagina (variable in html pompen */
// keep it stupid simple, stupid!!!
