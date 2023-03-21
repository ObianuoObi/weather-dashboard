// variable that stores city input

let buttonName = [];

// function that creates buttons using names of cities stored in an array

function createButtons(array) {
    $('#history').empty();

    array.forEach(element => {
        $('#history').append(
            $(`<button type="button" class="cities btn btn-secondary btn-lg btn-block">${element}</button>`));
    });

    // function attachment of onClick event thats inputs the value of the button to the search input and trigger on the search button
    $("button.cities").on("click", function (event) {
        event.preventDefault();
        let click = $(this)[0].innerText;
        $('#search-input').val(click);
        $('#search-button').trigger("click");
        $('#search-input').val('');
    });
}

// function that gets cities from local storage and calls the function createButtons

function begin() {
    buttonName = JSON.parse(localStorage.getItem('buttonName')) || [];
    createButtons(buttonName);

}

// function that checks if buttonName contains city and pushes a new city and saves the updated array to local storage if theres no new city 

function buttonsCity(city) {
    if (city != '' && buttonName.includes(city) != true) {
        buttonName.push(city);
        localStorage.setItem('buttonName', JSON.stringify(buttonName));
        createButtons(buttonName);
    }
}

// Function that creates a div with the forecast data

function forecastDivData(day, image, temp, wind, humidity) {
    let weather = $(`<div class="col forecast-tiles">
                        <h3>${day}</h3>
                        <p>${image}</p>
                        <p>Temp: ${temp} C</p>
                        <p>Wind: ${wind} KPH</p>
                        <p>Humidity: ${humidity}</p>
                    </div>`);
    $('#forecast').append(weather);
}

// function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function getOpenWeatherIndexDay1(currentHour) {
    let index = 0;

    switch (true) {
        case (currentHour >= 0 && currentHour <= 2):
            index = 0;
            break;
        case (currentHour >= 3 && currentHour <= 5):
            index = 1;
            break;
        case (currentHour >= 6 && currentHour <= 8):
            index = 2;
            break;
        case (currentHour >= 9 && currentHour <= 11):
            index = 3;
            break;
        case (currentHour >= 12 && currentHour <= 14):
            index = 4;
            break;
        case (currentHour >= 15 && currentHour <= 17):
            index = 5;
            break;
        case (currentHour >= 18 && currentHour <= 20):
            index = 6;
            break;
        case (currentHour >= 21 && currentHour <= 23):
            index = 7;
            break;
    }

    return index;
}


// second function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function getOpenWeatherIndexDay2(currentHour) {
    let index = 8;
  
    switch (true) {
      case (currentHour >= 0 && currentHour <= 2):
        index = 8;
        break;
      case (currentHour >= 3 && currentHour <= 5):
        index = 9;
        break;
      case (currentHour >= 6 && currentHour <= 8):
        index = 10;
        break;
      case (currentHour >= 9 && currentHour <= 11):
        index = 11;
        break;
      case (currentHour >= 12 && currentHour <= 14):
        index = 12;
        break;
      case (currentHour >= 15 && currentHour <= 17):
        index = 13;
        break;
      case (currentHour >= 18 && currentHour <= 20):
        index = 14;
        break;
      case (currentHour >= 21 && currentHour <= 23):
        index = 15;
        break;
    }
  
    
    return index;
  }
  

// Third function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function getOpenWeatherIndexDay3(currentHour) {
    let index = 16;
  
    switch (true) {
      case (currentHour >= 0 && currentHour <= 2):
        index = 16;
        break;
      case (currentHour >= 3 && currentHour <= 5):
        index = 17;
        break;
      case (currentHour >= 6 && currentHour <= 8):
        index = 18;
        break;
      case (currentHour >= 9 && currentHour <= 11):
        index = 19;
        break;
      case (currentHour >= 12 && currentHour <= 14):
        index = 20;
        break;
      case (currentHour >= 15 && currentHour <= 17):
        index = 21;
        break;
      case (currentHour >= 18 && currentHour <= 20):
        index = 22;
        break;
      case (currentHour >= 21 && currentHour <= 23):
        index = 23;
        break;
    }
  
    console.log(index);
    return index;
  }
  
// Fourth function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours
function getOpenWeatherIndexDay4(currentHour) {
    let index = 24;
  
    switch (true) {
      case (currentHour >= 0 && currentHour <= 2):
        index = 24;
        break;
      case (currentHour >= 3 && currentHour <= 5):
        index = 25;
        break;
      case (currentHour >= 6 && currentHour <= 8):
        index = 26;
        break;
      case (currentHour >= 9 && currentHour <= 11):
        index = 27;
        break;
      case (currentHour >= 12 && currentHour <= 14):
        index = 28;
        break;
      case (currentHour >= 15 && currentHour <= 17):
        index = 29;
        break;
      case (currentHour >= 18 && currentHour <= 20):
        index = 30;
        break;
      case (currentHour >= 21 && currentHour <= 23):
        index = 31;
        break;
      default:
        index = 24;
        break;
    }
  
    return index;
  }
  

