/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/weather.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/weather.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/night_sky.jpg */ "./src/imgs/night_sky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  box-sizing: border-box;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.main_container {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  align-items: center;\n  gap: 1rem;\n  margin: 1.8rem 0;\n}\n\n.weather_info,\n.extra_info,\n.time_info {\n  border: 2px solid violet;\n  border-radius: 15px;\n  padding: 20px;\n  box-shadow: 8px 8px 10px violet;\n}\n.weather_info *,\n.extra_info *,\n.time_info * {\n  font-weight: bold;\n  font-size: 1.1rem;\n  color: white;\n}\n\n.left_bar,\n.right_bar {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n/* Wheather info starts here */\n.weather_info {\n  max-width: 80vw;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 15px;\n  align-items: center;\n}\n.weather_info * {\n  font-size: 1.5rem;\n}\n.weather_info .name {\n  font-size: 2rem;\n  align-self: start;\n}\n.weather_info .icon {\n  width: 150px;\n}\n.weather_info .min_max {\n  display: flex;\n  gap: 15%;\n}\n.weather_info .min_max * {\n  font-size: 1.2rem;\n  max-width: 200px;\n  min-height: 10%;\n  text-align: center;\n}\n\n/* Wheather info ends here */\n/* Extra info starts here */\n.extra_info {\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n  gap: 10%;\n  max-width: 90vw;\n}\n\n/* Extra info ends here */\n/* Time info starts here */\n.time_info {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 20px;\n  max-width: 90vw;\n}\n.time_info * {\n  font-size: 2.5rem;\n}\n\n.sunrise_container,\n.sunset_container {\n  display: flex;\n}\n\n/* Time info ends here */\n/* Input starts here */\n.input {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  top: 0;\n}\n.input .input_city {\n  outline: none;\n  width: 100%;\n  padding: 10px 35px 10px 15px;\n  border: none;\n  border-radius: 100px;\n  box-shadow: 5px 5px 10px violet;\n  font-size: 1.2rem;\n}\n.input .search_city {\n  background: transparent;\n  border: none;\n  outline: none;\n  margin-left: -33px;\n  cursor: pointer;\n}\n.input .search_city img {\n  object-fit: cover;\n}\n\n/* Input ends here */\n/* Extras start */\n.credits {\n  color: white;\n  position: relative;\n  text-align: right;\n}\n.credits a {\n  color: rgb(228, 104, 228);\n}\n\n.loading_icon {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n}\n\n/* Extras end */\n@media (min-width: 50em) {\n  .main_container {\n    flex-flow: row nowrap;\n    justify-content: space-around;\n    align-items: center;\n    gap: 2rem;\n    margin: 10px 0;\n  }\n  .main_container .left_bar {\n    display: flex;\n    justify-content: center;\n  }\n  .main_container .right_bar {\n    display: flex;\n    align-items: stretch;\n    gap: 3rem;\n    margin-right: 2rem;\n  }\n  .weather_info {\n    gap: 1.8rem;\n  }\n  .time_info * {\n    font-size: 5vw;\n    flex-wrap: wrap;\n  }\n  .input {\n    position: relative;\n    order: 2;\n  }\n  .credits {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/weather.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;AACJ;;AAEA;EACI,iFAAA;EAEA,sBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,wBAAA;EACA,6BAAA;EACA,mBAAA;EACA,SAAA;EAEA,gBAAA;AADJ;;AAIA;;;EAGI,wBAAA;EACA,mBAAA;EACA,aAAA;EAEA,+BAAA;AAFJ;AAII;;;EACI,iBAAA;EACA,iBAAA;EACA,YAAA;AAAR;;AAIA;;EAEI,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,mBAAA;EAEA,SAAA;AAFJ;;AAKA,8BAAA;AAEA;EACI,eAAA;EAEA,aAAA;EACA,wBAAA;EACA,SAAA;EACA,mBAAA;AAJJ;AAMI;EACI,iBAAA;AAJR;AAOI;EACI,eAAA;EACA,iBAAA;AALR;AAQI;EACI,YAAA;AANR;AASI;EACI,aAAA;EACA,QAAA;AAPR;AASQ;EACI,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;AAPZ;;AAYA,4BAAA;AAEA,2BAAA;AAEA;EACI,kBAAA;EAEA,aAAA;EACA,8BAAA;EACA,QAAA;EAEA,eAAA;AAbJ;;AAgBA,yBAAA;AAEA,0BAAA;AAEA;EACI,aAAA;EACA,wBAAA;EACA,SAAA;EAEA,eAAA;AAhBJ;AAkBI;EACI,iBAAA;AAhBR;;AAoBA;;EAEI,aAAA;AAjBJ;;AAoBA,wBAAA;AAEA,sBAAA;AAEA;EACI,aAAA;EACA,mBAAA;EAEA,kBAAA;EACA,MAAA;AApBJ;AAsBI;EACI,aAAA;EACA,WAAA;EACA,4BAAA;EACA,YAAA;EACA,oBAAA;EAEA,+BAAA;EACA,iBAAA;AArBR;AAwBI;EACI,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EAEA,eAAA;AAvBR;AAyBQ;EACI,iBAAA;AAvBZ;;AA4BA,oBAAA;AAEA,iBAAA;AAEA;EACI,YAAA;EACA,kBAAA;EAEA,iBAAA;AA5BJ;AA8BI;EACI,yBAAA;AA5BR;;AAgCA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;AA7BJ;;AAgCA,eAAA;AAEA;EACI;IACI,qBAAA;IACA,6BAAA;IACA,mBAAA;IAEA,SAAA;IAEA,cAAA;EAhCN;EAkCM;IACI,aAAA;IACA,uBAAA;EAhCV;EAmCM;IACI,aAAA;IACA,oBAAA;IACA,SAAA;IAEA,kBAAA;EAlCV;EAsCE;IACI,WAAA;EApCN;EAwCM;IACI,cAAA;IACA,eAAA;EAtCV;EA0CE;IACI,kBAAA;IAEA,QAAA;EAzCN;EA4CE;IACI,kBAAA;IACA,MAAA;IACA,QAAA;EA1CN;AACF","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    background: url(../imgs/night_sky.jpg) no-repeat center center fixed;\n\n    background-size: cover;\n}\n\n.main_container {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    gap: 1rem;\n\n    margin: 1.8rem 0;\n}\n\n.weather_info,\n.extra_info,\n.time_info {\n    border: 2px solid violet;\n    border-radius: 15px;\n    padding: 20px;\n\n    box-shadow: 8px 8px 10px violet;\n\n    * {\n        font-weight: bold;\n        font-size: 1.1rem;\n        color: white;\n    }\n}\n\n.left_bar,\n.right_bar {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n\n    gap: 1rem;\n}\n\n/* Wheather info starts here */\n\n.weather_info {\n    max-width: 80vw;\n\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 15px;\n    align-items: center;\n\n    * {\n        font-size: 1.5rem;\n    }\n\n    .name {\n        font-size: 2rem;\n        align-self: start;\n    }\n\n    .icon {\n        width: 150px;\n    }\n\n    .min_max {\n        display: flex;\n        gap: 15%;\n\n        * {\n            font-size: 1.2rem;\n            max-width: 200px;\n            min-height: 10%;\n            text-align: center;\n        }\n    }\n}\n\n/* Wheather info ends here */\n\n/* Extra info starts here */\n\n.extra_info {\n    text-align: center;\n\n    display: flex;\n    justify-content: space-between;\n    gap: 10%;\n\n    max-width: 90vw;\n}\n\n/* Extra info ends here */\n\n/* Time info starts here */\n\n.time_info {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 20px;\n\n    max-width: 90vw;\n\n    * {\n        font-size: 2.5rem;\n    }\n}\n\n.sunrise_container,\n.sunset_container {\n    display: flex;\n}\n\n/* Time info ends here */\n\n/* Input starts here */\n\n.input {\n    display: flex;\n    flex-direction: row;\n\n    position: absolute;\n    top: 0;\n\n    .input_city {\n        outline: none;\n        width: 100%;\n        padding: 10px 35px 10px 15px;\n        border: none;\n        border-radius: 100px;\n\n        box-shadow: 5px 5px 10px violet;\n        font-size: 1.2rem;\n    }\n\n    .search_city {\n        background: transparent;\n        border: none;\n        outline: none;\n        margin-left: -33px;\n\n        cursor: pointer;\n\n        img {\n            object-fit: cover;\n        }\n    }\n}\n\n/* Input ends here */\n\n/* Extras start */\n\n.credits {\n    color: white;\n    position: relative;\n\n    text-align: right;\n\n    a {\n        color: rgb(228, 104, 228);\n    }\n}\n\n.loading_icon {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 999;\n}\n\n/* Extras end */\n\n@media (min-width: 50em) {\n    .main_container {\n        flex-flow: row nowrap;\n        justify-content: space-around;\n        align-items: center;\n\n        gap: 2rem;\n\n        margin: 10px 0;\n\n        .left_bar {\n            display: flex;\n            justify-content: center;\n        }\n\n        .right_bar {\n            display: flex;\n            align-items: stretch;\n            gap: 3rem;\n\n            margin-right: 2rem;\n        }\n    }\n\n    .weather_info {\n        gap: 1.8rem;\n    }\n\n    .time_info {\n        * {\n            font-size: 5vw;\n            flex-wrap: wrap;\n        }\n    }\n\n    .input {\n        position: relative;\n\n        order: 2;\n    }\n\n    .credits {\n        position: absolute;\n        top: 0;\n        right: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/weather.scss":
/*!*********************************!*\
  !*** ./src/styles/weather.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./weather.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/weather.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_weather_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/DOM_elements.js":
/*!********************************!*\
  !*** ./src/js/DOM_elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_el": () => (/* binding */ DOM_el)
