(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-footer text-muted\">\n  <p>&copy; 2020 MSRB hosted by <a href=\"https://pages.github.com/\" target=\"_blank\">GitHub</a></p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6 div1\">\n      <app-introduction></app-introduction>\n    </div>\n    <div class=\"col-md-6 div2\">\n      <ngx-gist class=\"gistFrame\" gistId=\"msrbaipalli/417f816d6203a4391a2c24c1a830ada5\"></ngx-gist>\n    </div>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrap\">\n  <div id=\"container\">\n    <app-search-me></app-search-me>\n    <app-home></app-home>\n  </div>\n</div>\n<div id=\"footer\">\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"introMain\">\n    <div class=\"title\">\n        <p class=\"inline\">&#60;&#47;&#62; MSRB</p>\n    </div>\n    <div class=\"name\">\n        <p>Manga Srinivas Rao Baipalli.</p>\n    </div>\n    <div class=\"tagLine\">\n        <p>I'm a Frontend Developer working towards a goal of becoming Full Stack Developer!</p>\n    </div>\n    <div class=\"emailId\">\n        <a href=\"mailto:msrbaipalli@gmail.com\" target=\"_top\">msrbaipalli@gmail.com</a>\n    </div>\n    <div class=\"searchMore\">\n        <a (click)=\"openModal(longStoryShort)\" class=\"lss\">Long Story Short!</a>\n        <p>Search to know more and follow me anywhere!</p>\n        <ng-template #longStoryShort>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Long Story Short</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-long-story-short></app-long-story-short>\n            </div>\n        </ng-template>\n    </div>\n    <div class=\"socialIcons\">\n        <p><a href=\"https://www.linkedin.com/in/msrbaipalli/\" target=\"_blank\"><i tooltip=\"LinkedIn\" class=\"fab fa-linkedin-in\"></i></a></p>\n        <p><a href=\"https://github.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"GitHub\" class=\"fab fa-github\"></i></a></p>\n        <p><a href=\"https://medium.com/@msrbaipalli\" target=\"_blank\"><i tooltip=\"Medium\" class=\"fab fa-medium-m\"></i></a></p>\n        <p><a href=\"https://twitter.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"Twitter\" class=\"fab fa-twitter\"></i></a></p>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/certificates/certificates.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/certificates/certificates.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-certificate fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Certifications</h5>\n        <div class=\"innerCard\">\n          <div class=\"marginBottom certificate-container\">\n            <mat-card class=\"certificate-card\" *ngFor=\"let certificate of certificateList\">\n              <mat-card-header>\n                <div mat-card-avatar class=\"certificate-card-header-image\"\n                  [ngStyle]=\"{'background-image': certificate.iconUrl}\">\n                </div>\n                <mat-card-title>{{ certificate.title }}</mat-card-title>\n                <mat-card-subtitle>{{ certificate.provider }}</mat-card-subtitle>\n              </mat-card-header>\n              <mat-card-content>\n              </mat-card-content>\n              <mat-card-actions>\n                <button (click)=\"onViewCertificateClick(certificate.certificateUrl)\" class=\"certificate-button\"\n                  mat-flat-button>View Certificate</button>\n              </mat-card-actions>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/education/education.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/education/education.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <i class=\"fas fa-graduation-cap fas-tag\"></i>\n            </div>\n            <div class=\"col-sm-11\">\n                <h5 class=\" card-title\">Education</h5>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Master of Digital Sciences</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Kent State University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Major: </strong>Computer and Information Sciences\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> GPA: </strong>3.7/4.0\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Significant Courses: </strong>Algorithm and\n                            Programming with Data Structures, Enterprise Architecture, Database Management Systems,\n                            Application & Technology Architecture, Requirements & Engineering, and VB Programming.\n                        </p>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Bachelor of Technology</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Jawaharlal Nehru Technology\n                        University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Major: </strong>Computer Science and Engineering\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> GPA: </strong>3.2/4.0\n                        </p>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Significant Courses: </strong>Computer\n                            Programming\n                            &amp; Data Structures, Data Communications &amp; Computer Networks, Data Structure\n                            through C++, Data Warehouse &amp; Data Mining, Database Management Systems, Object\n                            Oriented Analysis &amp; Design, Design Patterns, Design &amp; Analysis of Algorithms and\n                            Formal Languages &amp; Automata Theory.\n                        </p>\n                    </div>\n                </div>\n                <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/interests/interests.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/interests/interests.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-lightbulb fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Interests</h5>\n        <p class=\"card-text\"></p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"Playing Guitar\" class=\"fas fa-guitar\"></i></p>\n          <p><i tooltip=\"Music\" class=\"fas fa-headphones-alt\"></i></p>\n          <p><i tooltip=\"Browsing\" class=\"fab fa-chrome\"></i></p>\n          <p><i tooltip=\"Photography\" class=\"fas fa-camera\"></i></p>\n          <p><i tooltip=\"Exploring\" class=\"fab fa-wpexplorer\"></i></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/long-story-short.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/long-story-short.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <app-navbar></app-navbar>\n    </div>\n    <div class=\"col-sm-9\">\n        <app-work></app-work>\n        <app-education></app-education>\n        <app-skills></app-skills>\n        <app-certificates></app-certificates>\n        <app-interests></app-interests>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/navbar/navbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/navbar/navbar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <img class=\"myPic\" src=\"assets/images/myPic.png\">\n  <div class=\"card-body cardBG\">\n    <div class=\"row arrowUp\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-user fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text\">Hello there!</p>\n        <p class=\"card-text\">I'm Srinivas, Frontend Developer from India and currently living in the United States.\n          I write JavaScript or TypeScript code most of the time and explore new Frontend frameworks.</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-phone fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text\">+1 (234) 716-4429</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <i class=\"fas fa-envelope fas-tag\"></i>\n      </div>\n      <div class=\"col-10\">\n        <p class=\"card-text emailId\"><a href=\"mailto:msrbaipalli@gmail.com\" target=\"_top\">msrbaipalli@gmail.com</a></p>\n      </div>\n    </div>\n    <hr class=\"lastHr\">\n    <div class=\"row\">\n      <div class=\"col-12 connect-icons\">\n        <a href=\"https://www.linkedin.com/in/msrbaipalli/\" target=\"_blank\"><i tooltip=\"LinkedIn\" class=\"fab fa-linkedin-in fas-tag\"></i></a>\n        <a href=\"https://github.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"GitHub\" class=\"fab fa-github fas-tag\"></i></a>\n        <a href=\"https://medium.com/@msrbaipalli\" target=\"_blank\"><i tooltip=\"Medium\" class=\"fab fa-medium-m fas-tag\"></i></a>\n        <a href=\"https://twitter.com/msrbaipalli\" target=\"_blank\"><i tooltip=\"Twitter\" class=\"fab fa-twitter fas-tag\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/skills/skills.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/skills/skills.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <i class=\"fas fa-drafting-compass fas-tag\"></i>\n      </div>\n      <div class=\"col-sm-11\">\n        <h5 class=\" card-title\">Skills</h5>\n        <p class=\"card-text\">PROGRAMMING LANGUAGES</p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"HTML5\" class=\"fab fa-html5\"></i></p>\n          <p><i tooltip=\"CSS3\" class=\"fab fa-css3-alt\"></i></p>\n          <p><i tooltip=\"SASS\" class=\"fab fa-sass\"></i></p>\n          <p><i tooltip=\"LESS\" class=\"fab fa-less\"></i></p>\n          <p><i tooltip=\"Angular\" class=\"fab fa-angular\"></i></p>\n          <p><i tooltip=\"JavaScript\" class=\"fab fa-js\"></i></p>\n          <p><i tooltip=\"NodeJs\" class=\"fab fa-node-js\"></i></p>\n          <p><i tooltip=\"Java\" class=\"fab fa-java\"></i></p>\n          <p><i tooltip=\"Dot Net\" class=\"fab fa-microsoft\"></i></p>\n        </div>\n\n        <p class=\"card-text\">TOOLS</p>\n        <div class=\"fa-icon\">\n          <p><i tooltip=\"npm\" class=\"fab fa-npm\"></i></p>\n          <p><i tooltip=\"Grunt\" class=\"fab fa-grunt\"></i></p>\n          <p><i tooltip=\"Git\" class=\"fab fa-git\"></i></p>\n          <p><i tooltip=\"GitLab\" class=\"fab fa-gitlab\"></i></p>\n          <p><i tooltip=\"GitHub\" class=\"fab fa-github\"></i></p>\n          <p><i tooltip=\"Terminal\" class=\"fas fa-terminal\"></i></p>\n          <p><i tooltip=\"Jenkins\" class=\"fab fa-jenkins\"></i></p>\n        </div>\n        <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/work/work.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/work/work.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <i class=\"fas fa-briefcase fas-tag\"></i>\n            </div>\n            <div class=\"col-sm-11\">\n                <h5 class=\"card-title\">Work Experience</h5>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Software Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Egen Solutions</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Egen Solutions\n                            is an\n                            enterprise\n                            web and mobile application development firm dedicated to build better user experiences\n                            at\n                            the for front of design. Egen also has an IT Talent Acquisition division and places\n                            highly\n                            skilled tech professionals in companies across the US.\n                        </p>\n                    </div>\n                    <!--<div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>HTML5, CSS3, JavaScript, AngularJS 1.6 and 8, Angular Material, Ngx Bootstrap, AJAX, JSON, SASS, LESS, Node, npm, Agile, Jenkins, Genesis, Visual Studio Code, IntelliJ, Postman, Source Tree, GIT, TFS.\n                    </p>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Application Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Kent State University</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Kent State University is a\n                            large, primary residential, public research university in Kent, Ohio. It has serval\n                            IT divisions which services on software solutions to the Organization.\n                        </p>\n                    </div>\n                    <!--<div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>Angular 2, Type Script, HTML4/5, CSS3/2, C#, ASP/ADO.NET 4.0, Bootstrap3, JavaScript, Responsive Web Design, AJAX, JSON, MS SQL Server 2008, Visual Studio 2017 and GitLab.\n                    </p>\n                </div>\n                <hr>\n                <div class=\"innerCard\">\n                    <div class=\"marginBottom\">\n                        <h5><strong>Application Developer</strong></h5> <strong class=\"highlightColor\"><i class=\"fas fa-at\"></i> Insas Technologies</strong>\n                    </div>\n                    <div class=\"marginBottom\">\n                        <p>\n                            <strong><i class=\"fas fa-caret-right\"></i> Description: </strong>Insas Technologies is one\n                            of the well-known start-up company focused on implementing large-scale IT projects for\n                            Retail and Education industry.\n                        </p>\n                    </div>\n                   <!-- <div class=\"marginBottom\">\n                        <strong><i class=\"fas fa-caret-right\"></i> Responsibilities:</strong>\n                    </div>\n                    <div class=\"bulletPoints\">\n                        <ul>\n                            <li>Involved in various phases of Software Development Life Cycle (SDLC) as requirement\n                                gathering, data modeling, analysis, architecture design & development for the project in\n                                an Agile/Scrum Environment.\n                            </li>\n                            <li>Involved in designing use cases with the help of business analyst team and developed\n                                technical requirement documents.\n                            </li>\n                            <li>Design develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular 1.6 that\n                                meets accessibility and web browser standards.\n                            </li>\n                            <li>Designed single page applications with rich user interface using HTML5, CSS3, Bootstrap,\n                                JavaScript, Angular 1.4/1.6.\n                            </li>\n                            <li>Wrote Angular Unit Tests and created various Components, Custom Directives, Pipes,\n                                Template syntax and Routing.\n                            </li>\n                        </ul>\n                    </div>-->\n                    <p>\n                        <strong><i class=\"fas fa-caret-right\"></i> Environment: </strong>HTML, CSS, AJAX, DHTML, JSON, HTML5, XML, DOM, Data visualization, JavaScript, MS Excel, jQuery, Bootstrap, AngularJS, Jasmine.\n                    </p>\n                </div>\n                <!--<button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Learn More!</button>-->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/stocks-watch/stocks-watch.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/stocks-watch/stocks-watch.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div cdkDropListGroup>\n        <div class=\"example-container\">\n            <h2>To do</h2>\n\n            <div\n                    cdkDropList\n                    [cdkDropListData]=\"todo\"\n                    class=\"example-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n            </div>\n        </div>\n\n        <div class=\"example-container\">\n            <h2>Done</h2>\n\n            <div\n                    cdkDropList\n                    [cdkDropListData]=\"done\"\n                    class=\"example-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-me.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-me.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"searchMe\">\n    <!-- Actual search box -->\n    <div class=\"form-group input-group-prepend searchMe-div\" dropdown>\n        <span class=\"fa fa-search form-control-feedback input-group-append\" *ngIf=\"!hasSearchValue()\"></span>\n        <button class=\"fa fa-times-circle search-clear-btn input-group-append\" *ngIf=\"hasSearchValue()\"\n            (click)=\"onSearchClear()\"></button>\n        <input type=\"text\" (focusout)=\"onSearchFocusout()\" [(ngModel)]=\"searchValue\" class=\"form-control\"\n            placeholder=\"Search Me!\">\n        <div class=\"input-group-append\">\n            <button (click)=\"openModal(longStoryShort)\" dropdownToggle class=\"btn btn-outline-secondary searchButton\"\n                type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" ria-expanded=\"false\"><i\n                    class=\"fas fa-history\"></i> Long Story Short\n            </button>\n            <ng-template #longStoryShort>\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">Long Story Short</h4>\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-long-story-short></app-long-story-short>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n\n    <div class=\"form-group searchMeResult-div\">\n        <div class=\"searchItem\" *ngIf=\"hasSearchValue()\">\n            <div *ngIf=\"!hasResults()\">\n                <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i> Results not found!\n            </div>\n            <app-work *ngIf=\"hasSearchMatch('work')\"></app-work>\n            <app-education *ngIf=\"hasSearchMatch('education')\"></app-education>\n            <app-skills *ngIf=\"hasSearchMatch('skills')\"></app-skills>\n            <app-certificates *ngIf=\"hasSearchMatch('certificates')\"></app-certificates>\n            <app-interests *ngIf=\"hasSearchMatch('interests')\"></app-interests>\n        </div>\n    </div>\n</div>");

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/stocks-watch/stocks-watch.component */ "./src/app/projects/stocks-watch/stocks-watch.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'home', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'stocks-watch', component: _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_2__["StocksWatchComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_me_search_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-me/search-me.component */ "./src/app/search-me/search-me.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/stocks-watch/stocks-watch.component */ "./src/app/projects/stocks-watch/stocks-watch.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-gist/dist/ngx-gist.module */ "./node_modules/ngx-gist/dist/ngx-gist.module.js");
/* harmony import */ var ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _long_story_short_long_story_short_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./long-story-short/long-story-short.module */ "./src/app/long-story-short/long-story-short.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _search_me_search_me_component__WEBPACK_IMPORTED_MODULE_3__["SearchMeComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_4__["IntroductionComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _projects_stocks_watch_stocks_watch_component__WEBPACK_IMPORTED_MODULE_6__["StocksWatchComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _long_story_short_long_story_short_module__WEBPACK_IMPORTED_MODULE_11__["LongStoryShortModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_9__["NgxGistModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-footer {\n  width: 100%;\n}\n\n.card-footer p {\n  text-align: center;\n  color: #9DA2A1;\n}\n\n.card-footer p a {\n  color: #F7F7F7;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWZvb3RlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlEQTJBMTtcbn1cblxuLmNhcmQtZm9vdGVyIHAgYSB7XG4gIGNvbG9yOiAjRjdGN0Y3O1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding: 0px 25px 80px 25px;\n}\n\n.div1 {\n  margin: 7% auto;\n}\n\n.gistFrame {\n    height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDBweCAyNXB4IDgwcHggMjVweDtcbn1cblxuLmRpdjEge1xuICBtYXJnaW46IDclIGF1dG87XG59XG5cbi5naXN0RnJhbWUge1xuICAgIGhlaWdodDogNjAwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.ctorParameters = function () { return []; };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __importDefault(__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/introduction/introduction.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Nunito');\n\n.title p {\n  font-size: 50px;\n  letter-spacing: 3px;\n  color: #F7F7F7;\n  font-family: 'Nunito', sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  text-transform: uppercase;\n  line-height: .8em;\n}\n\n.name p {\n  font-size: 22px;\n  text-transform: uppercase;\n  line-height: 1em;\n  color: #F7F7F7;\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: .14em;\n}\n\n.tagLine p {\n  font-size: 20px;\n  color: #BABBBD;\n  line-height: 1.15em;\n}\n\n.emailId, .searchMore {\n  color: #F7F7F7;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .10em;\n  line-height: 4em;\n}\n\n.emailId a {\n    color: #F7F7F7;\n    line-height: 1.5em;\n}\n\n.emailId a:hover {\n    color: #BABBBD;\n    text-decoration: none;\n}\n\n.socialIcons {\n  padding: 20px 0px;\n}\n\n.socialIcons p {\n  letter-spacing: 1.2em;\n  display: inline-block;\n}\n\n.socialIcons p i:hover {\n  color: #F7F7F7;\n}\n\n.socialIcons p i {\n  font-size: 32px;\n  color: #BABBBD;\n}\n\n.searchMore p{\n    color: #BABBBD;\n    line-height: 2em;\n}\n\n.searchMore .lss {\n    color: #F7F7F7;\n    line-height: 2em;\n}\n\n.searchMore .lss:hover {\n    color: #BABBBD;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDs7QUFFN0Q7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvJyk7XG5cbi50aXRsZSBwIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBjb2xvcjogI0Y3RjdGNztcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAuOGVtO1xufVxuXG4ubmFtZSBwIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBjb2xvcjogI0Y3RjdGNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLjE0ZW07XG59XG5cbi50YWdMaW5lIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQkFCQkJEO1xuICBsaW5lLWhlaWdodDogMS4xNWVtO1xufVxuXG4uZW1haWxJZCwgLnNlYXJjaE1vcmUge1xuICBjb2xvcjogI0Y3RjdGNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xMGVtO1xuICBsaW5lLWhlaWdodDogNGVtO1xufVxuXG4uZW1haWxJZCBhIHtcbiAgICBjb2xvcjogI0Y3RjdGNztcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5lbWFpbElkIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjQkFCQkJEO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uc29jaWFsSWNvbnMge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLnNvY2lhbEljb25zIHAge1xuICBsZXR0ZXItc3BhY2luZzogMS4yZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNvY2lhbEljb25zIHAgaTpob3ZlciB7XG4gIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4uc29jaWFsSWNvbnMgcCBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogI0JBQkJCRDtcbn1cblxuLnNlYXJjaE1vcmUgcHtcbiAgICBjb2xvcjogI0JBQkJCRDtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xufVxuLnNlYXJjaE1vcmUgLmxzcyB7XG4gICAgY29sb3I6ICNGN0Y3Rjc7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLnNlYXJjaE1vcmUgLmxzczpob3ZlciB7XG4gICAgY29sb3I6ICNCQUJCQkQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    IntroductionComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }
    ]; };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __importDefault(__webpack_require__(/*! raw-loader!./introduction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./introduction.component.css */ "./src/app/introduction/introduction.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/certificates/certificates.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/long-story-short/certificates/certificates.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.marginBottom {\n    margin-bottom: 10px;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.innerCard a{\n    color: #6E757C;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\nhr {\n    margin: 30px 0px;\n    padding: .1px 0;\n    background: #6F757B;\n}\n\n.certificate-container .certificate-card {\n    display: inline-block;\n}\n\n.certificate-container mat-card-header {\n    height: 65px;\n}\n\n.certificate-container mat-card-title {\n    color: #111 ;\n    font-size: 16px;\n}\n\n.certificate-container mat-card-subtitle {\n    font-size: 14px;\n}\n\n.certificate-card {\n    box-shadow: 0 6px 16px 0 rgba(0,0,0,.2);\n    width: 300px;\n    padding-bottom: 20px;\n    margin-right: 25px;\n    margin-bottom: 25px;\n}\n\n.certificate-card-header-image {\n    background-size: cover;\n    height: 30px;\n    width: 30px;\n}\n\n.certificate-button {\n    background: #fff;\n    border: 1px solid #036A78;\n    color: #036A78;\n    margin-left: 8px;\n    font-size: 12px;\n    height: 30px;\n    line-height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC9jZXJ0aWZpY2F0ZXMvY2VydGlmaWNhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGtCQUFrQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC9jZXJ0aWZpY2F0ZXMvY2VydGlmaWNhdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgICBjb2xvcjogIzZFNzU3QztcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzg3OEU5NTtcbiAgICBjb2xvcjogI0Y3RjdGNztcbn1cblxuLm1hcmdpbkJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmlubmVyQ2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlubmVyQ2FyZCBhe1xuICAgIGNvbG9yOiAjNkU3NTdDO1xufVxuXG4uZmFzLXRhZyB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmhyIHtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgIHBhZGRpbmc6IC4xcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjNkY3NTdCO1xufVxuXG4uY2VydGlmaWNhdGUtY29udGFpbmVyIC5jZXJ0aWZpY2F0ZS1jYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jZXJ0aWZpY2F0ZS1jb250YWluZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG59XG5cbi5jZXJ0aWZpY2F0ZS1jb250YWluZXIgbWF0LWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiAjMTExIDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jZXJ0aWZpY2F0ZS1jb250YWluZXIgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNlcnRpZmljYXRlLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggMCByZ2JhKDAsMCwwLC4yKTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jZXJ0aWZpY2F0ZS1jYXJkLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi5jZXJ0aWZpY2F0ZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAzNkE3ODtcbiAgICBjb2xvcjogIzAzNkE3ODtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/long-story-short/certificates/certificates.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/long-story-short/certificates/certificates.component.ts ***!
  \*************************************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/utils.service */ "./src/app/shared/utils/utils.service.ts");
/* harmony import */ var _certificates_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates.constants */ "./src/app/long-story-short/certificates/certificates.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CertificatesComponent = /** @class */ (function () {
    function CertificatesComponent() {
        this.certificateList = _certificates_constants__WEBPACK_IMPORTED_MODULE_2__["CERTIFICATE_LIST"];
    }
    CertificatesComponent.prototype.ngOnInit = function () {
    };
    CertificatesComponent.prototype.onViewCertificateClick = function (url) {
        if (Object(src_app_shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(url)) {
            return;
        }
        window.open(url, '_blank');
    };
    CertificatesComponent.ctorParameters = function () { return []; };
    CertificatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificates',
            template: __importDefault(__webpack_require__(/*! raw-loader!./certificates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/certificates/certificates.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./certificates.component.css */ "./src/app/long-story-short/certificates/certificates.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CertificatesComponent);
    return CertificatesComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/certificates/certificates.constants.ts":
/*!*************************************************************************!*\
  !*** ./src/app/long-story-short/certificates/certificates.constants.ts ***!
  \*************************************************************************/
/*! exports provided: CERTIFICATE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFICATE_LIST", function() { return CERTIFICATE_LIST; });
var CERTIFICATE_LIST = [
    {
        provider: 'Hacker Rank',
        title: 'Angular (Basic)',
        iconUrl: 'url("https://hrcdn.net/community-frontend/assets/favicon-ddc852f75a.png")',
        certificateUrl: 'https://www.hackerrank.com/certificates/772ff811d48c'
    },
    {
        provider: 'Hacker Rank',
        title: 'JavaScript (Basic)',
        iconUrl: 'url("https://hrcdn.net/community-frontend/assets/favicon-ddc852f75a.png")',
        certificateUrl: 'https://www.hackerrank.com/certificates/55a0177c19ef'
    },
    {
        provider: 'Edx HardwardX',
        title: 'CS50: Introduction to Computer Science',
        iconUrl: 'url("https://www.edx.org/favicon.ico")',
        certificateUrl: 'https://courses.edx.org/certificates/cfdbf919a099417ab1ea259741291ac2'
    },
    {
        provider: 'Stanford University',
        title: 'Computer Science 101',
        iconUrl: 'url("http://www-media.stanford.edu/assets/favicon/mstile-70x70.png")',
        certificateUrl: 'https://prod-cert-bucket.s3.amazonaws.com/downloads/2c9c3cc2083a47d79cc5a96a23498d7a/Statement.pdf'
    },
    {
        provider: 'Free Code Camp',
        title: 'Legacy Front End',
        iconUrl: 'url("https://www.freecodecamp.org/favicon-32x32.png?v=6cba562cbd10e31af925a976f3db73f7")',
        certificateUrl: 'https://www.freecodecamp.org/certification/bmsrinivasrao007/legacy-front-end'
    }
];


/***/ }),

/***/ "./src/app/long-story-short/education/education.component.css":
/*!********************************************************************!*\
  !*** ./src/app/long-story-short/education/education.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.marginBottom {\n    margin-bottom: 10px;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\nhr {\n    margin: 30px 0px;\n    padding: .1px 0;\n    background: #6F757B;\n}\n\n.bulletPoints {\n    padding: 10px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGtCQUFrQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvbmctc3Rvcnktc2hvcnQvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgICAgY29sb3I6ICM2RTc1N0M7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM4NzhFOTU7XG4gICAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5tYXJnaW5Cb3R0b20ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbm5lckNhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mYXMtdGFnIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogIzZFNzU3QztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaHIge1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG4gICAgcGFkZGluZzogLjFweCAwO1xuICAgIGJhY2tncm91bmQ6ICM2Rjc1N0I7XG59XG5cbi5idWxsZXRQb2ludHMge1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/long-story-short/education/education.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/long-story-short/education/education.component.ts ***!
  \*******************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent.ctorParameters = function () { return []; };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __importDefault(__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/education/education.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./education.component.css */ "./src/app/long-story-short/education/education.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/interests/interests.component.css":
/*!********************************************************************!*\
  !*** ./src/app/long-story-short/interests/interests.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC9pbnRlcmVzdHMvaW50ZXJlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGtCQUFrQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sb25nLXN0b3J5LXNob3J0L2ludGVyZXN0cy9pbnRlcmVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODc4RTk1O1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4uaW5uZXJDYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmFzLXRhZyB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/long-story-short/interests/interests.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/long-story-short/interests/interests.component.ts ***!
  \*******************************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InterestsComponent = /** @class */ (function () {
    function InterestsComponent() {
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent.ctorParameters = function () { return []; };
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interests',
            template: __importDefault(__webpack_require__(/*! raw-loader!./interests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/interests/interests.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./interests.component.css */ "./src/app/long-story-short/interests/interests.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/long-story-short.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/long-story-short/long-story-short.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvbmctc3Rvcnktc2hvcnQvbG9uZy1zdG9yeS1zaG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/long-story-short/long-story-short.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/long-story-short/long-story-short.component.ts ***!
  \****************************************************************/
/*! exports provided: LongStoryShortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongStoryShortComponent", function() { return LongStoryShortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LongStoryShortComponent = /** @class */ (function () {
    function LongStoryShortComponent() {
    }
    LongStoryShortComponent.prototype.ngOnInit = function () {
    };
    LongStoryShortComponent.ctorParameters = function () { return []; };
    LongStoryShortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-long-story-short',
            template: __importDefault(__webpack_require__(/*! raw-loader!./long-story-short.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/long-story-short.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./long-story-short.component.css */ "./src/app/long-story-short/long-story-short.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LongStoryShortComponent);
    return LongStoryShortComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/long-story-short.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/long-story-short/long-story-short.module.ts ***!
  \*************************************************************/
/*! exports provided: LongStoryShortModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongStoryShortModule", function() { return LongStoryShortModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates/certificates.component */ "./src/app/long-story-short/certificates/certificates.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component */ "./src/app/long-story-short/education/education.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/long-story-short/interests/interests.component.ts");
/* harmony import */ var _long_story_short_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./long-story-short.component */ "./src/app/long-story-short/long-story-short.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/long-story-short/navbar/navbar.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/long-story-short/skills/skills.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/work.component */ "./src/app/long-story-short/work/work.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var components = [
    _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_2__["CertificatesComponent"],
    _education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"],
    _interests_interests_component__WEBPACK_IMPORTED_MODULE_4__["InterestsComponent"],
    _long_story_short_component__WEBPACK_IMPORTED_MODULE_5__["LongStoryShortComponent"],
    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
    _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
    _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"]
];
var LongStoryShortModule = /** @class */ (function () {
    function LongStoryShortModule() {
    }
    LongStoryShortModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [components],
            exports: [components],
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]
        })
    ], LongStoryShortModule);
    return LongStoryShortModule;
}());



/***/ }),

/***/ "./src/app/long-story-short/navbar/navbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/long-story-short/navbar/navbar.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n      color: #F7F7F7;\n      border-radius: 0px;\n}\n\nhr {\n    background: none;\n    margin-top: 30px;\n}\n\n.row {\n    padding-bottom: 20px;\n}\n\n.col-10 {\n    padding: 0;\n    margin: 0;\n}\n\n.cardBG {\n    background: #036A78;\n}\n\n.myPic {\n    width:100%;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.connect-icons {\n    display: flex;\n    justify-content: center;\n}\n\n.connect-icons a {\n    padding-right: 20px;\n}\n\n.fas-tag {\n    font-size: 25px;\n    color: #F7F7F7;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\n.skillsIcon p {\n    color: #6FA3D4;\n    font-size: 50px;\n    display: inline-block;\n    margin-right: 20px;\n}\n\n.emailId a {\n    color: #F7F7F7;\n    line-height: 1.5em;\n}\n\n.emailId a:hover {\n    color: #F7F7F7;\n    text-decoration: none;\n}\n\n.lastHr {\n    margin-top: 10px !important;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSxjQUFjO01BQ2Qsa0JBQWtCO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgICBjb2xvcjogI0Y3RjdGNztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuaHIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnJvdyB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jb2wtMTAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZEJHIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDM2QTc4O1xufVxuXG4ubXlQaWMge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzg3OEU5NTtcbiAgICBjb2xvcjogI0Y3RjdGNztcbn1cblxuLmlubmVyQ2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbm5lY3QtaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb25uZWN0LWljb25zIGEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5mYXMtdGFnIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5za2lsbHNJY29uIHAge1xuICAgIGNvbG9yOiAjNkZBM0Q0O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZW1haWxJZCBhIHtcbiAgICBjb2xvcjogI0Y3RjdGNztcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi5lbWFpbElkIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxhc3RIciB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/long-story-short/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/long-story-short/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/long-story-short/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/skills/skills.component.css":
/*!**************************************************************!*\
  !*** ./src/app/long-story-short/skills/skills.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n      transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxrRUFBa0U7TUFDakUsK0NBQStDO01BQy9DLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsa0JBQWtCO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvbmctc3Rvcnktc2hvcnQvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODc4RTk1O1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4uaW5uZXJDYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmFzLXRhZyB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/long-story-short/skills/skills.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/long-story-short/skills/skills.component.ts ***!
  \*************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent.ctorParameters = function () { return []; };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __importDefault(__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/skills/skills.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./skills.component.css */ "./src/app/long-story-short/skills/skills.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/long-story-short/work/work.component.css":
/*!**********************************************************!*\
  !*** ./src/app/long-story-short/work/work.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n      color: #6E757C;\n      margin-bottom: 25px;\n      border-radius: 0px;\n}\n\n.card-header {\n    background: #878E95;\n    color: #F7F7F7;\n}\n\n.marginBottom {\n    margin-bottom: 10px;\n}\n\n.innerCard {\n    box-shadow: none;\n}\n\n.fas-tag {\n    font-size: 45px;\n    color: #6E757C;\n    padding: 10px;\n}\n\n.card-title {\n    font-size: 32px;\n    color: #6E757C;\n    padding-bottom: 15px;\n}\n\nhr {\n    margin: 30px 0px;\n    padding: .1px 0;\n    background: #6F757B;\n}\n\n.bulletPoints {\n    padding: 5px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsa0JBQWtCO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9uZy1zdG9yeS1zaG9ydC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODc4RTk1O1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4ubWFyZ2luQm90dG9tIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5uZXJDYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmFzLXRhZyB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGNvbG9yOiAjNkU3NTdDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgY29sb3I6ICM2RTc1N0M7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmhyIHtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgIHBhZGRpbmc6IC4xcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjNkY3NTdCO1xufVxuXG4uYnVsbGV0UG9pbnRzIHtcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/long-story-short/work/work.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/long-story-short/work/work.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent.ctorParameters = function () { return []; };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __importDefault(__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/long-story-short/work/work.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./work.component.css */ "./src/app/long-story-short/work/work.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/projects/stocks-watch/stocks-watch.component.css":
/*!******************************************************************!*\
  !*** ./src/app/projects/stocks-watch/stocks-watch.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    margin: 10px;\n}\n\n.example-container {\n  width: 400px;\n  max-width: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvc3RvY2tzLXdhdGNoL3N0b2Nrcy13YXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOztnREFFOEM7QUFDaEQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9zdG9ja3Mtd2F0Y2gvc3RvY2tzLXdhdGNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5leGFtcGxlLWxpc3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/projects/stocks-watch/stocks-watch.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/stocks-watch/stocks-watch.component.ts ***!
  \*****************************************************************/
/*! exports provided: StocksWatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksWatchComponent", function() { return StocksWatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var StocksWatchComponent = /** @class */ (function () {
    function StocksWatchComponent() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Walk dog'
        ];
    }
    StocksWatchComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    StocksWatchComponent.prototype.ngOnInit = function () { };
    StocksWatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-watch',
            template: __importDefault(__webpack_require__(/*! raw-loader!./stocks-watch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/stocks-watch/stocks-watch.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./stocks-watch.component.css */ "./src/app/projects/stocks-watch/stocks-watch.component.css")).default]
        })
    ], StocksWatchComponent);
    return StocksWatchComponent;
}());



