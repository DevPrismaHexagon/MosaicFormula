(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_correo-telefono_correo-telefono_module_ts"],{

/***/ 4477:
/*!*************************************************************************!*\
  !*** ./src/app/pages/correo-telefono/correo-telefono-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoTelefonoPageRoutingModule": () => (/* binding */ CorreoTelefonoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _correo_telefono_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correo-telefono.page */ 5225);




const routes = [
    {
        path: '',
        component: _correo_telefono_page__WEBPACK_IMPORTED_MODULE_0__.CorreoTelefonoPage
    }
];
let CorreoTelefonoPageRoutingModule = class CorreoTelefonoPageRoutingModule {
};
CorreoTelefonoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorreoTelefonoPageRoutingModule);



/***/ }),

/***/ 9747:
/*!*****************************************************************!*\
  !*** ./src/app/pages/correo-telefono/correo-telefono.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoTelefonoPageModule": () => (/* binding */ CorreoTelefonoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _correo_telefono_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correo-telefono-routing.module */ 4477);
/* harmony import */ var _correo_telefono_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correo-telefono.page */ 5225);







let CorreoTelefonoPageModule = class CorreoTelefonoPageModule {
};
CorreoTelefonoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _correo_telefono_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorreoTelefonoPageRoutingModule
        ],
        declarations: [_correo_telefono_page__WEBPACK_IMPORTED_MODULE_1__.CorreoTelefonoPage]
    })
], CorreoTelefonoPageModule);



/***/ }),

/***/ 5225:
/*!***************************************************************!*\
  !*** ./src/app/pages/correo-telefono/correo-telefono.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorreoTelefonoPage": () => (/* binding */ CorreoTelefonoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_correo_telefono_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./correo-telefono.page.html */ 8393);
/* harmony import */ var _correo_telefono_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correo-telefono.page.scss */ 8970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let CorreoTelefonoPage = class CorreoTelefonoPage {
    constructor() { }
    ngOnInit() {
    }
};
CorreoTelefonoPage.ctorParameters = () => [];
CorreoTelefonoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-correo-telefono',
        template: _raw_loader_correo_telefono_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_correo_telefono_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CorreoTelefonoPage);



/***/ }),

/***/ 8970:
/*!*****************************************************************!*\
  !*** ./src/app/pages/correo-telefono/correo-telefono.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZW8tdGVsZWZvbm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8393:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/correo-telefono/correo-telefono.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n    <div class=\"row\">\n      <ion-col size-md=\"12\" size=\"12\" class=\"d-flex justify-content-center\">\n        <img src=\"/assets/images/Frame.png\" alt=\"\" class=\"logo mx-auto mt-5\">\n      </ion-col>\n    </div>\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n\n        <ion-text>\n          <h2 class=\"my-2 p-2 text-center\">Enviaremos un codigo de verificacion a tu numero</h2>\n        </ion-text>\n\n        <ion-item class=\"my-5\">\n          <ion-input type=\"number\" placeholder=\"Ingrese su numero telefonico\" class=\"text-center\"></ion-input>\n        </ion-item>\n\n        <ion-button fill=\"solid\" expand=\"block\" class=\"my-5\" routerLink=\"/validation\">\n          Siguiente\n        </ion-button>\n\n      </ion-col>\n    </ion-row>\n \n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_correo-telefono_correo-telefono_module_ts.js.map