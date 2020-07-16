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
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var _sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sgbj/angular-gist */ "./node_modules/@sgbj/angular-gist/angular-gist.umd.js");
/* harmony import */ var _sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_me_search_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-me/search-me.component */ "./src/app/search-me/search-me.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _modals_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/about/about.component */ "./src/app/modals/about/about.component.ts");
/* harmony import */ var _modals_long_story_short_long_story_short_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/long-story-short/long-story-short.component */ "./src/app/modals/long-story-short/long-story-short.component.ts");
/* harmony import */ var _modals_long_story_short_work_work_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/long-story-short/work/work.component */ "./src/app/modals/long-story-short/work/work.component.ts");
/* harmony import */ var _modals_long_story_short_education_education_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/long-story-short/education/education.component */ "./src/app/modals/long-story-short/education/education.component.ts");
/* harmony import */ var _modals_long_story_short_skills_skills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/long-story-short/skills/skills.component */ "./src/app/modals/long-story-short/skills/skills.component.ts");
/* harmony import */ var _modals_long_story_short_interests_interests_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modals/long-story-short/interests/interests.component */ "./src/app/modals/long-story-short/interests/interests.component.ts");
/* harmony import */ var _modals_long_story_short_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modals/long-story-short/navbar/navbar.component */ "./src/app/modals/long-story-short/navbar/navbar.component.ts");
/* harmony import */ var _modals_long_story_short_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/long-story-short/certificates/certificates.component */ "./src/app/modals/long-story-short/certificates/certificates.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _search_me_search_me_component__WEBPACK_IMPORTED_MODULE_9__["SearchMeComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_10__["IntroductionComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _modals_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _modals_long_story_short_long_story_short_component__WEBPACK_IMPORTED_MODULE_13__["LongStoryShortComponent"],
                _modals_long_story_short_work_work_component__WEBPACK_IMPORTED_MODULE_14__["WorkComponent"],
                _modals_long_story_short_education_education_component__WEBPACK_IMPORTED_MODULE_15__["EducationComponent"],
                _modals_long_story_short_skills_skills_component__WEBPACK_IMPORTED_MODULE_16__["SkillsComponent"],
                _modals_long_story_short_interests_interests_component__WEBPACK_IMPORTED_MODULE_17__["InterestsComponent"],
                _modals_long_story_short_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
                _modals_long_story_short_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_19__["CertificatesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _sgbj_angular_gist__WEBPACK_IMPORTED_MODULE_6__["GistModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = ".card-footer {\n  width: 100%;\n}\n\n.card-footer p {\n  text-align: center;\n  color: #9DA2A1;\n}\n\n.card-footer p a {\n  color: #F7F7F7;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-footer text-muted\">\n  <p>&copy; 2020 MSRB hosted by <a href=\"https://pages.github.com/\" target=\"_blank\">GitHub</a></p>\n</div>\n"

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

module.exports = ".container-fluid {\n  padding: 0px 25px 80px 25px;\n}\n\n.div1 {\n  margin: 7% auto;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6 div1\">\n      <app-introduction></app-introduction>\n    </div>\n    <div class=\"col-md-6 div2\">\n      <gh-gist src=\"https://gist.github.com/msrbaipalli/417f816d6203a4391a2c24c1a830ada5.js\"></gh-gist>\n    </div>\n  </div>\n</div>\n\n\n\n"

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

module.exports = "@import url('https://fonts.googleapis.com/css?family=Nunito');\n\n.title p {\n  font-size: 50px;\n  letter-spacing: 3px;\n  color: #F7F7F7;\n  font-family: 'Nunito', sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-transform: uppercase;\n  line-height: .8em;\n}\n\n.name p {\n  font-size: 22px;\n  text-transform: uppercase;\n  line-height: 1em;\n  color: #F7F7F7;\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: .14em;\n}\n\n.tagLine p {\n  font-size: 20px;\n  color: #BABBBD;\n  line-height: 1.15em;\n}\n\n.emailId, .searchMore {\n  color: #F7F7F7;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .10em;\n  line-height: 4em;\n}\n\n.emailId a {\n    color: #F7F7F7;\n    line-height: 1.5em;\n}\n\n.emailId a:hover {\n    color: #BABBBD;\n    text-decoration: none;\n}\n\n.socialIcons {\n  padding: 20px 0px;\n}\n\n.socialIcons p {\n  letter-spacing: 1.2em;\n  display: inline-block;\n}\n\n.socialIcons p i:hover {\n  color: #F7F7F7;\n}\n\n.socialIcons p i {\n  font-size: 32px;\n  color: #BABBBD;\n}\n\n.searchMore p{\n    color: #BABBBD;\n    line-height: 2em;\n}\n\n.searchMore .lss {\n    color: #F7F7F7;\n    line-height: 2em;\n}\n\n.searchMore .lss:hover {\n    color: #BABBBD;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/introduction/introduction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"introMain\">\n    <div class=\"title\">\n        <p class=\"inline\">&#60;&#47;&#62; MSRB</p>\n    </div>\n    <div class=\"name\">\n        <p>Manga Srinivas Rao Baipalli.</p>\n    </div>\n    <div class=\"tagLine\">\n        <p>I'm a Frontend Developer working towards a goal of becoming Full Stack Developer!</p>\n    </div>\n    <div class=\"emailId\">\n        <a href=\"mailto:msrbaipalli@gmail.com\" target=\"_top\">msrbaipalli@gmail.com</a>\n    </div>\n    <div class=\"searchMore\">\n        <a (click)=\"openModal(longStoryShort)\" class=\"lss\">Long Story Short!</a>\n        <p>Search to know more and follow me anywhere!</p>\n        <ng-template #longStoryShort>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Long Story Short</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-long-story-short></app-long-story-short>\n            </div>\n        </ng-template>\n    </div>\n    <div class=\"socialIcons\">\n        <p><a href=\"https://www.linkedin.com/in/msrbaipalli/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a></p>\n        <p><a href=\"https://github.com/msrbaipalli\" target=\"_blank\"><i class=\"fab fa-github\"></i></a></p>\n        <p><a href=\"https://medium.com/@msrbaipalli\" target=\"_blank\"><i class=\"fab fa-medium-m\"></i></a></p>\n        <p><a href=\"https://www.facebook.com/bmsrinivasrao\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></p>\n        <p><a href=\"https://twitter.com/msrbaipalli\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></p>\n    </div>\n</div>\n"

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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
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
    function IntroductionComponent(modalService) {
        this.modalService = modalService;
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/introduction/introduction.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/modals/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/app/modals/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/modals/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  The standard Lorem Ipsum passage, used since the 1500s\n  \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n\n  Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n  \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\n\n  1914 translation by H. Rackham\n  \"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\n\n  Section 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n  \"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n\n  1914 translation by H. Rackham\n  \"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"\n  The standard Lorem Ipsum passage, used since the 1500s\n  \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n\n  Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n  \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\n\n  1914 translation by H. Rackham\n  \"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\n\n  Section 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\n  \"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\n\n  1914 translation by H. Rackham\n  \"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"\n\n</p>"

/***/ }),

/***/ "./src/app/modals/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/modals/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modals/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/modals/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modals/long-story-short/certificates/certificates.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modals/long-story-short/certificates/certificates.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.marginBottom {\n    margin-bottom: 10px;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.innerCard a{\n    color: #6E757C;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\nhr {\n    margin: 30px 0px;\n    padding: .1px 0;\n    background: #6F757B;\n}"

/***/ }),

