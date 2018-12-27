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

/***/ "./src/app/advertisement/advertisement.component.html":
/*!************************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  advertisement works!\n</p>\n"

/***/ }),

/***/ "./src/app/advertisement/advertisement.component.scss":
/*!************************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkdmVydGlzZW1lbnQvYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/advertisement/advertisement.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.ts ***!
  \**********************************************************/
/*! exports provided: AdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementComponent", function() { return AdvertisementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdvertisementComponent = /** @class */ (function () {
    function AdvertisementComponent() {
    }
    AdvertisementComponent.prototype.ngOnInit = function () {
    };
    AdvertisementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advertisement',
            template: __webpack_require__(/*! ./advertisement.component.html */ "./src/app/advertisement/advertisement.component.html"),
            styles: [__webpack_require__(/*! ./advertisement.component.scss */ "./src/app/advertisement/advertisement.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvertisementComponent);
    return AdvertisementComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");





var routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-footer ></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FoodApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./advertisement/advertisement.component */ "./src/app/advertisement/advertisement.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./common-header/common-header.component */ "./src/app/common-header/common-header.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_9__["VideosComponent"],
                _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_16__["AdvertisementComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationComponent"],
                _common_header_common_header_component__WEBPACK_IMPORTED_MODULE_28__["CommonHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YoutubePlayerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["NoopAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common-header/common-header.component.html":
/*!************************************************************!*\
  !*** ./src/app/common-header/common-header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  common-header works!\n</p>\n"

/***/ }),

/***/ "./src/app/common-header/common-header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/common-header/common-header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1oZWFkZXIvY29tbW9uLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/common-header/common-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common-header/common-header.component.ts ***!
  \**********************************************************/
/*! exports provided: CommonHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHeaderComponent", function() { return CommonHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonHeaderComponent = /** @class */ (function () {
    function CommonHeaderComponent() {
    }
    CommonHeaderComponent.prototype.ngOnInit = function () {
    };
    CommonHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-header',
            template: __webpack_require__(/*! ./common-header.component.html */ "./src/app/common-header/common-header.component.html"),
            styles: [__webpack_require__(/*! ./common-header.component.scss */ "./src/app/common-header/common-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonHeaderComponent);
    return CommonHeaderComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #64b0f7;\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\n    <div fxLayout=\"column\">\n      <h1 style=\"color:white; font-size: 3em\">JAMK</h1>\n\n      <h3 style=\"color:white;\"> ©2018 Devaki Inc.<br />\n        All Rights Reserved.\n      </h3>\n\n    </div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around  start\">\n      <h3 style=\"color:white\">About us</h3>\n      <a style=\"color:white\" href=\"#\">Devaki brands</a>\n      <a style=\"color:white\" href=\"#\">Our company values</a>\n      <a style=\"color:white\" href=\"#\">Careers</a>\n      <a style=\"color:white\" href=\"#\">Press</a>\n      <a style=\"color:white\" href=\"#\">Ad specs</a>\n      <a style=\"color:white\" href=\"#\">Accessibility</a>\n      <a style=\"color:white\" href=\"#\">Office locations</a>\n    </div>\n    <div fxLayout=\"column\">\n      <h3 style=\"color:white\">Contact us</h3>\n      <a style=\"color:white\" href=\"#\">AOL member help</a>\n      <a style=\"color:white\" href=\"#\"> Yahoo account help</a>\n      <a style=\"color:white\" href=\"#\">Advertise</a>\n      <a style=\"color:white\" href=\"#\">Closed captioning feedback</a>\n    </div>\n    <div fxLayout=\"column\">\n      <h3 style=\"color:white\">Brand trust</h3>\n      <a style=\"color:white\" href=\"#\">Privacy policy (Updated)</a>\n      <a style=\"color:white\" href=\"#\">Terms of service (Updated)</a>\n      <a style=\"color:white\" href=\"#\"> About our ads</a>\n      <a style=\"color:white\" href=\"#\">Transparency</a>\n      <a style=\"color:white\" href=\"#\">Business & human rights</a>\n      <a style=\"color:white\" href=\"#\">Standards of business conduct</a>\n    </div>\n    <div fxLayout=\"column\">\n      <h3 style=\"color:white\">Follow us</h3>\n      <a style=\"color:white\" href=\"#\"> Twitter</a>\n      <a style=\"color:white\" href=\"#\"> Facebook</a>\n      <a style=\"color:white\" href=\"#\">Instagram</a>\n      <a style=\"color:white\" href=\"#\"> LinkedIn</a>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none !important;\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxKQU1LRk9PREFQUFxcSkFNSy9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBZ0M7RUFDaEMsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div fxLayout=\"row\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"logo\"><img src=\"assets/logos/JAMK.png\" alt=\"logo1\" width=\"100\" height=\"80\"></div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <button class=\"venu\" mat-raised-button color=\"primary\">Vendor Login</button>\n      <!-- <button mat-raised-button color=\"primary\">Login</button> -->\n      <button mat-raised-button color=\"primary\" routerLink=\"/register\" routerLinkActive=\"active\" >Register/ Login</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #41aae7;\n  width: 1400PX; }\n\n.logo {\n  margin-left: 30px; }\n\n.venu {\n  margin-left: 850px; }\n\nbutton {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxKQU1LRk9PREFQUFxcSkFNSy9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFDekIsY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxYWFlNztcclxuICAgIHdpZHRoOiAxNDAwUFg7XHJcbn1cclxuLmxvZ297XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4udmVudXtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NTBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n  <app-header></app-header>\n  <app-news></app-news>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n    <app-advertisement></app-advertisement>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n    <div fxLayout=\"row\">\n      <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n              <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n              <span>{{state.name}}</span> |\n              <small>Population: {{state.population}}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"City\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let state of filteredCities | async\" [value]=\"state.name\">\n              <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n              <span>{{state.name}}</span> |\n              <small>Population: {{state.population}}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Search for restaurents....\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let state of filteredSearch | async\" [value]=\"state.name\">\n              <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n              <span>{{state.name}}</span> |\n              <small>Population: {{state.population}}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </form>\n    </div>\n    <div fxLayout=\"row\" class=\"radio\">\n      <mat-radio-group>\n        <mat-radio-button value=\"online\" checked>ONLINE</mat-radio-button>\n        <mat-radio-button value=\"offline\">OFFLINE</mat-radio-button>\n        <mat-radio-button value=\"pointshub\">POINTS HUB</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div fxLayout=\"row\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/KFC.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title>KFC</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/yummychicken.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title>kritunga</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div fxLayout=\"row\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/roast.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title> BAWARCHI</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/burger.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title>MC DONALS</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div fxLayout=\"row\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/KFC.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title>KFC</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/yummychicken.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title>kritunga</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div fxLayout=\"row\">\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/roast.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title> BAWARCHI</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n      <mat-card class=\"example-card\">\n        <mat-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <img src=\"./assets/burger.jpg\" height=\"150\" width=\"150\" alt=\"Photo of a chicken\">\n            <div fxLayout=\"column\">\n              <mat-card-title>MC DONALS</mat-card-title>\n              <mat-card-subtitle>Biryani, Hyderabadi, North Indian </mat-card-subtitle>\n              <span>\n                Cost ₹300 for one<br />\n                Min ₹0 · Up to 45 min<br />\n                Accepts cash & online payments\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"warn\">Order Online</button>\n          <button mat-button color=\"warn\">Save for Later</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div fxLayout=\"row\">\n      <app-videos></app-videos>\n    </div>\n    <div fxLayout=\"row\">\n      <div fxLayout=\"column\">\n        <h2>Quick Search</h2>\n        <mat-card-subtitle>Discover search by type of meal</mat-card-subtitle>\n        <mat-card class=\"example-category\">\n          <mat-card-content>\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n              <div fxLayout=\"column\">\n                <img src=\"./assets/delivery.png\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Delivery</p>\n              </div>\n              <div fxLayout=\"column\">\n                <img src=\"./assets/breakfast.png\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Break Fast</p>\n              </div>\n              <div fxLayout=\"column\">\n                <img src=\"./assets/lunch.png\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Lunch</p>\n              </div>\n              <div fxLayout=\"column\">\n                <img src=\"./assets/dinner.jpg\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Dinner</p>\n              </div>\n              <div fxLayout=\"column\">\n                <img src=\"./assets/drinks.png\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Drinks & NightLife</p>\n              </div>\n              <div fxLayout=\"column\">\n                <img src=\"./assets/cafes.png\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Cafes</p>\n              </div>\n              <div fxLayout=\"column\">\n                <img src=\"./assets/pocket.jpg\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Pocket-Friendly Delivery</p>\n              </div>\n              <div fxLayout=\"column\">\n                <img src=\"./assets/luxurydining.png\" height=\"50\" width=\"50\" alt=\"Photo of a chicken\">\n                <p>Luxury Dinning</p>\n              </div>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start end\">\n    <app-advertisement></app-advertisement>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none !important;\n  margin-top: 8px; }\n\n.example-card {\n  width: 400px;\n  margin: 5px; }\n\nimg {\n  border-radius: 50%; }\n\n.example-category {\n  width: 930px; }\n\nmat-form-field {\n  margin-right: 50px; }\n\nmat-radio-button {\n  margin-right: 50px; }\n\n.radio {\n  border: 1px solid #64b0f7;\n  padding: 15px 210px 15px 210px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0Y6XFxKQU1LRk9PREFQUFxcSkFNSy9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBZ0M7RUFDaEMsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osWUFBVyxFQUNkOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksYUFBWSxFQUNmOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLCtCQUE2QixFQUNoQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5leGFtcGxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5leGFtcGxlLWNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDkzMHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbm1hdC1yYWRpby1idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7ICBcclxufVxyXG4gIFxyXG4ucmFkaW97XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjRiMGY3O1xyXG4gICAgcGFkZGluZzoxNXB4IDIxMHB4IDE1cHggMjEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        var _this = this;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
    }
    HomePageComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-category\">\n  <mat-card-content>\n    <div fxLayout=\"row \" fxLayoutAlign=\"space-around center\">\n      <div fxLayout=\"column\">\n        <youtube-player class=\"video\" [videoId]=\"id\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\n        </youtube-player>\n      </div>\n      <div fxLayout=\"column\">\n        <youtube-player class=\"video\" [videoId]=\"id1\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\n        </youtube-player>\n      </div>\n      <div fxLayout=\"column\">\n        <youtube-player class=\"video\" [videoId]=\"id2\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\n        </youtube-player>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videos {\n  height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9GOlxcSkFNS0ZPT0RBUFBcXEpBTUsvc3JjXFxhcHBcXG5ld3NcXG5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW9ze1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.id = 'qDuKsiwS5xw';
        this.id1 = 'CXbj2fE2mMI';
        this.id2 = 'F6AeC8V25As';
    }
    NewsComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    NewsComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"margin-top:50px\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Registration</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form fxLayout=\"column\" #registerForm=\"ngForm\">\n        <table cellspacing=\"0\">\n          <tbody>\n            <tr>\n              <td>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"User Name\" [formControl]=\"userName\" required name=\"userName\">\n                  <mat-error *ngIf=\"userName.invalid\"></mat-error>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput type=\"tel\" placeholder=\"Mobile Number\" [formControl]=\"mobile\" required name=\"mobile\">\n                  <mat-error *ngIf=\"mobile.invalid\"></mat-error>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput type=\"text\" placeholder=\"Email Id\" [formControl]=\"email\" required name=\"email\">\n                  <mat-error *ngIf=\"email.invalid\"></mat-error>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"password\" required name=\"password\">\n                  <mat-error *ngIf=\"password.invalid\"></mat-error>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput type=\"password\" placeholder=\"Confirm Password\" [formControl]=\"confirmpassword\"\n                    required name=\"confirmpassword\">\n                  <mat-error *ngIf=\"confirmpassword.invalid\"></mat-error>\n                </mat-form-field>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </form>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"registration()\" color=\"primary\">Sign Up</button>\n    </mat-card-actions>\n  </mat-card>\n  <div class=\"headerDivider\"></div>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form class=\"example-form\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Username\" [(ngModel)]=\"loginusername\" name=\"loginusername\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"loginpassword\" type=\"password\" name=\"loginpassword\"\n                  required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n      </form>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n<div style=\"margin-top:50px\"></div>"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 300px; }\n\n.headerDivider {\n  border-left: 0.8px solid #929697;\n  border-right: 0.8px solid #929697;\n  height: 400px;\n  position: absolute;\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0Y6XFxKQU1LRk9PREFQUFxcSkFNSy9zcmNcXGFwcFxccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxpQ0FBZ0M7RUFDaEMsa0NBQWlDO0VBQ2pDLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyRGl2aWRlciB7XHJcbiAgICBib3JkZXItbGVmdDogMC44cHggc29saWQgIzkyOTY5NztcclxuICAgIGJvcmRlci1yaWdodDogMC44cHggc29saWQgIzkyOTY5NztcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.confirmpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.loginemail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.loginpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos.component.html":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"start\">\n  <div fxLayout=\"row\">\n    <h2>Customer Reviews</h2>\n  </div>\n  <mat-card class=\"example-category\">\n    <mat-card-content>\n      <div fxLayout=\"row \" fxLayoutAlign=\"space-around center\">\n        <div fxLayout=\"column\">\n          <youtube-player class=\"video\" [videoId]=\"id\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\n          </youtube-player>\n        </div>\n        <div fxLayout=\"column\">\n          <youtube-player class=\"video\" [videoId]=\"id1\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\n          </youtube-player>\n        </div>\n        <div fxLayout=\"column\">\n          <youtube-player class=\"video\" [videoId]=\"id2\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\">\n          </youtube-player>\n        </div>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/videos/videos.component.scss":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-category {\n  width: 930px;\n  height: 270px; }\n\nyoutube-player {\n  width: 333px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL0Y6XFxKQU1LRk9PREFQUFxcSkFNSy9zcmNcXGFwcFxcdmlkZW9zXFx2aWRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXRlZ29yeXtcclxuICAgIHdpZHRoOiA5MzBweDtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbn1cclxueW91dHViZS1wbGF5ZXJ7XHJcbiAgICB3aWR0aDogMzMzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
        this.id = 'qDuKsiwS5xw';
        this.id1 = 'CXbj2fE2mMI';
        this.id2 = 'F6AeC8V25As';
    }
    VideosComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    VideosComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/videos/videos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\JAMKFOODAPP\JAMK\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map