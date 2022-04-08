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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let contentDiv = document.querySelector('#content');


function createHome() {
    createNavBar();
    createMainContent();
    createFooter();
}

function createMainContent() {
    // restaurant title and image
    let main = createDiv('main');
    let contentContainer = createDiv('content-container');
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
    contentDiv.appendChild(main);
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


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


console.log('inside of index.js')
;(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlFQUFlLFVBQVUsRUFBQzs7O0FBRzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDaklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0M7O0FBRWhDO0FBQ0Esa0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY3JlYXRlTmF2QmFyKCk7XG4gICAgY3JlYXRlTWFpbkNvbnRlbnQoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gICAgLy8gcmVzdGF1cmFudCB0aXRsZSBhbmQgaW1hZ2VcbiAgICBsZXQgbWFpbiA9IGNyZWF0ZURpdignbWFpbicpO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRGl2KCdjb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGxldCByZXN0YXVyYW50TmFtZUNvbnRhaW5lciA9IGNyZWF0ZURpdigncmVzdGF1cmFudC1uYW1lLWNvbnRhaW5lcicpO1xuICAgIHJlc3RhdXJhbnROYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICdKZWFuLVBhdWxcXCdzIFBpenplcmlhJztcbiAgICBsZXQgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi1pbWFnZScpO1xuICAgIG1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9ob2phLXN0dWRpby1UaHczbmxlTzNjTS11bnNwbGFzaC5qcGVnJyk7XG4gICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ltYWdlIG9mIHBpenphIGNoZWYnKTtcbiAgICBcbiAgICAvLyByZXZpZXcgc2VjdGlvblxuICAgIGxldCByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXdDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXNtYWxsLWNvbnRhaW5lcicpO1xuICAgIGxldCByZXZpZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmV2aWV3LWRlc2NyaXB0aW9uJyk7XG4gICAgcmV2aWV3RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ015IHBhcnRuZXIgYW5kIEkgb3JkZXJlZCB0aGUgMTJcIiBQZXBwZXJvbmkgKCQxNykgYW5kIENCUiAoY2hpY2tlbiBiYWNvbiByYW5jaCkgKCQyMykgcGl6emFzLiBJdCBpcyByZWxhdGl2ZWx5IHByaWN5IGhlcmUgY29tcGFyZWQgdG8gb3RoZXIgcGl6emEgcGxhY2VzLiBCdXQsIHRoZXkgZGVmaW5pdGVseSB3aW4gd2l0aCB0aGUgcXVhbGl0eSBvZiB0aGVpciBwaXp6YXMhIElmIHlvdVxcJ3JlIGEgZmFuIG9mIGltcHJlc3NpdmUgY2hlZXNlIHB1bGxzLCB0aGlzIHBsYWNlIGNlcnRhaW5seSBkb2VzblxcJ3QgZGlzYXBwb2ludC4gVGhlIGNydXN0IHdhcyBzdXBlciBmcmVzaCBhbmQgZmx1ZmZ5IHdpdGggYSBzbGlnaHQgY3J1bmNoLic7XG4gICAgbGV0IHJldmlld1BlcnNvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXdQZXJzb25OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmV2aWV3LXBlcnNvbi1uYW1lJyk7XG4gICAgcmV2aWV3UGVyc29uTmFtZS5pbm5lckhUTUwgPSAnLSBNYXJ0eSBCYW5rcyc7XG4gICAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0Rlc2NyaXB0aW9uKTtcbiAgICByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3UGVyc29uTmFtZSk7XG5cbiAgICAvLyBob3VycyBzZWN0aW9uXG4gICAgbGV0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluLXNtYWxsLWNvbnRhaW5lcicpO1xuICAgIGxldCBob3Vyc1RpdGxlID0gY3JlYXRlRGl2KCdob3Vycy10aXRsZScpO1xuICAgIGhvdXJzVGl0bGUuaW5uZXJIVE1MID0gJ0hvdXJzJztcbiAgICBsZXQgd2Vla2x5SG91cnMgPSBjcmVhdGVEaXYoJ3dlZWtseS1ob3VycycpO1xuICAgIGxldCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdW5kYXkuaW5uZXJIVE1MID0gJ1N1bmRheTogOWFtIC0gOHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChzdW5kYXkpO1xuICAgIGxldCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb25kYXkuaW5uZXJIVE1MID0gJ01vbmRheTogOGFtIC0gOXBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChtb25kYXkpO1xuICAgIGxldCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHVlc2RheS5pbm5lckhUTUwgPSAnVHVlc2RheTogOGFtIC0gOXBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZCh0dWVzZGF5KTtcbiAgICBsZXQgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VkbmVzZGF5LmlubmVySFRNTCA9ICdXZWRuZXNkYXk6IDhhbSAtIDEwcG0nO1xuICAgIHdlZWtseUhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gICAgbGV0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGh1cnNkYXkuaW5uZXJIVE1MID0gJ1RodXJzZGF5OiA4YW0gLSAxMHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG4gICAgbGV0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZyaWRheS5pbm5lckhUTUwgPSAnRnJpZGF5OiA4YW0gLSAxMHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChmcmlkYXkpO1xuICAgIGxldCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNhdHVyZGF5LmlubmVySFRNTCA9ICdTYXR1cmRheTogOWFtIC0gOHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheSk7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrbHlIb3Vycyk7XG4gICAgXG4gICAgLy8gbG9jYXRpb24gc2VjdGlvblxuICAgIGxldCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbi1zbWFsbC1jb250YWluZXInKTtcbiAgICBsZXQgbG9jYXRpb25UaXRsZSA9IGNyZWF0ZURpdignbG9jYXRpb24tdGl0bGUnKTtcbiAgICBsb2NhdGlvblRpdGxlLmlubmVySFRNTCA9ICdMb2NhdGlvbic7XG4gICAgbGV0IGxvY2F0aW9uQWRkcmVzcyA9IGNyZWF0ZURpdignbG9jYXRpb24tYWRkcmVzcycpO1xuICAgIGxvY2F0aW9uQWRkcmVzcy5pbm5lckhUTUwgPSAnMTIzIENvdW50cnkgTGFuZSwgU2FuIEpvc2UsIENBJztcbiAgICBcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkFkZHJlc3MpO1xuXG5cbiAgICAvLyBhcHBlbmQgYWxsIHNlY3Rpb25zIHRvIGNvbnRlbnRDb250YWluZXJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZUNvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluSW1hZ2UpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3Q29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzQ29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKTtcblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihpZE5hbWUpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpZE5hbWUpO1xuICAgIHJldHVybiBkaXY7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgICBsZXQgbmF2RGl2ID0gY3JlYXRlRGl2KCduYXZiYXInKTtcbiAgICBsZXQgZGl2SG9tZSA9IGNyZWF0ZURpdignaG9tZScpO1xuICAgIGRpdkhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGxldCBkaXZNZW51ID0gY3JlYXRlRGl2KCdtZW51Jyk7XG4gICAgZGl2TWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgbGV0IGRpdkNvbnRhY3QgPSBjcmVhdGVEaXYoJ2NvbnRhY3QnKTtcbiAgICBkaXZDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcblxuXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGRpdkhvbWUpO1xuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChkaXZNZW51KTtcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoZGl2Q29udGFjdCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBsZXQgZm9vdGVyID0gY3JlYXRlRGl2KCdmb290ZXInKTtcbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSAnQ29weXJpZ2h0IDxzcGFuPiZjb3B5Ozwvc3Bhbj4gMjAyMiBKb2huIFdlc3QnO1xuICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vY29udGFjdGp3Jyk7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIGFuY2hvci5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuL2ltYWdlcy9pY29uczgtZ2l0aHViLnN2Z1wiIGFsdD1cImdpdGh1YiBpY29uXCIgaWQ9XCJnaXRodWItaW1hZ2VcIj4nO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFuY2hvcik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4gICAgICAgICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuXG5jb25zb2xlLmxvZygnaW5zaWRlIG9mIGluZGV4LmpzJylcbmNyZWF0ZUhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==