/***/ "./src/app/modals/long-story-short/certificates/certificates.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modals/long-story-short/certificates/certificates.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-certificate fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Certifications</h5>\n        <div class=\"innerCard\">\n          <div class=\"marginBottom\">\n            <p>\n              <a href=\"https://courses.edx.org/certificates/cfdbf919a099417ab1ea259741291ac2\" target=\"_blank\"><strong><i class=\"fas fa-caret-right\"></i> CS50 Introduction to Computer Science: </strong></a><i class=\"fas fa-at\"></i> Harvard University (edX)\n            </p>\n            <p>\n              <a href=\"https://prod-cert-bucket.s3.amazonaws.com/downloads/2c9c3cc2083a47d79cc5a96a23498d7a/Statement.pdf\" target=\"_blank\"><strong><i class=\"fas fa-caret-right\"></i> Computer Science 101: </strong></a><i class=\"fas fa-at\"></i> Stanford University\n            </p>\n            <p>\n              <a href=\"https://www.freecodecamp.org/certification/bmsrinivasrao007/legacy-front-end\" target=\"_blank\"><strong><i class=\"fas fa-caret-right\"></i> Front End Development: </strong></a><i class=\"fas fa-at\"></i> Free Code Camp\n            </p>\n          </div>\n        </div>\n        <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/long-story-short/certificates/certificates.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modals/long-story-short/certificates/certificates.component.ts ***!
  \********************************************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
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

