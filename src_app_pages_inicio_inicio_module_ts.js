(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_inicio_inicio_module_ts"],{

/***/ 1971:
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 4977);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 604:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 1971);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 4977);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 4977:
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicio.page.html */ 5841);
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let InicioPage = class InicioPage {
    constructor() { }
    ngOnInit() {
    }
};
InicioPage.ctorParameters = () => [];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicioPage);



/***/ }),

/***/ 583:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#home {\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  background-color: #0065D0;\n  font-family: inherit;\n}\n#home > .row {\n  min-height: 100vh;\n}\n#home .title {\n  margin-bottom: 20px;\n  text-align: center;\n}\n#home .logo {\n  display: block;\n}\n#home .logo img {\n  width: 150px;\n  height: 150px;\n}\n#home .down {\n  bottom: 0;\n  text-align: center;\n}\n#home .down ion-button {\n  width: 80%;\n}\n#home .down ion-button {\n  background: #000;\n  margin-top: 20px;\n}\n#home .regis {\n  color: #fff;\n  background: #0065D0;\n  width: 300px;\n  padding: 10px 15px;\n}\n.ion-page {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFHWjtBQUFJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNJLFVBQUE7QUFHWjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUdaO0FBQUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21le1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY1RDA7IFxyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICA+LnJvd3tcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sb2dve1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kb3due1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWdpc3tcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2NUQwO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pb24tcGFnZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 5841:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content id=\"home\">\n  <ion-grid>\n    <ion-row>\n\n      <ion-col size-md=\"12\" size=\"12\">\n        <img src=\"/assets/images/Frame.png\" alt=\"\" class=\"logo mx-auto my-5\">\n      </ion-col>\n\n      <ion-col size-md=\"12\" size=\"12\">\n        <ion-text class=\"title mb-5\">\n          <h1 class=\"fs-2\">Bienvenido a Mosaic Formula</h1>\n          <p>Invierta sin preocupaciones. En Mosaic Formula nos encargamos de tus inversiones.</p>\n        </ion-text>\n      </ion-col>\n\n      <ion-col size-md=\"12\" size=\"12\" class=\"text-center\">\n        <a class=\"btn p-2 fw-4 regis\" routerLink=\"/datos-prin\">Registrarse</a>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n    <!-- <div class=\"row d-flex justify-content-evenly\"> -->\n      \n      <!-- <div class=\"col-md-12\">\n        <img src=\"/assets/images/Logo.webp\" alt=\"\" class=\"logo mx-auto my-5\">\n      </div> -->\n\n      <!-- <div class=\"col-md-12\"> -->\n        \n        <!-- <ion-text class=\"title mb-5\">\n          <h1 class=\"fs-2\">Bienvenido a Mosaic Formula</h1>\n          <p>Invierta sin preocupaciones. En Mosaic Formula nos encargamos de tus inversiones.</p>\n        </ion-text> -->\n\n        <!-- <div class=\"down mb-5\">\n          <div class=\"d-grid gap-2 d-md-block\">\n            <a class=\"btn btn-dark p-2 fw-4\" routerLink=\"/datos-prin\">Registrarse</a>\n          </div>\n        </div> -->\n\n      <!-- </div>\n    \n    </div> -->\n</ion-content>\n\n  \n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts.js.map