/* harmony export */ });
// All the relevant DOM elements in the project
const DOM_el = (function () {
    // const all_images = document.querySelectorAll("img");
    // all_images.forEach((image) => (image.srcset = ""));

    const main_container = document.querySelector(".main_container");

    const weather_info = document.querySelector(".weather_info");
    const name = document.querySelector(".name");
    const main_info = document.querySelector(".main_info");
    const weather_icon = document.querySelector(".icon");
    const temperature = document.querySelector(".temperature");
    const feels_like = document.querySelector(".feels_like");
    const humidity = document.querySelector(".humidity");
    const min_max = document.querySelector(".min_max");
    const min_temp = document.querySelector(".min_temp");
    const max_temp = document.querySelector(".max_temp");
    const description = document.querySelector(".description");

    const extra_info = document.querySelector(".extra_info");
    const pressure = document.querySelector(".pressure");
    const wind_speed = document.querySelector(".wind_speed");

    const time_info = document.querySelector(".time_info");
    const sunrise = document.querySelector(".sunrise");
    const sunset = document.querySelector(".sunset");

    const search_input = document.querySelector(".input_city");
    const search_btn = document.querySelector(".search_city");

    const loading_icon = document.querySelector(".loading_icon img");

    return {
        main_container,
        weather_info,
        extra_info,
        name,
        main_info,
        weather_icon,
        temperature,
        feels_like,
        humidity,
        min_max,
        min_temp,
        max_temp,
        description,
        pressure,
        wind_speed,
        time_info,
        sunrise,
        sunset,
        search_btn,
        search_input,
        loading_icon,
    };
})();




