(self["webpackChunkMosaicFrontend"] = self["webpackChunkMosaicFrontend"] || []).push([["src_app_pages_pais_pais_module_ts"],{

/***/ 4812:
/*!***************************************************!*\
  !*** ./src/app/pages/pais/pais-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaisPageRoutingModule": () => (/* binding */ PaisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pais.page */ 4579);




const routes = [
    {
        path: '',
        component: _pais_page__WEBPACK_IMPORTED_MODULE_0__.PaisPage
    }
];
let PaisPageRoutingModule = class PaisPageRoutingModule {
};
PaisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaisPageRoutingModule);



/***/ }),

/***/ 1564:
/*!*******************************************!*\
  !*** ./src/app/pages/pais/pais.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaisPageModule": () => (/* binding */ PaisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _pais_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pais-routing.module */ 4812);
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pais.page */ 4579);







let PaisPageModule = class PaisPageModule {
};
PaisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pais_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaisPageRoutingModule
        ],
        declarations: [_pais_page__WEBPACK_IMPORTED_MODULE_1__.PaisPage]
    })
], PaisPageModule);



/***/ }),

/***/ 4579:
/*!*****************************************!*\
  !*** ./src/app/pages/pais/pais.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaisPage": () => (/* binding */ PaisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_pais_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pais.page.html */ 5340);
/* harmony import */ var _pais_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pais.page.scss */ 4746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let PaisPage = class PaisPage {
    constructor() { }
    ngOnInit() {
    }
};
PaisPage.ctorParameters = () => [];
PaisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pais',
        template: _raw_loader_pais_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pais_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaisPage);



/***/ }),

