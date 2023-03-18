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

    