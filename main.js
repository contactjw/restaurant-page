/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



let contentDiv = document.querySelector('#content');

console.log('inside of index.js')

//it is running all of this code every single time you click a button
createNavBar();
createMain();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
createFooter();

let homeButton = document.querySelector('#home');
let menuButton = document.querySelector('#menu');
let contactButton = document.querySelector('#contact');



// maybe add logic to check if home is already open
homeButton.addEventListener('click', () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
    console.log('you clicked home');
});

menuButton.addEventListener('click', () => {
    console.log('you clicked menu');
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUcrQjs7QUFFL0I7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7O1VDdEcxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QztBQUNiOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2QsQ0FBQzs7Ozs7O0FBTUQ7QUFDQSxlQUFlLGdEQUFTO0FBQ3hCLDJCQUEyQixnREFBUztBQUNwQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsaUJBQWlCLGdEQUFTO0FBQzFCLGtCQUFrQixnREFBUztBQUMzQjtBQUNBLGtCQUFrQixnREFBUztBQUMzQjtBQUNBLHFCQUFxQixnREFBUztBQUM5Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZ0RBQVM7QUFDMUI7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWNvbnRhaW5lcicpO1xuICAgIC8vIHJlc3RhdXJhbnQgdGl0bGUgYW5kIGltYWdlXG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCByZXN0YXVyYW50TmFtZUNvbnRhaW5lciA9IGNyZWF0ZURpdigncmVzdGF1cmFudC1uYW1lLWNvbnRhaW5lcicpO1xuICAgIHJlc3RhdXJhbnROYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICdKZWFuLVBhdWxcXCdzIFBpenplcmlhJztcbiAgICBsZXQgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1pbWFnZScpO1xuICAgIG1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9ob2phLXN0dWRpby1UaHczbmxlTzNjTS11bnNwbGFzaC5qcGVnJyk7XG4gICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ltYWdlIG9mIHBpenphIGNoZWYnKTtcbiAgICBcbiAgICAvLyByZXZpZXcgc2VjdGlvblxuICAgIGxldCByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXdDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXNtYWxsLWNvbnRhaW5lcicpO1xuICAgIGxldCByZXZpZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmV2aWV3LWRlc2NyaXB0aW9uJyk7XG4gICAgcmV2aWV3RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ015IHBhcnRuZXIgYW5kIEkgb3JkZXJlZCB0aGUgMTJcIiBQZXBwZXJvbmkgKCQxNykgYW5kIENCUiAoY2hpY2tlbiBiYWNvbiByYW5jaCkgKCQyMykgcGl6emFzLiBJdCBpcyByZWxhdGl2ZWx5IHByaWN5IGhlcmUgY29tcGFyZWQgdG8gb3RoZXIgcGl6emEgcGxhY2VzLiBCdXQsIHRoZXkgZGVmaW5pdGVseSB3aW4gd2l0aCB0aGUgcXVhbGl0eSBvZiB0aGVpciBwaXp6YXMhIElmIHlvdVxcJ3JlIGEgZmFuIG9mIGltcHJlc3NpdmUgY2hlZXNlIHB1bGxzLCB0aGlzIHBsYWNlIGNlcnRhaW5seSBkb2VzblxcJ3QgZGlzYXBwb2ludC4gVGhlIGNydXN0IHdhcyBzdXBlciBmcmVzaCBhbmQgZmx1ZmZ5IHdpdGggYSBzbGlnaHQgY3J1bmNoLic7XG4gICAgbGV0IHJldmlld1BlcnNvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXdQZXJzb25OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmV2aWV3LXBlcnNvbi1uYW1lJyk7XG4gICAgcmV2aWV3UGVyc29uTmFtZS5pbm5lckhUTUwgPSAnLSBNYXJ0eSBCYW5rcyc7XG4gICAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0Rlc2NyaXB0aW9uKTtcbiAgICByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3UGVyc29uTmFtZSk7XG5cbiAgICAvLyBob3VycyBzZWN0aW9uXG4gICAgbGV0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXNtYWxsLWNvbnRhaW5lcicpO1xuICAgIGxldCBob3Vyc1RpdGxlID0gY3JlYXRlRGl2KCdob3Vycy10aXRsZScpO1xuICAgIGhvdXJzVGl0bGUuaW5uZXJIVE1MID0gJ0hvdXJzJztcbiAgICBsZXQgd2Vla2x5SG91cnMgPSBjcmVhdGVEaXYoJ3dlZWtseS1ob3VycycpO1xuICAgIGxldCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdW5kYXkuaW5uZXJIVE1MID0gJ1N1bmRheTogOWFtIC0gOHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChzdW5kYXkpO1xuICAgIGxldCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb25kYXkuaW5uZXJIVE1MID0gJ01vbmRheTogOGFtIC0gOXBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChtb25kYXkpO1xuICAgIGxldCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHVlc2RheS5pbm5lckhUTUwgPSAnVHVlc2RheTogOGFtIC0gOXBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZCh0dWVzZGF5KTtcbiAgICBsZXQgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VkbmVzZGF5LmlubmVySFRNTCA9ICdXZWRuZXNkYXk6IDhhbSAtIDEwcG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gICAgbGV0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGh1cnNkYXkuaW5uZXJIVE1MID0gJ1RodXJzZGF5OiA4YW0gLSAxMHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG4gICAgbGV0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZyaWRheS5pbm5lckhUTUwgPSAnRnJpZGF5OiA4YW0gLSAxMHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChmcmlkYXkpO1xuICAgIGxldCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhdHVyZGF5LmlubmVySFRNTCA9ICdTYXR1cmRheTogOWFtIC0gOHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheSk7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrbHlIb3Vycyk7XG4gICAgXG4gICAgLy8gbG9jYXRpb24gc2VjdGlvblxuICAgIGxldCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbi1zbWFsbC1jb250YWluZXInKTtcbiAgICBsZXQgbG9jYXRpb25UaXRsZSA9IGNyZWF0ZURpdignbG9jYXRpb24tdGl0bGUnKTtcbiAgICBsb2NhdGlvblRpdGxlLmlubmVySFRNTCA9ICdMb2NhdGlvbic7XG4gICAgbGV0IGxvY2F0aW9uQWRkcmVzcyA9IGNyZWF0ZURpdignbG9jYXRpb24tYWRkcmVzcycpO1xuICAgIGxvY2F0aW9uQWRkcmVzcy5pbm5lckhUTUwgPSAnMTIzIENvdW50cnkgTGFuZSwgU2FuIEpvc2UsIENBJztcbiAgICBcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkFkZHJlc3MpO1xuXG5cbiAgICAvLyBhcHBlbmQgYWxsIHNlY3Rpb25zIHRvIGNvbnRlbnRDb250YWluZXJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWVDb250YWluZXIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkltYWdlKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0NvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGlkTmFtZSkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuXG5leHBvcnQge2NyZWF0ZUhvbWUsIGNyZWF0ZURpdn07XG5cbiAgICAgICAgIiwiXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnNvbGUubG9nKCd5b3VyZSBpbnNpZGUgbWVudScpO1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvLyBtZW51IHRpdGxlXG4gICAgbGV0IG1lbnVUaXRsZSA9IGNyZWF0ZURpdignbWVudS10aXRsZScpO1xuICAgIG1lbnVUaXRsZS5pbm5lckhUTUwgPSAnUGl6emFzJztcblxuICAgIC8vIGNyZWF0ZSBwaXp6YXMgc2VjdGlvblxuICAgIGxldCBwaXp6YXNHcmlkID0gY3JlYXRlRGl2KCdwaXp6YXMtZ3JpZCcpO1xuXG4gICAgLy9IYW0gYW5kIE11c2hyb29tIFBpenphXG4gICAgbGV0IGhhbUFuZE11c2hyb29tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFtQW5kTXVzaHJvb20uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXp6YScpO1xuICAgIGxldCBoYW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhhbUltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL3BpenphLXBuZy0xOTMzNS5wbmcnKTtcbiAgICBoYW1JbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdoYW0gYW5kIG11c2hyb29tIHBpenphJyk7XG4gICAgbGV0IGhhbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFtVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXp6YS10aXRsZScpO1xuICAgIGhhbVRpdGxlLmlubmVySFRNTCA9ICdIYW0gYW5kIE11c2hyb29tJztcbiAgICBsZXQgaGFtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoYW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLWRlc2NyaXB0aW9uJyk7XG4gICAgaGFtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0FnZWQgbW96YXJlbGxhIGNoZWVzZSB3aXRoIG91ciBob3VzZSBtYWRlIGdhcmxpYyB0b21hdG8gc2F1Y2UsIHRvcHBlZCB3aXRoIGhhbSBhbmQgbXVzaHJvb21zLic7XG5cbiAgICBoYW1BbmRNdXNocm9vbS5hcHBlbmRDaGlsZChoYW1JbWFnZSk7XG4gICAgaGFtQW5kTXVzaHJvb20uYXBwZW5kQ2hpbGQoaGFtVGl0bGUpO1xuICAgIGhhbUFuZE11c2hyb29tLmFwcGVuZENoaWxkKGhhbURlc2NyaXB0aW9uKTtcblxuICAgIC8vSXRhbGlhbiBDb21ib1xuICAgIGxldCBpdGFsaWFuQ29tYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGFsaWFuQ29tYm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXp6YScpO1xuICAgIGxldCBpdGFsaWFuSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGFsaWFuSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvcGl6emEtcG5nLTE5MzIzLnBuZycpO1xuICAgIGl0YWxpYW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjb21ibyBwaXp6YScpO1xuICAgIGxldCBpdGFsaWFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGFsaWFuVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwaXp6YS10aXRsZScpO1xuICAgIGl0YWxpYW5UaXRsZS5pbm5lckhUTUwgPSAnSXRhbGlhbiBDb21ibyc7XG4gICAgbGV0IGl0YWxpYW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0YWxpYW5EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLWRlc2NyaXB0aW9uJyk7XG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdBZ2VkIG1vemFyZWxsYSBjaGVlc2Ugd2l0aCBvdXIgaG91c2UgbWFkZSBnYXJsaWMgdG9tYXRvIHNhdWNlLCB0b3BwZWQgd2l0aCBibGFjayBvbGl2ZXMsIHRvbWF0b2VzLCBtdXNocm9vbXMsIGFuZCBncmVlbiBwZXBwZXJzLic7XG5cbiAgICBpdGFsaWFuQ29tYm8uYXBwZW5kQ2hpbGQoaXRhbGlhbkltYWdlKTtcbiAgICBpdGFsaWFuQ29tYm8uYXBwZW5kQ2hpbGQoaXRhbGlhblRpdGxlKTtcbiAgICBpdGFsaWFuQ29tYm8uYXBwZW5kQ2hpbGQoaXRhbGlhbkRlc2NyaXB0aW9uKTtcblxuXG4gICAgLy9NZWF0IGxvdmVycyBwaXp6YVxuICAgIGxldCBtZWF0TG92ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVhdExvdmVycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphJyk7XG4gICAgbGV0IG1lYXRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lYXRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9waXp6YS1wbmctMTkzMjEucG5nJyk7XG4gICAgbWVhdEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ21lYXQgbG92ZXJzIHBpenphJyk7XG4gICAgbGV0IG1lYXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLXRpdGxlJyk7XG4gICAgbWVhdFRpdGxlLmlubmVySFRNTCA9ICdNZWF0IExvdmVycyc7XG4gICAgbGV0IG1lYXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lYXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLWRlc2NyaXB0aW9uJyk7XG4gICAgbWVhdERlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdBZ2VkIG1vemFyZWxsYSBjaGVlc2Ugd2l0aCBvdXIgaG91c2UgbWFkZSBnYXJsaWMgdG9tYXRvIHNhdWNlLCB0b3BwZWQgd2l0aCBiYXNpbCwgbXVzaHJvb21zLCBoYW0sIHNhdXNhZ2UsIGFuZCBqYWxhcGVub3MuJztcblxuICAgIG1lYXRMb3ZlcnMuYXBwZW5kQ2hpbGQobWVhdEltYWdlKTtcbiAgICBtZWF0TG92ZXJzLmFwcGVuZENoaWxkKG1lYXRUaXRsZSk7XG4gICAgbWVhdExvdmVycy5hcHBlbmRDaGlsZChtZWF0RGVzY3JpcHRpb24pO1xuXG5cbiAgICAvLyBLaWRzIHBpenphXG4gICAgbGV0IGtpZHNQaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtpZHNQaXp6YS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphJyk7XG4gICAgbGV0IGtpZHNJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGtpZHNJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9waXp6YS1pY29uLTI1NTg0LnBuZycpO1xuICAgIGtpZHNJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdraWRzIHBpenphJyk7XG4gICAgbGV0IGtpZHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGtpZHNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BpenphLXRpdGxlJyk7XG4gICAga2lkc1RpdGxlLmlubmVySFRNTCA9ICdLaWRzIFBlcnNvbmFsIFBpenphJztcbiAgICBsZXQga2lkc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAga2lkc0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGl6emEtZGVzY3JpcHRpb24nKTtcbiAgICBraWRzRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0FnZWQgbW96YXJlbGxhIGNoZWVzZSB3aXRoIG91ciBob3VzZSBtYWRlIGdhcmxpYyB0b21hdG8gc2F1Y2UsIGNob2ljZSBvZiAoMSkgdG9wcGluZyBmb3Iga2lkcy4nO1xuXG4gICAga2lkc1BpenphLmFwcGVuZENoaWxkKGtpZHNJbWFnZSk7XG4gICAga2lkc1BpenphLmFwcGVuZENoaWxkKGtpZHNUaXRsZSk7XG4gICAga2lkc1BpenphLmFwcGVuZENoaWxkKGtpZHNEZXNjcmlwdGlvbik7XG5cbiAgICBwaXp6YXNHcmlkLmFwcGVuZENoaWxkKGhhbUFuZE11c2hyb29tKTtcbiAgICBwaXp6YXNHcmlkLmFwcGVuZENoaWxkKGl0YWxpYW5Db21ibyk7XG4gICAgcGl6emFzR3JpZC5hcHBlbmRDaGlsZChtZWF0TG92ZXJzKTtcbiAgICBwaXp6YXNHcmlkLmFwcGVuZENoaWxkKGtpZHNQaXp6YSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwaXp6YXNHcmlkKTtcblxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGlkTmFtZSkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZUhvbWUsIGNyZWF0ZURpdn0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnNvbGUubG9nKCdpbnNpZGUgb2YgaW5kZXguanMnKVxuXG4vL2l0IGlzIHJ1bm5pbmcgYWxsIG9mIHRoaXMgY29kZSBldmVyeSBzaW5nbGUgdGltZSB5b3UgY2xpY2sgYSBidXR0b25cbmNyZWF0ZU5hdkJhcigpO1xuY3JlYXRlTWFpbigpO1xuY3JlYXRlSG9tZSgpO1xuY3JlYXRlRm9vdGVyKCk7XG5cbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbmxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcblxuXG5cbi8vIG1heWJlIGFkZCBsb2dpYyB0byBjaGVjayBpZiBob21lIGlzIGFscmVhZHkgb3BlblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVIb21lKCk7XG4gICAgY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIGhvbWUnKTtcbn0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd5b3UgY2xpY2tlZCBtZW51Jyk7XG4gICAgY3JlYXRlTWVudSgpO1xufSk7XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBsZXQgbWFpbiA9IGNyZWF0ZURpdignbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRGl2KCdjb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gICAgbGV0IG5hdkRpdiA9IGNyZWF0ZURpdignbmF2YmFyJyk7XG4gICAgbGV0IGRpdkhvbWUgPSBjcmVhdGVEaXYoJ2hvbWUnKTtcbiAgICBkaXZIb21lLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBsZXQgZGl2TWVudSA9IGNyZWF0ZURpdignbWVudScpO1xuICAgIGRpdk1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIGxldCBkaXZDb250YWN0ID0gY3JlYXRlRGl2KCdjb250YWN0Jyk7XG4gICAgZGl2Q29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG5cblxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChkaXZIb21lKTtcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoZGl2TWVudSk7XG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGRpdkNvbnRhY3QpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgbGV0IGZvb3RlciA9IGNyZWF0ZURpdignZm9vdGVyJyk7XG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gJ0NvcHlyaWdodCA8c3Bhbj4mY29weTs8L3NwYW4+IDIwMjIgSm9obiBXZXN0JztcbiAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnRhY3RqdycpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICBhbmNob3IuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi9pbWFnZXMvaWNvbnM4LWdpdGh1Yi5zdmdcIiBhbHQ9XCJnaXRodWIgaWNvblwiIGlkPVwiZ2l0aHViLWltYWdlXCI+JztcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3IpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==