(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_curso_curso_module_ts"],{

/***/ 2415:
/*!*****************************************************!*\
  !*** ./src/app/pages/curso/curso-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CursoPageRoutingModule": () => (/* binding */ CursoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _curso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curso.page */ 3960);




const routes = [
    {
        path: '',
        component: _curso_page__WEBPACK_IMPORTED_MODULE_0__.CursoPage
    }
];
let CursoPageRoutingModule = class CursoPageRoutingModule {
};
CursoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CursoPageRoutingModule);



/***/ }),

/***/ 3418:
/*!*********************************************!*\
  !*** ./src/app/pages/curso/curso.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CursoPageModule": () => (/* binding */ CursoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _curso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curso-routing.module */ 2415);
/* harmony import */ var _curso_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curso.page */ 3960);







let CursoPageModule = class CursoPageModule {
};
CursoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _curso_routing_module__WEBPACK_IMPORTED_MODULE_0__.CursoPageRoutingModule
        ],
        declarations: [_curso_page__WEBPACK_IMPORTED_MODULE_1__.CursoPage]
    })
], CursoPageModule);



/***/ }),

/***/ 3960:
/*!*******************************************!*\
  !*** ./src/app/pages/curso/curso.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CursoPage": () => (/* binding */ CursoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_curso_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./curso.page.html */ 968);
/* harmony import */ var _curso_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curso.page.scss */ 2528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let CursoPage = class CursoPage {
    constructor() { }
    ngOnInit() {
    }
};
CursoPage.ctorParameters = () => [];
CursoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-curso',
        template: _raw_loader_curso_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_curso_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CursoPage);



/***/ }),

/***/ 2528:
/*!*********************************************!*\
  !*** ./src/app/pages/curso/curso.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJzby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 968:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/curso/curso.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <div class=\"row\">\n      <ion-col size-md=\"12\" size=\"12\" class=\"d-flex justify-content-center\">\n        <img src=\"/assets/images/Frame.png\" alt=\"\" class=\"logo mx-auto mt-5\">\n      </ion-col>\n    </div>\n\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n        \n        <ion-text>\n          <h2 class=\"my-2 p-2 text-center\">Selecciona un Curso</h2>\n        </ion-text>\n\n        <ion-list>\n\n          <ion-item routerLink=\"/terms-and-condicions\">\n            <ion-label>Como hacer Trade (Free)</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n\n          <ion-item routerLink=\"/terms-and-condicions\">\n            <ion-label>SP Supervisor ($350)</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n\n          <ion-item routerLink=\"/terms-and-condicions\">\n            <ion-label>Proveedor de Señal ($500)</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n\n          <ion-item routerLink=\"/terms-and-condicions\">\n            <ion-label>Trade Junior ($500)</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n\n          <ion-item routerLink=\"/terms-and-condicions\">\n            <ion-label>Trader Consciente ($850)</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <!-- List of Text Items -->\n        <!-- <ion-list>\n          <ion-item routerLink=\"/curso\">\n            <ion-label>Español</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item routerLink=\"/curso\">\n            <ion-label>Portugués</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n          <ion-item routerLink=\"/curso\">\n            <ion-label>Inglés</ion-label>\n            <ion-icon name=\"chevron-forward-outline\" side=\"end\"></ion-icon>\n          </ion-item>\n        </ion-list> -->\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_curso_curso_module_ts.js.map