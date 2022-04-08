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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxVQUFVLEVBQUM7OztBQUcxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOzs7Ozs7VUNwRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQzs7QUFFaEM7QUFDQSxrREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjcmVhdGVOYXZCYXIoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICAgIGxldCBuYXZEaXYgPSBjcmVhdGVEaXYoJ25hdmJhcicpO1xuICAgIGxldCBkaXZIb21lID0gY3JlYXRlRGl2KCdob21lJyk7XG4gICAgZGl2SG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgbGV0IGRpdk1lbnUgPSBjcmVhdGVEaXYoJ21lbnUnKTtcbiAgICBkaXZNZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgICBsZXQgZGl2Q29udGFjdCA9IGNyZWF0ZURpdignY29udGFjdCcpO1xuICAgIGRpdkNvbnRhY3QuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGRpdkhvbWUpO1xuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChkaXZNZW51KTtcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoZGl2Q29udGFjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihpZE5hbWUpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpZE5hbWUpO1xuICAgIHJldHVybiBkaXY7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcblxuXG4vKiA8ZGl2IGlkPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaG9tZVwiPkhvbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZW51XCI+TWVudTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIkNvbnRhY3RcIj5Db250YWN0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyZXN0YXVyYW50LW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIEplYW4tUGF1bCdzIFBpenplcmlhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWFpbi1pbWFnZVwiIHNyYz1cIi4vaW1hZ2VzL2hvamEtc3R1ZGlvLVRodzNubGVPM2NNLXVuc3BsYXNoLmpwZ1wiIGFsdD1cImltYWdlIG9mIHBpenphIGNoZWZcIj5cbiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1zbWFsbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJldmlldy1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTXkgcGFydG5lciBhbmQgSSBvcmRlcmVkIHRoZSAxMlwiIFBlcHBlcm9uaSAoJDE3KSBhbmQgQ0JSIChjaGlja2VuIGJhY29uIHJhbmNoKSAoJDIzKSBwaXp6YXMuIEl0IGlzIHJlbGF0aXZlbHkgcHJpY3kgaGVyZSBjb21wYXJlZCB0byBvdGhlciBwaXp6YSBwbGFjZXMuIEJ1dCwgdGhleSBkZWZpbml0ZWx5IHdpbiB3aXRoIHRoZSBxdWFsaXR5IG9mIHRoZWlyIHBpenphcyEgSWYgeW91J3JlIGEgZmFuIG9mIGltcHJlc3NpdmUgY2hlZXNlIHB1bGxzLCB0aGlzIHBsYWNlIGNlcnRhaW5seSBkb2Vzbid0IGRpc2FwcG9pbnQuIFRoZSBjcnVzdCB3YXMgc3VwZXIgZnJlc2ggYW5kIGZsdWZmeSB3aXRoIGEgc2xpZ2h0IGNydW5jaC4gXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmV2aWV3LXBlcnNvbi1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAtIE1hcnR5IEJhbmtzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXNtYWxsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaG91cnMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhvdXJzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2Vla2x5LWhvdXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheVwiPlN1bmRheTogOWFtIC0gOHBtPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheVwiPk1vbmRheTogOGFtIC0gOXBtPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheVwiPlR1ZXNkYXk6IDhhbSAtIDlwbTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWtkYXlcIj5XZWRuZXNkYXk6IDhhbSAtIDEwcG08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrZGF5XCI+VGh1cnNkYXk6IDhhbSAtIDEwcG08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrZGF5XCI+RnJpZGF5OiA4YW0gLSAxMHBtPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheVwiPlNhdHVyZGF5OiA5YW0gLSA4cG08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tc21hbGwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2NhdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2NhdGlvbi1hZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAxMjMgQ291bnRyeSBMYW5lLCBTYW4gSm9zZSwgQ0FcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHA+Q29weXJpZ2h0IDxzcGFuPiZjb3B5Ozwvc3Bhbj4gMjAyMiBKb2huIFdlc3Q8L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbnRhY3Rqd1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiLi9pbWFnZXMvaWNvbnM4LWdpdGh1Yi5zdmdcIiBhbHQ9XCJnaXRodWIgaWNvblwiIGlkPVwiZ2l0aHViLWltYWdlXCI+PC9hPlxuICAgICAgICA8L2Rpdj4gKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcblxuY29uc29sZS5sb2coJ2luc2lkZSBvZiBpbmRleC5qcycpXG5jcmVhdGVIb21lKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==