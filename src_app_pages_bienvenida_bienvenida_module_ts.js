(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_bienvenida_bienvenida_module_ts"],{

/***/ 5496:
/*!***************************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BienvenidaPageRoutingModule": () => (/* binding */ BienvenidaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _bienvenida_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bienvenida.page */ 7247);




const routes = [
    {
        path: '',
        component: _bienvenida_page__WEBPACK_IMPORTED_MODULE_0__.BienvenidaPage
    }
];
let BienvenidaPageRoutingModule = class BienvenidaPageRoutingModule {
};
BienvenidaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BienvenidaPageRoutingModule);



/***/ }),

/***/ 4041:
/*!*******************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BienvenidaPageModule": () => (/* binding */ BienvenidaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _bienvenida_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bienvenida-routing.module */ 5496);
/* harmony import */ var _bienvenida_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bienvenida.page */ 7247);







let BienvenidaPageModule = class BienvenidaPageModule {
};
BienvenidaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bienvenida_routing_module__WEBPACK_IMPORTED_MODULE_0__.BienvenidaPageRoutingModule
        ],
        declarations: [_bienvenida_page__WEBPACK_IMPORTED_MODULE_1__.BienvenidaPage]
    })
], BienvenidaPageModule);



/***/ }),

/***/ 7247:
/*!*****************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BienvenidaPage": () => (/* binding */ BienvenidaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_bienvenida_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bienvenida.page.html */ 4590);
/* harmony import */ var _bienvenida_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bienvenida.page.scss */ 393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let BienvenidaPage = class BienvenidaPage {
    constructor() { }
    ngOnInit() {
    }
};
BienvenidaPage.ctorParameters = () => [];
BienvenidaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bienvenida',
        template: _raw_loader_bienvenida_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bienvenida_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BienvenidaPage);



/***/ }),

/***/ 393:
/*!*******************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWVudmVuaWRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4590:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienvenida/bienvenida.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>bienvenida</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bienvenida_bienvenida_module_ts.js.map