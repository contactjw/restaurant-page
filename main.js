/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createContact() {
    let main = document.querySelector('#main');
    let contentContainer = document.querySelector('#content-container');
    contentContainer.innerHTML = '';

    let contactContainer = createDiv('contact-container');

    // phone-number
    let phoneNumber = createDiv('phone-number');
    phoneNumber.innerHTML = 'Phone: (925) 439-43xx';

    // address
    let contactAddress = createDiv('contact-address');
    contactAddress.innerHTML = '123 Country Lane, San Jose, CA';

    // map image
    let contactImage = document.createElement('img');
    contactImage.setAttribute('src', './images/Screen Shot 2022-04-09 at 11.45.52 AM.png');
    contactImage.setAttribute('alt', 'maps location image');
    contactImage.setAttribute('id', 'contact-image');

    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(contactAddress);
    contactContainer.appendChild(contactImage);

    contentContainer.appendChild(contactContainer);
}


function createDiv(idName) {
    let div = document.createElement('div');
    div.setAttribute('id', idName);
    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });

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




        

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createMenu() {
    console.log('youre inside menu');
    let main = document.querySelector('#main');
    let contentContainer = document.querySelector('#content-container');
    contentContainer.innerHTML = '';

    // menu title
    let menuTitle = createDiv('menu-title');
    menuTitle.innerHTML = 'Pizzas';

    // create pizzas section
    let pizzasGrid = createDiv('pizzas-grid');

    //Ham and Mushroom Pizza
    let hamAndMushroom = document.createElement('div');
    hamAndMushroom.setAttribute('class', 'pizza');
    let hamImage = document.createElement('img');
    hamImage.setAttribute('src', './images/pizza-png-19335.png');
    hamImage.setAttribute('alt', 'ham and mushroom pizza');
    let hamTitle = document.createElement('div');
    hamTitle.setAttribute('class', 'pizza-title');
    hamTitle.innerHTML = 'Mushroom';
    let hamDescription = document.createElement('div');
    hamDescription.setAttribute('class', 'pizza-description');
    hamDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, topped with ham and mushrooms.';

    hamAndMushroom.appendChild(hamImage);
    hamAndMushroom.appendChild(hamTitle);
    hamAndMushroom.appendChild(hamDescription);

    //Italian Combo
    let italianCombo = document.createElement('div');
    italianCombo.setAttribute('class', 'pizza');
    let italianImage = document.createElement('img');
    italianImage.setAttribute('src', './images/pizza-png-19323.png');
    italianImage.setAttribute('alt', 'combo pizza');
    let italianTitle = document.createElement('div');
    italianTitle.setAttribute('class', 'pizza-title');
    italianTitle.innerHTML = 'Italian Combo';
    let italianDescription = document.createElement('div');
    italianDescription.setAttribute('class', 'pizza-description');
    italianDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, topped with black olives, tomatoes, mushrooms, and green peppers.';

    italianCombo.appendChild(italianImage);
    italianCombo.appendChild(italianTitle);
    italianCombo.appendChild(italianDescription);


    //Meat lovers pizza
    let meatLovers = document.createElement('div');
    meatLovers.setAttribute('class', 'pizza');
    let meatImage = document.createElement('img');
    meatImage.setAttribute('src', './images/pizza-png-19321.png');
    meatImage.setAttribute('alt', 'meat lovers pizza');
    let meatTitle = document.createElement('div');
    meatTitle.setAttribute('class', 'pizza-title');
    meatTitle.innerHTML = 'Meat Lovers';
    let meatDescription = document.createElement('div');
    meatDescription.setAttribute('class', 'pizza-description');
    meatDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, topped with basil, mushrooms, ham, sausage, and jalapenos.';

    meatLovers.appendChild(meatImage);
    meatLovers.appendChild(meatTitle);
    meatLovers.appendChild(meatDescription);


    // Kids pizza
    let kidsPizza = document.createElement('div');
    kidsPizza.setAttribute('class', 'pizza');
    let kidsImage = document.createElement('img');
    kidsImage.setAttribute('src', './images/pizza-icon-25584.png');
    kidsImage.setAttribute('alt', 'kids pizza');
    let kidsTitle = document.createElement('div');
    kidsTitle.setAttribute('class', 'pizza-title');
    kidsTitle.innerHTML = 'Kids Personal Pizza';
    let kidsDescription = document.createElement('div');
    kidsDescription.setAttribute('class', 'pizza-description');
    kidsDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, choice of (1) topping for kids.';

    kidsPizza.appendChild(kidsImage);
    kidsPizza.appendChild(kidsTitle);
    kidsPizza.appendChild(kidsDescription);

    pizzasGrid.appendChild(hamAndMushroom);
    pizzasGrid.appendChild(italianCombo);
    pizzasGrid.appendChild(meatLovers);
    pizzasGrid.appendChild(kidsPizza);

    contentContainer.appendChild(menuTitle);
    contentContainer.appendChild(pizzasGrid);

}



