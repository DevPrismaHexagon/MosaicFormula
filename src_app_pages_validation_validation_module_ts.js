(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_validation_validation_module_ts"],{

/***/ 5432:
/*!***************************************************************!*\
  !*** ./src/app/pages/validation/validation-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationPageRoutingModule": () => (/* binding */ ValidationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _validation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.page */ 9903);




const routes = [
    {
        path: '',
        component: _validation_page__WEBPACK_IMPORTED_MODULE_0__.ValidationPage
    }
];
let ValidationPageRoutingModule = class ValidationPageRoutingModule {
};
ValidationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ValidationPageRoutingModule);



/***/ }),

/***/ 1015:
/*!*******************************************************!*\
  !*** ./src/app/pages/validation/validation.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationPageModule": () => (/* binding */ ValidationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _validation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-routing.module */ 5432);
/* harmony import */ var _validation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.page */ 9903);







let ValidationPageModule = class ValidationPageModule {
};
ValidationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _validation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ValidationPageRoutingModule
        ],
        declarations: [_validation_page__WEBPACK_IMPORTED_MODULE_1__.ValidationPage]
    })
], ValidationPageModule);



/***/ }),

/***/ 9903:
/*!*****************************************************!*\
  !*** ./src/app/pages/validation/validation.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationPage": () => (/* binding */ ValidationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_validation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./validation.page.html */ 7626);
/* harmony import */ var _validation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.page.scss */ 2446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let ValidationPage = class ValidationPage {
    constructor() { }
    ngOnInit() {
    }
};
ValidationPage.ctorParameters = () => [];
ValidationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-validation',
        template: _raw_loader_validation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_validation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ValidationPage);



/***/ }),

/***/ 2446:
/*!*******************************************************!*\
  !*** ./src/app/pages/validation/validation.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7626:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/validation/validation.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <div class=\"row\">\n      <ion-col size-md=\"12\" size=\"12\" class=\"d-flex justify-content-center\">\n        <img src=\"/assets/images/Frame.png\" alt=\"\" class=\"logo mx-auto mt-5\">\n      </ion-col>\n    </div>\n    \n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n        <ion-text>\n          <h2 class=\"my-2 p-2 text-center fw-bold\">Verifica tu Bandeja de Mensajes.</h2>\n          <p class=\"p-3 text-center my-3\">Enviamos un mensaje de verificacion a su numero telefonico..\n          </p>\n        </ion-text>\n\n        <ion-item class=\"\">\n          <!-- <ion-label position=\"floating\">Ingrese su numero telefonico</ion-label> -->\n          <ion-input type=\"number\" placeholder=\"Ingrese codigo de validacion\" class=\"text-center\"></ion-input>\n        </ion-item>\n        <ion-button fill=\"solid\" expand=\"block\" class=\"my-5 \" routerLink=\"/validation\">\n          Validar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_validation_validation_module_ts.js.map