/***/ }),

/***/ "./src/js/render_weather_data.js":
/*!***************************************!*\
  !*** ./src/js/render_weather_data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render_info": () => (/* binding */ render_info)
/* harmony export */ });
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather_data */ "./src/js/weather_data.js");



// Adds the related info in its place in the DOM
const render_info = async (city, units = "metric") => {
    // While the data is being fetched, displays the loading icon
    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.loading_icon.setAttribute("style", "display: block");
    const weather_data = await _weather_data__WEBPACK_IMPORTED_MODULE_1__.Weather.fetch_api(city, units);
    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.loading_icon.setAttribute("style", "display: none");

    // If the location input is invalid
    if (weather_data.cod === "404" && weather_data.message) {
        alert(weather_data.message);
        return;
    }

    // Variables that change according to the units "chosen"
    let units_temp = "°C";
    let units_speed = "m/s";

    switch (units) {
        case "metric":
            units_temp = "°C";
            units_speed = "m/s";
            break;

        case "imperial":
            units_speed = "mph";
            units_temp = "°F";

        default:
            return;
    }

    // Gets the full country name based on the country code
    const region_names = new Intl.DisplayNames(["en"], { type: "region" });

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.name.textContent = `${weather_data.name}, ${region_names.of(
        weather_data.sys.country
    )}`;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.main_info.textContent = weather_data.weather[0].main;

    // Displays the image based on the weather data
    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.weather_icon.src = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.temperature.textContent = `${weather_data.main.temp} ${units_temp}`;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.feels_like.textContent = `Feels like ${weather_data.main.feels_like} ${units_temp}`;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.humidity.textContent = `Humidity: ${weather_data.main.humidity}%`;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.min_temp.textContent = `Minimum of ${weather_data.main.temp_min} ${units_temp}`;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.max_temp.textContent = `Maximum of ${weather_data.main.temp_max} ${units_temp}`;

    // Capitalizes the first letter of each word in the description
    const description = weather_data.weather[0].description
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.description.textContent = description;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.pressure.textContent = `Pressure: ${weather_data.main.pressure} hPa`;

    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.wind_speed.textContent = `Wind speed: ${weather_data.wind.speed} ${units_speed}`;

    // Get the time of the sunrise and sunset according to the timezone
    const timezone = weather_data.timezone;
    const sunrise = new Date((weather_data.sys.sunrise + timezone) * 1000);
    const sunset = new Date((weather_data.sys.sunset + timezone) * 1000);

    // Shows the time of the sunrise and sunset
    // Also guarantees both the hours and minutes have exactly 2 digits in them
    // (Adds a 0 to the start if it's a single digit number)
    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.sunrise.textContent = `${sunrise
        .getHours()
        .toString()
        .padStart(2, 0)}:${sunrise.getMinutes().toString().padStart(2, 0)}`;
    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.sunset.textContent = `${sunset
        .getHours()
        .toString()
        .padStart(2, 0)}:${sunset.getMinutes().toString().padStart(2, 0)}`;
};




