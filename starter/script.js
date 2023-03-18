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

