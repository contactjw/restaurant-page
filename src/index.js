import {createHome, createDiv} from './home';
import createMenu from './menu';
import createContact from './contact';

let contentDiv = document.querySelector('#content');

console.log('inside of index.js')

// initialize the website
createNavBar();
createMain();
createHome();
createFooter();


// tab event listeners and selectors
let homeButton = document.querySelector('#home');
let menuButton = document.querySelector('#menu');
let contactButton = document.querySelector('#contact');

// maybe add logic to check if home is already open
homeButton.addEventListener('click', () => {
    console.log('you clicked home');
    createHome();
});

menuButton.addEventListener('click', () => {
    console.log('you clicked menu');
    createMenu();
});

contactButton.addEventListener('click', () => {
    console.log('you clicked contact');
    createContact();
});



// initialize website functions
function createMain() {
    let main = createDiv('main');
    let contentContainer = createDiv('content-container');
    contentDiv.appendChild(main);
    contentDiv.appendChild(contentContainer);
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

    contentDiv.appendChild(navDiv);
}


function createFooter() {
    let footer = createDiv('footer');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = 'Copyright <span>&copy;</span> 2022 John West';
    let anchor = document.createElement('a');
    anchor.setAttribute('href', 'https://github.com/contactjw');
    anchor.setAttribute('target', '_blank');
    anchor.innerHTML = '<img src="./images/icons8-github.svg" alt="github icon" id="github-image">';

    footer.appendChild(paragraph);
    footer.appendChild(anchor);

    contentDiv.appendChild(footer);
}