var CertificatesComponent = /** @class */ (function () {
    function CertificatesComponent() {
    }
    CertificatesComponent.prototype.ngOnInit = function () {
    };
    CertificatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificates',
            template: __webpack_require__(/*! ./certificates.component.html */ "./src/app/modals/long-story-short/certificates/certificates.component.html"),
            styles: [__webpack_require__(/*! ./certificates.component.css */ "./src/app/modals/long-story-short/certificates/certificates.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CertificatesComponent);
    return CertificatesComponent;
}());



/***/ }),

/***/ "./src/app/modals/long-story-short/education/education.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modals/long-story-short/education/education.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.marginBottom {\n    margin-bottom: 10px;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\nhr {\n    margin: 30px 0px;\n    padding: .1px 0;\n    background: #6F757B;\n}\n\n.bulletPoints {\n    padding: 10px 40px;\n}"

/***/ }),

/***/ "./src/app/modals/long-story-short/education/education.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modals/long-story-short/education/education.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <i class=\"fas fa-graduation-cap fas-tag\"></i>\n            </div>\n            <div class=\"col-sm-11\">\n                <h5 class=\" card-title\">Education</h5>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Master of Science</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Kent State University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Major: </strong>Computer and Information Sciences\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> GPA: </strong>3.7/4.0\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Significant Courses: </strong>Algorithm and\n                            Programming with Data Structures, Enterprise Architecture, Database Management Systems,\n                            Application & Technology Architecture, Requirements & Engineering, and VB Programming.\n                        </p>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Bachelor of Technology</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Jawaharlal Nehru Technology\n                        University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Major: </strong>Computer Science and Engineering\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> GPA: </strong>3.2/4.0\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Significant Courses: </strong>Computer\n                            Programming\n                            &amp; Data Structures, Data Communications &amp; Computer Networks, Data Structure\n                            through C++, Data Warehouse &amp; Data Mining, Database Management Systems, Object\n                            Oriented Analysis &amp; Design, Design Patterns, Design &amp; Analysis of Algorithms and\n                            Formal Languages &amp; Automata Theory.\n                        </p>\n                    </div>\n                </div>\n                <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/long-story-short/education/education.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modals/long-story-short/education/education.component.ts ***!
  \**************************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/modals/long-story-short/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/modals/long-story-short/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/modals/long-story-short/interests/interests.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modals/long-story-short/interests/interests.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}"

/***/ }),

/***/ "./src/app/modals/long-story-short/interests/interests.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modals/long-story-short/interests/interests.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-lightbulb fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Interests</h5>\n        <p class=\"card-text\"></p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"Playing Guitar\" class=\"fas fa-guitar\"></i></p>\n          <p><i tooltip=\"Music\" class=\"fas fa-headphones-alt\"></i></p>\n          <p><i tooltip=\"Browsing\" class=\"fab fa-chrome\"></i></p>\n          <p><i tooltip=\"Photography\" class=\"fas fa-camera\"></i></p>\n          <p><i tooltip=\"Exploring\" class=\"fab fa-wpexplorer\"></i></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/long-story-short/interests/interests.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modals/long-story-short/interests/interests.component.ts ***!
  \**************************************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
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