/***/ }),

/***/ "./src/app/search-me/search-me.component.css":
/*!***************************************************!*\
  !*** ./src/app/search-me/search-me.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Styles for wrapping the search box */\n\n.searchMe {\n    width: 80%;\n    margin: 30px auto;\n}\n\n.searchMe button {\n    color: #F7F7F7;\n}\n\n/* Bootstrap 4 text input with search icon */\n\n.searchMe-div .form-control {\n    padding: 10px 8px;\n}\n\n.searchMe-div .form-control-feedback {\n    position: relative;\n    padding-left: 5px;\n    z-index: 2;\n    display: block;\n    width: 35px;\n    height: 2.375rem;\n    line-height: 2.375rem;\n    text-align: center;\n    pointer-events: none;\n    color: #ACAFB1;\n    background: #3C4647;\n    border-radius: 4px 0px 0px 4px;\n}\n\n.searchMe-div .form-control {\n    color: #BABBBD;\n    background: #3C4647;\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);\n}\n\n.search-clear-btn {\n    position: relative;\n    top: 0px;\n    width: 35px;\n    height: 38px;\n    padding-top: 5px;\n    padding-left: 5px;\n    border-radius: .25rem 0px 0px .25rem;\n    background: #3C4647;\n    color: #ACAFB1;\n    border: none;\n    z-index: 2;\n    font-size: 18px;\n    line-height: 30px;\n}\n\n.searchMe-div span {\n    border-radius: 4px;\n}\n\n.searchMe-div .form-control::-moz-placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMe-div .form-control:-ms-input-placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMe-div .form-control::-ms-input-placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMe-div .form-control::placeholder {\n    color: #BABBBD;\n    opacity: 1;\n}\n\n.searchMeResult-div {\n    z-index: 1;\n    top: 75px;\n    width: 80%;\n    position: absolute;\n}\n\n.searchItem {\n    margin: 0px;\n    color: #3F4346;\n    background: #F7F7F7;\n    padding: 10px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    height: auto;\n    max-height: 70vh;\n    overflow: auto;\n}\n\n.searchItem:hover {\n    cursor: pointer;\n}\n\n.searchMeResult-div .searchItem::after {\n    content: \"\";\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent #F7F7F7 transparent;\n}\n\n.searchButton {\n    width: 180px;\n    border-color: #3C4647;\n    border-radius: 0px 4px 4px 0px;\n    background: #026A77;\n    color: #EEF8F9;\n}\n\n.searchButton:hover {\n    background: #0C9CB4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLW1lL3NlYXJjaC1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7QUFFdkM7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSw0Q0FBNEM7O0FBRTVDO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFIQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBSEE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUhBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrRUFBa0U7SUFDbEUsK0NBQStDO0lBQy9DLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtbWUvc2VhcmNoLW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZm9yIHdyYXBwaW5nIHRoZSBzZWFyY2ggYm94ICovXG5cbi5zZWFyY2hNZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cbi5zZWFyY2hNZSBidXR0b24ge1xuICAgIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4vKiBCb290c3RyYXAgNCB0ZXh0IGlucHV0IHdpdGggc2VhcmNoIGljb24gKi9cblxuLnNlYXJjaE1lLWRpdiAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcbn1cblxuLnNlYXJjaE1lLWRpdiAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDIuMzc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICNBQ0FGQjE7XG4gICAgYmFja2dyb3VuZDogIzNDNDY0NztcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG59XG5cbi5zZWFyY2hNZS1kaXYgLmZvcm0tY29udHJvbCB7XG4gICAgY29sb3I6ICNCQUJCQkQ7XG4gICAgYmFja2dyb3VuZDogIzNDNDY0NztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4uc2VhcmNoLWNsZWFyLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAwcHggMHB4IC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjM0M0NjQ3O1xuICAgIGNvbG9yOiAjQUNBRkIxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnNlYXJjaE1lLWRpdiBzcGFuIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zZWFyY2hNZS1kaXYgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQkFCQkJEO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWFyY2hNZVJlc3VsdC1kaXYge1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiA3NXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2VhcmNoSXRlbSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICMzRjQzNDY7XG4gICAgYmFja2dyb3VuZDogI0Y3RjdGNztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNlYXJjaEl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaE1lUmVzdWx0LWRpdiAuc2VhcmNoSXRlbTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNGN0Y3RjcgdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2hCdXR0b24ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBib3JkZXItY29sb3I6ICMzQzQ2NDc7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMjZBNzc7XG4gICAgY29sb3I6ICNFRUY4Rjk7XG59XG5cbi5zZWFyY2hCdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwQzlDQjQ7XG59XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/utils.service */ "./src/app/shared/utils/utils.service.ts");
/* harmony import */ var _search_me_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-me.constants */ "./src/app/search-me/search-me.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SearchMeComponent = /** @class */ (function () {
    function SearchMeComponent(modalService) {
        this.modalService = modalService;
    }
    SearchMeComponent.prototype.ngOnInit = function () {
        this._reset();
    };
    SearchMeComponent.prototype.hasSearchMatch = function (key) {
        var _this = this;
        var items = key && _search_me_constants__WEBPACK_IMPORTED_MODULE_3__["SEARCH_ITEMS"][key];
        if (Object(_shared_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(items)) {
            return false;
        }
        return items.some(function (item) {
            return item.toLowerCase().includes(_this.searchValue.toLowerCase());
        });
    };
    SearchMeComponent.prototype.hasResults = function () {
        var _this = this;
        return Object.keys(_search_me_constants__WEBPACK_IMPORTED_MODULE_3__["SEARCH_ITEMS"]).some(function (key) { return _this.hasSearchMatch(key); });
    };
    SearchMeComponent.prototype.hasSearchValue = function () {
        return this.searchValue !== '';
    };
    SearchMeComponent.prototype.openModal = function (template) {
        this._reset();
        this.modalRef = this.modalService.show(template);
    };
    SearchMeComponent.prototype.onSearchFocusout = function () {
        // this._reset();
    };
    SearchMeComponent.prototype.onSearchClear = function () {
        this._reset();
    };
    SearchMeComponent.prototype._reset = function () {
        this.searchValue = '';
        this.isSearchItemFound = false;
    };
    SearchMeComponent.prototype._setSearchItemFound = function (flag) {
        this.isSearchItemFound = flag;
    };
    SearchMeComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }
    ]; };
    SearchMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-me',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-me/search-me.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search-me.component.css */ "./src/app/search-me/search-me.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], SearchMeComponent);
    return SearchMeComponent;
}());



