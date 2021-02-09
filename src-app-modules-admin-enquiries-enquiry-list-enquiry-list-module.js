(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-enquiries-enquiry-list-enquiry-list-module"],{

/***/ "1sV3":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin/enquiries/enquiry-list/enquiry-list-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EnquiryListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryListRoutingModule", function() { return EnquiryListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _enquiry_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enquiry-list.component */ "EdgA");





const routes = [
    { path: '', component: _enquiry_list_component__WEBPACK_IMPORTED_MODULE_2__["EnquiryListComponent"] }
];
class EnquiryListRoutingModule {
}
EnquiryListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EnquiryListRoutingModule });
EnquiryListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EnquiryListRoutingModule_Factory(t) { return new (t || EnquiryListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EnquiryListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnquiryListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "EdgA":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/enquiries/enquiry-list/enquiry-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: EnquiryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryListComponent", function() { return EnquiryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EnquiryListComponent {
    constructor() { }
    ngOnInit() {
    }
}
EnquiryListComponent.ɵfac = function EnquiryListComponent_Factory(t) { return new (t || EnquiryListComponent)(); };
EnquiryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnquiryListComponent, selectors: [["app-enquiry-list"]], decls: 2, vars: 0, template: function EnquiryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "enquiry-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnF1aXJ5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnquiryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-enquiry-list',
                templateUrl: './enquiry-list.component.html',
                styleUrls: ['./enquiry-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Map/":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/enquiries/enquiry-list/enquiry-list.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EnquiryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryListModule", function() { return EnquiryListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _enquiry_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enquiry-list-routing.module */ "1sV3");
/* harmony import */ var _enquiry_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enquiry-list.component */ "EdgA");





class EnquiryListModule {
}
EnquiryListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EnquiryListModule });
EnquiryListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EnquiryListModule_Factory(t) { return new (t || EnquiryListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _enquiry_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["EnquiryListRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EnquiryListModule, { declarations: [_enquiry_list_component__WEBPACK_IMPORTED_MODULE_3__["EnquiryListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _enquiry_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["EnquiryListRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnquiryListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_enquiry_list_component__WEBPACK_IMPORTED_MODULE_3__["EnquiryListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _enquiry_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["EnquiryListRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-enquiries-enquiry-list-enquiry-list-module.js.map