(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\">\n  <div id=\"container\">\n    <app-search-me></app-search-me>\n    <app-home></app-home>\n  </div>\n</div>\n<div id=\"footer\">\n  <app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sgbj/angular-gist */ "./node_modules/@sgbj/angular-gist/angular-gist.umd.js");
/* harmony import */ var _sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_me_search_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-me/search-me.component */ "./src/app/search-me/search-me.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _search_me_search_me_component__WEBPACK_IMPORTED_MODULE_6__["SearchMeComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__["IntroductionComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_3__["GistModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer {\n  width: 100%;\n}\n\n.card-footer p {\n  text-align: center;\n}\n\n.card-footer p a {\n  color: #BABBBD;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-footer text-muted\">\n  <p>&copy; 2018 MSRB hosted by <a href=\"https://pages.github.com/\" target=\"_blank\">GitHub</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0px 25px 80px 25px;\n}\n\n.div1 {\n  margin: 10% auto;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6 div1\">\n      <app-introduction></app-introduction>\n    </div>\n    <div class=\"col-md-6 div2\">\n      <gh-gist src=\"https://gist.github.com/bmsrinivasrao/417f816d6203a4391a2c24c1a830ada5.js\"></gh-gist>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/introduction/introduction.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Nunito');\n\n.title p {\n  font-size: 50px;\n  letter-spacing: 3px;\n  color: #fff;\n  font-family: 'Nunito', sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-transform: uppercase;\n  line-height: .8em;\n}\n\n.name p {\n  font-size: 22px;\n  text-transform: uppercase;\n  line-height: 1em;\n  color: #fff;\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: .14em;\n}\n\n.tagLine p {\n  font-size: 22px;\n  color: #A3A3A3;\n  line-height: 1.15em;\n}\n\n.emailId, .searchMore {\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .10em;\n  line-height: 4em;\n}\n\n.searchMore {\n  line-height: 1em;\n}\n\n.socialIcons {\n  padding: 20px 0px;\n}\n\n.socialIcons p {\n  letter-spacing: 1.2em;\n  display: inline-block;\n}\n\n.socialIcons p i:hover {\n  color: #fff;\n}\n\n.socialIcons p i {\n  font-size: 32px;\n  color: #BABBBD;\n}\n\n"

/***/ }),

/***/ "./src/app/introduction/introduction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"introMain\">\n  <div class=\"title\">\n    <p class=\"inline\">&#60;&#47;&#62; MSRB</p>\n  </div>\n  <div class=\"name\">\n    <p>Manga Srinivas Rao Baipalli.</p>\n  </div>\n  <div class=\"tagLine\">\n    <p>I'm a Frontend developer and I write JavaScript code for fun.</p>\n  </div>\n  <div class=\"emailId\">\n    <p>manga.baipalli@gmail.com</p>\n  </div>\n  <div class=\"searchMore\">\n    <p>SEARCH TO KNOW MORE!</p>\n  </div>\n  <div class=\"socialIcons\">\n    <p><a href=\"https://www.linkedin.com/in/bmsrinivasrao/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a></p>\n    <p><a href=\"https://github.com/bmsrinivasrao\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></p>\n    <p><a href=\"https://medium.com/@msrb\" target=\"_blank\"><i class=\"fab fa-medium-m\"></i></a></p>\n    <p><a href=\"https://www.facebook.com/bmsrinivasrao\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></p>\n    <p><a href=\"https://twitter.com/bmsrinivasrao\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/introduction/introduction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/search-me/search-me.component.css":
/*!***************************************************!*\
  !*** ./src/app/search-me/search-me.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Styles for wrapping the search box */\n\n.searchMe {\n    width: 70%;\n    margin: 30px auto;\n}\n\n/* Bootstrap 4 text input with search icon */\n\n.searchMe-div .form-control {\n    padding-left: 2.375rem;\n}\n\n.searchMe-div .form-control-feedback {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 2.375rem;\n    height: 2.375rem;\n    line-height: 2.375rem;\n    text-align: center;\n    pointer-events: none;\n    color: #ffffff;\n    background: #A3A3A3;\n}\n\n.searchMe-div .form-control {\n    color: #ffffff;\n    background: #A3A3A3;\n    border: none;\n    border-radius: 0px;\n}\n\n.searchMe-div span {\n    border-radius: 4px;\n}\n\n.searchMe-div .form-control::-webkit-input-placeholder {\n    color: #ffffff;\n    opacity: 1;\n}\n\n.searchMe-div .form-control:-ms-input-placeholder {\n    color: #ffffff;\n    opacity: 1;\n}\n\n.searchMe-div .form-control::-ms-input-placeholder {\n    color: #ffffff;\n    opacity: 1;\n}\n\n.searchMe-div .form-control::placeholder {\n    color: #ffffff;\n    opacity: 1;\n}\n\n.searchMeResult-div {\n    z-index: 1;\n    top: 70px;\n    width: 70%;\n    position: absolute;\n}\n\n.searchItem {\n    margin: 0px;\n    color: #fff;\n    background: #666666;\n    padding: 10px;\n    border-color: #F2F2F2;\n    border-style: groove;\n    border-width: 0px 0px 1px 0px;\n}\n"

/***/ }),

/***/ "./src/app/search-me/search-me.component.html":
/*!****************************************************!*\
  !*** ./src/app/search-me/search-me.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchMe\">\n  <!-- Actual search box -->\n  <div class=\"form-group searchMe-div\">\n    <span class=\"fa fa-search form-control-feedback\"></span>\n    <input\n      type=\"text\"\n      (focusout) = \"searchFocus = false\"\n      (keydown)=\"search(searchItem)\"\n      [(ngModel)]=\"searchItem\"\n      class=\"form-control\"\n      placeholder=\"Search Me!\">\n  </div>\n\n  <div *ngIf=\"searchFocus\" class=\"form-group searchMeResult-div\">\n    <div *ngFor=\"let item of items\">\n      <p class=\"searchItem\">\n        {{item}}\n      </p>\n    </div>\n    <div *ngIf=\"items?.length < 1\">\n      <p class=\"searchItem\">\n        Search function is under construction!\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-me/search-me.component.ts":
/*!**************************************************!*\
  !*** ./src/app/search-me/search-me.component.ts ***!
  \**************************************************/
/*! exports provided: SearchMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMeComponent", function() { return SearchMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchMeComponent = /** @class */ (function () {
    function SearchMeComponent() {
        this.items = [];
        this.myItems = ['About', 'Experience', 'Contact'];
    }
    SearchMeComponent.prototype.ngOnInit = function () {
    };
    SearchMeComponent.prototype.search = function (item) {
        if (item.trim() !== "") {
            this.searchFocus = true;
        }
        else {
            this.searchFocus = false;
        }
        return this.items;
    };
    SearchMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-me',
            template: __webpack_require__(/*! ./search-me.component.html */ "./src/app/search-me/search-me.component.html"),
            styles: [__webpack_require__(/*! ./search-me.component.css */ "./src/app/search-me/search-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchMeComponent);
    return SearchMeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mangabaipalli/Desktop/MSRB/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map