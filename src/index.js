import {createHome, createDiv} from "./home";

let contentDiv = document.querySelector('#content');

console.log('inside of index.js')

//initialize the site.. always need to run this first
createNavBar();
createHome();
createFooter();





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