/***/ }),

/***/ "./src/js/weather_data.js":
/*!********************************!*\
  !*** ./src/js/weather_data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
// Everything related to the weather info, which is just the data received
const Weather = (function () {
    const fetch_api = async (location = "London", units = "metric") => {
        // Gets the response and converts it to json format
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${"c4c9d832d3cf3e088b91fa2a77a50b68"}&units=${units}`,
            { mode: "cors" }
        );

        const weather_data = await response.json();
        return weather_data;
    };

    return {
        fetch_api,
    };
})();




/***/ }),

/***/ "./src/imgs/night_sky.jpg":
/*!********************************!*\
  !*** ./src/imgs/night_sky.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/68085be6b646767a85bc.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_weather_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/weather.scss */ "./src/styles/weather.scss");
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _render_weather_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_weather_data */ "./src/js/render_weather_data.js");




// Initializes the site
const init = () => {
    (0,_render_weather_data__WEBPACK_IMPORTED_MODULE_2__.render_info)();

    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.search_btn.addEventListener("click", () => {
        (0,_render_weather_data__WEBPACK_IMPORTED_MODULE_2__.render_info)(_DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.search_input.value.trim());
        _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.search_input.value = "";
    });
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUNRO0FBQ1k7O0FBRXBEO0FBQ0E7QUFDQSxJQUFJLGlFQUFXOztBQUVmLElBQUksNkVBQWtDO0FBQ3RDLFFBQVEsaUVBQVcsQ0FBQyx5RUFBOEI7QUFDbEQsUUFBUSxvRUFBeUI7QUFDakMsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXIuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGVzL3dlYXRoZXIuc2Nzcz9lNmU5Iiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvanMvRE9NX2VsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2pzL3JlbmRlcl93ZWF0aGVyX2RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvanMvd2VhdGhlcl9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvbmlnaHRfc2t5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luOiAxLjhyZW0gMDtcXG59XFxuXFxuLndlYXRoZXJfaW5mbyxcXG4uZXh0cmFfaW5mbyxcXG4udGltZV9pbmZvIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZpb2xldDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCAxMHB4IHZpb2xldDtcXG59XFxuLndlYXRoZXJfaW5mbyAqLFxcbi5leHRyYV9pbmZvICosXFxuLnRpbWVfaW5mbyAqIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sZWZ0X2JhcixcXG4ucmlnaHRfYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qIFdoZWF0aGVyIGluZm8gc3RhcnRzIGhlcmUgKi9cXG4ud2VhdGhlcl9pbmZvIHtcXG4gIG1heC13aWR0aDogODB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBnYXA6IDE1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ud2VhdGhlcl9pbmZvICoge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi53ZWF0aGVyX2luZm8gLm5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcbi53ZWF0aGVyX2luZm8gLmljb24ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG4ud2VhdGhlcl9pbmZvIC5taW5fbWF4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1JTtcXG59XFxuLndlYXRoZXJfaW5mbyAubWluX21heCAqIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogV2hlYXRoZXIgaW5mbyBlbmRzIGhlcmUgKi9cXG4vKiBFeHRyYSBpbmZvIHN0YXJ0cyBoZXJlICovXFxuLmV4dHJhX2luZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTAlO1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4vKiBFeHRyYSBpbmZvIGVuZHMgaGVyZSAqL1xcbi8qIFRpbWUgaW5mbyBzdGFydHMgaGVyZSAqL1xcbi50aW1lX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGdhcDogMjBweDtcXG4gIG1heC13aWR0aDogOTB2dztcXG59XFxuLnRpbWVfaW5mbyAqIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uc3VucmlzZV9jb250YWluZXIsXFxuLnN1bnNldF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogVGltZSBpbmZvIGVuZHMgaGVyZSAqL1xcbi8qIElucHV0IHN0YXJ0cyBoZXJlICovXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG4uaW5wdXQgLmlucHV0X2NpdHkge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAzNXB4IDEwcHggMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHZpb2xldDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4uaW5wdXQgLnNlYXJjaF9jaXR5IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAtMzNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmlucHV0IC5zZWFyY2hfY2l0eSBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi8qIElucHV0IGVuZHMgaGVyZSAqL1xcbi8qIEV4dHJhcyBzdGFydCAqL1xcbi5jcmVkaXRzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uY3JlZGl0cyBhIHtcXG4gIGNvbG9yOiByZ2IoMjI4LCAxMDQsIDIyOCk7XFxufVxcblxcbi5sb2FkaW5nX2ljb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLyogRXh0cmFzIGVuZCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1MGVtKSB7XFxuICAubWFpbl9jb250YWluZXIge1xcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgfVxcbiAgLm1haW5fY29udGFpbmVyIC5sZWZ0X2JhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLm1haW5fY29udGFpbmVyIC5yaWdodF9iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB9XFxuICAud2VhdGhlcl9pbmZvIHtcXG4gICAgZ2FwOiAxLjhyZW07XFxuICB9XFxuICAudGltZV9pbmZvICoge1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgLmlucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvcmRlcjogMjtcXG4gIH1cXG4gIC5jcmVkaXRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3dlYXRoZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpRkFBQTtFQUVBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGdCQUFBO0FBREo7O0FBSUE7OztFQUdJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsK0JBQUE7QUFGSjtBQUlJOzs7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUlBOztFQUVJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxTQUFBO0FBRko7O0FBS0EsOEJBQUE7QUFFQTtFQUNJLGVBQUE7RUFFQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0ksaUJBQUE7QUFKUjtBQU9JO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBTFI7QUFRSTtFQUNJLFlBQUE7QUFOUjtBQVNJO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QUFQUjtBQVNRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVBaOztBQVlBLDRCQUFBO0FBRUEsMkJBQUE7QUFFQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtFQUVBLGVBQUE7QUFiSjs7QUFnQkEseUJBQUE7QUFFQSwwQkFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUVBLGVBQUE7QUFoQko7QUFrQkk7RUFDSSxpQkFBQTtBQWhCUjs7QUFvQkE7O0VBRUksYUFBQTtBQWpCSjs7QUFvQkEsd0JBQUE7QUFFQSxzQkFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0FBcEJKO0FBc0JJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUVBLCtCQUFBO0VBQ0EsaUJBQUE7QUFyQlI7QUF3Qkk7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0FBdkJSO0FBeUJRO0VBQ0ksaUJBQUE7QUF2Qlo7O0FBNEJBLG9CQUFBO0FBRUEsaUJBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0FBNUJKO0FBOEJJO0VBQ0kseUJBQUE7QUE1QlI7O0FBZ0NBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBN0JKOztBQWdDQSxlQUFBO0FBRUE7RUFDSTtJQUNJLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtJQUVBLFNBQUE7SUFFQSxjQUFBO0VBaENOO0VBa0NNO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0VBaENWO0VBbUNNO0lBQ0ksYUFBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtJQUVBLGtCQUFBO0VBbENWO0VBc0NFO0lBQ0ksV0FBQTtFQXBDTjtFQXdDTTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VBdENWO0VBMENFO0lBQ0ksa0JBQUE7SUFFQSxRQUFBO0VBekNOO0VBNENFO0lBQ0ksa0JBQUE7SUFDQSxNQUFBO0lBQ0EsUUFBQTtFQTFDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWdzL25pZ2h0X3NreS5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcblxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIG1hcmdpbjogMS44cmVtIDA7XFxufVxcblxcbi53ZWF0aGVyX2luZm8sXFxuLmV4dHJhX2luZm8sXFxuLnRpbWVfaW5mbyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZpb2xldDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAxMHB4IHZpb2xldDtcXG5cXG4gICAgKiB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcblxcbi5sZWZ0X2JhcixcXG4ucmlnaHRfYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBXaGVhdGhlciBpbmZvIHN0YXJ0cyBoZXJlICovXFxuXFxuLndlYXRoZXJfaW5mbyB7XFxuICAgIG1heC13aWR0aDogODB2dztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICoge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLm5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmljb24ge1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5taW5fbWF4IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDE1JTtcXG5cXG4gICAgICAgICoge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAlO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vKiBXaGVhdGhlciBpbmZvIGVuZHMgaGVyZSAqL1xcblxcbi8qIEV4dHJhIGluZm8gc3RhcnRzIGhlcmUgKi9cXG5cXG4uZXh0cmFfaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwJTtcXG5cXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4vKiBFeHRyYSBpbmZvIGVuZHMgaGVyZSAqL1xcblxcbi8qIFRpbWUgaW5mbyBzdGFydHMgaGVyZSAqL1xcblxcbi50aW1lX2luZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcblxcbiAgICAqIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB9XFxufVxcblxcbi5zdW5yaXNlX2NvbnRhaW5lcixcXG4uc3Vuc2V0X2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIFRpbWUgaW5mbyBlbmRzIGhlcmUgKi9cXG5cXG4vKiBJbnB1dCBzdGFydHMgaGVyZSAqL1xcblxcbi5pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcblxcbiAgICAuaW5wdXRfY2l0eSB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHggMTBweCAxNXB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggdmlvbGV0O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaF9jaXR5IHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzNweDtcXG5cXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLyogSW5wdXQgZW5kcyBoZXJlICovXFxuXFxuLyogRXh0cmFzIHN0YXJ0ICovXFxuXFxuLmNyZWRpdHMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuXFxuICAgIGEge1xcbiAgICAgICAgY29sb3I6IHJnYigyMjgsIDEwNCwgMjI4KTtcXG4gICAgfVxcbn1cXG5cXG4ubG9hZGluZ19pY29uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4vKiBFeHRyYXMgZW5kICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDUwZW0pIHtcXG4gICAgLm1haW5fY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIGdhcDogMnJlbTtcXG5cXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcblxcbiAgICAgICAgLmxlZnRfYmFyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnJpZ2h0X2JhciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgICAgICAgICBnYXA6IDNyZW07XFxuXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC53ZWF0aGVyX2luZm8ge1xcbiAgICAgICAgZ2FwOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLnRpbWVfaW5mbyB7XFxuICAgICAgICAqIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmlucHV0IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIG9yZGVyOiAyO1xcbiAgICB9XFxuXFxuICAgIC5jcmVkaXRzIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEFsbCB0aGUgcmVsZXZhbnQgRE9NIGVsZW1lbnRzIGluIHRoZSBwcm9qZWN0XG5jb25zdCBET01fZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGNvbnN0IGFsbF9pbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuICAgIC8vIGFsbF9pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IChpbWFnZS5zcmNzZXQgPSBcIlwiKSk7XG5cbiAgICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB3ZWF0aGVyX2luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJfaW5mb1wiKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpO1xuICAgIGNvbnN0IG1haW5faW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9pbmZvXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVcIik7XG4gICAgY29uc3QgZmVlbHNfbGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNfbGlrZVwiKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gICAgY29uc3QgbWluX21heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluX21heFwiKTtcbiAgICBjb25zdCBtaW5fdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluX3RlbXBcIik7XG4gICAgY29uc3QgbWF4X3RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heF90ZW1wXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnN0IGV4dHJhX2luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4dHJhX2luZm9cIik7XG4gICAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlXCIpO1xuICAgIGNvbnN0IHdpbmRfc3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRfc3BlZWRcIik7XG5cbiAgICBjb25zdCB0aW1lX2luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVfaW5mb1wiKTtcbiAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5yaXNlXCIpO1xuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0XCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoX2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9jaXR5XCIpO1xuICAgIGNvbnN0IHNlYXJjaF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9jaXR5XCIpO1xuXG4gICAgY29uc3QgbG9hZGluZ19pY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nX2ljb24gaW1nXCIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbl9jb250YWluZXIsXG4gICAgICAgIHdlYXRoZXJfaW5mbyxcbiAgICAgICAgZXh0cmFfaW5mbyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbWFpbl9pbmZvLFxuICAgICAgICB3ZWF0aGVyX2ljb24sXG4gICAgICAgIHRlbXBlcmF0dXJlLFxuICAgICAgICBmZWVsc19saWtlLFxuICAgICAgICBodW1pZGl0eSxcbiAgICAgICAgbWluX21heCxcbiAgICAgICAgbWluX3RlbXAsXG4gICAgICAgIG1heF90ZW1wLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgcHJlc3N1cmUsXG4gICAgICAgIHdpbmRfc3BlZWQsXG4gICAgICAgIHRpbWVfaW5mbyxcbiAgICAgICAgc3VucmlzZSxcbiAgICAgICAgc3Vuc2V0LFxuICAgICAgICBzZWFyY2hfYnRuLFxuICAgICAgICBzZWFyY2hfaW5wdXQsXG4gICAgICAgIGxvYWRpbmdfaWNvbixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgRE9NX2VsIH07XG4iLCJpbXBvcnQgeyBET01fZWwgfSBmcm9tIFwiLi9ET01fZWxlbWVudHNcIjtcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiLi93ZWF0aGVyX2RhdGFcIjtcblxuLy8gQWRkcyB0aGUgcmVsYXRlZCBpbmZvIGluIGl0cyBwbGFjZSBpbiB0aGUgRE9NXG5jb25zdCByZW5kZXJfaW5mbyA9IGFzeW5jIChjaXR5LCB1bml0cyA9IFwibWV0cmljXCIpID0+IHtcbiAgICAvLyBXaGlsZSB0aGUgZGF0YSBpcyBiZWluZyBmZXRjaGVkLCBkaXNwbGF5cyB0aGUgbG9hZGluZyBpY29uXG4gICAgRE9NX2VsLmxvYWRpbmdfaWNvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJfZGF0YSA9IGF3YWl0IFdlYXRoZXIuZmV0Y2hfYXBpKGNpdHksIHVuaXRzKTtcbiAgICBET01fZWwubG9hZGluZ19pY29uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZVwiKTtcblxuICAgIC8vIElmIHRoZSBsb2NhdGlvbiBpbnB1dCBpcyBpbnZhbGlkXG4gICAgaWYgKHdlYXRoZXJfZGF0YS5jb2QgPT09IFwiNDA0XCIgJiYgd2VhdGhlcl9kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgYWxlcnQod2VhdGhlcl9kYXRhLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVmFyaWFibGVzIHRoYXQgY2hhbmdlIGFjY29yZGluZyB0byB0aGUgdW5pdHMgXCJjaG9zZW5cIlxuICAgIGxldCB1bml0c190ZW1wID0gXCLCsENcIjtcbiAgICBsZXQgdW5pdHNfc3BlZWQgPSBcIm0vc1wiO1xuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlIFwibWV0cmljXCI6XG4gICAgICAgICAgICB1bml0c190ZW1wID0gXCLCsENcIjtcbiAgICAgICAgICAgIHVuaXRzX3NwZWVkID0gXCJtL3NcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJpbXBlcmlhbFwiOlxuICAgICAgICAgICAgdW5pdHNfc3BlZWQgPSBcIm1waFwiO1xuICAgICAgICAgICAgdW5pdHNfdGVtcCA9IFwiwrBGXCI7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXRzIHRoZSBmdWxsIGNvdW50cnkgbmFtZSBiYXNlZCBvbiB0aGUgY291bnRyeSBjb2RlXG4gICAgY29uc3QgcmVnaW9uX25hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFtcImVuXCJdLCB7IHR5cGU6IFwicmVnaW9uXCIgfSk7XG5cbiAgICBET01fZWwubmFtZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJfZGF0YS5uYW1lfSwgJHtyZWdpb25fbmFtZXMub2YoXG4gICAgICAgIHdlYXRoZXJfZGF0YS5zeXMuY291bnRyeVxuICAgICl9YDtcblxuICAgIERPTV9lbC5tYWluX2luZm8udGV4dENvbnRlbnQgPSB3ZWF0aGVyX2RhdGEud2VhdGhlclswXS5tYWluO1xuXG4gICAgLy8gRGlzcGxheXMgdGhlIGltYWdlIGJhc2VkIG9uIHRoZSB3ZWF0aGVyIGRhdGFcbiAgICBET01fZWwud2VhdGhlcl9pY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyX2RhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuXG4gICAgRE9NX2VsLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlcl9kYXRhLm1haW4udGVtcH0gJHt1bml0c190ZW1wfWA7XG5cbiAgICBET01fZWwuZmVlbHNfbGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7d2VhdGhlcl9kYXRhLm1haW4uZmVlbHNfbGlrZX0gJHt1bml0c190ZW1wfWA7XG5cbiAgICBET01fZWwuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlcl9kYXRhLm1haW4uaHVtaWRpdHl9JWA7XG5cbiAgICBET01fZWwubWluX3RlbXAudGV4dENvbnRlbnQgPSBgTWluaW11bSBvZiAke3dlYXRoZXJfZGF0YS5tYWluLnRlbXBfbWlufSAke3VuaXRzX3RlbXB9YDtcblxuICAgIERPTV9lbC5tYXhfdGVtcC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIG9mICR7d2VhdGhlcl9kYXRhLm1haW4udGVtcF9tYXh9ICR7dW5pdHNfdGVtcH1gO1xuXG4gICAgLy8gQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgaW4gdGhlIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB3ZWF0aGVyX2RhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5tYXAoKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSlcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuXG4gICAgRE9NX2VsLmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBET01fZWwucHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmU6ICR7d2VhdGhlcl9kYXRhLm1haW4ucHJlc3N1cmV9IGhQYWA7XG5cbiAgICBET01fZWwud2luZF9zcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkOiAke3dlYXRoZXJfZGF0YS53aW5kLnNwZWVkfSAke3VuaXRzX3NwZWVkfWA7XG5cbiAgICAvLyBHZXQgdGhlIHRpbWUgb2YgdGhlIHN1bnJpc2UgYW5kIHN1bnNldCBhY2NvcmRpbmcgdG8gdGhlIHRpbWV6b25lXG4gICAgY29uc3QgdGltZXpvbmUgPSB3ZWF0aGVyX2RhdGEudGltZXpvbmU7XG4gICAgY29uc3Qgc3VucmlzZSA9IG5ldyBEYXRlKCh3ZWF0aGVyX2RhdGEuc3lzLnN1bnJpc2UgKyB0aW1lem9uZSkgKiAxMDAwKTtcbiAgICBjb25zdCBzdW5zZXQgPSBuZXcgRGF0ZSgod2VhdGhlcl9kYXRhLnN5cy5zdW5zZXQgKyB0aW1lem9uZSkgKiAxMDAwKTtcblxuICAgIC8vIFNob3dzIHRoZSB0aW1lIG9mIHRoZSBzdW5yaXNlIGFuZCBzdW5zZXRcbiAgICAvLyBBbHNvIGd1YXJhbnRlZXMgYm90aCB0aGUgaG91cnMgYW5kIG1pbnV0ZXMgaGF2ZSBleGFjdGx5IDIgZGlnaXRzIGluIHRoZW1cbiAgICAvLyAoQWRkcyBhIDAgdG8gdGhlIHN0YXJ0IGlmIGl0J3MgYSBzaW5nbGUgZGlnaXQgbnVtYmVyKVxuICAgIERPTV9lbC5zdW5yaXNlLnRleHRDb250ZW50ID0gYCR7c3VucmlzZVxuICAgICAgICAuZ2V0SG91cnMoKVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAucGFkU3RhcnQoMiwgMCl9OiR7c3VucmlzZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKX1gO1xuICAgIERPTV9lbC5zdW5zZXQudGV4dENvbnRlbnQgPSBgJHtzdW5zZXRcbiAgICAgICAgLmdldEhvdXJzKClcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnBhZFN0YXJ0KDIsIDApfToke3N1bnNldC5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAwKX1gO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyX2luZm8gfTtcbiIsIi8vIEV2ZXJ5dGhpbmcgcmVsYXRlZCB0byB0aGUgd2VhdGhlciBpbmZvLCB3aGljaCBpcyBqdXN0IHRoZSBkYXRhIHJlY2VpdmVkXG5jb25zdCBXZWF0aGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmZXRjaF9hcGkgPSBhc3luYyAobG9jYXRpb24gPSBcIkxvbmRvblwiLCB1bml0cyA9IFwibWV0cmljXCIpID0+IHtcbiAgICAgICAgLy8gR2V0cyB0aGUgcmVzcG9uc2UgYW5kIGNvbnZlcnRzIGl0IHRvIGpzb24gZm9ybWF0XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWX0mdW5pdHM9JHt1bml0c31gLFxuICAgICAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlcl9kYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlcl9kYXRhO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmZXRjaF9hcGksXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFdlYXRoZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3R5bGVzL3dlYXRoZXIuc2Nzc1wiO1xuaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsZW1lbnRzXCI7XG5pbXBvcnQgeyByZW5kZXJfaW5mbyB9IGZyb20gXCIuL3JlbmRlcl93ZWF0aGVyX2RhdGFcIjtcblxuLy8gSW5pdGlhbGl6ZXMgdGhlIHNpdGVcbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmVuZGVyX2luZm8oKTtcblxuICAgIERPTV9lbC5zZWFyY2hfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlcl9pbmZvKERPTV9lbC5zZWFyY2hfaW5wdXQudmFsdWUudHJpbSgpKTtcbiAgICAgICAgRE9NX2VsLnNlYXJjaF9pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSk7XG59O1xuXG5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=