function createDiv(idName) {
    let div = document.createElement('div');
    div.setAttribute('id', idName);
    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




let contentDiv = document.querySelector('#content');

console.log('inside of index.js')

// initialize the website
createNavBar();
createMain();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
createFooter();


// tab event listeners and selectors
let homeButton = document.querySelector('#home');
let menuButton = document.querySelector('#menu');
let contactButton = document.querySelector('#contact');

// maybe add logic to check if home is already open
homeButton.addEventListener('click', () => {
    console.log('you clicked home');
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
});

menuButton.addEventListener('click', () => {
    console.log('you clicked menu');
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

contactButton.addEventListener('click', () => {
    console.log('you clicked contact');
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
});



// initialize website functions
function createMain() {
    let main = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('main');
    let contentContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('content-container');
    contentDiv.appendChild(main);
    contentDiv.appendChild(contentContainer);
}


function createNavBar() {
    let navDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('navbar');
    let divHome = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('home');
    divHome.innerHTML = 'Home';
    let divMenu = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('menu');
    divMenu.innerHTML = 'Menu';
    let divContact = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contact');
    divContact.innerHTML = 'Contact';


    navDiv.appendChild(divHome);
    navDiv.appendChild(divMenu);
    navDiv.appendChild(divContact);

    contentDiv.appendChild(navDiv);
}


function createFooter() {
    let footer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('footer');
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHK0I7O0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7OztVQ3RHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ2I7QUFDTTs7QUFFdEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0EsZUFBZSxnREFBUztBQUN4QiwyQkFBMkIsZ0RBQVM7QUFDcEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGlCQUFpQixnREFBUztBQUMxQixrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQSxrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQSxxQkFBcUIsZ0RBQVM7QUFDOUI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLGlCQUFpQixnREFBUztBQUMxQjtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gY3JlYXRlRGl2KCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gcGhvbmUtbnVtYmVyXG4gICAgbGV0IHBob25lTnVtYmVyID0gY3JlYXRlRGl2KCdwaG9uZS1udW1iZXInKTtcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnUGhvbmU6ICg5MjUpIDQzOS00M3h4JztcblxuICAgIC8vIGFkZHJlc3NcbiAgICBsZXQgY29udGFjdEFkZHJlc3MgPSBjcmVhdGVEaXYoJ2NvbnRhY3QtYWRkcmVzcycpO1xuICAgIGNvbnRhY3RBZGRyZXNzLmlubmVySFRNTCA9ICcxMjMgQ291bnRyeSBMYW5lLCBTYW4gSm9zZSwgQ0EnO1xuXG4gICAgLy8gbWFwIGltYWdlXG4gICAgbGV0IGNvbnRhY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnRhY3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9TY3JlZW4gU2hvdCAyMDIyLTA0LTA5IGF0IDExLjQ1LjUyIEFNLnBuZycpO1xuICAgIGNvbnRhY3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdtYXBzIGxvY2F0aW9uIGltYWdlJyk7XG4gICAgY29udGFjdEltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1pbWFnZScpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW1hZ2UpO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWROYW1lKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0O1xuXG4iLCJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgLy8gcmVzdGF1cmFudCB0aXRsZSBhbmQgaW1hZ2VcbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHJlc3RhdXJhbnROYW1lQ29udGFpbmVyID0gY3JlYXRlRGl2KCdyZXN0YXVyYW50LW5hbWUtY29udGFpbmVyJyk7XG4gICAgcmVzdGF1cmFudE5hbWVDb250YWluZXIuaW5uZXJIVE1MID0gJ0plYW4tUGF1bFxcJ3MgUGl6emVyaWEnO1xuICAgIGxldCBtYWluSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWltYWdlJyk7XG4gICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL2hvamEtc3R1ZGlvLVRodzNubGVPM2NNLXVuc3BsYXNoLmpwZWcnKTtcbiAgICBtYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnaW1hZ2Ugb2YgcGl6emEgY2hlZicpO1xuICAgIFxuICAgIC8vIHJldmlldyBzZWN0aW9uXG4gICAgbGV0IHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4tc21hbGwtY29udGFpbmVyJyk7XG4gICAgbGV0IHJldmlld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV2aWV3RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXZpZXctZGVzY3JpcHRpb24nKTtcbiAgICByZXZpZXdEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnTXkgcGFydG5lciBhbmQgSSBvcmRlcmVkIHRoZSAxMlwiIFBlcHBlcm9uaSAoJDE3KSBhbmQgQ0JSIChjaGlja2VuIGJhY29uIHJhbmNoKSAoJDIzKSBwaXp6YXMuIEl0IGlzIHJlbGF0aXZlbHkgcHJpY3kgaGVyZSBjb21wYXJlZCB0byBvdGhlciBwaXp6YSBwbGFjZXMuIEJ1dCwgdGhleSBkZWZpbml0ZWx5IHdpbiB3aXRoIHRoZSBxdWFsaXR5IG9mIHRoZWlyIHBpenphcyEgSWYgeW91XFwncmUgYSBmYW4gb2YgaW1wcmVzc2l2ZSBjaGVlc2UgcHVsbHMsIHRoaXMgcGxhY2UgY2VydGFpbmx5IGRvZXNuXFwndCBkaXNhcHBvaW50LiBUaGUgY3J1c3Qgd2FzIHN1cGVyIGZyZXNoIGFuZCBmbHVmZnkgd2l0aCBhIHNsaWdodCBjcnVuY2guJztcbiAgICBsZXQgcmV2aWV3UGVyc29uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld1BlcnNvbk5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXZpZXctcGVyc29uLW5hbWUnKTtcbiAgICByZXZpZXdQZXJzb25OYW1lLmlubmVySFRNTCA9ICctIE1hcnR5IEJhbmtzJztcbiAgICByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3RGVzY3JpcHRpb24pO1xuICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdQZXJzb25OYW1lKTtcblxuICAgIC8vIGhvdXJzIHNlY3Rpb25cbiAgICBsZXQgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4tc21hbGwtY29udGFpbmVyJyk7XG4gICAgbGV0IGhvdXJzVGl0bGUgPSBjcmVhdGVEaXYoJ2hvdXJzLXRpdGxlJyk7XG4gICAgaG91cnNUaXRsZS5pbm5lckhUTUwgPSAnSG91cnMnO1xuICAgIGxldCB3ZWVrbHlIb3VycyA9IGNyZWF0ZURpdignd2Vla2x5LWhvdXJzJyk7XG4gICAgbGV0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1bmRheS5pbm5lckhUTUwgPSAnU3VuZGF5OiA5YW0gLSA4cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHN1bmRheSk7XG4gICAgbGV0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vbmRheS5pbm5lckhUTUwgPSAnTW9uZGF5OiA4YW0gLSA5cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKG1vbmRheSk7XG4gICAgbGV0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0dWVzZGF5LmlubmVySFRNTCA9ICdUdWVzZGF5OiA4YW0gLSA5cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuICAgIGxldCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWRuZXNkYXkuaW5uZXJIVE1MID0gJ1dlZG5lc2RheTogOGFtIC0gMTBwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5KTtcbiAgICBsZXQgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aHVyc2RheS5pbm5lckhUTUwgPSAnVGh1cnNkYXk6IDhhbSAtIDEwcG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHRodXJzZGF5KTtcbiAgICBsZXQgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJpZGF5LmlubmVySFRNTCA9ICdGcmlkYXk6IDhhbSAtIDEwcG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgbGV0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F0dXJkYXkuaW5uZXJIVE1MID0gJ1NhdHVyZGF5OiA5YW0gLSA4cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcblxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtseUhvdXJzKTtcbiAgICBcbiAgICAvLyBsb2NhdGlvbiBzZWN0aW9uXG4gICAgbGV0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXNtYWxsLWNvbnRhaW5lcicpO1xuICAgIGxldCBsb2NhdGlvblRpdGxlID0gY3JlYXRlRGl2KCdsb2NhdGlvbi10aXRsZScpO1xuICAgIGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcbiAgICBsZXQgbG9jYXRpb25BZGRyZXNzID0gY3JlYXRlRGl2KCdsb2NhdGlvbi1hZGRyZXNzJyk7XG4gICAgbG9jYXRpb25BZGRyZXNzLmlubmVySFRNTCA9ICcxMjMgQ291bnRyeSBMYW5lLCBTYW4gSm9zZSwgQ0EnO1xuICAgIFxuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQWRkcmVzcyk7XG5cblxuICAgIC8vIGFwcGVuZCBhbGwgc2VjdGlvbnMgdG8gY29udGVudENvbnRhaW5lclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZUNvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW1hZ2UpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3Q29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzQ29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWROYW1lKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5cbmV4cG9ydCB7Y3JlYXRlSG9tZSwgY3JlYXRlRGl2fTtcblxuICAgICAgICAiLCJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc29sZS5sb2coJ3lvdXJlIGluc2lkZSBtZW51Jyk7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vIG1lbnUgdGl0bGVcbiAgICBsZXQgbWVudVRpdGxlID0gY3JlYXRlRGl2KCdtZW51LXRpdGxlJyk7XG4gICAgbWVudVRpdGxlLmlubmVySFRNTCA9ICdQaXp6YXMnO1xuXG4gICAgLy8gY3JlYXRlIHBpenphcyBzZWN0aW9uXG4gICAgbGV0IHBpenphc0dyaWQgPSBjcmVhdGVEaXYoJ3Bpenphcy1ncmlkJyk7XG5cbiAgICAvL0hhbSBhbmQgTXVzaHJvb20gUGl6emFcbiAgICBsZXQgaGFtQW5kTXVzaHJvb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoYW1BbmRNdXNocm9vbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphJyk7XG4gICAgbGV0IGhhbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGFtSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvcGl6emEtcG5nLTE5MzM1LnBuZycpO1xuICAgIGhhbUltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2hhbSBhbmQgbXVzaHJvb20gcGl6emEnKTtcbiAgICBsZXQgaGFtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoYW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLXRpdGxlJyk7XG4gICAgaGFtVGl0bGUuaW5uZXJIVE1MID0gJ011c2hyb29tJztcbiAgICBsZXQgaGFtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoYW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLWRlc2NyaXB0aW9uJyk7XG4gICAgaGFtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0FnZWQgbW96YXJlbGxhIGNoZWVzZSB3aXRoIG91ciBob3VzZSBtYWRlIGdhcmxpYyB0b21hdG8gc2F1Y2UsIHRvcHBlZCB3aXRoIGhhbSBhbmQgbXVzaHJvb21zLic7XG5cbiAgICBoYW1BbmRNdXNocm9vbS5hcHBlbmRDaGlsZChoYW1JbWFnZSk7XG4gICAgaGFtQW5kTXVzaHJvb20uYXBwZW5kQ2hpbGQoaGFtVGl0bGUpO1xuICAgIGhhbUFuZE11c2hyb29tLmFwcGVuZENoaWxkKGhhbURlc2NyaXB0aW9uKTtcblxuICAgIC8vSXRhbGlhbiBDb21ib1xuICAgIGxldCBpdGFsaWFuQ29tYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGFsaWFuQ29tYm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXp6YScpO1xuICAgIGxldCBpdGFsaWFuSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGFsaWFuSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvcGl6emEtcG5nLTE5MzIzLnBuZycpO1xuICAgIGl0YWxpYW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjb21ibyBwaXp6YScpO1xuICAgIGxldCBpdGFsaWFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGFsaWFuVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXp6YS10aXRsZScpO1xuICAgIGl0YWxpYW5UaXRsZS5pbm5lckhUTUwgPSAnSXRhbGlhbiBDb21ibyc7XG4gICAgbGV0IGl0YWxpYW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0YWxpYW5EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLWRlc2NyaXB0aW9uJyk7XG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdBZ2VkIG1vemFyZWxsYSBjaGVlc2Ugd2l0aCBvdXIgaG91c2UgbWFkZSBnYXJsaWMgdG9tYXRvIHNhdWNlLCB0b3BwZWQgd2l0aCBibGFjayBvbGl2ZXMsIHRvbWF0b2VzLCBtdXNocm9vbXMsIGFuZCBncmVlbiBwZXBwZXJzLic7XG5cbiAgICBpdGFsaWFuQ29tYm8uYXBwZW5kQ2hpbGQoaXRhbGlhbkltYWdlKTtcbiAgICBpdGFsaWFuQ29tYm8uYXBwZW5kQ2hpbGQoaXRhbGlhblRpdGxlKTtcbiAgICBpdGFsaWFuQ29tYm8uYXBwZW5kQ2hpbGQoaXRhbGlhbkRlc2NyaXB0aW9uKTtcblxuXG4gICAgLy9NZWF0IGxvdmVycyBwaXp6YVxuICAgIGxldCBtZWF0TG92ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVhdExvdmVycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphJyk7XG4gICAgbGV0IG1lYXRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lYXRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9waXp6YS1wbmctMTkzMjEucG5nJyk7XG4gICAgbWVhdEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ21lYXQgbG92ZXJzIHBpenphJyk7XG4gICAgbGV0IG1lYXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLXRpdGxlJyk7XG4gICAgbWVhdFRpdGxlLmlubmVySFRNTCA9ICdNZWF0IExvdmVycyc7XG4gICAgbGV0IG1lYXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLWRlc2NyaXB0aW9uJyk7XG4gICAgbWVhdERlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdBZ2VkIG1vemFyZWxsYSBjaGVlc2Ugd2l0aCBvdXIgaG91c2UgbWFkZSBnYXJsaWMgdG9tYXRvIHNhdWNlLCB0b3BwZWQgd2l0aCBiYXNpbCwgbXVzaHJvb21zLCBoYW0sIHNhdXNhZ2UsIGFuZCBqYWxhcGVub3MuJztcblxuICAgIG1lYXRMb3ZlcnMuYXBwZW5kQ2hpbGQobWVhdEltYWdlKTtcbiAgICBtZWF0TG92ZXJzLmFwcGVuZENoaWxkKG1lYXRUaXRsZSk7XG4gICAgbWVhdExvdmVycy5hcHBlbmRDaGlsZChtZWF0RGVzY3JpcHRpb24pO1xuXG5cbiAgICAvLyBLaWRzIHBpenphXG4gICAgbGV0IGtpZHNQaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtpZHNQaXp6YS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphJyk7XG4gICAgbGV0IGtpZHNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGtpZHNJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9waXp6YS1pY29uLTI1NTg0LnBuZycpO1xuICAgIGtpZHNJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdraWRzIHBpenphJyk7XG4gICAgbGV0IGtpZHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtpZHNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLXRpdGxlJyk7XG4gICAga2lkc1RpdGxlLmlubmVySFRNTCA9ICdLaWRzIFBlcnNvbmFsIFBpenphJztcbiAgICBsZXQga2lkc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2lkc0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEtZGVzY3JpcHRpb24nKTtcbiAgICBraWRzRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0FnZWQgbW96YXJlbGxhIGNoZWVzZSB3aXRoIG91ciBob3VzZSBtYWRlIGdhcmxpYyB0b21hdG8gc2F1Y2UsIGNob2ljZSBvZiAoMSkgdG9wcGluZyBmb3Iga2lkcy4nO1xuXG4gICAga2lkc1BpenphLmFwcGVuZENoaWxkKGtpZHNJbWFnZSk7XG4gICAga2lkc1BpenphLmFwcGVuZENoaWxkKGtpZHNUaXRsZSk7XG4gICAga2lkc1BpenphLmFwcGVuZENoaWxkKGtpZHNEZXNjcmlwdGlvbik7XG5cbiAgICBwaXp6YXNHcmlkLmFwcGVuZENoaWxkKGhhbUFuZE11c2hyb29tKTtcbiAgICBwaXp6YXNHcmlkLmFwcGVuZENoaWxkKGl0YWxpYW5Db21ibyk7XG4gICAgcGl6emFzR3JpZC5hcHBlbmRDaGlsZChtZWF0TG92ZXJzKTtcbiAgICBwaXp6YXNHcmlkLmFwcGVuZENoaWxkKGtpZHNQaXp6YSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwaXp6YXNHcmlkKTtcblxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGlkTmFtZSkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZUhvbWUsIGNyZWF0ZURpdn0gZnJvbSAnLi9ob21lJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnNvbGUubG9nKCdpbnNpZGUgb2YgaW5kZXguanMnKVxuXG4vLyBpbml0aWFsaXplIHRoZSB3ZWJzaXRlXG5jcmVhdGVOYXZCYXIoKTtcbmNyZWF0ZU1haW4oKTtcbmNyZWF0ZUhvbWUoKTtcbmNyZWF0ZUZvb3RlcigpO1xuXG5cbi8vIHRhYiBldmVudCBsaXN0ZW5lcnMgYW5kIHNlbGVjdG9yc1xubGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xubGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xubGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuXG4vLyBtYXliZSBhZGQgbG9naWMgdG8gY2hlY2sgaWYgaG9tZSBpcyBhbHJlYWR5IG9wZW5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIGhvbWUnKTtcbiAgICBjcmVhdGVIb21lKCk7XG59KTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgbWVudScpO1xuICAgIGNyZWF0ZU1lbnUoKTtcbn0pO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd5b3UgY2xpY2tlZCBjb250YWN0Jyk7XG4gICAgY3JlYXRlQ29udGFjdCgpO1xufSk7XG5cblxuXG4vLyBpbml0aWFsaXplIHdlYnNpdGUgZnVuY3Rpb25zXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGxldCBtYWluID0gY3JlYXRlRGl2KCdtYWluJyk7XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVEaXYoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgICBsZXQgbmF2RGl2ID0gY3JlYXRlRGl2KCduYXZiYXInKTtcbiAgICBsZXQgZGl2SG9tZSA9IGNyZWF0ZURpdignaG9tZScpO1xuICAgIGRpdkhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGxldCBkaXZNZW51ID0gY3JlYXRlRGl2KCdtZW51Jyk7XG4gICAgZGl2TWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgbGV0IGRpdkNvbnRhY3QgPSBjcmVhdGVEaXYoJ2NvbnRhY3QnKTtcbiAgICBkaXZDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcblxuXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGRpdkhvbWUpO1xuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChkaXZNZW51KTtcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoZGl2Q29udGFjdCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkRpdik7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGxldCBmb290ZXIgPSBjcmVhdGVEaXYoJ2Zvb3RlcicpO1xuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9ICdDb3B5cmlnaHQgPHNwYW4+JmNvcHk7PC9zcGFuPiAyMDIyIEpvaG4gV2VzdCc7XG4gICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb250YWN0ancnKTtcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgYW5jaG9yLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4vaW1hZ2VzL2ljb25zOC1naXRodWIuc3ZnXCIgYWx0PVwiZ2l0aHViIGljb25cIiBpZD1cImdpdGh1Yi1pbWFnZVwiPic7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=