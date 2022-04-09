
function createHome() {
    let main = document.querySelector('#main');
    let contentContainer = document.querySelector('#content-container');
    // restaurant title and image
    contentContainer.innerHTML = "";
    let restaurantNameContainer = createDiv('restaurant-name-container');
    restaurantNameContainer.innerHTML = 'Jean-Paul\'s Pizzeria';
    let mainImage = document.createElement('img');
    mainImage.setAttribute('id', 'main-image');
    mainImage.setAttribute('src', './images/hoja-studio-Thw3nleO3cM-unsplash.jpeg');
    mainImage.setAttribute('alt', 'image of pizza chef');
    
    // review section
    let reviewContainer = document.createElement('div');
    reviewContainer.setAttribute('class', 'main-small-container');
    let reviewDescription = document.createElement('div');
    reviewDescription.setAttribute('class', 'review-description');
    reviewDescription.innerHTML = 'My partner and I ordered the 12" Pepperoni ($17) and CBR (chicken bacon ranch) ($23) pizzas. It is relatively pricy here compared to other pizza places. But, they definitely win with the quality of their pizzas! If you\'re a fan of impressive cheese pulls, this place certainly doesn\'t disappoint. The crust was super fresh and fluffy with a slight crunch.';
    let reviewPersonName = document.createElement('div');
    reviewPersonName.setAttribute('class', 'review-person-name');
    reviewPersonName.innerHTML = '- Marty Banks';
    reviewContainer.appendChild(reviewDescription);
    reviewContainer.appendChild(reviewPersonName);

    // hours section
    let hoursContainer = document.createElement('div');
    hoursContainer.setAttribute('class', 'main-small-container');
    let hoursTitle = createDiv('hours-title');
    hoursTitle.innerHTML = 'Hours';
    let weeklyHours = createDiv('weekly-hours');
    let sunday = document.createElement('div');
    sunday.innerHTML = 'Sunday: 9am - 8pm';
    weeklyHours.appendChild(sunday);
    let monday = document.createElement('div');
    monday.innerHTML = 'Monday: 8am - 9pm';
    weeklyHours.appendChild(monday);
    let tuesday = document.createElement('div');
    tuesday.innerHTML = 'Tuesday: 8am - 9pm';
    weeklyHours.appendChild(tuesday);
    let wednesday = document.createElement('div');
    wednesday.innerHTML = 'Wednesday: 8am - 10pm';
    weeklyHours.appendChild(wednesday);
    let thursday = document.createElement('div');
    thursday.innerHTML = 'Thursday: 8am - 10pm';
    weeklyHours.appendChild(thursday);
    let friday = document.createElement('div');
    friday.innerHTML = 'Friday: 8am - 10pm';
    weeklyHours.appendChild(friday);
    let saturday = document.createElement('div');
    saturday.innerHTML = 'Saturday: 9am - 8pm';
    weeklyHours.appendChild(saturday);

    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(weeklyHours);
    
    // location section
    let locationContainer = document.createElement('div');
    locationContainer.setAttribute('class', 'main-small-container');
    let locationTitle = createDiv('location-title');
    locationTitle.innerHTML = 'Location';
    let locationAddress = createDiv('location-address');
    locationAddress.innerHTML = '123 Country Lane, San Jose, CA';
    
    locationContainer.appendChild(locationTitle);
    locationContainer.appendChild(locationAddress);


    // append all sections to contentContainer
    main.appendChild(contentContainer);
    contentContainer.appendChild(restaurantNameContainer);
    contentContainer.appendChild(mainImage);
    contentContainer.appendChild(reviewContainer);
    contentContainer.appendChild(hoursContainer);
    contentContainer.appendChild(locationContainer);
}


function createDiv(idName) {
    let div = document.createElement('div');
    div.setAttribute('id', idName);
    return div;
}


export {createHome, createDiv};

        