// Fifth function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function getOpenWeatherIndexDay5(currentHour) {
    let index = 32;
  
    switch (true) {
      case (currentHour >= 0 && currentHour <= 2):
        index = 32;
        break;
      case (currentHour >= 3 && currentHour <= 5):
        index = 33;
        break;
      case (currentHour >= 6 && currentHour <= 8):
        index = 34;
        break;
      case (currentHour >= 9 && currentHour <= 11):
        index = 35;
        break;
      case (currentHour >= 12 && currentHour <= 14):
        index = 36;
        break;
      case (currentHour >= 15 && currentHour <= 17):
        index = 37;
        break;
      case (currentHour >= 18 && currentHour <= 20):
        index = 38;
        break;
      case (currentHour >= 21 && currentHour <= 23):
        index = 39;
        break;
      default:
        index = 32;
        break;
    }
  
    return index;
  }
  
// On click event that triggers the api call

$("#search-button").on("click", function (event) {
    event.preventDefault();

    let city = $('#search-input').val();
    buttonsCity(city);

    let queryGeoURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=c0dc7393199102d72532d4047b790df6";

    // First api call, used to get data to trigger second api call 

    $.ajax({
        url: queryGeoURL,
        method: "GET"
    })
        .then(function (response) {
            let lat = response[0].lat;
            let lon = response[0].lon;

            // Api endpoint that returns current weather
            let queryCurrentURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=c0dc7393199102d72532d4047b790df6";

            // Api endpoint that returns 5 days forecast 
            let queryWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=c0dc7393199102d72532d4047b790df6";


            // Ajax Api call that returns current weather data and populates the given days div
            $.ajax({
                url: queryCurrentURL,
                method: "GET"
            })
                .then(function (response) {

                    // Populate given days div
                    $('#today').empty();
                    let currentDay = moment().format("DD/M/YYYY");
                    let currentTemp = response.main.temp;
                    let currentWind = response.wind.speed;
                    let currentHumidity = response.main.humidity;

                    let currentWeather = $(`<div>
                                        <h2>${city} (${currentDay})</h2>
                                        <p>Temp: ${currentTemp} C</p>
                                        <p>Wind: ${currentWind} KPH</p>
                                        <p>Humidity: ${currentHumidity}</p>
                                    </div>`);
                    $('#today').append(currentWeather);

                    // Ajax Api call that returns 5 days forecast data

                    $.ajax({
                        url: queryWeatherURL,
                        method: "GET"
                    })
                        .then(function (response) {

                            // Populate forecast's div    

                            $('#forecast').empty();
                            let currentHour = moment().format("H");

                            // Forecast data for first day 

                            let day1 = moment(response.list[1].dt_txt, "YYYY-MM-DD HH:mm:ss").format("DD/M/YYYY");
                            let i1 = getOpenWeatherIndexDay1(currentHour);

                            let image1 = response.list[i1].weather[0].description;
                            let temp1 = response.list[i1].main.temp;
                            let wind1 = response.list[i1].wind.speed;
                            let humidity1 = response.list[i1].main.humidity;

                            forecastDivData(day1, image1, temp1, wind1, humidity1);

                            // Forecast data for second day

                            let day2 = moment(response.list[9].dt_txt, "YYYY-MM-DD HH:mm:ss").format("DD/M/YYYY");
                            let i2 = getOpenWeatherIndexDay2(currentHour);

                            let image2 = response.list[i2].weather[0].description;
                            let temp2 = response.list[i2].main.temp;
                            let wind2 = response.list[i2].wind.speed;
                            let humidity2 = response.list[i2].main.humidity;

                            forecastDivData(day2, image2, temp2, wind2, humidity2);

                            // Forecast data for third day

                            let day3 = moment(response.list[17].dt_txt, "YYYY-MM-DD HH:mm:ss").format("DD/M/YYYY");
                            let i3 = getOpenWeatherIndexDay3(currentHour);

                            let image3 = response.list[i3].weather[0].description;
                            let temp3 = response.list[i3].main.temp;
                            let wind3 = response.list[i3].wind.speed;
                            let humidity3 = response.list[i3].main.humidity;

                            forecastDivData(day3, image3, temp3, wind3, humidity3);

                            // Forecast data for fourth day
                            let day4 = moment(response.list[25].dt_txt, "YYYY-MM-DD HH:mm:ss").format("DD/M/YYYY");
                            let i4 = getOpenWeatherIndexDay4(currentHour);

                            let image4 = response.list[i4].weather[0].description;
                            let temp4 = response.list[i4].main.temp;
                            let wind4 = response.list[i4].wind.speed;
                            let humidity4 = response.list[i4].main.humidity;

                            forecastDivData(day4, image4, temp4, wind4, humidity4);

                            // Forecast data for fifth day
                            let day5 = moment(response.list[33].dt_txt, "YYYY-MM-DD HH:mm:ss").format("DD/M/YYYY");
                            let i5 = getOpenWeatherIndexDay5(currentHour);

                            let image5 = response.list[i5].weather[0].description;
                            let temp5 = response.list[i5].main.temp;
                            let wind5 = response.list[i5].wind.speed;
                            let humidity5 = response.list[i5].main.humidity;

                            forecastDivData(day5, image5, temp5, wind5, humidity5);

                        });
                });
        });
});

// Function call to get data for local storage and load it to the page
begin();