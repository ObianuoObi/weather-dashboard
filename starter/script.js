// variable that stores city input

let buttonName = [];

// function that creates buttons using names of cities stored in an array

function createButtons (array) {
    $('#history').empty();

    array.forEach(element => {
        $('#history').append(
            $(`<button type="button" class="cities btn btn-secondary btn-lg btn-block">${element}</button>`));
    });

    // function attachment of onClick event thats inputs the value of the button to the search input and trigger on the search button
    $("button.cities").on("click", function(event) {
        event.preventDefault();
        let click = $(this)[0].innerText;
        $('#search-input').val(click);
        $('#search-button').trigger("click");
        $('#search-input').val('');
    });
}

// function that gets cities from local storage and calls the function createButtons

function begin () {
    buttonName = JSON.parse(localStorage.getItem('buttonName')) || [];
    createButtons(buttonName);

}

// function that checks if buttonName contains city and pushes a new city and saves the updated array to local storage if theres no new city 

function buttonsCity (city) {
    if (city != '' && buttonName.includes(city) != true) {        
        buttonName.push(city); 
        localStorage.setItem('buttonName', JSON.stringify(buttonName));
        createButtons(buttonName);
    }
}

// Function that creates a div with the forecast data

function forecastDivData (day, image, temp, wind, humidity) {
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

function getOpenWeatherIndexDay1 (currentHour) {
    let index = 0
    if (currentHour >= 0 && currentHour <= 2) {
        index = 0;   
    } else if (currentHour >= 3 && currentHour <= 5) {
        index = 1;        
    } else if (currentHour >= 6 && currentHour <= 8) {
        index = 2;
    } else if (currentHour >= 9 && currentHour <= 11) {
        index = 3;
    } else if (currentHour >= 12 && currentHour <= 14) {
        index = 4;
    } else if (currentHour >= 15 && currentHour <= 17) {
        index = 5;
    } else if (currentHour >= 18 && currentHour <= 20) {
        index = 6;
    } else if (currentHour >= 21 && currentHour <= 23) {
        index = 7;
    } return index;
}

// second function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function  getOpenWeatherIndexDay2 (currentHour) {
    let index = 8
    if (currentHour >= 0 && currentHour <= 2) {
        index = 8;   
    } else if (currentHour >= 3 && currentHour <= 5) {
        index = 9;        
    } else if (currentHour >= 6 && currentHour <= 8) {
        index = 10;
    } else if (currentHour >= 9 && currentHour <= 11) {
        index = 11;
    } else if (currentHour >= 12 && currentHour <= 14) {
        index = 12;
    } else if (currentHour >= 15 && currentHour <= 17) {
        index = 13;
    } else if (currentHour >= 18 && currentHour <= 20) {
        index = 14;
    } else if (currentHour >= 21 && currentHour <= 23) {
        index = 15;
    } return index;
}

// Third function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function getOpenWeatherIndexDay3 (currentHour) {
    let index = 16
    if (currentHour >= 0 && currentHour <= 2) {
        index = 16;   
    } else if (currentHour >= 3 && currentHour <= 5) {
        index = 17;        
    } else if (currentHour >= 6 && currentHour <= 8) {
        index = 18;
    } else if (currentHour >= 9 && currentHour <= 11) {
        index = 19;
    } else if (currentHour >= 12 && currentHour <= 14) {
        index = 20;
    } else if (currentHour >= 15 && currentHour <= 17) {
        index = 21;
    } else if (currentHour >= 18 && currentHour <= 20) {
        index = 22;
    } else if (currentHour >= 21 && currentHour <= 23) {
        index = 23;
    } return index;
}

// Fourth function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function getOpenWeatherIndexDay4 (currentHour) {
    let index = 24
    if (currentHour >= 0 && currentHour <= 2) {
        index = 24;   
    } else if (currentHour >= 3 && currentHour <= 5) {
        index = 25;        
    } else if (currentHour >= 6 && currentHour <= 8) {
        index = 26;
    } else if (currentHour >= 9 && currentHour <= 11) {
        index = 27;
    } else if (currentHour >= 12 && currentHour <= 14) {
        index = 28;
    } else if (currentHour >= 15 && currentHour <= 17) {
        index = 29;
    } else if (currentHour >= 18 && currentHour <= 20) {
        index = 30;
    } else if (currentHour >= 21 && currentHour <= 23) {
        index = 31;
    } return index;
}

// Fifth function that change the indexes of the array returned from openweather
// according to the current time of the day, They are updated every 3 hours

function getOpenWeatherIndexDay5 (currentHour) {
    let index = 32
    if (currentHour >= 0 && currentHour <= 2) {
        index = 32;   
    } else if (currentHour >= 3 && currentHour <= 5) {
        index = 33;        
    } else if (currentHour >= 6 && currentHour <= 8) {
        index = 34;
    } else if (currentHour >= 9 && currentHour <= 11) {
        index = 35;
    } else if (currentHour >= 12 && currentHour <= 14) {
        index = 36;
    } else if (currentHour >= 15 && currentHour <= 17) {
        index = 37;
    } else if (currentHour >= 18 && currentHour <= 20) {
        index = 38;
    } else if (currentHour >= 21 && currentHour <= 23) {
        index = 39;
    } return index;
}

// On click event that triggers the api call

$("#search-button").on("click", function(event) {
    event.preventDefault();

    let city = $('#search-input').val();
    buttonsCity(city);   

    let queryGeoURL = "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=c0dc7393199102d72532d4047b790df6";

    // First api call, used to get data to trigger second api call 

    $.ajax({
        url: queryGeoURL,
        method: "GET"
    })
    .then(function(response) {
        let lat = response[0].lat;            
        let lon = response[0].lon;

          // Api endpoint that returns current weather
          let queryCurrentURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid=c0dc7393199102d72532d4047b790df6";

          // Api endpoint that returns 5 days forecast 
          let queryWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=metric&appid=c0dc7393199102d72532d4047b790df6";


           // Ajax Api call that returns current weather data and populates the given days div
           $.ajax({
            url: queryCurrentURL,
            method: "GET"
        })
        .then(function(response) {
            
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
            .then(function(response) {

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

