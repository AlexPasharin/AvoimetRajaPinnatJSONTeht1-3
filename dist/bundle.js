/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
__webpack_require__(2)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const xmlhttpWorkers = new XMLHttpRequest()
const workersUrl = 'tyontekijat.json'

xmlhttpWorkers.onreadystatechange = () => {
  if (xmlhttpWorkers.readyState === 4 && xmlhttpWorkers.status === 200) {
    tableBuilder(JSON.parse(xmlhttpWorkers.responseText))
  }
}

xmlhttpWorkers.open('GET', workersUrl, true)
xmlhttpWorkers.send()

const tableBuilder = workers => {
  const tbody = document.getElementById('duunarit')

  workers.forEach(worker => {
    const row = document.createElement('tr')
    const firstNameTd = document.createElement('td')
    const lastNameTd = document.createElement('td')
    const addressTd = document.createElement('td')
    const workPhoneNumberTd = document.createElement('td')
    const homePhoneNumberTd = document.createElement('td')

    const {firstName, lastName, address, workPhoneNumber, homePhoneNumber} = worker

    firstNameTd.innerHTML = firstName
    lastNameTd.innerHTML = lastName
    addressTd.innerHTML = address ? address : '-'
    workPhoneNumberTd.innerHTML = workPhoneNumber ? workPhoneNumber : '-'
    homePhoneNumberTd.innerHTML = homePhoneNumber ? homePhoneNumber : '-'

    row.appendChild(firstNameTd)
    row.appendChild(lastNameTd)
    row.appendChild(addressTd)
    row.appendChild(workPhoneNumberTd)
    row.appendChild(homePhoneNumberTd)

    tbody.appendChild(row)
  })
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const xmlhttpBikes = new XMLHttpRequest()
const bikeUrl = 'https://api.citybik.es/v2/networks/citybikes-helsinki'

xmlhttpBikes.onreadystatechange = () => {
  if (xmlhttpBikes.readyState === 4 && xmlhttpBikes.status === 200) {
    const stations = JSON.parse(xmlhttpBikes.responseText).network.stations
    bikeParser(stations)
  }
}

xmlhttpBikes.open('GET', bikeUrl, true)
xmlhttpBikes.send()

const bikeParser = stations => {
  const tbody = document.getElementById('fillarit')

  stations.forEach(station => {
    const row = document.createElement('tr')
    const nameTd = document.createElement('td')
    const emptySlotsTd = document.createElement('td')
    const freeBikesTd = document.createElement('td')

    const {name, empty_slots, free_bikes} = station

    nameTd.innerHTML = name
    emptySlotsTd.innerHTML = empty_slots
    freeBikesTd.innerHTML = free_bikes

    row.appendChild(nameTd)
    row.appendChild(emptySlotsTd)
    row.appendChild(freeBikesTd)

    tbody.appendChild(row)
  })
}


/***/ })
/******/ ]);