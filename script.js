

   let input = document.getElementById("input");
   let submit = document.getElementById("submitWeather");

function calculateAverage(temperatures) {
    return Math.floor(((temperatures.reduce((a,b) => a + b, 0) / temperatures.length)));
}
   submit.addEventListener("click", function () {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=metric&appid=e1e90a3c7a628db7d39dcee70ad79160')

          .then((response) => {
             return response.json()
          })

          .then(data => {
              //console.log(data.list[0]);


              let tempArr = [];
              let descriptionArr = [];

              for (let i=0; i < 40; i++) {
                  tempArr.push(data.list[i].main.temp);
                  descriptionArr.push(data.list[i].weather[0].description);
              }


              document.getElementById("submit-output").innerHTML = input.value;

              //cut up temps in the 5 days
              let dayOne = tempArr.slice(0, 8);
              let dayTwo = tempArr.slice(0, 16);
              let dayThree = tempArr.slice(16, 24);
              let dayFour = tempArr.slice(24, 32);
              let dayFive = tempArr.slice(32, 40);

              let dayOneTemp = calculateAverage(dayOne);
              let dayTwoTemp = calculateAverage(dayTwo);
              let dayThreeTemp = calculateAverage(dayThree);
              let dayFourTemp = calculateAverage(dayFour);
              let dayFiveTemp= calculateAverage(dayFive);


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


              //getting dates

              let toDay = new Date();
              let weekdays = new Array(7);
              weekdays[0] = "Sunday";
              weekdays[1] = "Monday";
              weekdays[2] = "Tuesday";
              weekdays[3] = "Wednesday";
              weekdays[4] = "Thursday";
              weekdays[5] = "Friday";
              weekdays[6] = "Saturday";

              /*let today = new Date().getDay();
              let date1 = [];
              let date2 = [];
              let date3 = [];
              let date4 = [];
              let date5 = [];
              let onlydates;

              for (let i = 0; i < 40; i++) {
                 onlydates = new Date(data.list[i].dt * 1000).getDay();

                 if (today === onlydates) {
                     date1.push(data.list[i]);
                     if (today === 6) {
                         today = 0;
                     }
                 }
                  if (today + 1 === onlydates) {
                      date1.push(data.list[i]);
                      if (today === 6) {
                          today = 0;
                      }
                  }
                  if (today + 2 === onlydates) {
                      date1.push(data.list[i]);
                      if (today === 6) {
                          today = 0;
                      }
                  }
                  if (today + 3 === onlydates) {
                      date1.push(data.list[i]);
                      if (today === 6) {
                          today = 0;
                      }
                  }
                  if (today + 4 === onlydates) {
                      date1.push(data.list[i]);
                      if (today === 6) {
                          today = 0;
                      }
                  }

              }

              console.log(date1);
              console.log(date2);
              console.log(date3);
              console.log(date4);
              console.log(date5);*/

              /*let day3 = dates.getDay() + 2;
              let day4 = dates.getDay() + 3;
              let day5 = dates.getDay() + 4;

              let dates = new Date();*/

              document.getElementById("today").innerHTML = "today";
              document.getElementById("dayTwo").innerText = "tomorrow";
              document.getElementById("dayThree").innerHTML = "in two days";
              document.getElementById("dayFour").innerHTML = "in three days";
              document.getElementById("dayFive").innerHTML = "in four days";

              day1descHTML.innerHTML = dayOneDescr[3];
              day2descHTML.innerHTML = dayTwoDescr[3];
              day3descHTML.innerHTML = dayThreeDescr[3];
              day4descHTML.innerHTML = dayFourDescr[3];
              day5descHTML.innerHTML = dayFiveDescr[3];

              day1tempHTML.innerHTML = dayOneTemp + " " + "&#8451";
              day2tempHTML.innerHTML = dayTwoTemp + " " + "&#8451";
              day3tempHTML.innerHTML = dayThreeTemp + " " + "&#8451";
              day4tempHTML.innerHTML = dayFourTemp + " " + "&#8451";
              day5tempHTML.innerHTML = dayFourTemp + " " + "&#8451";



              console.log(dayOneTemp);
              console.log(dayOneDescr);


          })
   });
    









/*
1: fetch van api (kan met axios) CHECK
2: data filteren (json terug -> variable) CHECK
3: tonen op pagina (variable in html pompen CHECK
keep it stupid simple, stupid!!! */
