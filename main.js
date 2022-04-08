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
let contentDiv = document.querySelector('#content');


function createHome() {
    createMainContent();
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


let contentDiv = document.querySelector('#content');

console.log('inside of index.js')

//initialize the site.. always need to run this first
createNavBar();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
createFooter();





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRytCOztBQUUvQjs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7O0FBRTdDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpREFBVTtBQUNWOzs7Ozs7QUFNQTtBQUNBLGlCQUFpQixnREFBUztBQUMxQixrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQSxrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQSxxQkFBcUIsZ0RBQVM7QUFDOUI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdEQUFTO0FBQzFCO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNyZWF0ZU1haW5Db250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICAgIC8vIHJlc3RhdXJhbnQgdGl0bGUgYW5kIGltYWdlXG4gICAgbGV0IG1haW4gPSBjcmVhdGVEaXYoJ21haW4nKTtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZURpdignY29udGVudC1jb250YWluZXInKTtcbiAgICBsZXQgcmVzdGF1cmFudE5hbWVDb250YWluZXIgPSBjcmVhdGVEaXYoJ3Jlc3RhdXJhbnQtbmFtZS1jb250YWluZXInKTtcbiAgICByZXN0YXVyYW50TmFtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnSmVhbi1QYXVsXFwncyBQaXp6ZXJpYSc7XG4gICAgbGV0IG1haW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4taW1hZ2UnKTtcbiAgICBtYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvaG9qYS1zdHVkaW8tVGh3M25sZU8zY00tdW5zcGxhc2guanBlZycpO1xuICAgIG1haW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdpbWFnZSBvZiBwaXp6YSBjaGVmJyk7XG4gICAgXG4gICAgLy8gcmV2aWV3IHNlY3Rpb25cbiAgICBsZXQgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV2aWV3Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbi1zbWFsbC1jb250YWluZXInKTtcbiAgICBsZXQgcmV2aWV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXdEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Jldmlldy1kZXNjcmlwdGlvbicpO1xuICAgIHJldmlld0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdNeSBwYXJ0bmVyIGFuZCBJIG9yZGVyZWQgdGhlIDEyXCIgUGVwcGVyb25pICgkMTcpIGFuZCBDQlIgKGNoaWNrZW4gYmFjb24gcmFuY2gpICgkMjMpIHBpenphcy4gSXQgaXMgcmVsYXRpdmVseSBwcmljeSBoZXJlIGNvbXBhcmVkIHRvIG90aGVyIHBpenphIHBsYWNlcy4gQnV0LCB0aGV5IGRlZmluaXRlbHkgd2luIHdpdGggdGhlIHF1YWxpdHkgb2YgdGhlaXIgcGl6emFzISBJZiB5b3VcXCdyZSBhIGZhbiBvZiBpbXByZXNzaXZlIGNoZWVzZSBwdWxscywgdGhpcyBwbGFjZSBjZXJ0YWlubHkgZG9lc25cXCd0IGRpc2FwcG9pbnQuIFRoZSBjcnVzdCB3YXMgc3VwZXIgZnJlc2ggYW5kIGZsdWZmeSB3aXRoIGEgc2xpZ2h0IGNydW5jaC4nO1xuICAgIGxldCByZXZpZXdQZXJzb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmV2aWV3UGVyc29uTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Jldmlldy1wZXJzb24tbmFtZScpO1xuICAgIHJldmlld1BlcnNvbk5hbWUuaW5uZXJIVE1MID0gJy0gTWFydHkgQmFua3MnO1xuICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdEZXNjcmlwdGlvbik7XG4gICAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld1BlcnNvbk5hbWUpO1xuXG4gICAgLy8gaG91cnMgc2VjdGlvblxuICAgIGxldCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbi1zbWFsbC1jb250YWluZXInKTtcbiAgICBsZXQgaG91cnNUaXRsZSA9IGNyZWF0ZURpdignaG91cnMtdGl0bGUnKTtcbiAgICBob3Vyc1RpdGxlLmlubmVySFRNTCA9ICdIb3Vycyc7XG4gICAgbGV0IHdlZWtseUhvdXJzID0gY3JlYXRlRGl2KCd3ZWVrbHktaG91cnMnKTtcbiAgICBsZXQgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VuZGF5LmlubmVySFRNTCA9ICdTdW5kYXk6IDlhbSAtIDhwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcbiAgICBsZXQgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9uZGF5LmlubmVySFRNTCA9ICdNb25kYXk6IDhhbSAtIDlwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQobW9uZGF5KTtcbiAgICBsZXQgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHR1ZXNkYXkuaW5uZXJIVE1MID0gJ1R1ZXNkYXk6IDhhbSAtIDlwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG4gICAgbGV0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZG5lc2RheS5pbm5lckhUTUwgPSAnV2VkbmVzZGF5OiA4YW0gLSAxMHBtJztcbiAgICB3ZWVrbHlIb3Vycy5hcHBlbmRDaGlsZCh3ZWRuZXNkYXkpO1xuICAgIGxldCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRodXJzZGF5LmlubmVySFRNTCA9ICdUaHVyc2RheTogOGFtIC0gMTBwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuICAgIGxldCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmcmlkYXkuaW5uZXJIVE1MID0gJ0ZyaWRheTogOGFtIC0gMTBwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcbiAgICBsZXQgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYXR1cmRheS5pbm5lckhUTUwgPSAnU2F0dXJkYXk6IDlhbSAtIDhwbSc7XG4gICAgd2Vla2x5SG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNUaXRsZSk7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla2x5SG91cnMpO1xuICAgIFxuICAgIC8vIGxvY2F0aW9uIHNlY3Rpb25cbiAgICBsZXQgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4tc21hbGwtY29udGFpbmVyJyk7XG4gICAgbGV0IGxvY2F0aW9uVGl0bGUgPSBjcmVhdGVEaXYoJ2xvY2F0aW9uLXRpdGxlJyk7XG4gICAgbG9jYXRpb25UaXRsZS5pbm5lckhUTUwgPSAnTG9jYXRpb24nO1xuICAgIGxldCBsb2NhdGlvbkFkZHJlc3MgPSBjcmVhdGVEaXYoJ2xvY2F0aW9uLWFkZHJlc3MnKTtcbiAgICBsb2NhdGlvbkFkZHJlc3MuaW5uZXJIVE1MID0gJzEyMyBDb3VudHJ5IExhbmUsIFNhbiBKb3NlLCBDQSc7XG4gICAgXG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25BZGRyZXNzKTtcblxuXG4gICAgLy8gYXBwZW5kIGFsbCBzZWN0aW9ucyB0byBjb250ZW50Q29udGFpbmVyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWVDb250YWluZXIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkltYWdlKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0NvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoaWROYW1lKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5cbmV4cG9ydCB7Y3JlYXRlSG9tZSwgY3JlYXRlRGl2fTtcblxuICAgICAgICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlSG9tZSwgY3JlYXRlRGl2fSBmcm9tIFwiLi9ob21lXCI7XG5cbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29uc29sZS5sb2coJ2luc2lkZSBvZiBpbmRleC5qcycpXG5cbi8vaW5pdGlhbGl6ZSB0aGUgc2l0ZS4uIGFsd2F5cyBuZWVkIHRvIHJ1biB0aGlzIGZpcnN0XG5jcmVhdGVOYXZCYXIoKTtcbmNyZWF0ZUhvbWUoKTtcbmNyZWF0ZUZvb3RlcigpO1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgICBsZXQgbmF2RGl2ID0gY3JlYXRlRGl2KCduYXZiYXInKTtcbiAgICBsZXQgZGl2SG9tZSA9IGNyZWF0ZURpdignaG9tZScpO1xuICAgIGRpdkhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGxldCBkaXZNZW51ID0gY3JlYXRlRGl2KCdtZW51Jyk7XG4gICAgZGl2TWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgbGV0IGRpdkNvbnRhY3QgPSBjcmVhdGVEaXYoJ2NvbnRhY3QnKTtcbiAgICBkaXZDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcblxuXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGRpdkhvbWUpO1xuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChkaXZNZW51KTtcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoZGl2Q29udGFjdCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBsZXQgZm9vdGVyID0gY3JlYXRlRGl2KCdmb290ZXInKTtcbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSAnQ29weXJpZ2h0IDxzcGFuPiZjb3B5Ozwvc3Bhbj4gMjAyMiBKb2huIFdlc3QnO1xuICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vY29udGFjdGp3Jyk7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIGFuY2hvci5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuL2ltYWdlcy9pY29uczgtZ2l0aHViLnN2Z1wiIGFsdD1cImdpdGh1YiBpY29uXCIgaWQ9XCJnaXRodWItaW1hZ2VcIj4nO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFuY2hvcik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9