var InterestsComponent = /** @class */ (function () {
    function InterestsComponent() {
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/modals/long-story-short/interests/interests.component.html"),
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/modals/long-story-short/interests/interests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/modals/long-story-short/long-story-short.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modals/long-story-short/long-story-short.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/long-story-short/long-story-short.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modals/long-story-short/long-story-short.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-sm-9\">\n        <app-work></app-work>\n        <app-education></app-education>\n        <app-skills></app-skills>\n        <app-certificates></app-certificates>\n        <app-interests></app-interests>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/long-story-short/long-story-short.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modals/long-story-short/long-story-short.component.ts ***!
  \***********************************************************************/
/*! exports provided: LongStoryShortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongStoryShortComponent", function() { return LongStoryShortComponent; });
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

var LongStoryShortComponent = /** @class */ (function () {
    function LongStoryShortComponent() {
    }
    LongStoryShortComponent.prototype.ngOnInit = function () {
    };
    LongStoryShortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-long-story-short',
            template: __webpack_require__(/*! ./long-story-short.component.html */ "./src/app/modals/long-story-short/long-story-short.component.html"),
            styles: [__webpack_require__(/*! ./long-story-short.component.css */ "./src/app/modals/long-story-short/long-story-short.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LongStoryShortComponent);
    return LongStoryShortComponent;
}());



/***/ }),

/***/ "./src/app/modals/long-story-short/navbar/navbar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modals/long-story-short/navbar/navbar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n      color: #F7F7F7;\n      border-radius: 0px;\n}\n\nhr {\n    background: none;\n    margin-top: 30px;\n}\n\n.row {\n    padding-bottom: 20px;\n}\n\n.col-10 {\n    padding: 0;\n    margin: 0;\n}\n\n.cardBG {\n    background: #036A78;\n}\n\n.myPic {\n    width:100%;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 25px;\n    color: #F7F7F7;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\n.skillsIcon p {\n    color: #6FA3D4;\n    font-size: 50px;\n    display: inline-block;\n    margin-right: 20px;\n}\n\n.emailId a {\n    color: #F7F7F7;\n    line-height: 1.5em;\n}\n\n.emailId a:hover {\n    color: #F7F7F7;\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/modals/long-story-short/navbar/navbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modals/long-story-short/navbar/navbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"myPic\" src=\"assets/images/myPic.png\">\n  <div class=\"card-body cardBG\">\n    <div class=\"row arrowUp\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-user fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text\">Hello there!</p>\n        <p class=\"card-text\">I'm Manga | Srinivas, Frontend Developer from India and currently living in the United States.\n          I write JavaScript code most of the time and explore new Frontend frameworks.</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-phone fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text\">+1 (234) 716-4429</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-envelope fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text emailId\"><a href=\"mailto:msrbaipalli@gmail.com\" target=\"_top\">msrbaipalli@gmail.com</a></p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/long-story-short/navbar/navbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/long-story-short/navbar/navbar.component.ts ***!
  \********************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/modals/long-story-short/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/modals/long-story-short/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/modals/long-story-short/skills/skills.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modals/long-story-short/skills/skills.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n      transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}"

/***/ }),

