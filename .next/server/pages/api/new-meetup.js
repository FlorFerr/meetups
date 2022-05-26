"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const data = JSON.parse(req.body);\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://FlorF:FlorF@cluster0.1zaqa.mongodb.net/meetups?retryWrites=true&w=majority');\n        const db = client.db();\n        const meetupsCollection = db.collection('meetups');\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: 'Meetup inserted'\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7ZUFFdEJDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUMsQ0FBQztJQUM3QixFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBQyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQ0MsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsR0FBRyxDQUFDTSxJQUFJO1FBRWhDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ1Qsd0RBQW1CLENBQUMsQ0FBMEY7UUFFbkksS0FBSyxDQUFDVyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRTtRQUVwQixLQUFLLENBQUNDLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxDQUFTO1FBQ2pELEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0YsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1YsSUFBSTtRQUNyRFcsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU07UUFFbEJMLE1BQU0sQ0FBQ1MsS0FBSztRQUVaZixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsT0FBTyxFQUFFLENBQWlCO1FBQUEsQ0FBQztJQUNyRCxDQUFDO0FBRUwsQ0FBQztBQUNELGlFQUFlcEIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxuXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vRmxvckY6RmxvckZAY2x1c3RlcjAuMXphcWEubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcblxuICAgICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuXG4gICAgICAgIGNsaWVudC5jbG9zZSgpXG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQnfSlcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();