/***/ 4746:
/*!*******************************************!*\
  !*** ./src/app/pages/pais/pais.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWlzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5340:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pais/pais.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid>\n    <div class=\"row\">\n      <ion-col size-md=\"12\" size=\"12\" class=\"d-flex justify-content-center\">\n        <img src=\"/assets/images/Frame.png\" alt=\"\" class=\"logo mx-auto mt-5\">\n      </ion-col>\n    </div>\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n          <ion-text>\n            <h2 class=\"my-2 text-center p-2\">Selecciona tu Pais</h2>\n          </ion-text>\n          <select name=\"country\" class=\"form-control\" id=\"country\">\n          <option value=\"0\" label=\"Seleccione\" selected=\"selected\"></option>\n          <optgroup id=\"country-optgroup-Africa\" label=\"Africa\">\n              <option value=\"DZ\" label=\"Algeria\">Algeria</option>\n              <option value=\"AO\" label=\"Angola\">Angola</option>\n              <option value=\"BJ\" label=\"Benin\">Benin</option>\n              <option value=\"BW\" label=\"Botswana\">Botswana</option>\n              <option value=\"BF\" label=\"Burkina Faso\">Burkina Faso</option>\n              <option value=\"BI\" label=\"Burundi\">Burundi</option>\n              <option value=\"CM\" label=\"Cameroon\">Cameroon</option>\n              <option value=\"CV\" label=\"Cape Verde\">Cape Verde</option>\n              <option value=\"CF\" label=\"Central African Republic\">Central African Republic</option>\n              <option value=\"TD\" label=\"Chad\">Chad</option>\n              <option value=\"KM\" label=\"Comoros\">Comoros</option>\n              <option value=\"CG\" label=\"Congo - Brazzaville\">Congo - Brazzaville</option>\n              <option value=\"CD\" label=\"Congo - Kinshasa\">Congo - Kinshasa</option>\n              <option value=\"CI\" label=\"C??te d???Ivoire\">C??te d???Ivoire</option>\n              <option value=\"DJ\" label=\"Djibouti\">Djibouti</option>\n              <option value=\"EG\" label=\"Egypt\">Egypt</option>\n              <option value=\"GQ\" label=\"Equatorial Guinea\">Equatorial Guinea</option>\n              <option value=\"ER\" label=\"Eritrea\">Eritrea</option>\n              <option value=\"ET\" label=\"Ethiopia\">Ethiopia</option>\n              <option value=\"GA\" label=\"Gabon\">Gabon</option>\n              <option value=\"GM\" label=\"Gambia\">Gambia</option>\n              <option value=\"GH\" label=\"Ghana\">Ghana</option>\n              <option value=\"GN\" label=\"Guinea\">Guinea</option>\n              <option value=\"GW\" label=\"Guinea-Bissau\">Guinea-Bissau</option>\n              <option value=\"KE\" label=\"Kenya\">Kenya</option>\n              <option value=\"LS\" label=\"Lesotho\">Lesotho</option>\n              <option value=\"LR\" label=\"Liberia\">Liberia</option>\n              <option value=\"LY\" label=\"Libya\">Libya</option>\n              <option value=\"MG\" label=\"Madagascar\">Madagascar</option>\n              <option value=\"MW\" label=\"Malawi\">Malawi</option>\n              <option value=\"ML\" label=\"Mali\">Mali</option>\n              <option value=\"MR\" label=\"Mauritania\">Mauritania</option>\n              <option value=\"MU\" label=\"Mauritius\">Mauritius</option>\n              <option value=\"YT\" label=\"Mayotte\">Mayotte</option>\n              <option value=\"MA\" label=\"Morocco\">Morocco</option>\n              <option value=\"MZ\" label=\"Mozambique\">Mozambique</option>\n              <option value=\"NA\" label=\"Namibia\">Namibia</option>\n              <option value=\"NE\" label=\"Niger\">Niger</option>\n              <option value=\"NG\" label=\"Nigeria\">Nigeria</option>\n              <option value=\"RW\" label=\"Rwanda\">Rwanda</option>\n              <option value=\"RE\" label=\"R??union\">R??union</option>\n              <option value=\"SH\" label=\"Saint Helena\">Saint Helena</option>\n              <option value=\"SN\" label=\"Senegal\">Senegal</option>\n              <option value=\"SC\" label=\"Seychelles\">Seychelles</option>\n              <option value=\"SL\" label=\"Sierra Leone\">Sierra Leone</option>\n              <option value=\"SO\" label=\"Somalia\">Somalia</option>\n              <option value=\"ZA\" label=\"South Africa\">South Africa</option>\n              <option value=\"SD\" label=\"Sudan\">Sudan</option>\n              <option value=\"SZ\" label=\"Swaziland\">Swaziland</option>\n              <option value=\"ST\" label=\"S??o Tom?? and Pr??ncipe\">S??o Tom?? and Pr??ncipe</option>\n              <option value=\"TZ\" label=\"Tanzania\">Tanzania</option>\n              <option value=\"TG\" label=\"Togo\">Togo</option>\n              <option value=\"TN\" label=\"Tunisia\">Tunisia</option>\n              <option value=\"UG\" label=\"Uganda\">Uganda</option>\n              <option value=\"EH\" label=\"Western Sahara\">Western Sahara</option>\n              <option value=\"ZM\" label=\"Zambia\">Zambia</option>\n              <option value=\"ZW\" label=\"Zimbabwe\">Zimbabwe</option>\n          </optgroup>\n          <optgroup id=\"country-optgroup-Americas\" label=\"Americas\">\n              <option value=\"AI\" label=\"Anguilla\">Anguilla</option>\n              <option value=\"AG\" label=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n              <option value=\"AR\" label=\"Argentina\">Argentina</option>\n              <option value=\"AW\" label=\"Aruba\">Aruba</option>\n              <option value=\"BS\" label=\"Bahamas\">Bahamas</option>\n              <option value=\"BB\" label=\"Barbados\">Barbados</option>\n              <option value=\"BZ\" label=\"Belize\">Belize</option>\n              <option value=\"BM\" label=\"Bermuda\">Bermuda</option>\n              <option value=\"BO\" label=\"Bolivia\">Bolivia</option>\n              <option value=\"BR\" label=\"Brazil\">Brazil</option>\n              <option value=\"VG\" label=\"British Virgin Islands\">British Virgin Islands</option>\n              <option value=\"CA\" label=\"Canada\">Canada</option>\n              <option value=\"KY\" label=\"Cayman Islands\">Cayman Islands</option>\n              <option value=\"CL\" label=\"Chile\">Chile</option>\n              <option value=\"CO\" label=\"Colombia\">Colombia</option>\n              <option value=\"CR\" label=\"Costa Rica\">Costa Rica</option>\n              <option value=\"CU\" label=\"Cuba\">Cuba</option>\n              <option value=\"DM\" label=\"Dominica\">Dominica</option>\n              <option value=\"DO\" label=\"Dominican Republic\">Dominican Republic</option>\n              <option value=\"EC\" label=\"Ecuador\">Ecuador</option>\n              <option value=\"SV\" label=\"El Salvador\">El Salvador</option>\n              <option value=\"FK\" label=\"Falkland Islands\">Falkland Islands</option>\n              <option value=\"GF\" label=\"French Guiana\">French Guiana</option>\n              <option value=\"GL\" label=\"Greenland\">Greenland</option>\n              <option value=\"GD\" label=\"Grenada\">Grenada</option>\n              <option value=\"GP\" label=\"Guadeloupe\">Guadeloupe</option>\n              <option value=\"GT\" label=\"Guatemala\">Guatemala</option>\n              <option value=\"GY\" label=\"Guyana\">Guyana</option>\n              <option value=\"HT\" label=\"Haiti\">Haiti</option>\n              <option value=\"HN\" label=\"Honduras\">Honduras</option>\n              <option value=\"JM\" label=\"Jamaica\">Jamaica</option>\n              <option value=\"MQ\" label=\"Martinique\">Martinique</option>\n              <option value=\"MX\" label=\"Mexico\">Mexico</option>\n              <option value=\"MS\" label=\"Montserrat\">Montserrat</option>\n              <option value=\"AN\" label=\"Netherlands Antilles\">Netherlands Antilles</option>\n              <option value=\"NI\" label=\"Nicaragua\">Nicaragua</option>\n              <option value=\"PA\" label=\"Panama\">Panama</option>\n              <option value=\"PY\" label=\"Paraguay\">Paraguay</option>\n              <option value=\"PE\" label=\"Peru\">Peru</option>\n              <option value=\"PR\" label=\"Puerto Rico\">Puerto Rico</option>\n              <option value=\"BL\" label=\"Saint Barth??lemy\">Saint Barth??lemy</option>\n              <option value=\"KN\" label=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n              <option value=\"LC\" label=\"Saint Lucia\">Saint Lucia</option>\n              <option value=\"MF\" label=\"Saint Martin\">Saint Martin</option>\n              <option value=\"PM\" label=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n              <option value=\"VC\" label=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\n              <option value=\"SR\" label=\"Suriname\">Suriname</option>\n              <option value=\"TT\" label=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n              <option value=\"TC\" label=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n              <option value=\"VI\" label=\"U.S. Virgin Islands\">U.S. Virgin Islands</option>\n              <option value=\"US\" label=\"United States\">United States</option>\n              <option value=\"UY\" label=\"Uruguay\">Uruguay</option>\n              <option value=\"VE\" label=\"Venezuela\">Venezuela</option>\n          </optgroup>\n          <optgroup id=\"country-optgroup-Asia\" label=\"Asia\">\n              <option value=\"AF\" label=\"Afghanistan\">Afghanistan</option>\n              <option value=\"AM\" label=\"Armenia\">Armenia</option>\n              <option value=\"AZ\" label=\"Azerbaijan\">Azerbaijan</option>\n              <option value=\"BH\" label=\"Bahrain\">Bahrain</option>\n              <option value=\"BD\" label=\"Bangladesh\">Bangladesh</option>\n              <option value=\"BT\" label=\"Bhutan\">Bhutan</option>\n              <option value=\"BN\" label=\"Brunei\">Brunei</option>\n              <option value=\"KH\" label=\"Cambodia\">Cambodia</option>\n              <option value=\"CN\" label=\"China\">China</option>\n              <option value=\"GE\" label=\"Georgia\">Georgia</option>\n              <option value=\"HK\" label=\"Hong Kong SAR China\">Hong Kong SAR China</option>\n              <option value=\"IN\" label=\"India\">India</option>\n              <option value=\"ID\" label=\"Indonesia\">Indonesia</option>\n              <option value=\"IR\" label=\"Iran\">Iran</option>\n              <option value=\"IQ\" label=\"Iraq\">Iraq</option>\n              <option value=\"IL\" label=\"Israel\">Israel</option>\n              <option value=\"JP\" label=\"Japan\">Japan</option>\n              <option value=\"JO\" label=\"Jordan\">Jordan</option>\n              <option value=\"KZ\" label=\"Kazakhstan\">Kazakhstan</option>\n              <option value=\"KW\" label=\"Kuwait\">Kuwait</option>\n              <option value=\"KG\" label=\"Kyrgyzstan\">Kyrgyzstan</option>\n              <option value=\"LA\" label=\"Laos\">Laos</option>\n              <option value=\"LB\" label=\"Lebanon\">Lebanon</option>\n              <option value=\"MO\" label=\"Macau SAR China\">Macau SAR China</option>\n              <option value=\"MY\" label=\"Malaysia\">Malaysia</option>\n              <option value=\"MV\" label=\"Maldives\">Maldives</option>\n              <option value=\"MN\" label=\"Mongolia\">Mongolia</option>\n              <option value=\"MM\" label=\"Myanmar [Burma]\">Myanmar [Burma]</option>\n              <option value=\"NP\" label=\"Nepal\">Nepal</option>\n              <option value=\"NT\" label=\"Neutral Zone\">Neutral Zone</option>\n              <option value=\"KP\" label=\"North Korea\">North Korea</option>\n              <option value=\"OM\" label=\"Oman\">Oman</option>\n              <option value=\"PK\" label=\"Pakistan\">Pakistan</option>\n              <option value=\"PS\" label=\"Palestinian Territories\">Palestinian Territories</option>\n              <option value=\"YD\" label=\"People's Democratic Republic of Yemen\">People's Democratic Republic of Yemen</option>\n              <option value=\"PH\" label=\"Philippines\">Philippines</option>\n              <option value=\"QA\" label=\"Qatar\">Qatar</option>\n              <option value=\"SA\" label=\"Saudi Arabia\">Saudi Arabia</option>\n              <option value=\"SG\" label=\"Singapore\">Singapore</option>\n              <option value=\"KR\" label=\"South Korea\">South Korea</option>\n              <option value=\"LK\" label=\"Sri Lanka\">Sri Lanka</option>\n              <option value=\"SY\" label=\"Syria\">Syria</option>\n              <option value=\"TW\" label=\"Taiwan\">Taiwan</option>\n              <option value=\"TJ\" label=\"Tajikistan\">Tajikistan</option>\n              <option value=\"TH\" label=\"Thailand\">Thailand</option>\n              <option value=\"TL\" label=\"Timor-Leste\">Timor-Leste</option>\n              <option value=\"TR\" label=\"Turkey\">Turkey</option>\n              <option value=\"TM\" label=\"Turkmenistan\">Turkmenistan</option>\n              <option value=\"AE\" label=\"United Arab Emirates\">United Arab Emirates</option>\n              <option value=\"UZ\" label=\"Uzbekistan\">Uzbekistan</option>\n              <option value=\"VN\" label=\"Vietnam\">Vietnam</option>\n              <option value=\"YE\" label=\"Yemen\">Yemen</option>\n          </optgroup>\n          <optgroup id=\"country-optgroup-Europe\" label=\"Europe\">\n              <option value=\"AL\" label=\"Albania\">Albania</option>\n              <option value=\"AD\" label=\"Andorra\">Andorra</option>\n              <option value=\"AT\" label=\"Austria\">Austria</option>\n              <option value=\"BY\" label=\"Belarus\">Belarus</option>\n              <option value=\"BE\" label=\"Belgium\">Belgium</option>\n              <option value=\"BA\" label=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n              <option value=\"BG\" label=\"Bulgaria\">Bulgaria</option>\n              <option value=\"HR\" label=\"Croatia\">Croatia</option>\n              <option value=\"CY\" label=\"Cyprus\">Cyprus</option>\n              <option value=\"CZ\" label=\"Czech Republic\">Czech Republic</option>\n              <option value=\"DK\" label=\"Denmark\">Denmark</option>\n              <option value=\"DD\" label=\"East Germany\">East Germany</option>\n              <option value=\"EE\" label=\"Estonia\">Estonia</option>\n              <option value=\"FO\" label=\"Faroe Islands\">Faroe Islands</option>\n              <option value=\"FI\" label=\"Finland\">Finland</option>\n              <option value=\"FR\" label=\"France\">France</option>\n              <option value=\"DE\" label=\"Germany\">Germany</option>\n              <option value=\"GI\" label=\"Gibraltar\">Gibraltar</option>\n              <option value=\"GR\" label=\"Greece\">Greece</option>\n              <option value=\"GG\" label=\"Guernsey\">Guernsey</option>\n              <option value=\"HU\" label=\"Hungary\">Hungary</option>\n              <option value=\"IS\" label=\"Iceland\">Iceland</option>\n              <option value=\"IE\" label=\"Ireland\">Ireland</option>\n              <option value=\"IM\" label=\"Isle of Man\">Isle of Man</option>\n              <option value=\"IT\" label=\"Italy\">Italy</option>\n              <option value=\"JE\" label=\"Jersey\">Jersey</option>\n              <option value=\"LV\" label=\"Latvia\">Latvia</option>\n              <option value=\"LI\" label=\"Liechtenstein\">Liechtenstein</option>\n              <option value=\"LT\" label=\"Lithuania\">Lithuania</option>\n              <option value=\"LU\" label=\"Luxembourg\">Luxembourg</option>\n              <option value=\"MK\" label=\"Macedonia\">Macedonia</option>\n              <option value=\"MT\" label=\"Malta\">Malta</option>\n              <option value=\"FX\" label=\"Metropolitan France\">Metropolitan France</option>\n              <option value=\"MD\" label=\"Moldova\">Moldova</option>\n              <option value=\"MC\" label=\"Monaco\">Monaco</option>\n              <option value=\"ME\" label=\"Montenegro\">Montenegro</option>\n              <option value=\"NL\" label=\"Netherlands\">Netherlands</option>\n              <option value=\"NO\" label=\"Norway\">Norway</option>\n              <option value=\"PL\" label=\"Poland\">Poland</option>\n              <option value=\"PT\" label=\"Portugal\">Portugal</option>\n              <option value=\"RO\" label=\"Romania\">Romania</option>\n              <option value=\"RU\" label=\"Russia\">Russia</option>\n              <option value=\"SM\" label=\"San Marino\">San Marino</option>\n              <option value=\"RS\" label=\"Serbia\">Serbia</option>\n              <option value=\"CS\" label=\"Serbia and Montenegro\">Serbia and Montenegro</option>\n              <option value=\"SK\" label=\"Slovakia\">Slovakia</option>\n              <option value=\"SI\" label=\"Slovenia\">Slovenia</option>\n              <option value=\"ES\" label=\"Spain\">Spain</option>\n              <option value=\"SJ\" label=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n              <option value=\"SE\" label=\"Sweden\">Sweden</option>\n              <option value=\"CH\" label=\"Switzerland\">Switzerland</option>\n              <option value=\"UA\" label=\"Ukraine\">Ukraine</option>\n              <option value=\"SU\" label=\"Union of Soviet Socialist Republics\">Union of Soviet Socialist Republics</option>\n              <option value=\"GB\" label=\"United Kingdom\">United Kingdom</option>\n              <option value=\"VA\" label=\"Vatican City\">Vatican City</option>\n              <option value=\"AX\" label=\"??land Islands\">??land Islands</option>\n          </optgroup>\n          <optgroup id=\"country-optgroup-Oceania\" label=\"Oceania\">\n              <option value=\"AS\" label=\"American Samoa\">American Samoa</option>\n              <option value=\"AQ\" label=\"Antarctica\">Antarctica</option>\n              <option value=\"AU\" label=\"Australia\">Australia</option>\n              <option value=\"BV\" label=\"Bouvet Island\">Bouvet Island</option>\n              <option value=\"IO\" label=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n              <option value=\"CX\" label=\"Christmas Island\">Christmas Island</option>\n              <option value=\"CC\" label=\"Cocos [Keeling] Islands\">Cocos [Keeling] Islands</option>\n              <option value=\"CK\" label=\"Cook Islands\">Cook Islands</option>\n              <option value=\"FJ\" label=\"Fiji\">Fiji</option>\n              <option value=\"PF\" label=\"French Polynesia\">French Polynesia</option>\n              <option value=\"TF\" label=\"French Southern Territories\">French Southern Territories</option>\n              <option value=\"GU\" label=\"Guam\">Guam</option>\n              <option value=\"HM\" label=\"Heard Island and McDonald Islands\">Heard Island and McDonald Islands</option>\n              <option value=\"KI\" label=\"Kiribati\">Kiribati</option>\n              <option value=\"MH\" label=\"Marshall Islands\">Marshall Islands</option>\n              <option value=\"FM\" label=\"Micronesia\">Micronesia</option>\n              <option value=\"NR\" label=\"Nauru\">Nauru</option>\n              <option value=\"NC\" label=\"New Caledonia\">New Caledonia</option>\n              <option value=\"NZ\" label=\"New Zealand\">New Zealand</option>\n              <option value=\"NU\" label=\"Niue\">Niue</option>\n              <option value=\"NF\" label=\"Norfolk Island\">Norfolk Island</option>\n              <option value=\"MP\" label=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n              <option value=\"PW\" label=\"Palau\">Palau</option>\n              <option value=\"PG\" label=\"Papua New Guinea\">Papua New Guinea</option>\n              <option value=\"PN\" label=\"Pitcairn Islands\">Pitcairn Islands</option>\n              <option value=\"WS\" label=\"Samoa\">Samoa</option>\n              <option value=\"SB\" label=\"Solomon Islands\">Solomon Islands</option>\n              <option value=\"GS\" label=\"South Georgia and the South Sandwich Islands\">South Georgia and the South Sandwich Islands</option>\n              <option value=\"TK\" label=\"Tokelau\">Tokelau</option>\n              <option value=\"TO\" label=\"Tonga\">Tonga</option>\n              <option value=\"TV\" label=\"Tuvalu\">Tuvalu</option>\n              <option value=\"UM\" label=\"U.S. Minor Outlying Islands\">U.S. Minor Outlying Islands</option>\n              <option value=\"VU\" label=\"Vanuatu\">Vanuatu</option>\n              <option value=\"WF\" label=\"Wallis and Futuna\">Wallis and Futuna</option>\n          </optgroup>\n          </select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"5\" size=\"12\" class=\"mx-auto p-2\">\n        <ion-button shape=\"block\" class=\"mt-3\"  routerLink=\"/terms-and-condicions\">Siguiente</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pais_pais_module_ts.js.map