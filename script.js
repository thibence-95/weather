

   let input = document.getElementById("input");
   let submit = document.getElementById("submitWeather");


   submit.addEventListener("click", function () {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=metric&appid=e1e90a3c7a628db7d39dcee70ad79160')

          .then((response) => {
             return response.json()
          })

          .then(data => {
              console.log(data.list[0]);


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

              let avgTemp = arr => Math.floor(((arr.reduce((a,b) => a + b, 0) / arr.length)));

              let dayOneDescr = descriptionArr.slice(0, 8);
              let dayTwoDescr = descriptionArr.slice(0, 16);
              let dayThreeDescr = descriptionArr.slice(16, 24);
              let dayFourDescr = descriptionArr.slice(24, 32);
              let dayFiveDescr = descriptionArr.slice(32, 40);

              let day1descHTML = document.getElementById("descriptionDay1");
              let day2descHTML = document.getElementById("descriptionDay2");
              let day3descHTML = document.getElementById("descriptionDay3");
              let day4descHTML = document.getElementById("descriptionDay4");
              let day5descHTML = document.getElementById("descriptionDay5");

              let day1tempHTML = document.getElementById("temp1");
              let day2tempHTML = document.getElementById("temp2");
              let day3tempHTML = document.getElementById("temp3");
              let day4tempHTML = document.getElementById("temp4");
              let day5tempHTML = document.getElementById("temp5");

              day1descHTML.innerHTML = dayOneDescr;
              day2descHTML.innerHTML = dayTwoDescr;
              day3descHTML.innerHTML = dayThreeDescr;
              day4descHTML.innerHTML = dayFourDescr;
              day5descHTML.innerHTML = dayFiveDescr;



              console.log(dayOneTemp);
              console.log(dayOneDescr);


          })
   });
    









/*
1: fetch van api (kan met axios)
2: data filteren (json terug -> variable)
3: tonen op pagina (variable in html pompen */
// keep it stupid simple, stupid!!!