/***/ "./src/app/modals/long-story-short/skills/skills.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modals/long-story-short/skills/skills.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-drafting-compass fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Skills</h5>\n        <p class=\"card-text\">PROGRAMMING LANGUAGES</p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"HTML5\" class=\"fab fa-html5\"></i></p>\n          <p><i tooltip=\"CSS3\" class=\"fab fa-css3-alt\"></i></p>\n          <p><i tooltip=\"SASS\" class=\"fab fa-sass\"></i></p>\n          <p><i tooltip=\"LESS\" class=\"fab fa-less\"></i></p>\n          <p><i tooltip=\"Angular\" class=\"fab fa-angular\"></i></p>\n          <p><i tooltip=\"JavaScript\" class=\"fab fa-js\"></i></p>\n          <p><i tooltip=\"NodeJs\" class=\"fab fa-node-js\"></i></p>\n          <p><i tooltip=\"Java\" class=\"fab fa-java\"></i></p>\n          <p><i tooltip=\"Dot Net\" class=\"fab fa-microsoft\"></i></p>\n        </div>\n\n        <p class=\"card-text\">TOOLS</p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"npm\" class=\"fab fa-npm\"></i></p>\n          <p><i tooltip=\"Grunt\" class=\"fab fa-grunt\"></i></p>\n          <p><i tooltip=\"Git\" class=\"fab fa-git\"></i></p>\n          <p><i tooltip=\"GitLab\" class=\"fab fa-gitlab\"></i></p>\n          <p><i tooltip=\"GitHub\" class=\"fab fa-github\"></i></p>\n          <p><i tooltip=\"Terminal\" class=\"fas fa-terminal\"></i></p>\n          <p><i tooltip=\"Jenkins\" class=\"fab fa-jenkins\"></i></p>\n        </div>\n        <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/long-story-short/skills/skills.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/long-story-short/skills/skills.component.ts ***!
  \********************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/modals/long-story-short/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/modals/long-story-short/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/modals/long-story-short/work/work.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modals/long-story-short/work/work.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.marginBottom {\n    margin-bottom: 10px;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\nhr {\n    margin: 30px 0px;\n    padding: .1px 0;\n    background: #6F757B;\n}\n\n.bulletPoints {\n    padding: 5px 40px;\n}"

/***/ }),

/***/ "./src/app/modals/long-story-short/work/work.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modals/long-story-short/work/work.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <i class=\"fas fa-briefcase fas-tag\"></i>\n            </div>\n            <div class=\"col-sm-11\">\n                <h5 class=\"card-title\">Work Experience</h5>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Frontend Angular Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Egen Solutions</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Egen Solutions\n                            is an\n                            enterprise\n                            web and mobile application development firm dedicated to build better user experiences\n                            at\n                            the for front of design. Egen also has an IT Talent Acquisition division and places\n                            highly\n                            skilled tech professionals in companies across the US.\n                        </p>\n                    </div>\n                    <!--<div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>HTML5, CSS3, JavaScript, AngularJS 1.6 and 8, Angular Material, Ngx Bootstrap, AJAX, JSON, SASS, LESS, Node, npm, Agile, Jenkins, Genesis, Visual Studio Code, IntelliJ, Postman, Source Tree, GIT, TFS.\n                    </p>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Application Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Kent State University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Kent State University is a\n                            large, primary residential, public research university in Kent, Ohio. It has serval\n                            IT divisions which services on software solutions to the Organization.\n                        </p>\n                    </div>\n                    <!--<div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>Angular 2, Type Script, HTML4/5, CSS3/2, C#, ASP/ADO.NET 4.0, Bootstrap3, JavaScript, Responsive Web Design, AJAX, JSON, MS SQL Server 2008, Visual Studio 2017 and GitLab.\n                    </p>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Frontend Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Insas Technologies</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Insas Technologies is one\n                            of the well-known start-up company focused on implementing large-scale IT projects for\n                            Retail and Education industry.\n                        </p>\n                    </div>\n                   <!-- <div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>HTML, CSS, AJAX, DHTML, JSON, HTML5, XML, DOM, Data visualization, JavaScript, MS Excel, jQuery, Bootstrap, AngularJS, Jasmine.\n                    </p>\n                </div>\n                <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/long-story-short/work/work.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modals/long-story-short/work/work.component.ts ***!
  \****************************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
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

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/modals/long-story-short/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/modals/long-story-short/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/search-me/search-me.component.css":
/*!***************************************************!*\
  !*** ./src/app/search-me/search-me.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Styles for wrapping the search box */\n\n.searchMe {\n    width: 80%;\n    margin: 30px auto;\n}\n\n.searchMe button {\n    color: #F7F7F7;\n}\n\n/* Bootstrap 4 text input with search icon */\n\n.searchMe-div .form-control {\n    padding-left: 2.375rem;\n}\n\n.searchMe-div .form-control-feedback {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 2.375rem;\n    height: 2.375rem;\n    line-height: 2.375rem;\n    text-align: center;\n    pointer-events: none;\n    color: #ACAFB1;\n    background: #3C4647;\n}\n\n.searchMe-div .form-control {\n    color: #BABBBD;\n    background: #3C4647;\n    border: none;\n    border-radius: 4px 0px 0px 4px;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);\n}\n\n.searchMe-div span {\n    border-radius: 4px;\n}\n\n.searchMe-div .form-control::-webkit-input-placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMe-div .form-control:-ms-input-placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMe-div .form-control::-ms-input-placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMe-div .form-control::placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMeResult-div {\n    z-index: 1;\n    top: 75px;\n    width: 80%;\n    position: absolute;\n}\n\n.searchItem {\n    margin: 0px;\n    color: #3F4346;\n    background: #F7F7F7;\n    padding: 10px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.searchItem:hover {\n    background: #F5F5F5;\n    cursor: pointer;\n}\n\n.searchMeResult-div .searchItem::after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent #F7F7F7 transparent;\n}\n\n.searchButton {\n    border-color: #3C4647;\n    border-radius: 0px 4px 4px 0px;\n    background: #026A77;\n    color: #EEF8F9;\n}\n\n.searchButton:hover {\n    background: #0C9CB4;\n}\n"

/***/ }),

