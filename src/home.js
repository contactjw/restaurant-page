let contentDiv = document.querySelector('#content');


function createHome() {
    createNavBar();
}

function createNavBar() {
    let navDiv = createDiv('navbar');
    let divHome = createDiv('home');
    divHome.innerHTML = 'Home';
    let divMenu = createDiv('menu');
    divMenu.innerHTML = 'Menu';
    let divContact = createDiv('contact');
    divContact.innerHTML = 'Contact';

    navDiv.appendChild(divHome);
    navDiv.appendChild(divMenu);
    navDiv.appendChild(divContact);
}

function createDiv(idName) {
    let div = document.createElement('div');
    div.setAttribute('id', idName);
    return div;
}


export default createHome;


/* <div id="navbar">
            <div id="home">Home</div>
            <div id="menu">Menu</div>
            <div id="Contact">Contact</div>
        </div>

        <div id="main">
            <div id="content-container">

                <div id="restaurant-name-container">
                    Jean-Paul's Pizzeria
                </div>

                <img id="main-image" src="./images/hoja-studio-Thw3nleO3cM-unsplash.jpg" alt="image of pizza chef">
    
                <div class="main-small-container">
                    <div class="review-description">
                        My partner and I ordered the 12" Pepperoni ($17) and CBR (chicken bacon ranch) ($23) pizzas. It is relatively pricy here compared to other pizza places. But, they definitely win with the quality of their pizzas! If you're a fan of impressive cheese pulls, this place certainly doesn't disappoint. The crust was super fresh and fluffy with a slight crunch. 
                    </div>
                    <div class="review-person-name">
                        - Marty Banks
                    </div>
                </div>
    
                <div class="main-small-container">
                    <div id="hours-title">
                        Hours
                    </div>
                    <div id="weekly-hours">
                        <div class="weekday">Sunday: 9am - 8pm</div>
                        <div class="weekday">Monday: 8am - 9pm</div>
                        <div class="weekday">Tuesday: 8am - 9pm</div>
                        <div class="weekday">Wednesday: 8am - 10pm</div>
                        <div class="weekday">Thursday: 8am - 10pm</div>
                        <div class="weekday">Friday: 8am - 10pm</div>
                        <div class="weekday">Saturday: 9am - 8pm</div>
                    </div>
                </div>
    
                <div class="main-small-container">
                    <div id="location-title">
                        Location
                    </div>
                    <div id="location-address">
                        123 Country Lane, San Jose, CA
                    </div>
                </div>
            </div>
        </div>

        <div id="footer">
            <p>Copyright <span>&copy;</span> 2022 John West</p>
            <a href="https://github.com/contactjw" target="_blank"><img src="./images/icons8-github.svg" alt="github icon" id="github-image"></a>
        </div> */