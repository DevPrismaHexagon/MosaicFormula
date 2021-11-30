(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_terms-and-condicions_terms-and-condicions_module_ts"],{

/***/ 4213:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/terms-and-condicions/terms-and-condicions-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndCondicionsPageRoutingModule": () => (/* binding */ TermsAndCondicionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _terms_and_condicions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condicions.page */ 9902);




const routes = [
    {
        path: '',
        component: _terms_and_condicions_page__WEBPACK_IMPORTED_MODULE_0__.TermsAndCondicionsPage
    }
];
let TermsAndCondicionsPageRoutingModule = class TermsAndCondicionsPageRoutingModule {
};
TermsAndCondicionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsAndCondicionsPageRoutingModule);



/***/ }),

/***/ 4560:
/*!***************************************************************************!*\
  !*** ./src/app/pages/terms-and-condicions/terms-and-condicions.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndCondicionsPageModule": () => (/* binding */ TermsAndCondicionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _terms_and_condicions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condicions-routing.module */ 4213);
/* harmony import */ var _terms_and_condicions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condicions.page */ 9902);







let TermsAndCondicionsPageModule = class TermsAndCondicionsPageModule {
};
TermsAndCondicionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_and_condicions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsAndCondicionsPageRoutingModule
        ],
        declarations: [_terms_and_condicions_page__WEBPACK_IMPORTED_MODULE_1__.TermsAndCondicionsPage]
    })
], TermsAndCondicionsPageModule);



/***/ }),

/***/ 9902:
/*!*************************************************************************!*\
  !*** ./src/app/pages/terms-and-condicions/terms-and-condicions.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndCondicionsPage": () => (/* binding */ TermsAndCondicionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_terms_and_condicions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terms-and-condicions.page.html */ 1821);
/* harmony import */ var _terms_and_condicions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condicions.page.scss */ 6091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let TermsAndCondicionsPage = class TermsAndCondicionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsAndCondicionsPage.ctorParameters = () => [];
TermsAndCondicionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-and-condicions',
        template: _raw_loader_terms_and_condicions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_and_condicions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsAndCondicionsPage);



/***/ }),

/***/ 6091:
/*!***************************************************************************!*\
  !*** ./src/app/pages/terms-and-condicions/terms-and-condicions.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1hbmQtY29uZGljaW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1821:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-and-condicions/terms-and-condicions.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-grid>\n\n    <div class=\"row\">\n      <ion-col size-md=\"12\" size=\"12\" class=\"d-flex justify-content-center\">\n        <img src=\"/assets/images/Frame.png\" alt=\"\" class=\"logo mx-auto mt-5\">\n      </ion-col>\n    </div>\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n        <ion-text>\n          <h2 class=\"my-2 p-2 text-center\">Terminos y Condiciones.</h2>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n        <ion-text>\n          <p class=\"text-center mt-5\">Acepte los terminos y condiciones.</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n        <ion-button expand=\"full\" color=\"dark\" routerLink=\"/inicio\">Denegar</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n        <ion-button expand=\"full\" routerLink=\"/correo-telefono\">Aceptar</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_terms-and-condicions_terms-and-condicions_module_ts.js.map