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
    hamTitle.innerHTML = 'Ham and Mushroom';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHK0I7O0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7OztVQ3RHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ2I7QUFDTTs7QUFFdEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0EsZUFBZSxnREFBUztBQUN4QiwyQkFBMkIsZ0RBQVM7QUFDcEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGlCQUFpQixnREFBUztBQUMxQixrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQSxrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQSxxQkFBcUIsZ0RBQVM7QUFDOUI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLGlCQUFpQixnREFBUztBQUMxQjtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gY3JlYXRlRGl2KCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gcGhvbmUtbnVtYmVyXG4gICAgbGV0IHBob25lTnVtYmVyID0gY3JlYXRlRGl2KCdwaG9uZS1udW1iZXInKTtcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnUGhvbmU6ICg5MjUpIDQzOS00M3h4JztcblxuICAgIC8vIGFkZHJlc3NcbiAgICBsZXQgY29udGFjdEFkZHJlc3MgPSBjcmVhdGVEaXYoJ2NvbnRhY3QtYWRkcmVzcycpO1xuICAgIGNvbnRhY3RBZGRyZXNzLmlubmVySFRNTCA9ICcxMjMgQ291bnRyeSBMYW5lLCBTYW4gSm9zZSwgQ0EnO1xuXG4gICAgLy8gbWFwIGltYWdlXG4gICAgbGV0IGNvbnRhY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnRhY3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9TY3JlZW4gU2hvdCAyMDIyLTA0LTA5IGF0IDExLjQ1LjUyIEFNLnBuZycpO1xuICAgIGNvbnRhY3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdtYXBzIGxvY2F0aW9uIGltYWdlJyk7XG4gICAgY29udGFjdEltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1pbWFnZScpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW1hZ2UpO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWROYW1lKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0O1xuXG4iLCJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgLy8gcmVzdGF1cmFudCB0aXRsZSBhbmQgaW1hZ2VcbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IHJlc3RhdXJhbnROYW1lQ29udGFpbmVyID0gY3JlYXRlRGl2KCdyZXN0YXVyYW50LW5hbWUtY29udGFpbmVyJyk7XG4gICAgcmVzdGF1cmFudE5hbWVDb250YWluZXIuaW5uZXJIVE1MID0gJ0plYW4tUGF1bFxcJ3MgUGl6emVyaWEnO1xuICAgIGxldCBtYWluSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLWltYWdlJyk7XG4gICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL2hvamEtc3R1ZGlvLVRodzNubGVPM2NNLXVuc3BsYXNoLmpwZWcnKTtcbiAgICBtYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnaW1hZ2Ugb2YgcGl6emEgY2hlZicpO1xuICAgIFxuICAgIC8vIHJldmlldyBzZWN0aW9uXG4gICAgbGV0IHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4tc21hbGwtY29udGFpbmVyJyk7XG4gICAgbGV0IHJldmlld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV2aWV3RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXZpZXctZGVzY3JpcHRpb24nKTtcbiAgICByZXZpZXdEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnTXkgcGFydG5lciBhbmQgSSBvcmRlcmVkIHRoZSAxMlwiIFBlcHBlcm9uaSAoJDE3KSBhbmQgQ0JSIChjaGlja2VuIGJhY29uIHJhbmNoKSAoJDIzKSBwaXp6YXMuIEl0IGlzIHJlbGF0aXZlbHkgcHJpY3kgaGVyZSBjb21wYXJlZCB0byBvdGhlciBwaXp6YSBwbGFjZXMuIEJ1dCwgdGhleSBkZWZpbml0ZWx5IHdpbiB3aXRoIHRoZSBxdWFsaXR5IG9mIHRoZWlyIHBpenphcyEgSWYgeW91XFwncmUgYSBmYW4gb2YgaW1wcmVzc2l2ZSBjaGVlc2UgcHVsbHMsIHRoaXMgcGxhY2UgY2VydGFpbmx5IGRvZXNuXFwndCBkaXNhcHBvaW50LiBUaGUgY3J1c3Qgd2FzIHN1cGVyIGZyZXNoIGFuZCBmbHVmZnkgd2l0aCBhIHNsaWdodCBjcnVuY2guJztcbiAgICBsZXQgcmV2aWV3UGVyc29uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld1BlcnNvbk5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXZpZXctcGVyc29uLW5hbWUnKTtcbiAgICByZXZpZXdQZXJzb25OYW1lLmlubmVySFRNTCA9ICctIE1hcnR5IEJhbmtzJztcbiAgICByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3RGVzY3JpcHRpb24pO1xuICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdQZXJzb25OYW1lKTtcblxuICAgIC8vIGhvdXJzIHNlY3Rpb25cbiAgICBsZXQgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4tc21hbGwtY29udGFpbmVyJyk7XG4gICAgbGV0IGhvdXJzVGl0bGUgPSBjcmVhdGVEaXYoJ2hvdXJzLXRpdGxlJyk7XG4gICAgaG91cnNUaXRsZS5pbm5lckhUTUwgPSAnSG91cnMnO1xuICAgIGxldCB3ZWVrbHlIb3VycyA9IGNyZWF0ZURpdignd2Vla2x5LWhvdXJzJyk7XG4gICAgbGV0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1bmRheS5pbm5lckhUTUwgPSAnU3VuZGF5OiA5YW0gLSA4cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHN1bmRheSk7XG4gICAgbGV0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vbmRheS5pbm5lckhUTUwgPSAnTW9uZGF5OiA4YW0gLSA5cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKG1vbmRheSk7XG4gICAgbGV0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0dWVzZGF5LmlubmVySFRNTCA9ICdUdWVzZGF5OiA4YW0gLSA5cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuICAgIGxldCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWRuZXNkYXkuaW5uZXJIVE1MID0gJ1dlZG5lc2RheTogOGFtIC0gMTBwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5KTtcbiAgICBsZXQgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aHVyc2RheS5pbm5lckhUTUwgPSAnVGh1cnNkYXk6IDhhbSAtIDEwcG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHRodXJzZGF5KTtcbiAgICBsZXQgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJpZGF5LmlubmVySFRNTCA9ICdGcmlkYXk6IDhhbSAtIDEwcG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgbGV0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2F0dXJkYXkuaW5uZXJIVE1MID0gJ1NhdHVyZGF5OiA5YW0gLSA4cG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcblxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtseUhvdXJzKTtcbiAgICBcbiAgICAvLyBsb2NhdGlvbiBzZWN0aW9uXG4gICAgbGV0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXNtYWxsLWNvbnRhaW5lcicpO1xuICAgIGxldCBsb2NhdGlvblRpdGxlID0gY3JlYXRlRGl2KCdsb2NhdGlvbi10aXRsZScpO1xuICAgIGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcbiAgICBsZXQgbG9jYXRpb25BZGRyZXNzID0gY3JlYXRlRGl2KCdsb2NhdGlvbi1hZGRyZXNzJyk7XG4gICAgbG9jYXRpb25BZGRyZXNzLmlubmVySFRNTCA9ICcxMjMgQ291bnRyeSBMYW5lLCBTYW4gSm9zZSwgQ0EnO1xuICAgIFxuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQWRkcmVzcyk7XG5cblxuICAgIC8vIGFwcGVuZCBhbGwgc2VjdGlvbnMgdG8gY29udGVudENvbnRhaW5lclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZUNvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW1hZ2UpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3Q29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzQ29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWROYW1lKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5cbmV4cG9ydCB7Y3JlYXRlSG9tZSwgY3JlYXRlRGl2fTtcblxuICAgICAgICAiLCJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc29sZS5sb2coJ3lvdXJlIGluc2lkZSBtZW51Jyk7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vIG1lbnUgdGl0bGVcbiAgICBsZXQgbWVudVRpdGxlID0gY3JlYXRlRGl2KCdtZW51LXRpdGxlJyk7XG4gICAgbWVudVRpdGxlLmlubmVySFRNTCA9ICdQaXp6YXMnO1xuXG4gICAgLy8gY3JlYXRlIHBpenphcyBzZWN0aW9uXG4gICAgbGV0IHBpenphc0dyaWQgPSBjcmVhdGVEaXYoJ3Bpenphcy1ncmlkJyk7XG5cbiAgICAvL0hhbSBhbmQgTXVzaHJvb20gUGl6emFcbiAgICBsZXQgaGFtQW5kTXVzaHJvb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoYW1BbmRNdXNocm9vbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphJyk7XG4gICAgbGV0IGhhbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGFtSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvcGl6emEtcG5nLTE5MzM1LnBuZycpO1xuICAgIGhhbUltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2hhbSBhbmQgbXVzaHJvb20gcGl6emEnKTtcbiAgICBsZXQgaGFtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoYW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLXRpdGxlJyk7XG4gICAgaGFtVGl0bGUuaW5uZXJIVE1MID0gJ0hhbSBhbmQgTXVzaHJvb20nO1xuICAgIGxldCBoYW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhhbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEtZGVzY3JpcHRpb24nKTtcbiAgICBoYW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnQWdlZCBtb3phcmVsbGEgY2hlZXNlIHdpdGggb3VyIGhvdXNlIG1hZGUgZ2FybGljIHRvbWF0byBzYXVjZSwgdG9wcGVkIHdpdGggaGFtIGFuZCBtdXNocm9vbXMuJztcblxuICAgIGhhbUFuZE11c2hyb29tLmFwcGVuZENoaWxkKGhhbUltYWdlKTtcbiAgICBoYW1BbmRNdXNocm9vbS5hcHBlbmRDaGlsZChoYW1UaXRsZSk7XG4gICAgaGFtQW5kTXVzaHJvb20uYXBwZW5kQ2hpbGQoaGFtRGVzY3JpcHRpb24pO1xuXG4gICAgLy9JdGFsaWFuIENvbWJvXG4gICAgbGV0IGl0YWxpYW5Db21ibyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0YWxpYW5Db21iby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphJyk7XG4gICAgbGV0IGl0YWxpYW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGl0YWxpYW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9waXp6YS1wbmctMTkzMjMucG5nJyk7XG4gICAgaXRhbGlhbkltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NvbWJvIHBpenphJyk7XG4gICAgbGV0IGl0YWxpYW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0YWxpYW5UaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLXRpdGxlJyk7XG4gICAgaXRhbGlhblRpdGxlLmlubmVySFRNTCA9ICdJdGFsaWFuIENvbWJvJztcbiAgICBsZXQgaXRhbGlhbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEtZGVzY3JpcHRpb24nKTtcbiAgICBpdGFsaWFuRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0FnZWQgbW96YXJlbGxhIGNoZWVzZSB3aXRoIG91ciBob3VzZSBtYWRlIGdhcmxpYyB0b21hdG8gc2F1Y2UsIHRvcHBlZCB3aXRoIGJsYWNrIG9saXZlcywgdG9tYXRvZXMsIG11c2hyb29tcywgYW5kIGdyZWVuIHBlcHBlcnMuJztcblxuICAgIGl0YWxpYW5Db21iby5hcHBlbmRDaGlsZChpdGFsaWFuSW1hZ2UpO1xuICAgIGl0YWxpYW5Db21iby5hcHBlbmRDaGlsZChpdGFsaWFuVGl0bGUpO1xuICAgIGl0YWxpYW5Db21iby5hcHBlbmRDaGlsZChpdGFsaWFuRGVzY3JpcHRpb24pO1xuXG5cbiAgICAvL01lYXQgbG92ZXJzIHBpenphXG4gICAgbGV0IG1lYXRMb3ZlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZWF0TG92ZXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEnKTtcbiAgICBsZXQgbWVhdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVhdEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL3BpenphLXBuZy0xOTMyMS5wbmcnKTtcbiAgICBtZWF0SW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnbWVhdCBsb3ZlcnMgcGl6emEnKTtcbiAgICBsZXQgbWVhdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVhdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEtdGl0bGUnKTtcbiAgICBtZWF0VGl0bGUuaW5uZXJIVE1MID0gJ01lYXQgTG92ZXJzJztcbiAgICBsZXQgbWVhdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVhdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEtZGVzY3JpcHRpb24nKTtcbiAgICBtZWF0RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0FnZWQgbW96YXJlbGxhIGNoZWVzZSB3aXRoIG91ciBob3VzZSBtYWRlIGdhcmxpYyB0b21hdG8gc2F1Y2UsIHRvcHBlZCB3aXRoIGJhc2lsLCBtdXNocm9vbXMsIGhhbSwgc2F1c2FnZSwgYW5kIGphbGFwZW5vcy4nO1xuXG4gICAgbWVhdExvdmVycy5hcHBlbmRDaGlsZChtZWF0SW1hZ2UpO1xuICAgIG1lYXRMb3ZlcnMuYXBwZW5kQ2hpbGQobWVhdFRpdGxlKTtcbiAgICBtZWF0TG92ZXJzLmFwcGVuZENoaWxkKG1lYXREZXNjcmlwdGlvbik7XG5cblxuICAgIC8vIEtpZHMgcGl6emFcbiAgICBsZXQga2lkc1BpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2lkc1BpenphLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEnKTtcbiAgICBsZXQga2lkc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAga2lkc0ltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL3BpenphLWljb24tMjU1ODQucG5nJyk7XG4gICAga2lkc0ltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2tpZHMgcGl6emEnKTtcbiAgICBsZXQga2lkc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2lkc1RpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEtdGl0bGUnKTtcbiAgICBraWRzVGl0bGUuaW5uZXJIVE1MID0gJ0tpZHMgUGVyc29uYWwgUGl6emEnO1xuICAgIGxldCBraWRzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBraWRzRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXp6YS1kZXNjcmlwdGlvbicpO1xuICAgIGtpZHNEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnQWdlZCBtb3phcmVsbGEgY2hlZXNlIHdpdGggb3VyIGhvdXNlIG1hZGUgZ2FybGljIHRvbWF0byBzYXVjZSwgY2hvaWNlIG9mICgxKSB0b3BwaW5nIGZvciBraWRzLic7XG5cbiAgICBraWRzUGl6emEuYXBwZW5kQ2hpbGQoa2lkc0ltYWdlKTtcbiAgICBraWRzUGl6emEuYXBwZW5kQ2hpbGQoa2lkc1RpdGxlKTtcbiAgICBraWRzUGl6emEuYXBwZW5kQ2hpbGQoa2lkc0Rlc2NyaXB0aW9uKTtcblxuICAgIHBpenphc0dyaWQuYXBwZW5kQ2hpbGQoaGFtQW5kTXVzaHJvb20pO1xuICAgIHBpenphc0dyaWQuYXBwZW5kQ2hpbGQoaXRhbGlhbkNvbWJvKTtcbiAgICBwaXp6YXNHcmlkLmFwcGVuZENoaWxkKG1lYXRMb3ZlcnMpO1xuICAgIHBpenphc0dyaWQuYXBwZW5kQ2hpbGQoa2lkc1BpenphKTtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphc0dyaWQpO1xuXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWROYW1lKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlSG9tZSwgY3JlYXRlRGl2fSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29uc29sZS5sb2coJ2luc2lkZSBvZiBpbmRleC5qcycpXG5cbi8vIGluaXRpYWxpemUgdGhlIHdlYnNpdGVcbmNyZWF0ZU5hdkJhcigpO1xuY3JlYXRlTWFpbigpO1xuY3JlYXRlSG9tZSgpO1xuY3JlYXRlRm9vdGVyKCk7XG5cblxuLy8gdGFiIGV2ZW50IGxpc3RlbmVycyBhbmQgc2VsZWN0b3JzXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5sZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5cbi8vIG1heWJlIGFkZCBsb2dpYyB0byBjaGVjayBpZiBob21lIGlzIGFscmVhZHkgb3BlblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgaG9tZScpO1xuICAgIGNyZWF0ZUhvbWUoKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd5b3UgY2xpY2tlZCBtZW51Jyk7XG4gICAgY3JlYXRlTWVudSgpO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIGNvbnRhY3QnKTtcbiAgICBjcmVhdGVDb250YWN0KCk7XG59KTtcblxuXG5cbi8vIGluaXRpYWxpemUgd2Vic2l0ZSBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgbGV0IG1haW4gPSBjcmVhdGVEaXYoJ21haW4nKTtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZURpdignY29udGVudC1jb250YWluZXInKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICAgIGxldCBuYXZEaXYgPSBjcmVhdGVEaXYoJ25hdmJhcicpO1xuICAgIGxldCBkaXZIb21lID0gY3JlYXRlRGl2KCdob21lJyk7XG4gICAgZGl2SG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgbGV0IGRpdk1lbnUgPSBjcmVhdGVEaXYoJ21lbnUnKTtcbiAgICBkaXZNZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgICBsZXQgZGl2Q29udGFjdCA9IGNyZWF0ZURpdignY29udGFjdCcpO1xuICAgIGRpdkNvbnRhY3QuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuXG5cbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoZGl2SG9tZSk7XG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGRpdk1lbnUpO1xuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChkaXZDb250YWN0KTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2RGl2KTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgbGV0IGZvb3RlciA9IGNyZWF0ZURpdignZm9vdGVyJyk7XG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gJ0NvcHlyaWdodCA8c3Bhbj4mY29weTs8L3NwYW4+IDIwMjIgSm9obiBXZXN0JztcbiAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnRhY3RqdycpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICBhbmNob3IuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi9pbWFnZXMvaWNvbnM4LWdpdGh1Yi5zdmdcIiBhbHQ9XCJnaXRodWIgaWNvblwiIGlkPVwiZ2l0aHViLWltYWdlXCI+JztcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3IpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==