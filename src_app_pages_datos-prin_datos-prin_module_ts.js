(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_datos-prin_datos-prin_module_ts"],{

/***/ 8451:
/*!***************************************************************!*\
  !*** ./src/app/pages/datos-prin/datos-prin-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPrinPageRoutingModule": () => (/* binding */ DatosPrinPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _datos_prin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos-prin.page */ 4299);




const routes = [
    {
        path: '',
        component: _datos_prin_page__WEBPACK_IMPORTED_MODULE_0__.DatosPrinPage
    }
];
let DatosPrinPageRoutingModule = class DatosPrinPageRoutingModule {
};
DatosPrinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DatosPrinPageRoutingModule);



/***/ }),

/***/ 7999:
/*!*******************************************************!*\
  !*** ./src/app/pages/datos-prin/datos-prin.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPrinPageModule": () => (/* binding */ DatosPrinPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _datos_prin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos-prin-routing.module */ 8451);
/* harmony import */ var _datos_prin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos-prin.page */ 4299);







let DatosPrinPageModule = class DatosPrinPageModule {
};
DatosPrinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _datos_prin_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatosPrinPageRoutingModule
        ],
        declarations: [_datos_prin_page__WEBPACK_IMPORTED_MODULE_1__.DatosPrinPage]
    })
], DatosPrinPageModule);



/***/ }),

/***/ 4299:
/*!*****************************************************!*\
  !*** ./src/app/pages/datos-prin/datos-prin.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPrinPage": () => (/* binding */ DatosPrinPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_datos_prin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./datos-prin.page.html */ 6631);
/* harmony import */ var _datos_prin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos-prin.page.scss */ 3166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let DatosPrinPage = class DatosPrinPage {
    constructor() { }
    ngOnInit() {
    }
};
DatosPrinPage.ctorParameters = () => [];
DatosPrinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-datos-prin',
        template: _raw_loader_datos_prin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_datos_prin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DatosPrinPage);



/***/ }),

/***/ 3166:
/*!*******************************************************!*\
  !*** ./src/app/pages/datos-prin/datos-prin.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*::-webkit-datetime-edit-year-field:not([aria-valuenow]),\n::-webkit-datetime-edit-month-field:not([aria-valuenow]),\n::-webkit-datetime-edit-day-field:not([aria-valuenow]) {\n    color: #fff;\n}\ninput[type=date]{\n    color:transparent;\n}*/\n#datos-prin {\n  font-family: inherit;\n}\n#datos-prin ion-input {\n  border: 2px solid #0065D0;\n  border-radius: 5px;\n}\n#datos-prin ion-button {\n  background: #0065D0;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdG9zLXByaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7O0VBQUE7QUFVQTtFQUNJLG9CQUFBO0FBRko7QUFNSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU1JO0VBR0ksbUJBQUE7RUFDQSxXQUFBO0FBTlIiLCJmaWxlIjoiZGF0b3MtcHJpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyo6Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkOm5vdChbYXJpYS12YWx1ZW5vd10pLFxyXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZDpub3QoW2FyaWEtdmFsdWVub3ddKSxcclxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkOm5vdChbYXJpYS12YWx1ZW5vd10pIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmlucHV0W3R5cGU9ZGF0ZV17XHJcbiAgICBjb2xvcjp0cmFuc3BhcmVudDtcclxufSovXHJcblxyXG5cclxuI2RhdG9zLXByaW57XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGlvbi1sYWJlbHtcclxuXHJcbiAgICB9XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNjVEMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDY1RDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 6631:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos-prin/datos-prin.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"datos-prin\">\n    <ion-grid>\n      \n      <div class=\"row\">\n        <ion-col size-md=\"12\" size=\"12\" class=\"d-flex justify-content-center\">\n          <img src=\"/assets/images/Frame.png\" alt=\"\" class=\"logo mx-auto mt-5\">\n        </ion-col>\n      </div>\n\n      <ion-row>\n        <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n          <ion-label position=\"stacked\" class=\"\" >Nombre</ion-label>\n          <ion-input></ion-input>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n          <ion-label position=\"stacked\" class=\"\" >Apellido</ion-label>\n          <ion-input></ion-input>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n          <ion-label position=\"stacked\" class=\"\" >Correo electronico</ion-label>\n          <ion-input type=\"email\"></ion-input>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n          <ion-label position=\"stacked\" class=\"\" >Fecha de nacimiento</ion-label>\n          <ion-input type=\"date\"></ion-input>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n          <ion-label position=\"stacked\" class=\"\" >Ciudadania</ion-label>\n          <ion-input></ion-input>\n\n          <ion-button shape=\"block\" class=\"mt-3\"  routerLink=\"/inver-estud\">Siguiente</ion-button>\n        \n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    <!-- <form action=\"\">\n      \n\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\">\n      </div>\n\n\n      <ion-item class=\"mb-1\">\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"mb-1\">\n        <ion-label position=\"floating\">Apellido</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"mb-1\">\n        <ion-label position=\"floating\">Correo electronico</ion-label>\n        <ion-input type=\"email\"></ion-input>\n      </ion-item>\n      \n      <ion-item class=\"mb-3\">\n        <ion-label position=\"stacked\">\n          Fecha de nacimiento\n        </ion-label>\n        <ion-input type=\"date\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Ciudadania</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-button shape=\"block\" class=\"mt-3\"  routerLink=\"/inver-estud\">Siguiente</ion-button>\n    </form> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_datos-prin_datos-prin_module_ts.js.map