/***/ }),

/***/ "./src/app/search-me/search-me.constants.ts":
/*!**************************************************!*\
  !*** ./src/app/search-me/search-me.constants.ts ***!
  \**************************************************/
/*! exports provided: SEARCH_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ITEMS", function() { return SEARCH_ITEMS; });
var skills = 'HTML, CSS3, SASS, LESS, Angular, JavaScript, NodeJs, Java, Dot Net, NPM, Grunt, Git, GitHub, GitLab, Terminal, Jenkins';
var SEARCH_ITEMS = {
    work: [
        'work',
        'experience',
        'work experience'
    ],
    education: [
        'education',
        'study',
        'studies',
        'school',
        'degree',
        'master',
        'masters',
        'master of digital sciences',
        'bachelors',
        'bachelor of technology',
        'computer science and engineering',
        'kent state university',
        'jawaharlal nehru technology university'
    ],
    skills: [
        'skills',
        'skill',
        'programmig languages',
        'tools',
        skills
    ],
    certificates: [
        'certificates',
        'certificate',
        'edx HardwardX',
        'Stanford University',
        'Free Code Camp',
        'Legacy Front End',
        'Computer Science 101',
        'Hacker Rank',
        skills
    ],
    interests: [
        'interests',
        'interest',
        'Playing Guitar',
        'Music',
        'Browsing',
        'Photography',
        'Exploring'
    ]
};


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2020 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"]
            ],
            imports: [
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/utils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/utils/utils.service.ts ***!
  \***********************************************/
/*! exports provided: isNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
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