/***/ "./src/app/search-me/search-me.component.html":
/*!****************************************************!*\
  !*** ./src/app/search-me/search-me.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchMe\">\n    <!-- Actual search box -->\n    <div class=\"form-group input-group-prepend searchMe-div\" dropdown>\n        <span class=\"fa fa-search form-control-feedback\"></span>\n        <input type=\"text\"\n               (focusout) = \"searchFocus = false\"\n               (keydown)=\"search(searchItem)\"\n               [(ngModel)]=\"searchItem\"\n               class=\"form-control\"\n               placeholder=\"Search Me!\">\n        <div class=\"input-group-append\">\n            <button (click)=\"openModal(longStoryShort)\"\n                    dropdownToggle\n                    class=\"btn btn-outline-secondary searchButton\"\n                    type=\"button\"\n                    data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\"\n                    ria-expanded=\"false\"><i class=\"fas fa-history\"></i> Long Story Short\n            </button>\n            <ng-template #longStoryShort>\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">Long Story Short</h4>\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-long-story-short></app-long-story-short>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n\n    <div *ngIf=\"searchFocus\" class=\"form-group searchMeResult-div\">\n        <div *ngFor=\"let item of items\">\n            <p class=\"searchItem\" (click)=\"openModal(template, item.title)\">\n                {{item.title}}\n            </p>\n            <ng-template #template>\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">{{item.title}}</h4>\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-about *ngIf=\"item.title == 'About Me!'\"></app-about>\n                </div>\n            </ng-template>\n        </div>\n        <div *ngIf=\"items?.length < 1\">\n            <p class=\"searchItem\">\n                <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>\n                Search function is under construction!\n            </p>\n        </div>\n    </div>\n</div>\n\n"

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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
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
    function SearchMeComponent(modalService) {
        this.modalService = modalService;
        this.items = [];
        this.myItems = ['About', 'Experience', 'Contact'];
    }
    SearchMeComponent.prototype.ngOnInit = function () {
    };
    SearchMeComponent.prototype.search = function (item) {
        this.items = [];
        if (item !== "") {
            this.searchFocus = true;
        }
        else {
            this.searchFocus = false;
        }
        return this.items;
    };
    SearchMeComponent.prototype.searchButton = function (item) {
        this.searchFocus = true;
        this.items = [{ title: 'About Me!' }, { title: 'Contact' }];
        return this.items;
    };
    SearchMeComponent.prototype.openModal = function (template) {
        this.searchFocus = false;
        this.modalRef = this.modalService.show(template);
    };
    SearchMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-me',
            template: __webpack_require__(/*! ./search-me.component.html */ "./src/app/search-me/search-me.component.html"),
            styles: [__webpack_require__(/*! ./search-me.component.css */ "./src/app/search-me/search-me.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
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

module.exports = __webpack_require__(/*! /Users/mangabaipalli/Desktop/Random/MSRB.ME-Dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map